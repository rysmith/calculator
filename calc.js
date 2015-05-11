function calculate (operatory, number1, number2) {
	switch (operator) {
		case "+":
			return parseInt(num1) + parseInt(num2);
			break;
		case "-":
			return parseInt(num1) - parseInt(num2);
			break;
		case "*":
			return parseInt(num1) * parseInt(num2);
			break;
		case "/":
			return parseInt(num1) / parseInt(num2);
			break;
	}
}

//initialize the three variables for calculate()
var operator;
var num1 = "";
var num2 = "";

//target the calculator div
var calculator = document.getElementById('calculator');

//add the event listenter for click on the div calculator
calculator.addEventListener('click', function (e) {

	//get the content from calculator's child divs (the buttons)
 	var btnText = e.path[0].innerText;  // how do i get this to work for the div and it's enclosing <p> without avoiding the actual <p> element?

 	//make sure the data from the buttons are in string format
  	var btnTextString = btnText.toString();

  	//target the display
  	var display = document.getElementById('display');

  	if (btnText === "+" || btnText === "-" || btnText === "*" || btnText === "/") {

  		//assign the button press to the operator variable
  		operator = btnText; 

  		//check to make sure the operator is set
  		console.log("operator is: " + operator);

  	} else if (btnText === "C") {

  		//reload the page on clear
  		window.location.reload();

  	} else if (btnText === "=") {

  		//run calcualte on equals
  		var output = calculate(operator, num1, num2);

  		//add the calculate() output to the output field
  		display.innerHTML = output;

  		//checking to see if the output is a number
  		console.log(typeof output);

  		//reset for another calculation
  		num1 = output;
  		output = "";
  		num2 = "";

  		//check to make sure this if else is firing
  		console.log("equal condition worked");

  	} else if (operator) {

  		//set the third parameter for calculate and send it to the display
  		num2 += btnTextString;
  		display.innerHTML = num2;

  		//check to make sure the second number and the operator are still set
  		console.log("num2 is: " + num2);
  		console.log("operator is: " + operator);

  	} else {

  		//set the second parameter for calculate and send it to the display
  		num1 += btnTextString;
  		display.innerHTML = num1;

  		//check to make sure the first number and the operator are still set
  		console.log("num1 is: " + num1);
  		console.log("operator is: " + operator);
  	}
}); 

  	// ToDo: 
  	// 1. Calculate on the second +/-, etc. as opposed to always hitting equal
  	// 2. Deal with special use cases, like when a operator is clicked before any numbers
  	// 3. Make the interface look better
  	// 4. Find out why operator variable is getting smashed without it being global

