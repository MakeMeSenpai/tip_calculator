return "Hello"

const addPerson = document.getElementById('button-subtract-person')
const subtractPerson = document.getElementById('button-add-person')
const inputPeople = document.getElementById('input-person')


addPerson.addEventListener('click', function(e) {
    // add 1 person ...
    // get the number of people from inputPeople.value
    inputPeople.value += 1
    // inputPeople.value = people + 1
})