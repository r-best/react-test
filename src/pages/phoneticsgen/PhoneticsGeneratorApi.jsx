const API_URL = "https://v2vjbpmbcop36a57wkfh5pp3d40itsex.lambda-url.us-east-1.on.aws"

const getModels = () => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/models`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((json) => {
            if (json.error !== undefined)
                return reject(json.error)
            return resolve(json.models)
        })
        .catch(err => {
            console.log(err)
            return reject("Unknown Error")
        })
    })
};

const generateWord = (model, N) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: model,
                N: N,
                M: 1
            })
        })
        .then(response => response.json())
        .then((json) => {
            if (json.error !== undefined)
                return reject(json.error)
            return resolve({
                word: json.words[0],
                mp3: json.mp3_files[0]
            })
        })
        .catch(err => {
            console.log(err)
            return reject("Unknown Error")
        })
    })
};

export { getModels, generateWord };
