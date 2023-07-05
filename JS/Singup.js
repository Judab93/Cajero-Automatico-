const singUpForms = document.querySelector("singUpForms")
singUpForms.addEventListener("Submit", (e) =>[
    e.preventDefault()
    const name = document.querySelector("#Name").value
    const Tel = document.querySelector("#Tel").value
    const password = document.querySelector("#Password").value

    const Usarname = JSON.parse(localStorage.getItem("Users")) || []
    const isUserRegistered = Users.find( user=> user.Tel=== Tel)
    if(isUserRegistered){
        return alert("El usuario ya esta registrado")
    }

    User.push{(name: Name, Tel: Tel, Password: Password )}
    localstorage.setItem("users", JSON.stringify(users))
    alert("Registro existoso")
    