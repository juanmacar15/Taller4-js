addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();


        let v = document.getElementById("num1").value;

        for (i=1; i<=v; i++){
            let total1 = i **2;
            let total2 = i ** i;   
            alert('total1:'+total1+'\ntotal2:'+total2);
        }
    })
})