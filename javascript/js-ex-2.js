

// var keyword variable is global scoped variable and function scoped variable 
// let keyword variable is a local/block/function scope variable 


//In hoisting always only the declaration part is hoisted at top


// create a student marksheet 
// which will have input elements for name, marks globalThis, outof marks 
// when click on button should display Name, total marks, percentage, grade, cgpa


let blocks = new Array(100);
console.log(blocks)

console.log(addition());

message = "hii"

console.log(typeof(message));

var message;


let months = ["jan", "feb", "march", "april"]

console.log(months)

const person = {
    name: "Sanket",
    designation: "SWE",
    city: "Pune",
    dob: "18th Sept"

}

console.log(person)

document.write(months)   //dom


var body = document.body;

function createDiv() {




    let div = document.createElement("div")

    // appendchild is  always used to append/join/insert child node/object to the parent node
    //left side - parent element 
    //right side - chil element


    //append method is used for string as well as node/object
    body.append(div)

    console.log(div)



let p = document.createElement("p");

div.appendChild(p);

p.appendChild("Hello")


}


function showData () {
    let name = document.getElementById("name").value;
    console.log(name) 
    document.write(name)
}



function addition () {
    let num1 = 10;
    let num2= 20;

    let add = num1 + num2;

    return add;

   
}


function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let add = parseInt(num1) + parseInt(num2);

    console.log(add);

    document.write(add)
}



