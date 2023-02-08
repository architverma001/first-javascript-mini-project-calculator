// let screen = document.getElementById("screen");
// buttons = document.querySelectorAll(".button");
// let screenValue = "";
// for (item of buttons) {
//   item.addEventListener("click", (e) => {
//     let buttontext = e.target.innerText
//    console.log(buttontext)
//    if(buttontext=='C'){
//     screenValue = ""
//    }
//    else  if(buttontext=='X'){
//       screenValue+="*"
//         screen.value = screenValue

    
//    }

//  else if ( buttontext == "=") {
//     var result;
//     try {
//       result = eval(screenValue);
//     } catch (error) {
//       result = "Invalid expression";
//     }
//     screen.value = result;
// }




//    else{
//     screenValue += buttonText;
//     screen.value = sc
//    }
//   });
// }


let screen = document.getElementById("screen");
buttons = document.querySelectorAll(".button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Expression error";
      }
      screen.value = result;
    } 
    
    else if (buttonText == "del") {
       
        var res = screenValue.charAt(screenValue.length-1);
        screenValue= screenValue.substring(0,screenValue.length-1);
        screen.value = screenValue;
      } 
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}