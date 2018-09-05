
// $(function(){

// window.onload = function(){
    //     alert('loaded...');
    // };

    // var alerta = function (mensaje){
    //     alert(mensaje);
    // }

    // alerta('Hola Akin!')

    // $(document).ready(function(){
    //     alert('Ready!')
    // });

    // $.noConflict();
    // jQuery(document).ready(function($){
    //     // jQuery
    // });

    //$ // prototype

    // --------------------------------------------------------------------------
    // SELECTORES
    // --------------------------------------------------------------------------
    // var header = document.getElementById('app-header');
    // console.log(header);  
    
    // var header = $('#app-header h1');
    // var body = $('body');
    // var h1 = $('h1');
    // var h1Title = $('h1.tittle');

    // var subHeader = $('h1 h2');
    // var header = $('header');
    // var tittle = $('h1, header')
    // var seleccion = $([document, header])

    // $(':input') // <input>, <textarea>
    // $(':selected') // Radiobuttons, elemento que hallan sido seleccionados
    // $(':enabled') // Todos los que estan habilitado
    // $(':disabled') // Todos los que estan desabilitado
    // $(':text') // input type="text" <textareas> type="file", radiobutton, checkbox
    // console.log(seleccion);
    // $('header[data-tittle="TVify"]');
    // $('#app-header').find('h1');
    // $('#app-header').has('h1');
    // $('#app-header').has('.tittle');
    // $('#app-header').not('.tittle');
    // $('p').filter('.text'); // <p class="text"></p>
    // $('p').filter('.text').first();
    // $('p').filter('.text').has('a').eq(1);

    // CREAR NUEVO ELENTO CON JS VANILLA
    // var p = document.createElement('p');
    // p.innerHTML = "Hola a todos!";
    // document.body.appendChild(p);

    // CREAR NUEVO ELENTO CON JQUERY
    // var a = $('<a>',{
    //     href: 'https://platzi.com',
    //     target: '_blank',
    //     html: 'Ir a Platzi!'
    // });
    // $('#app-body').append(a);

    //GETTER Y SETTER
    // console.log(a.attr('href'));
    // a.attr('href','https://google.com').html('Ir a Google!');
    // console.log(a);

    // AGREGAR CLASE A ELEMENTOS DEL DOM
    // var $h1 = $('h1');
    // $h1.addClass('danger');

    // setTimeout(function(){
    //     // $h1.removeClass('danger');
    //     // $h1.toggleClass('danger');
    //     $h1.css('danger');
    // },1500);


    // DIFERENTES OBJETOS
    // var $h01 = $('h1');
    // var $h02 = $('h1');
    // console.log($h01===$h02); //false
    // console.log($h01[0]===$h02[0]); // true

    // AGREGAR CSS
    // $('h1').css({
    //     'font-size':'70px'
    // });
    
    // CREAR ELEMENTO EN EL DOM
    // UNA FORMA
    // $('header#app-header').append($('<p>',{
    //     'html': 'Me acaban de crear!'
    // }));
    // OTRA FORMA
    // $('<p>',{html: 'Me acaban de crear!'}).appendTo($('header#app-header'));
// });