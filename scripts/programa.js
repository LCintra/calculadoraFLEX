var img = document.getElementById("imagens")
function calcula() {
    var gas = Number(document.getElementById("gasolina").value)
    var eta = Number(document.getElementById("etanol").value)
    if (70*eta/100 < gas){
        img.src ="img/Etanol.png"
    }else {
        img.src ="img/Gasolina.png"
    }
}
function limpa() {
    var gas = Number(document.getElementById("gasolina"))
    var eta = Number(document.getElementById("etanol"))
    img.src ="img/Neutro.png"
    gas.innerHTML = ""
    eta.value = ""
}