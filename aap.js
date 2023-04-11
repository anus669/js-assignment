// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
//to it.



let newNumber = +prompt("Please enter a closure number:");
let sumOfNumbers = newNumber;
addNumber();
console.log("The sum of user-input numbers starting with closure number " + newNumber + " is " + sumOfNumbers);
function addNumber() {
    let userAdded = +prompt("Input number to add:");
    sumOfNumbers = sumOfNumbers + userAdded;
    console.log(sumOfNumbers);
    let check = choiceFunction();
    if (check == 0) {
        return sumOfNumbers;
    } else {
        addNumber();
    }
}
function choiceFunction() {
    var choice = prompt("Do you wish to add another number? (Y or N)");
    if (choice == "Y" || choice == "y") {
        return 1;
    } else if (choice == "N" || choice == "n") {
        return 0;
    } else {
        alert("Please input correct option and try again");
        choiceFunction();
    }
}
// Write a recursive function that searches an array for a specific value. Thefunction should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function checkArray(number) {
    for (let index = 0, check = 0; index < numArray.length && check == 0; index++) {
        if (number == numArray[index]) {
            check = 1;
            checkout = check;
            console.log("true");
        }
    }
    if (checkout == 0) {
        console.log("false");
        newNumber = prompt("Number is'nt present. Please enter new value:")
        checkArray(newNumber);
    }
}
// function stays recursive until value entered is found in array
// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

setTimeout(function () {
    let paragraphFromUser = prompt("Write content to include inside paragraph:");
    createParagraph(paragraphFromUser);
}, 100);
function createParagraph(paragraph) {
    let newParagraph = document.createElement("p");
    newParagraph.innerText = paragraph;
    document.body.appendChild(newParagraph);
    setTimeout(function () {
        choiceNewPara();
    }, 100);
}
function choiceNewPara() {
    choice = prompt("Do you wish to add another paragraph? (yes or no)");
    lowerCaseChoice = choice.toLowerCase();
    if (lowerCaseChoice == "yes") {
        paragraphFromUser = prompt("Write content to include inside paragraph:");
        createParagraph(paragraphFromUser);
    }
}
// keep adding paragraphs until something other than yes is given to prompt, then will be stopped
// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

for (let index = 0; index < 4; index++) {
    document.querySelectorAll(".forq4")[index].style.display = "revert";
}
document.getElementById("btn").addEventListener("click", storeText);
function storeText() {
    let listText = document.getElementById("textbox").value;
    if (listText == "") {
        alert("Enter some text in textbox to enter in list.")
    } else {
        console.log(listText);
        addToList(listText);
    }
}
function addToList(text) {
    let newListItem = document.createElement("li");
    newListItem.innerText = text;
    document.querySelector("ul").appendChild(newListItem);
    document.getElementById("textbox").value = "";
}
// Add new list item when anything is written in textbox and button is clicked

//6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let index = 0;
function createObject() {
    let key = "student " + 1;
    let stdObject = {
        stdname: document.getElementById("stdname").value,
        stdID: document.getElementById("stdID").value,
        stdcourse: document.getElementById("stdcourse").value,
        stdyear: document.getElementById("stdyear").value,
    };
    let value = JSON.stringify(stdObject);
    localStorage.setItem(key, value);
    document.getElementById("stdname").value = "";
    document.getElementById("stdID").value = "";
    document.getElementById("stdcourse").value = "";
    document.getElementById("stdyear").value = "";
}
// 7. Write a function that retrieves an object from localStorage. The function
// 
function getObject() {
    let objectName = document.getElementById("objname").value;
    let actualObject = JSON.parse(localStorage.getItem(objectName));
    console.log(actualObject);
    document.getElementById("objname").value = "";

}
// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
let newObject = {
    resturantName: "Exquisite Fine Dining ",
    resturantLocation: "Karachi",
    resturantCuisine: "international",
};
saveToLocal(newObject);
let resturantObj = createNewObject();
console.log(resturantObj);

function saveToLocal(newObject) {
    localStorage.setItem(Object.keys(object)[0], object.resturantName);
    localStorage.setItem(Object.keys(object)[1], object.resturantLocation);
    localStorage.setItem(Object.keys(object)[2], object.resturantCuisine);

}
function createNewObject() {
    let newObj = {
        NewResturantName: localStorage.getItem("resturantName"),
        NewResturantLocation: localStorage.getItem("resturantLocation"),
        NewResturantCuisine: localStorage.getItem("resturantCuisine"),
    }
    return newObj;


}















