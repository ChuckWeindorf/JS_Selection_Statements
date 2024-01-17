console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let answer = window.prompt("What is your name?");

console.log("Hello, " + answer);

//Ex 1
const intFav = 28;
let answer2 = window.prompt("Tell me a number?");

if (answer2 > intFav) {console.log("Too high!")}
else if (answer2 < intFav) {console.log("Too low")}
else {console.log("You got it! Congratulations!!")}


//Ex2

let answer3 = window.prompt("What is your birth month?");

switch (answer3) {
  case "March":
  case "April":
  case "May":       console.log("Spring");
                    break;
  case "June":
  case "July":      
  case "August":    console.log("Summer");
                    break;
  case "September":
  case "October":   
  case "November":  console.log("Fall");
                    break;
  case "December":
  case "January":
  case "February":  console.log("Winter");
                    break;
  default: console.log("Try again");
          
}

// Ex 3
let typeId = "02";
let colorId = "RD";
let sizeId = "XL";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":  type = "Tank top";
              break;
  case "02":  type = "T-Shirt";
              break;
  case "03":  type = "Long Sleeve";
              break
  case "04":  type = "Sweat Shirt";
              break;
  default:    type = "Other";
                }

switch (colorId) {
  case "BK": color = "Black";
              break;
  case "BL": color = "Blue";
              break;
  case "RD": color = "Red";
              break;
  case "PU": color = "Purple";
              break;
  default: color = "White";
}

switch (sizeId) {
  case "S": size = "Small";
              break;
  case "M": size = "Medium";
              break;
  case "L": size = "Large";
              break;
  case "XL": size = "Extra Large";
              break;
  default: size = "One size fits all";
}
  console.log(type, color, size);


