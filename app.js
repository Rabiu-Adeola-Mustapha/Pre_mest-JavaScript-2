let a = 10;
let b = 6;

//basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a % b);
console.log(a / b);


//urinary operators



//control flow

let score = 59;

if (score >= 80){
    console.log("You had A");
}else if(score >= 75){
    console.log("You had B+");
}else if(score >= 70 ){
    console.log("You had B");
}else if (score >= 65){
    console.log("You had C+");
}else if(score >= 60){
    console.log("You had C");
}else if(score >=55 ){
    console.log("You had D+");
}else if (score >=50 ){
    console.log("You had D");
}else{
    console.log("You had E");
}


const gender = "";

switch (gender) {
    case "Female":
        console.log("Use female washroom");
        break;
    case "Male":
        console.log("Use male washroom");
        break;

    default:
        console.log("No washroom for you");
        break;
}


for (let index = 1; index < 10; index++) {
    console.log(index);
    
}

let count = 1;

while(count < 10){

    console.log("You will be Great");

    count++;
}