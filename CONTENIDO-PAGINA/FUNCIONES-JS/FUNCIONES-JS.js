USUARIO = "";
PASSWORD = "";
	function comprobacion(){
<<<<<<< HEAD
		if (USUARIO=="code" && PASSWORD=="123"){
			document.getElementById('imgLogin').src = "IMAGENES/pokemon.png"
			document.getElementById("imgLogin").style.display = "inline-block"
			document.getElementById('pUsuario').innerHTML = "USUARIO <br>" + USUARIO;
=======
		if (USUARIO=="code" && PASSWORD=="123") {
			document.getElementById('imgLogin').src = "IMAGENES/pokemon.png";
			document.getElementById("imgLogin").style.display = "inline-block";
			botonLogin = document.getElementById('botonLogin');
			botonLogin.style.width = "70%";
			botonLogin.style.height = "40px";
			botonLogin.value = USUARIO;
			document.getElementById('pUsuario').style.display = "none";
>>>>>>> a9400be50c3c8a575043834f6bdbc212a84968c3
			document.getElementById('inputUsuario').style.display = "none";
			document.getElementById('pContrasena').style.display = "none";
			document.getElementById('inputContra').style.display = "none";
			document.getElementById('BtnStartCloseSesion').value = "Cerrar Sesion";
		}
		else{
			alert("Usuario o contraseña incorrectos")
		}
	}
	function mostrar(){
		document.getElementById("formLogin").style.display = "block";
		document.getElementById("divLogin").style.height = "auto";
		document.getElementById('divLogin').style.display = "block";
	}

	function ocultar(){
		document.getElementById("formLogin").style.display = "none"
		document.getElementById("divLogin").style.height = "30px"
		document.getElementById('divLogin').style.display = "flex";
	}
	function logearse(){
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
				botonLogin = document.getElementById('botonLogin');
				botonLogin.style.width = "auto";
				botonLogin.style.height = "auto";
				botonLogin.value = "Login"
				document.getElementById('pUsuario').innerHTML = "Usuario:";
				document.getElementById('pUsuario').style.display = "inline-block";
				document.getElementById('inputUsuario').style.display = "inline-block";
				document.getElementById('inputUsuario').value = ""
				document.getElementById('pContrasena').style.display = "block";
				document.getElementById('inputContra').style.display = "inline-block";
				document.getElementById('inputContra').value = ""
				document.getElementById('BtnStartCloseSesion').value = "Iniciar Sesion"
				document.getElementById('imgLogin').src = "IMAGENES/LoginImg.png"	
			}
			else{
				return false
			}
		}
	}
	function objcontacto(){
		var name = document.getElementById('footerinpNombre').value;
		var email = document.getElementById('footerinpEmail').value;
		var dudas = document.getElementById('footerdoubts').value
		var obj = {
		}
		
		if(name=="" | email=="" | dudas==""){
			alert("Uno de los campos está vacio")
		} else{
			console.log(obj)
			obj.name = name;
			obj.email = email
			obj.doubts = dudas
			console.log(obj)
		}
	}