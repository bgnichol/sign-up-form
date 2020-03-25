const form = document.getElementById("form");


form.addEventListener("submit", e => {
    e.preventDefault();


    const firstName = form["firstname"].value;
    const lastName = form["lastname"].value;
    const email = form["email"].value;
    const password = form["password"].value;

    
    if (firstName === "") {
        addErrorTo("firstname", "First Name cannot be empty");

    }

    if (lastName === "") {
        addErrorTo("lastname", "Last Name cannot be empty");

    }

    if (email === "") {
        addErrorTo("email", "Email is required");

    }

    if (password === "") {
        addErrorTo("password", "Password cannot be empty");
            
    }
 
   
    alert(first + last + email + password) 

}); 

function addErrorTo(field, message){
    const small =  form[field].parentNode.querySelector("small");
    small.innerText = message;

}

