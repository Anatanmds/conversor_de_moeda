//Pegando dados de entrada
var currencyType = document.querySelector("#currency")
var currency = document.querySelector("#value")
var buttonConvert = document.querySelector("#btn_convert")
var output = document.querySelector("span")

buttonConvert.addEventListener("click", ()=> {
  const resquest = new XMLHttpRequest()

  resquest.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

      let data = JSON.parse(this.response)
      console.log(data.USDBRL.high)
      let dollar = Number(data.USDBRL.high)

      if(currencyType.value == "brazilian") {
        let convert = currency.value/dollar
    
        output.innerText = `${convert.toLocaleString('pt-BR',{style: 'currency', currency:'USD'})}`
      } 
      else {
        let convert = currency.value*dollar
    
        output.innerText = `${convert.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`
      }
      
    } 
    else {
      console.log("Erro na requisição vc é muito ruim!")
    }
  }

  resquest.open("GET", `http://economia.awesomeapi.com.br/json/last/USD`)
  resquest.send()




  /*if(currencyType.value == "brazilian") {
    let convert = currencyValue.value/5.00

    output.innerText = `${convert.toLocaleString('pt-BR',{style: 'currency', currency:'USD'})}`
  }
  else {
    let convert = currencyValue.value*5.00

    output.innerText = `${convert.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`
  }

  console.log(currencyType.value)
  console.log(currencyValue.value)*/
})