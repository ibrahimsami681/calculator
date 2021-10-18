/*
Completion date: Sun Jul 11 2021
Programmer: sami ibrahim
Purpose: familiarize with event handling and callback functions. 
*/


let NUM1 = "";
let NUM2 = "";
let RESULT = "";
let FIRSTNUM = true; //checks if operation has been picked
let OPER;

let output = document.querySelector(".outputLine");
output.innerHTML = "What is going on!";


let numBtn = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".op");

/*Number event handler*/
numBtn.forEach(item => {
    item.addEventListener("click", ahh => {
        item.classList.add("test_skill");
        if (FIRSTNUM) {
            NUM1 += item.innerHTML;
            output.innerHTML = NUM1;
        } else {
            NUM2 += item.innerHTML;
            output.innerHTML = NUM2;
            if (OPER == "divide") RESULT = NUM1 / NUM2;
            else if (OPER == "mult") RESULT = NUM1 * NUM2;
            else if (OPER == "minus") RESULT = NUM1 - NUM2;
            else if (OPER == "plus") RESULT = Number(NUM1) + Number(NUM2);
        }

    })

})


/*Operation event handler*/
operation.forEach(item => {
    item.addEventListener("click", ahh => {
        OPER = item.getAttribute("id");
        if (OPER == "equal") {
            //Math.round() rounds to the nearsest whole number, to add precision multiple and divide by prefered factor
            output.innerHTML = Math.round(RESULT * 100) / 100;
            //NUM1 = Math.round(RESULT * 100) / 100;
            NUM1 = "";
            NUM2 = "";
            RESULT = "";
            //FIRSTNUM = false; //checks if operation has been picked
        }
        else if (OPER == "dot") {
            if (FIRSTNUM) { NUM1 += "."; output.innerHTML = NUM1; }
            else { NUM2 += "."; output.innerHTML = NUM2; }
        }
        else {
            output.innerHTML = OPER.toUpperCase();
            FIRSTNUM = !FIRSTNUM;
        }
    })

})

document.querySelector("#equal").addEventListener("dblclick", function () {
    output.innerHTML = "ARE YOU STUPID!";
    console.log("Double click event emitted!");
})


let erase = function () {
    NUM1 = "";
    NUM2 = "";
    RESULT = "";
    FIRSTNUM = true; //checks if operation has been picked
    output.innerHTML = "Cleared!".toUpperCase();
    numBtn.forEach(item => {
        item.classList.remove("test_skill");
    })
}

document.querySelector("#clr").addEventListener("click", erase)

document.querySelector("#clr").addEventListener("dblclick", function () {
    output.innerHTML = "0";
})

/*
let numSeven = document.querySelector("#seven");
let numEight = document.querySelector("#eight");

numSeven.addEventListener("click", doSomeThing => {
    NUM1 += "7";
    output.innerHTML = NUM1;
})

numEight.addEventListener("click", doSomeThing => {
    NUM1 += "8";
    output.innerHTML = NUM1;
})
*/
