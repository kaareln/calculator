function show(e) {
    
    var target = e.target;
    view.innerHTML += target.innerHTML;
    currentNumber = view.innerHTML;
    
}

function clean() {
    
    view.innerHTML = "";
    currentNumber = 0;
    numbers = [];
    signs = [];
}

function action(e) {
    
    var target = e.target;
    if (view.innerHTML !== ""){
        neew.push(view.innerHTML);
    }

    if (neew.length > signs.length) {
        signs.push(target.innerHTML);
        
    }
    else {
        signs.pop();
        signs.push(target.innerHTML);
        
    }
    view.innerHTML = "";

}

function total() {
    
    neew.push(view.innerHTML);
    for (var k = 0; k < neew.length; k++) {
        numbers.push(parseFloat(neew[k]));
    }
    currentNumber = numbers[0];
    for (var j = 0; j < signs.length; j++) {
        if (signs[j] === "+") {
            currentNumber += numbers [j+1];
        }
        else if (signs[j] === "-") {
            currentNumber -= numbers [j+1];
        }
        else if (signs[j] === "/") {
            currentNumber /= numbers [j+1];
        }
        else {
            currentNumber *= numbers [j+1];
        }
    }
    
    view.innerHTML = currentNumber;
    numbers = [];
    neew = [];
    signs = [];
}

var view = document.getElementById("screen");
var numbers = [];
var neew = [];
var signs = [];
var currentNumber = 0;
var score = 0;

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e) {
        show(e);
    }, false);
}
var ac = document.getElementById("ac");
ac.addEventListener('click', clean, false);

var sign = document.getElementsByClassName("sign");
for (var i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', function(e) {
        action(e);
    }, false);
}

var equal = document.getElementById("equal");
equal.addEventListener('click', total, false);