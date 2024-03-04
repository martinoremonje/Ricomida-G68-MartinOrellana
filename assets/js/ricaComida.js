$(document).ready(function() {
    $('#enviarCorreo').click(function() {
      alert('El correo fue enviado correctamente');
    });
});
  
  $(document).ready(function() {
    $('h4').on('dblclick', function() { 
      var currentColor = $(this).css('color');
      $(this).css('color', (currentColor === 'rgb(0, 0, 0)' ? 'red' : 'black'));
    });
  });

  $(document).ready(function(){
    $('.card .card-title, img').click(function(){   
      $('.card .card-title, .card-text').toggle();
    });
  });
  


  
  
  
  
  