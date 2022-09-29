addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();


        let cant = document.getElementById("num1").value;

        for (i=1; i<=cant; i++){
            let n1 = parseInt(prompt(i+'-'+cant+'\ningrese 1er numero:'));
            let n2 = parseInt(prompt('ingrese 2do numero:'));

            let suma = n1 + n2;
            let resta = n1-n2;
            let mul = n1 * n2;
            let div = n1 / n2;
            alert('suma: '+suma+ '\nresta: '+resta+ '\nmultiplicacion: '+mul+'\ndivision:'+div)
            
		}
    })
})