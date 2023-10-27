import { React, useState } from 'react';

import "./full-img-view.css";

const FullImgView = ({image}) => {
    const [fullViewImg, setFullViewImg] = useState(null);

    window.openFullImgView = img => {
        setFullViewImg(img);
    }
    return (
        <div>
            {fullViewImg !== null &&
                <div id="fullSizeImgView" onClick={() => setFullViewImg(null)}>
                    <img src={fullViewImg} alt="Full size image" />
                </div>
            }
        </div>
    )
};

export default FullImgView;
