import { fileURLToPath } from "url";
import { isNull } from "util";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
		
		1. Create 4 variables to hold a value for each of these four data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
		3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let strValue = "Hannah";
  let numValue = 26
  let booValue = true
  let objValue = {animal: "Cat", name: "Crook", color: "orange and white"}
  let undefValue
  console.log(strValue);
  console.log(numValue);
  console.log(booValue);
  console.log(objValue);
  console.log(undefValue);
  console.log(typeof(strValue));
  console.log(typeof(numValue));
  console.log(typeof(booValue));
  console.log(typeof objValue);
  console.log(typeof undefValue);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
		3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

let num = 6;
let strNum = String(num);
console.log(`Num: ${strNum} Type: ${typeof(strNum)}`);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
		
		1. Create 2 variables: 
      * one that stores a Boolean conversion of the number 0 
      * one that stores a Boolean conversion of the number 1
    2. Then, log both of these variables to the console to see what 
        Booleans these numbers are converted to

  */

  // CODE IN THE OPEN LINES BELOW

let num1 = 0;
let num2 = 1;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
let bool3 = Boolean(0);
let bool4 = Boolean(1);
console.log(bool1 + " " +bool2 + " " + bool3 + " " + bool4);
console.log(`Boolean 1: ${bool1} Boolean 2: ${bool2} Boolean 3: ${bool3} Boolean 4: ${bool4}`);


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

  let num = Number("ninety-two");
  console.log(num);
  let isInvalid = isNaN(num);
  console.log(isInvalid);
  console.log(isNaN(num));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
		2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let age = 26
  console.log(`I am ${age} years old`)

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  // DONT edit the code below
  const name = "Alice";
  const number = 5;
  // DONT edit the code above

  /* 
   
    Exercise 6
    
    Concatenate Strings: 
		
		1. Using the `name` and `number` variables above and the `+` operator, 
       create a new string that says "Alice has 5 apples". Then log this string to the console.
       
    2. Then, using the `name` and `number` variables above and a template literal, create a new 
       string that says "Alice has 5 apples". Then log this string to the console.
  */

  // CODE IN THE OPEN LINES BELOW

let msg = name + " has " + number + " apples.";
console.log(msg);
msg = `${name} has ${number} apples.`;
console.log(msg);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

let newObject = {
  name: "Chiefs", 
  stadium: "Arrowhead",
  quarterback: "Mahomes"};
console.log(JSON.stringify(newObject));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
   
    Exercise 8
    
    JSON Parsing: 
		
		1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
       and then print one of its properties.

  */

  // CODE IN THE OPEN LINES BELOW

  let object = JSON.parse(jsonStringToParse);
  console.log(object);
  console.log(object.name);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW

  //Playing around with exercise
  let num1 = 4.5678910;
  let num2 = num1.toFixed(5);
  console.log(num2);
  console.log(typeof(num2));
  let num2Round = Math.round(num2);
  console.log(num2Round);
  console.log(typeof num2Round);

  // Actual exercise
  let num3 = Number(num2);
  console.log(Math.round(num3));
  console.log(Math.ceil(num3));
  console.log(Math.floor(num3));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  let num = 5.963741;
  console.log(num.toFixed(2));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  //Exercise
  let num1 = 7859.32
  let formatter1 = new Intl.NumberFormat('en-US');
  console.log(formatter1.format(num1));

  //Exercise with currency
  let num2 = 59888.64;
  let formatter2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  console.log(formatter2.format(num2));
  console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num2));

  //Excercise with percent
  let num3 = .2859;
  let formatter3 = new Intl.NumberFormat('en-US', { style: 'percent' });
  console.log(formatter3.format(num3));

  //Intl.Number Format vs .toLocaleString
  let num4 = 7859.32
  let formatter4 = new Intl.NumberFormat('en-US');
  console.log(formatter4.format(num4));
  console.log(new Intl.NumberFormat('en-US').format(num4));
  
  let num5 = 48.95
  console.log(formatter4.format(num5));
  console.log(new Intl.NumberFormat('en-US').format(num5));

  console.log(num4.toLocaleString('en-US'));
  console.log(num5.toLocaleString('en-US'));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
		
		1. Create a variable named `salary` that holds a 5 digit integer
    2. Create a new Intl.NumberFormat object for the US locale, and provide
       an object as the second argument with these property/value pairs:

       {style: "currency", currency: "USD"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let salary = 55444.33
  let formatter1 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD"});
  console.log(formatter1.format(salary));

  let formatter2 = new Intl.NumberFormat(`fr-FR`, {style: `currency`, currency: `EUR`});
  console.log(formatter2.format(salary));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
		
		1. Create a variable named `salary` that holds a 6 digit integer
    2. Create a new Intl.NumberFormat object using "ja-JP" for the first argument, 
       and provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "JPY"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let salary = 87456.12;
  let formatter = new Intl.NumberFormat('jp-JP', {style: 'currency', currency: 'JPY'});
  console.log(formatter.format(salary));


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

let date = new Date();
console.log(date.toDateString());
console.log(date.toTimeString());

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let date = new Date();
  console.log(date.toLocaleDateString('en-US'));
  console.log(date.toLocaleDateString('en-GB'));
  console.log(date.toLocaleTimeString('en-US'));
  console.log(date.toLocaleTimeString('en-GB'));
  console.log(date.toLocaleString('en-US'));
  console.log(date.toLocaleString('en-GB'));


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  // Solution
  try {
    let invalidJson = JSON.parse("This is not JSON");
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }

  // Practice using try-catch blocks

  try{
    let x = null;
    console.log(null.toUpperCase());
  } catch (error) {
    console.log(error.name);
  }

  try{
    let salary = "Priceless";
    console.log(Mathround.salary);
  } catch (error) {
    console.log(error.message);
  }

  try{
    let notJSON = "Hannah";
    console.log(JSON.parse(notJSON));
  } catch (error) {
    console.log(error.stack);
  }


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to the console
    
  */

  // CODE IN THE OPEN LINES BELOW

  let bool1 = true;
  console.log(String(bool1));

  let stringBool = String(bool1);
  console.log(` ${stringBool}, Type: ${typeof stringBool}`);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18

    1. Create a variable that holds a 9-digit number with 2 decimal places.
    2. Then, use Intl.NumberFormat to create a number formatter for the US, Russia, and Japan.
       For each formatter, provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "[proper currency string]"}

       Hint: You probably don't know the string arguments to use to do this for Russia.
             Go to Google.com and search "Intl.NumberFormat argument for Greek format"
             Then also look up "Intl.NumberFormat option for greek currency"
             
             You will forget things all the time in this job, even as an expert.
             There's a lot of information to keep in your head. 

             That's why learning to put together good search prompts in Google and other
             search engines is CRUCIAL in this job.

             Don't worry, you'll get better at this over time as you pick up the terminology
             and understand how programs are written/executed.

    3. Then use each formatter to format the variable from step 1, and log it to the console
       each time.

  */

  // CODE IN THE OPEN LINES BELOW

 let num = 4578963.21
 let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
 let formatter2 = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'});
 let formatter3 = new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY'});
 console.log(formatter1.format(num));
 console.log(formatter2.format(num));
 console.log(formatter3.format(num));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date in 2025
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let date1 = new Date();
  let date2 = new Date(2025, 0, 1);
  let timeDifference = date2 - date1;
  console.log(Math.round(timeDifference/(1000 * 60 * 60 * 24)));


  // CODE IN THE OPEN LINES ABOVE
}
