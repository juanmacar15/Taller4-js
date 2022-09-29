addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();


        let nTrabajadores = document.getElementById("num1").value;

        for (i=1; i<=nTrabajadores; i++){
            let aT = parseInt(prompt('cuantos años lleva trabajando en la empresa?'));
            
            if( 1 <= aT && aT <= 5){
                alert('su aumenro es de 100 pesos');
            }
            else if(5 < aT && aT <=10){
                alert('su aumenro es de 250 pesos');
            }
            else if(10 < aT && aT <=20){
                alert('su aumenro es de 400 pesos');
            }
            else{
                alert('su aumenro es de 500 pesos');
            }
		}        
    })
})