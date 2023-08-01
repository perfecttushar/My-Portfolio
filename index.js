function sendMail() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    if (!name || !email || !message) {
        alert("Please fill in all the required fields.");
        return;
    }

    var params = {
        from_name: name,
        email_id: email,
        message: message,
    };

    const serviceID = "service_ei2459a";
    const templateID = "template_1r793rr";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            alert("Thank you for your response.");
        })
        .catch(err => {
            alert("An error occurred while sending the email. Please try again later.");
        });
}
