import { FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';

import "./secretmenu.css";

// Default values of secret settings
const SECRET_SETTINGS = {
    "mark": {
        default: false,
        callbacks: []
    },
    "jerma": {
        default: false,
        callbacks: []
    }
}

window.getSecretSetting = (key) => {
    var value = JSON.parse(localStorage.getItem(key))
    if (value === null) {
        value = SECRET_SETTINGS[key].default
        updateSecretSetting(key, value)
    }
    return value
}

window.registerSecretSettingListener = (key, callback) => {
    console.log("Adding listener to setting %s", key)
    SECRET_SETTINGS[key].callbacks.push(callback)
}

function updateSecretSetting(key, value) {
    console.log("Setting '%s' to %s", key, value)
    localStorage.setItem(key, JSON.stringify(value))
    for(var i in SECRET_SETTINGS[key].callbacks) {
        SECRET_SETTINGS[key].callbacks[i](value)
    }
}

const SecretMenu = () => {
    var states = {}
    for(var key in SECRET_SETTINGS){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var [reactState, reactSetter] = useState(window.getSecretSetting(key))
        if(!(key in states)){
            states[key] = {}
            states[key].reactState = reactState
            states[key].reactSetter = reactSetter
        }
    }
    useEffect(() => {
        for(var key in SECRET_SETTINGS){
            window.registerSecretSettingListener(key, states[key].reactSetter)
        }
    }, [])

    var [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        window.toggleSecretMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    }, [isMenuOpen])

    return (
        <div>
            { isMenuOpen &&
                <div className='secretmenu' onClick={() => {window.toggleSecretMenu()}}>
                    <div className='secretmenu-content' onClick={e => {e.stopPropagation()}}>
                        <h1>Secret Settings</h1>
                        <p />
                        <FormControlLabel control={<Switch checked={states['mark'].reactState} onChange={e => {states['mark'].reactSetter(e.target.checked); updateSecretSetting('mark', e.target.checked)}} />} label="Enable Markiplier" />
                        <FormControlLabel control={<Switch checked={states['jerma'].reactState} onChange={e => {states['jerma'].reactSetter(e.target.checked); updateSecretSetting('jerma', e.target.checked)}} />} label="Enable Jerma" />
                    </div>
                </div>
            }
        </div>
    )
};

export default SecretMenu;
