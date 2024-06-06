let curr = "";
let prev = "";
let oper = "";

function myNum(num) {
    curr += num;
    document.getElementById("result").value = curr;
}
function myDeci() {
    if (!curr.includes(".")) {
        curr += ".";
        document.getElementById("result").value = curr
    }
}
function myOper(op) 
{
    prev = curr;
    curr = "";
    oper = op;
    document.getElementById("result").value=oper;
}
function clr() {
    curr = "";
    prev = "";
    oper = "";
    document.getElementById("result").value = "";
}
function bs() {
    // Get current displayed value
    let currValue = document.getElementById("result").value;
  
    // Check if there's anything to delete
    if (currValue.length > 0) {
      // Slice the string to remove the last character
      currValue = currValue.slice(0, -1);
      document.getElementById("result").value = currValue;
    }
    curr=currValue;
  }
  
function equals() {
    let result = 0;
    switch (oper) {
        case "+": 
        result = parseFloat(prev)+parseFloat(curr);
            break;
        case "-": result = parseFloat(prev) - parseFloat(curr);
            break;
        case "*": result = parseFloat(prev) * parseFloat(curr);
            break;
        case "/": result = parseFloat(prev) / parseFloat(curr);
            break;
        case "%": result = parseFloat(prev) % parseFloat(curr);
            break;
    }

    curr=result.toString();
    prev="";
    oper="";
    document.getElementById("result").value=curr;
}
function sayHello(){
    alert("Hello!");
}
