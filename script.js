
function imc() {
  let peso = document.getElementById('peso')
  let altura = document.getElementById('altura')
  let novaAltura = ''
  peso = Number(peso.value)

  for (let i = 0; i < altura.value.length; i++){
      if(altura.value[i] === ',') novaAltura += '.'
      else{
          novaAltura += altura.value[i] // novaAltura = novaAltura + altura.value[i] 
      }
      console.log(novaAltura);
  }

  let altura2 = Number(novaAltura * novaAltura)
  let imc = String((peso / altura2).toFixed(2)) 

  let novoIMC = ''
  for (let i = 0; i < imc.length; i++){
      if(imc[i] === '.') novoIMC += ','
      else{
          novoIMC += imc[i]
      }
  console.log(novoIMC);
  }


  document.getElementById('res').innerText = `${novoIMC}`

  if (imc < 18.5 ) {
    document.getElementById('tipo').innerText = `Você Possui: Magreza`
   } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById('tipo').innerText = `Você Possui: Normal`
   } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById('tipo').innerText = `Você Possui: Sobrepeso`
   } else if (imc >= 30 && imc <= 39.9) {
    document.getElementById('tipo').innerText = `Você Possui: Obesidade`
   } else if (imc > 40) {
    document.getElementById('tipo').innerText = `Você Possui: Obesidade grave`
  }


  if (imc > 0 ) {
    document.getElementById('post-result').style.display = "inline"
    document.getElementById('pre-result').style.display = "none"
  } else {
    window.alert("Os valores não foram inseridos corretamente. Tente novamente.")
  }
  }
  

function testando(){
  if(altura.value.length === 1)altura.value = `${altura.value},`
}
  
altura.addEventListener('keydown',(e) => {
  if(e.keyCode !== 8){
      testando()
  } 
})

function voltar() {
  document.getElementById('post-result').style.display = "none"
    document.getElementById('pre-result').style.display = "inline"
}

