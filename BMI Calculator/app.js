let BMI = ()=>{

    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let result = document.getElementById("result");
    let info = document.getElementById("text-info");

    let textInfo = document.getElementById("text-info");

    let BMIvalue = weight.value / (height.value * height.value);//Formula for the BMI

    result.innerHTML = BMIvalue.toFixed(2) ;//Fix 2 number only after the decimal value

    if( BMIvalue <18.5){
        info.innerText="Underweight 🥩"; //Underweight
        textInfo.style.color="red"
    }
    else if( BMIvalue >18.5 && BMIvalue<24.9){
        info.innerText="Normal 😊"; //Normal
        textInfo.style.color="green"
    }
    else if(BMIvalue>25 && BMIvalue<29.9){
        info.innerText="Overweight 🤨"; //Overweight
        textInfo.style.color="red"
    }
    else if(BMIvalue>30 && BMIvalue<35){
        info.innerText="Obesity 😒"; //Obesity
        textInfo.style.color="red"
    }
    else{
        info.innerText="severe obesity 🤯"; //severe obesity
        textInfo.style.color="red"
    }

}