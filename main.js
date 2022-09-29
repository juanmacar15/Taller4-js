addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let lista = [];
        let n1 = document.getElementById("num1").value;
        for (i=1; i<=n1; i++){
			if (i%2!=0){
				n2=i;
			lista.push(n2+"");
			}
			else{
				n2=i+3;
				lista.push(n2+"");
			}
		}
        document.getElementById('res1').innerHTML = lista;
    })
})