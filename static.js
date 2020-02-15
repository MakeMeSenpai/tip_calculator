//Defines our id's into our javascript
const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const addTip = document.getElementById('button-add-tip')
const subtractTip = document.getElementById('button-subtract-tip')
const inputPeople = document.getElementById('input-people')
const addPerson = document.getElementById('button-subtract-person')
const subtractPerson = document.getElementById('button-add-person')
const displayTip = document.getElementById('display-tip')
const displayTotal = document.getElementById('display-total')
const test = document.getElementById('test')



//javascript to html functions require eventListeners that will grab changed data (if valid input)
inputBill.addEventListener('change', handleBill)
function handleBill(e) {
    const value = inputBill.value;
};

//this only represents another way to make a function, however you should conform to one
inputTip.addEventListener('change', function(e) {
    const value = inputTip.value;
});

// you can also add events this way: const string = document.getElementById('text-box').Eventlistener('click')
inputPeople.addEventListener('change', function(e) {
    const value = inputPeople.value;
});



//button fuctions
addTip.addEventListener('click', function(e) {
    const value = inputTip.value;
    // add 1 person ...
    // get the number of people from inputPeople.value
    value += 1;
    // inputPeople.value = people + 1
});

subtractTip.addEventListener('click', function(e) {
    const value = inputTip.value;
    // remove 1 person ...
    // get the number of people from inputPeople.value
    value -= 1;
    // inputPeople.value = people - 1
});

addPerson.addEventListener('click', function(e) {
    const value = inputPeople.value;
    // add 1 person ...
    // get the number of people from inputPeople.value
    value += 1;
    // inputPeople.value = people + 1
});

addPerson.addEventListener('click', function(e) {
    const value = inputPeople.value;
    // add 1 person ...
    // get the number of people from inputPeople.value
    value += 1;
    // inputPeople.value = people + 1
});



//calculations 
function calculate(){
    const percent = parseInt(inputTip.value); //turns our const into int -inputs are always str
    const tip = bill * percent / 100;
    const total = bill + tip;
    displayTip.innerHTML = tip
    displayTip.innerHTML = total
};

//test function in footer
test.addEventListener('change', function(e) {
  // collects our user's value from their input
  const value = test.value
  if (value === "Hello") {
    //Setting the innerHTML of an element replaces everything between the tags with something new.
    value.innerHTML = 'Hello Mitchell!'; 
  } else {
    value.innerHTML = value;
  }
  console.log(value);
});

//this bad boy updates our entire web page when you press enter. Thanks Ofir Farchy, and the internet for the help
$(function() {
    $("form input").keypress(function (e) {
        if (e.keyCode && e.keyCode == 13) {
            $('button[type=submit] .default').click();
            return false;
        } else {
            return true;
        }
    });
});