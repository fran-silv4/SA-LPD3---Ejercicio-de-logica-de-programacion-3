console.log("Bienvenido a mi programa")
let nume;

while (true) {  //comprobando que sea un numero
    nume = parseFloat(prompt("Ingresa tu numero: "))
    if (!isNaN(nume)){
        break;
    }else{
        alert("Porfavor ingresa un numero valido!");
    }  
}

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) // estos numeros no se pueden factorializar ya que no tienen numeros cercanos al 0
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  let resultado = factorialize(nume)
  console.log("Aquí tienes tu numero factorizado: ", resultado)

  document.getElementById("result").textContent = "Aquí tienes tu número factorizado: " + resultado;