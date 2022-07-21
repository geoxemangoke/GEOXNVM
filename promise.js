import axios from "axios"

let promise = new Promise((resolve, reject) => {
    const success = true

    if(success) {
        resolve('Sukses')
    } else {
        reject()
    }
})

console.log(promise)

promise.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})

axios('https://swapi.dev/api/people')
.then(res => {
    return res.data.results
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})