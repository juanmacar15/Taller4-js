addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let suma = 0;
        let a = 0;
        let b = 0;
        let c = 0;

        let ventas = document.getElementById("num1").value;

        for (i=1; i<=ventas; i++){
            let cP = parseInt(prompt('ingrese el valor de la venta:'));
            
            if( cP > 1000){
                a = a + 1;
            }
            else if(1000 >= cP && cP >500){
                b = b + 1;
            }
            else{
                c = c + 1;
            }
            suma += cP;
		}
        alert('ventas mayores a 1000: '+a+'\nventas mayores a 500 menores o iguales a 1000:'+b+'\nventas menores o iguales a 500: '+c+'\nmonto total: '+suma);
        

    })
})