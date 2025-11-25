function factorizar(a) {
    var r = 1
    for (var i = 2; i <= a; i++) { r *= i } 
    return r
}
/* distancia */
function distancia1(x1, x2, y1, y2,) {
    
    var d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return d
}
/* calculo medio */
function distancia2(x1,x2,y1,y2) {
    var a = parseFloat(x1)
    var b = parseFloat(x2)
    var c = parseFloat(y1)
    var d = parseFloat(y2)
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return 'Valores inválidos'
    }
    var resultadoX = (a + b) / 2
    var resultadoy = (c + d) / 2
    return `x: ` + resultadoX + " , " + `y: ` + resultadoy
}
function calculo(x1,x2,y1,y2) {
    var resultadoX = (x1 - x2)
    var resultadoy = (y1 - y2)
    var resultadof = resultadoX / resultadoy
    return resultadof

}

window.onload = ()=> {
    const pagina=document.body.id
    var aceptar = document.getElementById('aceptar')
    var borrar = document.getElementById('borrar')
    var resultado = document.getElementById('resultado')
    var x1 = document.getElementById('X1')
    var x2 = document.getElementById('X2')
    var y1 = document.getElementById('Y1')
    var y2 = document.getElementById('Y2')

    if (pagina=='fac' ) {
    var factorial = document.getElementById("factorial")

    aceptar.onclick = ()=> {
        resultado.textContent = factorizar(factorial.value)
    }

    borrar.onclick =()=>{
        resultado.textContent=0
        factorial.value =''
    }

    }
    if (pagina == "med") {
        
       aceptar.onclick =()=>{
        resultado.textContent = distancia2(x1.value,x2.value,y1.value,y2.value)
       } 
       borrar.onclick =()=>{
        resultado.textContent=0
        x1.value =''
        x2.value =''
        y1.value =''
        y2.value =''
    }
    }
    if (pagina == 'dis') {
        aceptar.onclick =()=>{
        resultado.textContent = distancia1(x1.value,x2.value,y1.value,y2.value)
       } 
       borrar.onclick =()=>{
        resultado.textContent=0
        x1.value =''
        x2.value =''
        y1.value =''
        y2.value =''}
    }
    if (pagina =='cal') {
        aceptar.onclick =()=>{
        resultado.textContent = calculo(x1.value,x2.value,y1.value,y2.value)
       } 
       borrar.onclick =()=>{
        resultado.textContent=0
        x1.value =''
        x2.value =''
        y1.value =''
        y2.value =''
    }
    }

    window.addEventListener('keydown', (e)=> {if (e.code == "Enter"){document.getElementById("aceptar").click()}})

}

