const RegLettres = new RegExp("^[a-zA-Z]+$");
const RegNum = new RegExp("^[0-9]{5}$");
const RegMail = new RegExp("([_A-Za-z0-9-]+)(\.[_A-Za-z0-9-]+)@([A-Za-z0-9]+)(\.[A-Za-z0-9]+)");

let inputTextSelect = document.querySelectorAll('input[type=text]');
let inputMailSelect = document.querySelector('input[type=email]');
let inputNumberSelect = document.querySelectorAll('input[type=number]');

function verification () {

}