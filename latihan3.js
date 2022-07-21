const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

let newArr 

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        try {
            const result = words.map(word => word.toUpperCase())
            resolve(result)
        } catch(err) {
            reject(err)
        }
    })
}

const sortOfWords = (arr) => arr.sort()

makeAllCaps(arrayOfWords)
.then(sortOfWords)
.then(result => { console.log(result) })
.catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
.then(sortOfWords)
.then(result => { console.log(result) })
.catch(error => { console.log('======' + error) })