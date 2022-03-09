let cont=0
  document.getElementById('calcular').onclick=function imc(){

      let nome= document.getElementById('nome').value
      let altura= document.getElementById('altura').value
      let peso= document.getElementById('peso').value

    if(nome.length>0 && altura.length>0 && peso.length>0){

   
      cont++
      let body=document.getElementById("body")
      let tab=document.getElementById("tabela")
      let tr=document.createElement("tr")
      let td=document.createElement("td")
      let td1=document.createElement("td")
      let td2=document.createElement("td")
      let td3=document.createElement("td")
      let imc=document.createElement("td")
      let text
  
      tab.appendChild(tr)
      tr.appendChild(td)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(imc)
      
      td.append(cont)
      td1.append(nome)
      td2.append(peso)
      td3.append(altura)
      
  
      let valorIMC = (peso / ( altura*altura )).toFixed(2)
      if(valorIMC< 18.5){
          text=document.createTextNode("Magreza")
      }else if(valorIMC <25){
          text=document.createTextNode(valorIMC+" com peso ideal. Parabens!!")
      }else if(valorIMC <30){
          text=document.createTextNode(valorIMC+" levemente acima do peso")
      }else if(valorIMC <35){
          text=document.createTextNode(valorIMC+" com obesidade grau 1.")
      }else if(valorIMC <40){
          text=document.createTextNode(valorIMC+" com obesidade grau 2.")
          
      }else{
          text=document.createTextNode(valorIMC+"com obesidade grau 3. Cuidado!!")
      }
      imc.append(text)
  }
  let h1
  h1=document.createElement("h1")

}
