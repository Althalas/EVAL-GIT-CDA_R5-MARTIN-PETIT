//js pour le form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulaire envoyé');
    this.reset();
});