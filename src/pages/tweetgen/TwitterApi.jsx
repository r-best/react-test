const API_URL = "https://4ucuhsnruzeywczklaobaiv7he0ufczs.lambda-url.us-east-1.on.aws"
const generateTweets = (users, N, M) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                users: users,
                N: N,
                M: M
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.error !== undefined)
                return reject(json.error)
            return resolve(json.tweets)
        })
        .catch(err => {
            console.log(err)
            return reject("Unknown Error")
        })
    })
};

const getTwitterUser = (screenname) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/users/${screenname}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json.error !== undefined)
                return reject(json.error)
            return resolve({
                icon: json.icon,
                displayname: json.displayname,
                screenname: json.screenname
            })
        })
        .catch(err => {
            console.log(err)
            return reject("Unknown Error")
        })
    })
}

export { generateTweets, getTwitterUser };
