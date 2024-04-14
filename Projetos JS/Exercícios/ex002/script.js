function verifica(){
    var ui = document.getElementById("mod");
    var img = document.getElementById("img");
    var fano = document.getElementById('txtano')
    var resul = document.getElementById('res')
    var mh = new Date()
    var ano = mh.getFullYear()
    var sub = ano - Number(fano.value)
    var sex = document.getElementsByName('radsex')
    var genero = ''

    if (fano.value.length == 0 || fano.value > ano){
      alert("[ERRO] Alguma informação está incorreta, corrija e tente novamente!")
    } 
    
    else if (sex[0].checked){
      genero = "Homem"
      if (sub <= 5){
        img.innerHTML = '<img src="bebe-mas.jpg" alt="bebê">'
      }
      else if (sub <= 12){
        img.innerHTML = '<img src="criança-mas.jpg" alt="criança">'
      }
      else if (sub <= 20){
        img.innerHTML = '<img src="adolescente-mas.jpg" alt="adolescente">'
      }
      else if (sub <= 60){
        img.innerHTML = '<img src="adulto-mas.jpg" alt="adulto">'
      }
      else if (sub <= 120){
        img.innerHTML = '<img src="idoso-mas.jpg" alt="idoso">'
      }
      else{
        alert("[ERRO] Alguma informação está incorreta, corrija e tente novamente!")
      }
    } 
    
    else if (sex[1].checked){
      genero = "Mulher"
      if (sub <= 5){
        img.innerHTML = '<img src="bebe-fem.jpg" alt="bebê">'
      }
      else if (sub <= 12){
        img.innerHTML = '<img src="criança-fem.jpg" alt="criança">'
      }
      else if (sub <= 20){
        img.innerHTML = '<img src="adolescente-fem.jpg" alt="adolescente">'
      }
      else if (sub <= 60){
        img.innerHTML = '<img src="adulto-fem.jpg" alt="adulto">'
      }
      else if (sub <= 120){
        img.innerHTML = '<img src="idoso-fem.jpg" alt="idoso">'
      }
      else{
        alert("[ERRO] Alguma informação está incorreta, corrija e tente novamente!")
      }
    }

    ui.innerHTML = `Detectamos ${genero} com ${sub} anos`
    res.innerHTML = ''
}