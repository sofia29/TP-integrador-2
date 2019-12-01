const usuarios = [

    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1,"Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"],
]
console.log(usuarios)


let accion = prompt(`Por favor, indique qué accion desea tomar: 

- 👤 [CREAR] un usuario 
- 🔎 [BUSCAR] un usuario
- 🗑️ [ELIMINAR] un usuario
- 🚪 [SALIR] del programa
`)



while (accion !== "SALIR") {

//CODIGO PARA CREAR UN USUARIO

if (accion === "CREAR") {
  let preguntaRepeticionCrear = ""
  while (preguntaRepeticionCrear !== "NO") {
    let nombre = prompt("Por favor, ingrese su nombre de pila")
    let telefono = prompt("Por favor, ingrese su numero de telefono")
    let email = prompt("Por favor, ingrese su direccion de mail")
    let confirmacion = prompt(`Nombre: ${nombre}
Telefono: ${telefono}
Email: ${email} 
¿Confirma datos? SI/NO`)
    if (confirmacion === "NO") {
        alert(`La acción fue cancelada`)
    }

    if (confirmacion.toLowerCase() === "si") {
        usuarios.push([usuarios.length, nombre, Number(telefono), email])
        alert(`Usuario ${nombre} agregado con éxito. Estos son todos los datos del nuevo usuario:
        ID: ${usuarios.length - 1}
        Nombre: ${nombre}
        Telefono: ${telefono}
        Email: ${email}`)
        alert(`Estos son los usuarios actuales: ${usuarios}`)
        
    }

preguntaRepeticionCrear = prompt("¿Desea volver a realizar el procedimiento? SI/NO")

}

}

//CODIGO PARA BUSCAR UN USUARIO


else if (accion === "BUSCAR") {

  let repetirProcedimientoBuscar = ""  
  while (repetirProcedimientoBuscar !== "NO") {
  
  let preguntaBusqueda = prompt(`Por favor, indique por qué dato quiere buscar al usuario, 
    ingresando el número correspondiente:
    - ID: 1
    - Nombre: 2
    - Número de teléfono: 3
    - Dirección de correo electrónico: 4`)
  
    switch (preguntaBusqueda) {
      case "1" :
          let preguntaIdABuscar = prompt(`Por favor, ingrese el ID del usuario que quiere buscar`)
          let respuestaIdABuscar = Number(preguntaIdABuscar)
          for (let i = 0; i < usuarios.length; i++) {
            for (let j = 0; j < usuarios[i].length; j++) {
            if (usuarios[i][j] === respuestaIdABuscar) {
                alert(usuarios[i])    
            }
            //else {
            //    alert(`El usuario buscado no existe`)
            // } ESTO ACA PARA CUANDO PONEN DATO INCORRECTO NO ME FUNCIONA Y NO SE POR QUE 
          }
          }
          break;
  case "2":
    let preguntaNombreABuscar = prompt(`Por favor, ingrese el nombre del usuario que quiere buscar`) 
    for (let i = 0; i < usuarios.length; i++) {
      for (let j = 0; j < usuarios[i].length; j++) {
          if (usuarios[i][j] === preguntaNombreABuscar) {
          alert(usuarios[i])    
      }
   }
  }
  break;
  case "3":
      let preguntaTelefonoABuscar = prompt(`Por favor, ingrese el número de teléfono del usuario que quiere buscar`)
      let respuestaTelefonoABuscar = Number(preguntaTelefonoABuscar)  
  
      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {
      
          if (usuarios[i][j] === respuestaTelefonoABuscar) {
            alert(usuarios[i])    
        }
            }
      }
      break; 
  case "4":
    let preguntaMailABuscar = prompt(`Por favor, ingrese el mail del usuario que quiere buscar`)  
       for (let i = 0; i < usuarios.length; i++) {
          for (let j = 0; j < usuarios[i].length; j++) {
        
            if (usuarios[i][j] === preguntaMailABuscar) {
              alert(usuarios[i])    
          } 
          
        }
        }
   break;  
  default: 
    alert(`La opción ingresada no es válida`)
    break;
  }
 
    
repetirProcedimientoBuscar = prompt(`¿Desea repetir el procedimiento? SI/NO`)
  
  }
  
}



//CODIGO PARA ELIMINAR UN USUARIO

else if (accion === "ELIMINAR") {

let preguntaRepeticionEliminar = ""
while (preguntaRepeticionEliminar !== "NO") {
let preguntaIdAEliminar = prompt(`Por favor, ingrese el ID del usuario que quiere eliminar`)
let respuestaIdAEliminar = Number(preguntaIdAEliminar)

for (let i = 0; i < usuarios.length; i++) {
  for (let j = 0; j < usuarios[i].length; j++) {
if (usuarios[i][j] === respuestaIdAEliminar) {
  let confirmacionEliminacion = prompt(`Estos son los datos del usuario buscado:
  ${usuarios[i]}
  ¿Confirma que desea eliminar los datos de este usuario? SI/NO`)

  if (confirmacionEliminacion.toLowerCase() === "si") {
    usuarios.splice(i, 1)
    alert(`Se ha eliminado el usuario exitosamente.`)
    alert(`Estos son los usuarios que quedan: ${usuarios}.`) 
    }        
    else if (confirmacionEliminacion.toLowerCase() === "no") {
    alert(`La operacion fue cancelada.`)
  }
  } 
//  else {
 // (`El usuario que desea eliminar no existe.`)
//} ESTE CODIGO ACA ME ROMPE TODO
}
}
preguntaRepeticionEliminar = prompt(`¿Desea repetir la operación? SI/NO`)
}
}

  else {
    alert(`La opción ingresada no es válida`)
  }

}

//CODIGO PARA SALIR

if (accion === "SALIR") {
  let preguntaConfirmacionSalir = prompt(`¿Confirma que desea salir del programa? SI/NO`)
 
   if (preguntaConfirmacionSalir === "SI") {
     alert(`Hasta la próxima`)
     }

  }

