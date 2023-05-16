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
      $(".prue").hide();
    });

    $(".prueba").focus(function(){
      $(".prue").show();
    });
  });
/*
  function convertir(x, y, z){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "aLrg0fHteOAuBGetI72VtEgn7QEfBbgW");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

  fetch("https://api.apilayer.com/fixer/convert?to={z}&from={y}&amount={x}", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));

   return <p>La cantidad {"amount"} desde {"from"} hacia {"to"} es de {"result"}</p>
};

*/