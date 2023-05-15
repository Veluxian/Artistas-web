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
  
    $("#boton").click(function(){
      $.get("https://randomuser.me/api/",
      function(data){
        $.each(data.results, function(i,item){
            $("#boton").append("<tr><td>"+item.gender+"</td><td>"+item.name+
                "</td><td><img src='"+item.strCategoryThumb+"'>"+
                "</td><td>"+item.title+"</td><td>"+item.first+"</td><td>"+item.last+"</td></tr>"); 
        });
      });
    });
  });