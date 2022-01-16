let contact = [];

function pageonload() {
    const user = JSON.parse(localStorage.getItem("contact_form"));
    if (user != null) {
        contact = user;
    }
}

pageonload()

function contacts(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mail_id = document.getElementById("mail").value;
    const message = document.getElementById("messg").value;

    const contact_details = {
        "Name": name,
        "email": mail_id,
        "user_messg": message,
    }

    contact.push(contact_details);
    localStorage.setItem("contact_form", JSON.stringify(contact));
    window.location.href = "#";
}
