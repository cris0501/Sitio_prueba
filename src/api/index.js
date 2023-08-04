export default function ({url, method='POST', body=null}){
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (localStorage.user) options.headers.Authorization = 'Bearer '+JSON.parse(localStorage.getItem('user')).token
    if (body) options.body = JSON.stringify(body)
    
    const resp = fetch (`${url}`, options)
    //const resp = fetch (`http://localhost:8000/${url}`, options)
        .then(resp => {
            if (resp.status == 200) return resp.json()
            throw new Error('Error');
        })
        .then(resp => {
            return {
              status: 200,
              message: 'OK',
              data: resp
            }
        })
        .catch((e) => {
            return {status: 400, message:'Error', data:e}
        })
    return resp
}

