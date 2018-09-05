// MODULO DE DEPENDENCIAS
// var $ = require('jquery'); // ES5
import $ from 'jquery'; // ES6


$(function(){
    var $tvShowContainer =  $('#app-body').find('.tv-shows');

    $tvShowContainer.on('click','button.like',function(ev){
        var $this = $(this);
        // $this.animate({
        //     'font-size':'30px'
        // }, 'fast');
        $this.closest('.tv-show').toggleClass('liked');
    });

    function renderShows(shows){
        $tvShowContainer.find('.loader').remove();
        shows.forEach(function(show){
            var article = template.replace(':name:', show.name)
                                  .replace(':img:', show.image ? show.image.medium : '')
                                  .replace(':summary:',show.summary)
                                  .replace(':img alt:', " Logo " + show.name);
        var $article = $(article);
        $tvShowContainer.append($article.fadeIn(3500));         
        });
    }

    // FORMULARIO DE BUSQUEDA
    $('#app-body').find('form').submit(function(ev){
        ev.preventDefault();
        // console.log(this);
        var busqueda = $(this).find('input[type="text"]').val();

        $tvShowContainer.find('.tv-show').remove();
        var $loader = $('<div class="loader">');
        $loader.appendTo($tvShowContainer);
        $.ajax({
            url: 'http://api.tvmaze.com/search/shows',
            data: {q:busqueda},
            success: function(res, textStatus, xhr){
                // console.log(res);
                $loader.remove();
                var shows = res.map(function(el) {
                    return el.show;
                });

                renderShows(shows);                              
            }
        });
    });

    var template = '<article class="tv-show">'+
                        '<div class="left img-container">'+
                            '<img src=":img:" alt=":img alt:">'+
                        '</div>'+
                        '<div class="right info">'+
                            '<h1>:name:</h1>'+
                            '<p>:summary:</p>'+
                            '<button class="like">💖</button>'
                        '</div>'+
                    '</article>'; 
    
    // PROMESAS
    if(!localStorage.shows){
        $.ajax('http://api.tvmaze.com/shows')
        .then(function(shows){
            $tvShowContainer.find('.loader').remove();
            localStorage.shows = JSON.stringify(shows);   
            renderShows(shows);
        });
    }else{
        renderShows(JSON.parse(localStorage.shows));
    }  

    //CALLBACK
    // $.ajax({
    //     url: 'http://api.tvmaze.com/shows',
    //     success: function(shows, textStatus, xhr){
    //         // console.log(shows);
    //         $tvShowContainer.find('.loader').remove();     
    //         renderShows(shows);       
    //     }
    // });
});