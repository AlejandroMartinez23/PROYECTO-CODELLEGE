//Variables globales
USUARIO = "";
PASSWORD = ""; 
LOGIN = false;

function comprobacion() {

	if (USUARIO=="code" && PASSWORD=="123") {
		//Cambio de imagen al #divLogin
		document.getElementById('imgLogin').src = "IMAGENES/pokemon.png";
		//Asignación de propiedades al boton login
		var botonLogin = document.getElementById('botonLogin');
		botonLogin.style.width = "70%";
		botonLogin.style.height = "40px";
		botonLogin.value = USUARIO;
		//Oculta los input y texto de #divLogin
		document.getElementById('inputUsuario').style.display = "none";
		document.getElementById('pContrasena').style.display = "none";
		document.getElementById('inputContra').style.display = "none";
		document.getElementById('BtnStartCloseSesion').value = "Cerrar Sesion";
		//Mostrar usuario en el #divLogin y cambiarle propiedades
		var pUsuario = document.getElementById('pUsuario');
		pUsuario.setAttribute('id','pUsuarioF');
		pUsuario.innerHTML = USUARIO;
		ocultar()
	}

	else{
		alert("Usuario o contraseña incorrectos")
	}

}

function mostrar() {
	//Cambia propiedades de #divLogin
	var divLogin = document.getElementById('divLogin');
	divLogin.setAttribute("id","divLoginf");
	//Oculta el boton Login
	document.getElementById('botonLogin').style.display = "none";
}

function ocultar() {
	//Cambia propiedades de #divLogin
	var divLogin = document.getElementById('divLogin');
	divLoginf.setAttribute("id","divLogin");
	//Muestra el boton Login
	document.getElementById("botonLogin").style.display = "block";
}
function logearse() {
	//Obtiene el texto del boton BtnStarCloseSesion ("Inicar Sesion o Cerrar sesion")
	text = document.getElementById('BtnStartCloseSesion').value;
	if(text == "Iniciar Sesion"){
		//Asignación de valores de los input de #divLogin a variables globales
		USUARIO = document.getElementById('inputUsuario').value;
		PASSWORD = document.getElementById('inputContra').value;
		comprobacion()

	} else {
		//Ventana confirmación para cerrar sesión
		var confirmacion = confirm("¿Desea cerrar sesion?")
		if(confirmacion){
			//Asigna variables globales con un string vacío
			USUARIO = "";
			Password = "";
			//Cambio de propiedades de botonLogin
			var botonLogin = document.getElementById('botonLogin');
			botonLogin.style.width = "auto";
			botonLogin.style.height = "auto";
			botonLogin.value = "Login";
			//Cambia el texto de parrafo #pUsarioF
			document.getElementById('pUsuarioF').innerHTML = "Usuario:";
			//Muestra los input y textos de #divLogin
			document.getElementById('pUsuarioF').style.display = "inline-block";
			document.getElementById('inputUsuario').style.display = "inline-block";
			document.getElementById('pContrasena').style.display = "block";
			document.getElementById('inputContra').style.display = "inline-block";
			//Asigna strings vacios a los input de Usuario y Contraseña
			document.getElementById('inputUsuario').value = ""
			document.getElementById('inputContra').value = ""
			//Cambia el texto del boton #BtnStarCloseSesion a "Iniciar sesion"
			document.getElementById('BtnStartCloseSesion').value = "Iniciar Sesion"
			//Cambia la imagen de #divLogin
			document.getElementById('imgLogin').src = "IMAGENES/LoginImg.png"
			//Cambia propiedades de #pUsuarioF cambiandole el id
			var pUsuario = document.getElementById('pUsuarioF');
			pUsuario.setAttribute('id','pUsuario');
		}

		else{
			return false
		}

	}
}

function objcontacto() {
	//Obtiene valores de los input de sección contáctanos
	var name = document.getElementById('footerinpNombre').value;
	var email = document.getElementById('footerinpEmail').value;
	var dudas = document.getElementById('footerdoubts').value
	//declara el objeto
	var obj = {
	}

	if(name=="" | email=="" | dudas==""){ //Comprueba si ningun campo está vacío
		alert("Uno de los campos está vacio")
	} else{

		if(!validarEmail(email)){ //Llama a la funcion validarEmail para obtener true o false
			return
		}

		// console.log(obj)
		//Asigna tanto valores como propiedades al objeto
		obj.name = name;
		obj.email = email
		obj.doubts = dudas
		//Se muestra en consola
		console.log(obj)

	}
}

function validarEmail(valor){
	campo = valor; //Asigna el texto del parametro valor a campo
        
    emailCaracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailCaracteres.test(campo)) { //Comprueba si en campo se encuentran algunos de los caracteres de EmailCaracteres 
      return true

    } else {
      alert("Ingrese un correo válido");
      return false
    }
}