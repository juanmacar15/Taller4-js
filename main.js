addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();


        let ang = document.getElementById("num1").value;
        let rad = document.getElementById("num2").value;
        let signo = 1;
        const pi = 3.14;
        let x = rad*(180/pi);
        let sen = x;

        for (i=3; i<=ang +1; i++){

            let a = 1;
            let b = 1;

            while(a <= i){
                b = b * a;
                a = a + 1;
            }
            if(signo % 2 == 1){
                sen = sen - ((x * i) / b);
            }
            else{
                sen = sen + ((x * i) / b);
            }
            signo += 1;
            
		}
        document.getElementById('res1').innerHTML= 'el seno de '+x+' es '+sen;
    })
})