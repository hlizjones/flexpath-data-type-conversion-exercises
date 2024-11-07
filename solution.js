import { fileURLToPath } from "url";

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

export function exercise_01() {
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

  let stringType = "Hello, World!";
  let numberType = 42;
  let booleanType = true;
  let objectType = { key: "value" };
  let undefinedType;
  console.log(typeof stringType); // "string"
  console.log(typeof numberType); // "number"
  console.log(typeof booleanType); // "boolean"
  console.log(typeof objectType); // "object"
  console.log(typeof undefinedType); // "undefined"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
		3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

  let num = 123;
  let numAsString = String(num);
  console.log(numAsString); // "123"
  console.log(typeof numAsString); // "string"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_03() {
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

  let boolFromZero = Boolean(0);
  let boolFromOne = Boolean(1);
  console.log(boolFromZero); // false
  console.log(boolFromOne); // true

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

  let invalidNumber = Number("not a number");
  console.log(isNaN(invalidNumber)); // true

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
		2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let age = 30;
  let ageMessage = `I am ${age} years old.`;
  console.log(ageMessage);

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_06() {
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

  console.log(name + " has " + number + " apples."); // Using +
  console.log(`${name} has ${number} apples.`); // Using template literals

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  let person = { name: "Bob", age: 25, isEmployed: true };
  let jsonString = JSON.stringify(person);
  console.log(jsonString);

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_08() {
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

  let parsedObject = JSON.parse(jsonStringToParse);
  console.log(parsedObject.name); // "Charlie"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW

  let decimalNumber = 5.72354;
  console.log(Math.round(decimalNumber)); // 6
  console.log(Math.ceil(decimalNumber)); // 6
  console.log(Math.floor(decimalNumber)); // 5

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  let preciseNumber = 3.14159;
  let roundedNumber = preciseNumber.toFixed(2);
  console.log(roundedNumber); // "3.14"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_11() {
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

  let numberToFormat = 9240012.15;
  const usFormatter = new Intl.NumberFormat("en-US");
  let formattedNumberUS = usFormatter.format(numberToFormat);
  console.log(formattedNumberUS); // "1,234,567.89"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_12() {
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

  let salary = 50000;
  let usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(usdFormatter.format(salary)); // "$50,000.00"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_13() {
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

  let salary = 110000;
  let jpnFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  console.log(jpnFormatter.format(salary)); // "¥50,000"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let currentDate = new Date();
  console.log(currentDate.toDateString());
  console.log(currentDate.toTimeString());

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_15() {
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

  let currentDate = new Date();
  console.log(currentDate.toLocaleDateString("en-US"));
  console.log(currentDate.toLocaleDateString("en-GB"));

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  try {
    let invalidJson = JSON.parse("This is not JSON");
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to he console
    
  */

  // CODE IN THE OPEN LINES BELOW

  let boolValue = true;
  let boolAsString = String(boolValue);
  console.log(boolAsString); // "true"

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_18() {
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

  let bigNumber = 7500000.99;
  console.log(
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(bigNumber)
  ); // US currency format
  console.log(
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(bigNumber)
  ); // Russian currency format
  console.log(
    new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(bigNumber)
  ); // Japanese currency format

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_19() {
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

  let currentDate = new Date();
  let futureDate = new Date(2025, 0, 25); // January 25, 2025
  let timeDifference = futureDate - currentDate;
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  console.log(daysDifference); // Number of days until January 25, 2025

  // CODE IN THE OPEN LINES ABOVE
}
