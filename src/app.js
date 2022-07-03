import $ from "jquery"
import bootstrap from "bootstrap"
import validation from './validation'
import jquery from "jquery"

/* ------------------------- do ------------------------- */

window.$=$
window.validation=validation


document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
      let idForm='form_example';
      let validationsAndInputs={
          'name':'required',
          'family':'required'
      }

      let form_validator = new validation(idForm,validationsAndInputs)
      
      console.log('form_validator iss : ',form_validator)
    });

  });