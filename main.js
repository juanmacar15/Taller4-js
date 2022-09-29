addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let mayor = 1;
        let menor = 10;
        let s = 0;

        let est = document.getElementById("num1").value;
        for (i=1; i<=est; i++){
            let cal = parseInt(prompt('alumno #'+i+'\ningrese su nota'))

            if (cal > 1 && cal < 10){
                s = cal;
            }
            if(cal >= mayor){
                mayor = cal;
            }
            else if(menor >= cal){
                menor = cal
            }
		}
        let prom = s / est;
        alert('promedio de notas: '+prom+'\nnota mas alta: '+mayor+ '\nnota mas baja: '+menor);
  

        //document.getElementById('res1').innerHTML = lista;
    })
})