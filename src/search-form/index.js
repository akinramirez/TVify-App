// DEPENDENCIAS
import $ from 'jquery';
import page from 'page'; 

// FORMULARIO DE BUSQUEDA
$('#app-body').find('form').submit(function(ev){
    ev.preventDefault();
    // console.log(this);
    var busqueda = $(this).find('input[type="text"]').val();
    page(`/search?q=${busqueda}`);
    $('#txtBuscar').val('');
});