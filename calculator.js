class Calculator {
  constructor(prevoprnd, curroprnd) {
    this.prevoprnd = prevoprnd;
    this.curroprnd = curroprnd;
    this.clear();
  }
  //function to clear the entire screen when AC is pressed
  clear() {
    this.curr = "";
    this.pre = "";
    this.operation = "";
  }
  //function to delete the last most element appended when del is pressed
  delete() {
    this.curr = this.curr.toString().slice(0, -1);
  }
  //appendnum says what happens when user clicks a num every time tht num adds to display
  appendNum(number) {
    if (number === "." && this.curr.includes(".")) return;
    this.curr = this.curr.toString() + number.toString();
  }
  //chooseoprtn says what happens when user clicks any of the opertion button
  //and perform particular operation selected
  selectOprtn(operation) {
    if (this.curr === "") return; //if there is no element in curr the following will not be executed
    //if pre is not vacant it will lead to compute the result
    if (this.pre != "") {
      this.calculate(); //this function will update all the operation we need(i.e if we multiply 5*2 and then press + it will compute 5*2=10 and will give it to prevoparnd with a operation + to be executed with the variable to be added in current operand
    }
    this.operation = operation; //the operation selected
    this.pre = this.curr; //the value in curr passed to pre
    this.curr = ""; //curr is made vacant to receive next operand to perform the computation
  }
  //compute functions computes the value on the screen and displays a single value on screen
  calculate() {
    let result;
    const p = parseFloat(this.pre); //now the value in pre is given to p
    const c = parseFloat(this.curr); //the value in curr is given to c
    if (isNaN(p) || isNaN(c)) return; //if any one of p and c is not a numbe return its an invalid operation
    switch (this.operation) {
      case "+":
        result = p + c;
        break;
      case "-":
        result = p - c;
        break;
      case "*":
        result = p * c;
        break;
      case "/":
        if (c === 0) result = "Math-error";
        else result = p / c;
        break;
      case "%":
        result = (p * c) / 100;
        break;
      case "^":
        result = Math.pow(p, c);
        break;
      default:
        return;
    }
    result=result.toFixed(3);
    this.curr = result; //after performing the operation the result is given to curr to be displayed in curroprnd.innerText
    this.operation = ""; //while displaying the result make the operation undefined
    this.pre = ""; //and clear the pre element in prevoprnd.innerText
  }
  //updates the value inside of our output
  updatedisplay() {
    this.curroprnd.innerText = this.curr; //each time the user press a number it is displayed in the curroprnd.innerText
    //when the user presses a operation button it checks if there is anything in operation before
    if (this.operation != null) {
      //if the operation has a value then this allows to display the operation to be performed with the number typed before and gives that to prevoprnd.innerText
      this.prevoprnd.innerText = `${this.pre} ${this.operation}`;
    } else {
      this.prevoprnd.innerText = "";
    }
  }
}
const numbuttons = document.querySelectorAll("[data-number]");
const optrbuttons = document.querySelectorAll("[data-operation]");
const equalbutton = document.querySelector("[data-equals]");
const deletebttn = document.querySelector("[data-delete]");
const allclrbttn = document.querySelector("[data-all-clear]");
const prevoprnd = document.querySelector("[data-prev-operand]");
const curroprnd = document.querySelector("[data-curr-operand]");

const calculator = new Calculator(prevoprnd, curroprnd);

numbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updatedisplay();
  });
});
optrbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOprtn(button.innerText);
    calculator.updatedisplay();
  });
});
equalbutton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updatedisplay();
});
allclrbttn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updatedisplay();
});
deletebttn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updatedisplay();
});
