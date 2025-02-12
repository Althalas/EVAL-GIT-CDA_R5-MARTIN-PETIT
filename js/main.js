//js pour le form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulaire envoyé');
    this.reset();
});

document.querySelector('input[name="email"]').addEventListener('input',(event) => {
    const emailinput=event.target;
    const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailregex.test(emailinput.value)){
        emailinput.style.borderColor="green";
    }else {
        emailinput.style.borderColor="red";
    }
});