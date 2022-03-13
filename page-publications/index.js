const isReady = false


// if (isReady == true) {
//     console.log('All ready')
// }else{
//     console.log('it is not ready')
// }

isReady === true ? console.log('All ready') : console.log('it is not ready')
const year = 1998
function calcByYear(year) {
    return 2022 - year
}
const myAge = calcByYear(1998)
console.log(myAge)