
document.querySelector('#setCockie').addEventListener('click', e => {
    e.preventDefault();

document.cookie = "name=cysecor";
document.cookie = "test=test1"

const date = new Date();

let today = date.getTime();
let expires = 2 * 24 * 60 * 60 * 1000;

date.setTime(today+expires)

let new_date = date.toUTCString()

document.cookie = `login=1; expires=${new_date}`

console.log(document.cookie)

})