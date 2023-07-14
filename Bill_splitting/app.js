let split = ()=>{

    let result = document.getElementById("result");
    let persons = document.getElementById("no-of-per");
    let amount = document.getElementById("amount");

    let split = amount.value / persons.value;

    result.innerHTML=split;
}