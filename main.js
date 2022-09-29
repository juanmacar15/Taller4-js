addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();


        let cant = document.getElementById("num1").value;
        let mayor = 50000;
        const iva1 = 0.19;
        for (i=1; i<=cant; i++){
            let valorAr = parseInt(prompt(i+'-'+cant+'\ningrese el valor del articulo:'));
            let unid = parseInt(prompt('unidades compradas:'));

            let subTotal = valorAr * unid;
            let iva2 = subTotal * iva1;
            let totalPagar = subTotal + iva2;

            if(totalPagar > mayor){
                let des = totalPagar * 0.15;
                let descTotal = totalPagar - des;
                alert('esta compra supero los 500.000 obten tu descuento: \npago con IVA: '+totalPagar+'\ntotal a pagar: '+descTotal+' GRACIAS POR TU COMPRA <3');
            }
            else{
                alert('subtotal: '+subTotal+'\n IVA: '+iva1+'\ntotal a pagar: '+totalPagar);
            }       
		}
    })
})