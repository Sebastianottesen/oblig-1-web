let tickets = []; // Array for å lagre kinobilletter

function buyTicket() {
    // Henter verdier fra inndatafeltene
    let name = document.getElementById('name').value;
    let etternavn = document.getElementById('etternavn').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Validerer at alle feltene er fylt ut
    if (!name || !etternavn || !email || !phone) {
        alert('Vennligst fyll ut alle feltene.');
        return;
    }

    // Validerer navn
    if (!validateName(name)) {
        alert("Ugyldig navn. Bruk kun bokstaver");
        return; // Avslutt funksjonen hvis valideringen mislykkes
    }

    // Validerer etternavn
    if (!validateEtternavn(etternavn)) {
        alert("Ugyldig etternavn. Bruk kun bokstaver");
        return; // Avslutt funksjonen hvis valideringen mislykkes
    }

    // Validerer email
    if (!validateEmail(email)) {
        alert('Ugyldig epost.');
        return; // Avslutt funksjonen hvis valideringen mislykkes
    }

    // Validerer phone
    if (!validatePhone(phone)) {
        alert("Ugyldig telefonnummer");
        return; // Avslutt funksjonen hvis valideringen mislykkes
    }

    // Oppretter billettobjekt og legger til i array
    const ticket = {name, etternavn, email, phone};
    tickets.push(ticket);
}

//tester felte etter feilmelding hvis det er noe annet enn bokstaver
function validateName(name) {
    if (!/^[a-zA-Z]+$/.test(name)) return false;
    else {
        return true;
    }
}

//tester feltet etter feilmelding hvis det er noe annet enn bokstaver
function validateEtternavn(etternavn) {
    if (!/^[a-zA-Z]+$/.test(etternavn)) return false;
    else {
        return true;
    }
}

//Teste feltet for spesifikke symboler = sant
//Fikk advarsel om .indexof(), så brukte includes() isteden.
function validateEmail(email) {
    if (email.includes("@") == -1 || email.includes(".") == -1) return false;
    else {
        return true;
    }
}

function validatePhone(phone) {
    if (phone.length != 8 || !/^[0-9]+$/.test(phone)) return false;
    return true;
}

//Sletter alle billetter
function deleteAllTickets() {
    tickets = [];
}


