const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector(".display-text");
let c = 0; // character counter to prevent too many characters (can be used to limit input length)
let dp = 1; // flag to allow only one decimal point in a number
let r = 0; // // flag to reset display on next input after result is shown

// flag to allow digits after an operator (prevents multiple operators in a row)
let d = 1; // division allowed
let a = 1; // addition operator allowed
let m = 1; // multiplication operator allowed
let s = 1; // subtraction operator allowed


//buttons(excluding AC,DE,.,=,+,-,x,/)
for(let i=4;i<18 && (i);i++){
  if(i == 7 || i == 11 || i == 15){
    continue; //skiping the buttons(x,-,+)....there are separate event listenners for these buttons down below 
  }
  buttons[i].addEventListener('click',() => {
    if(display.textContent === '0' || r == 1){
      display.textContent = buttons[i].textContent;
      r = 0;
      d = a = m = s = 1; 
    }else {
      if(c < 12){
        display.textContent += buttons[i].textContent;
        d = a = m = s = 1;
        c++;
      }
    }
  })
}

//All Clear(AC) button function
buttons[0].addEventListener('click', ()=> {
  display.textContent = '0';
  c = 0;
  dp = 1;
});

//Delete(DE) button function
buttons[1].addEventListener('click', ()=>{
  display.textContent = display.textContent.toString().slice(0,-1);
  c--;
  d = a = m = s = 1;
  dp = 1;
  if(display.textContent === ''){
    display.textContent = '0';
    c = 0;
    dp = 1;
  }
});

//decimal point button function 
buttons[2].addEventListener('click', ()=>{
  if(dp == 1){
    display.textContent += '.';
    dp = 0;
    d = a = m = s = 0;
    r = 0;
  }
})

// division button function
buttons[3].addEventListener('click',() => {
    if(display.textContent === '0' ||d == 1){
      display.textContent += buttons[3].textContent;
      d = a = m = s = 0;
      dp = 1;
      r = 0;
    }
});

//multiplication buttion function
buttons[7].addEventListener('click',() => {
    if(display.textContent === '0' || m == 1){
      display.textContent += buttons[7].textContent;
      d = a = m = s = 0;
      dp = 1;
      r = 0;
    }
});

// substraction button function 
buttons[11].addEventListener('click',() => {
    if(display.textContent === '0' || s == 1){
      display.textContent += buttons[11].textContent;
      d = a = m = s = 0;
      dp = 1;
      r = 0;
    }
});

// addition button function 
buttons[15].addEventListener('click',() => {
    if(display.textContent === '0' || a == 1){
      display.textContent += buttons[15].textContent;
      d = a = m = s = 0;
      dp = 1;
      r = 0;
    }
});



//result(=) button function
buttons[18].addEventListener('click', ()=>{
    let text = display.textContent;
    if(text.includes("x")){
      text = text.replaceAll("x","*");
    }if(text.includes("÷")){
      text = text.replaceAll("÷","/");
    }
    let result = math.evaluate(text);
    let resultToString = result.toString();
    if(resultToString.includes(".")){  
      display.textContent = result.toFixed(1);
    }else {
      display.textContent = result;
    }
    r = 1;  
});
