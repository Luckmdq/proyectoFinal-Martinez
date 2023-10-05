btnLogin.addEventListener("click", (ev) => {
	loginModal.classList.toggle(`hidden`);
})

btnMenu.addEventListener("click", () => {
	menu.classList.toggle("hidden")
})

loginModal.addEventListener("click", e => {
	switch (e.target.id.toLowerCase()) {
		case "usuario":
			if (modalSelect.children.length == 1) { showSelects() };
			break;
		case "closemodal":
			loginModal.classList.toggle('hidden');
			break;
		case "ingresarlogin":
			login();
			break;
		case "cancelarlogin":
			loginModal.classList.toggle("hidden")
			break;
		case "loginmodal":
			loginModal.classList.toggle('hidden');
			break;
	}
})

loginModal.addEventListener("keydown", e => {
	if (e.key == "Enter") {
		e.preventDefault();
		login();
	} else e.key == "Escape" && loginModal.classList.toggle("hidden")
})


modalMod.addEventListener("click", e => {
	let press=e.target.id.toLowerCase();
	switch (press) {
		case "close":
			modalMod.classList.toggle("hidden")
			break;
		case "aceptar":
			confirmarMod();
			showClientes();
			modalMod.classList.toggle("hidden");
			break;
		case "cancelar":
			modalMod.classList.toggle("hidden")
			break;
		case "modmodal":
			modalMod.classList.toggle("hidden")
			break;
	}			
})

picker.addEventListener("click", e=>{
    console.log(e.target.id)
})