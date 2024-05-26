function showFlowerInfo(flowerName) {
    alert(`Más información sobre la flor: ${flowerName}`);
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const responseElement = document.getElementById('formResponse');
    responseElement.textContent = `Gracias por tu mensaje, ${name}. Te responderemos pronto a ${email}.`;
    
    document.getElementById('contactForm').reset();
}
