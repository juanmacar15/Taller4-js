addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let men = 20;
        let primer = 10;

        //let est = document.getElementById("num1").value;
        alert('el 1 mes el valor a pagar es:'+primer+ ' pesos');
        for (i=2; i<=20; i++){
            primer = primer * 2,
            alert('el '+i+ ' mes el valor a pagar es de: '+primer+ ' pesos');

		}
        
  

        //document.getElementById('res1').innerHTML = lista;
    })
})