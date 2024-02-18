let tickets = [] // Array for å lagre kinobilletter

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
    if (!validateName(name))
        alert("Ugyldig navn. Bruk kun bokstaver");
    // Validerer etternavn
    if (!validateEtternavn(etternavn))
        alert("Ugyldig etternavn. Bruk kun bokstaver");
    // Validerer email
    if (!validateEmail(email))
        alert('Ugyldig epost.');
    // Validerer phone
    if (!validatePhone(phone))
        alert ("Ugyldig telefonnummer");

    // Oppretter billettobjekt og legger til i array
    const ticket = { name, email, phone };
    tickets.push(ticket);
}
//tester felte etter feilmelding hvis det er noe annet enn bokstaver
function validateName(name) {
    if (!/^[a-zA-Z]+$/.test(name)) return false
    else return true
}
//tester felte etter feilmelding hvis det er noe annet enn bokstaver
function validateEtternavn(etternavn) {
    if (!/^[a-zA-Z]+$/.test(etternavn)) return false
    else return true
}
//Tester felte for spesifikke symboler = sant
function validateEmail(email) {
    if (email.indexOf("@") == -1)
        return false
    else if (email.indexOf(".") == -1)
        return false
    else return true
}
function validatePhone(phone) {
    if (phone.length != 8) return false;
    else if (!/^[0-9]+$/.test(phone)) return false
    else return true
}
//Sletter alle biletter
function deleteAllTickets() {
    tickets = []
}