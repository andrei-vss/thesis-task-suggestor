import request from 'request'

export default class Base {

    static makeRest(path, body, callback) {
        request.post("http://127.0.0.1:5000/" + path, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }, (err, httpResponse, body) => {
            if (callback != null) {
                callback(JSON.parse(body))
            }
        })
    }
}