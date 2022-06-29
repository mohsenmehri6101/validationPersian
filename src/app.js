import bootstrap from "bootstrap";
import validation from './validation';



document.addEventListener("DOMContentLoaded", function() {
let idForm='form_example';
let validationsAndInputs={
    'name':'required',
    'family':'required'
}

let form_validator = new validation(idForm,validationsAndInputs)
    console.log('form_validator is : ',form_validator)
});