// YOUR CODE HERE
// YOUR CODE HERE
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    //the color that was selected
    const color = e.target.value;
   
    
if(color == "Blue"){
    radioOutput.innerHTML = "You are cool";
}

if(color == "Green"){
    radioOutput.innerHTML = "You are Vegan";
}

if(color == "Pink"){
    radioOutput.innerHTML = "You are Girly";
}

if(color == "Black"){
    radioOutput.innerHTML = "You have nothing";
}
};

radioInput.addEventListener('change', displayColor);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");
// const randomNumber = getRandomInt();
// console.log(randomNumber);

const randNum = (e) => {
    e.target.select();
    const value = e.target.valueAsNumber;

    if(value == 50){
       numOutput.innerHTML += "<h1>not very bright</h1>";
    }else if (value < 50){
        numOutput.innerHTML += "<h1>you are far from the light</h1>";
    }else if(value > 50){
        numOutput.innerHTML += "<h1>well you aren't half bad</h1>";
    }
  

};
numInput.addEventListener('change' , randNum);
// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.


// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

