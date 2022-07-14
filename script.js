//Pegando dados de entrada
var currencyType = document.querySelector("#currency")
var currencyValue = document.querySelector("#value")
var buttonConvert = document.querySelector("#btn_convert")
var output = document.querySelector("span")

buttonConvert.addEventListener("click", ()=> {

  if(currencyType.value == "brazilian") {
    let convert = currencyValue.value/5.00

    output.innerHTML = "&#x1F4B2"
    output.innerText += `${convert} Dolares`
  }
  else {
    let convert = currencyValue.value*5.00

    output.innerHTML = "&#x1F4B2"
    output.innerText += `${convert} Reais`
  }

  console.log(currencyType.value)
  console.log(currencyValue.value)
})