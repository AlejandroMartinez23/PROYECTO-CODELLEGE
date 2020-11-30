USUARIO = "";
PASSWORD = "";
LOGIN = false;
function comprobacion() {
	if (USUARIO=="code" && PASSWORD=="123") {
		document.getElementById('imgLogin').src = "IMAGENES/pokemon.png";
		document.getElementById("imgLogin").style.display = "inline-block";
		var botonLogin = document.getElementById('botonLogin');
		botonLogin.style.width = "70%";
		botonLogin.style.height = "40px";
		botonLogin.value = USUARIO;
		//document.getElementById('pUsuario').style.display = "none";
		document.getElementById('inputUsuario').style.display = "none";
		document.getElementById('pContrasena').style.display = "none";
		document.getElementById('inputContra').style.display = "none";
		document.getElementById('BtnStartCloseSesion').value = "Cerrar Sesion";
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
	var divLogin = document.getElementById('divLogin');
	divLogin.setAttribute("id","divLoginf");
	document.getElementById('botonLogin').style.display = "none";
	if(LOGIN==true){
		/*
		var pUsuario = document.getElementById('pUsuario');
		pUsuario.setAttribute()*/
	}
}

function ocultar() {
	var divLogin = document.getElementById('divLogin');
	divLoginf.setAttribute("id","divLogin");
	document.getElementById("botonLogin").style.display = "block";
}
function logearse() {
	text = document.getElementById('BtnStartCloseSesion').value;
	if(text == "Iniciar Sesion"){
		user = document.getElementById('inputUsuario').value;
		contra = document.getElementById('inputContra').value;
		USUARIO = user;
		PASSWORD = contra;
		comprobacion()
	} else {
		var confirmacion = confirm("¿Desea cerrar sesion?")
		if(confirmacion){
			USUARIO = "";
			Password = "";
			var botonLogin = document.getElementById('botonLogin');
			botonLogin.style.width = "auto";
			botonLogin.style.height = "auto";
			botonLogin.value = "Login";
			document.getElementById('pUsuarioF').innerHTML = "Usuario:";
			document.getElementById('pUsuarioF').style.display = "inline-block";
			document.getElementById('inputUsuario').style.display = "inline-block";
			document.getElementById('inputUsuario').value = ""
			document.getElementById('pContrasena').style.display = "block";
			document.getElementById('inputContra').style.display = "inline-block";
			document.getElementById('inputContra').value = ""
			document.getElementById('BtnStartCloseSesion').value = "Iniciar Sesion"
			document.getElementById('imgLogin').src = "IMAGENES/LoginImg.png"
			var pUsuario = document.getElementById('pUsuarioF');
			pUsuario.setAttribute('id','pUsuario');
		}
		else{
			return false
		}
	}
}
function objcontacto() {
	var name = document.getElementById('footerinpNombre').value;
	var email = document.getElementById('footerinpEmail').value;
	var dudas = document.getElementById('footerdoubts').value
	var obj = {
	}
	if(name=="" | email=="" | dudas==""){
		alert("Uno de los campos está vacio")
	} else{

		if(!validarEmail(email)){
			return
		}
		console.log(obj)
		obj.name = name;
		obj.email = email
		obj.doubts = dudas
		console.log(obj)

	}
}

function validarEmail(valor){
	campo = valor;
        
    emailCaracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailCaracteres.test(campo)) {
      return true
    } else {
      alert("Ingrese un correo válido");
      return false
    }
}