(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  $(document).ready(function(){
    $(".prueba").blur(function(){
      $("#prue").hide();
    });

    $(".prueba").focus(function(){
      $("#prue").show();
    });
    
    $("button").click(function(){
      alert("Se estan enviando los datos. ");
    });
  });