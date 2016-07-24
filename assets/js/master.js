$(document).ready(function() {
  // Recarga la página cada cierto tiempo
  // setTimeout(function(){
  //   window.location.reload(1);
  // },3000);

  // Inicializa los popover del sitio
  $('[data-toggle="popover"]').popover();

  //--------------------------
  // Para la página de agregar usuario, muestra y oculta el rol del empleado
    $("select#tipo_u").on('change',function(){
      $("#rol-group").toggle();
      // Obtiene el valor de la opción seleccionada
      var val = $(this).val();

      if(val == "empleado")
      {
        $("#rol-group").show();
      }
    }); // Fin de la función anónima de la página de agregar usuario
  //---------------------------

  var activeurl = window.location;
  $("body").change(function(){
    var enlace = $(this).attr('a[href]');
    console.log(enlace);
    $('a[href="'+activeurl+'"]').parent('li').addClass('activo');
  });


});
