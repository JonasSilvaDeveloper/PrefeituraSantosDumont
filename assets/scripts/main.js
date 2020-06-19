jQuery(function(){
  structure.init();
  contrast.init();
  accessibility.init();
});

var accessibility = {
  init: function(){
    var size = $('html').css('font-size');
    size = size.replace('px','');
    size = 62.5;

    $('#btnPlus').click(function(){
      size = size + 5;
      $('html').animate({'font-size':'' + size + '%'});
      return false;
    });

    $('#btnMenus').click(function(){
      size = size - 5;
      $('html').animate({'font-size': size + '%'});
      return false;
    });
  }
}

var contrast = {
  init: function(){
    var Contrast = {
      storage: 'contrastState',
      cssClass: 'contrast',
      currentState: null,
      check: checkContrast,
      getState: getContrastState,
      setState: setContrastState,
      toogle: toogleContrast,
      updateView: updateViewContrast
  };

  window.toggleContrast = function () { Contrast.toogle(); };

  Contrast.check();

  function checkContrast() {
      this.updateView();
  }

  function getContrastState() {
      return localStorage.getItem(this.storage) === 'true';
  }

  function setContrastState(state) {
      localStorage.setItem(this.storage, '' + state);
      this.currentState = state;
      this.updateView();
  }

  function updateViewContrast() {
      var body = document.body;

      if (this.currentState === null)
          this.currentState = this.getState();

      if (this.currentState)
          body.classList.add(this.cssClass);
      else
          body.classList.remove(this.cssClass);
  }

  function toogleContrast() {
      this.setState(!this.currentState);
  }
    
  }
}

var structure = {
  init: function(){
    $('body').click(function(e){    
      //Essa condição verifica se o clique foi feito em algum elemento dentro      da sua div. Esse tem '#' porque é um seletor do jquery
      if($(e.target).closest('.search-top__button,.search-top__content,.navigation__menu,.menu').length){ 
        return;        
      }
      $('.search-top__content').removeClass('search-active');
      $('.menu').removeClass('menu-active');
      $('.navigation__menu').removeClass('btn-active');
    });

    $('.search-top__button').click(function(){
      $(this).parent().find('.search-top__content').toggleClass('search-active');
    })

    $('.navigation__menu').click(function(){
      $(this).toggleClass('btn-active');
      $('.menu').toggleClass('menu-active');
    })

    $('.footer__title').click(function(){
      $(this).parent().find('.footer__list').toggleClass('map-active');
    })
    $('.navigation__item').click(function(){
      $('.submenu').removeClass('menu-mobile-active');
    })

    $('.navigation__item--mobile').click(function(){
      if($('.submenu').hasClass('menu-mobile-active')){
        $('.submenu').removeClass('menu-mobile-active');
      }else{
        $(this).find('.submenu').toggleClass('menu-mobile-active');

      }
    })

    $('.navigation__btn-mobile').click(function(){
      $('.navigation__list').toggleClass('mobile-active');
    })
    
    //AQUI VAI O CODIGO JS 
    console.log('Funcao JavaScript Página Structure');
    
    
  }
};

// Função JavaScript da Página Home
var slide = {
  init: function() {

    $('.slide__wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
    })
    
  }
};

var contato = {
  init: function(){
    $('#form-envio').submit(function(e){
      $(this).find('.required').each(function(){
        if($(this).val().length !== 0){
          $(this).parent().find('.form__error').css('opacity','0');
        }else{
            e.preventDefault();
          $(this).parent().find('.form__error').css('opacity','1');
        }
      })

      $(this).find('.required').focus(function () {
        $(this).parent().find('.form__error').css('opacity','0');
      })
    })
    $('#form-acompanhar').submit(function(e){
      $(this).find('.required').each(function(){
        if($(this).val().length !== 0){
          $(this).parent().find('.form__error').css('opacity','0');
        }else{
            e.preventDefault();
          $(this).parent().find('.form__error').css('opacity','1');
        }
      })

      $(this).find('.required').focus(function () {
        $(this).parent().find('.form__error').css('opacity','0');
      })
    })

    $('#form-contato').submit(function(e){
      $(this).find('.required').each(function(){
        if($(this).val().length !== 0){
          $(this).parent().find('.form__error').css('opacity','0');
        }else{
            e.preventDefault();
          $(this).parent().find('.form__error').css('opacity','1');
        }
      })

      $(this).find('.required').focus(function () {
        $(this).parent().find('.form__error').css('opacity','0');
      })
    })
  }
}

var portal = {
  init: function(){
    //Mascara Telefone
    var behavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000 - 0000' : '(00) 0000 - 00009';
    },
    options = {
      onKeyPress: function (val, e, field, options) {
          field.mask(behavior.apply({}, arguments), options);
      }
    };
    $('#form-tel').mask(behavior, options);

    $('#form-cnpj').mask('00.000.000/0000-00');
    $('#form-telefone').mask('(00) 00000 - 0000');
    $('#form-cel').mask('(00) 90000 - 0000');

    $('#form-fornecedor').submit(function(e){
      $(this).find('.required').each(function(){
        if($(this).val().length !== 0){
          $(this).parent().find('.form__error').css('opacity','0');
        }else{
            e.preventDefault();
          $(this).parent().find('.form__error').css('opacity','1');
        }
      })

      $(this).find('.required').focus(function () {
        $(this).parent().find('.form__error').css('opacity','0');
      })
    })

    $('#form-emprego').submit(function(e){
      $(this).find('.required').each(function(){
        if($(this).val().length !== 0){
          $(this).parent().find('.form__error').css('opacity','0');
        }else{
            e.preventDefault();
          $(this).parent().find('.form__error').css('opacity','1');
        }
      })

      $(this).find('.required').focus(function () {
        $(this).parent().find('.form__error').css('opacity','0');
      })
    })
  }
}


var calendar = {
  init: function(){
    document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('calendar-content');
    
      var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        timeZone: 'local',
        plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
        defaultView: 'dayGridMonth',
        defaultDate: '2020-06-18',
        displayEventTime: false,
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
    
        eventRender: function(info) {
          var tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            content: info.event.extendedProps.description,
            html: 'true',
            placement: 'top',
            trigger: 'hover',
            container: 'body',
    
          });
        },
        events: [
          {
            title: 'Nome do Evento',
            description: '<strong>Nome do Evento</strong><br>Horário: 16h | Local: Nome do local',
            start: '2020-06-16',
            className: 'evento'
          },
          {
            title: 'Nome do Evento',
            description: '<strong>Nome do Evento</strong><br>Horário: 16h | Local: Nome do local',
            start: '2020-06-17',
            className: 'evento'
          },
          {
            title: 'Corpus Christi',
            description: '<strong>Corpus Christi</strong><br>Feriado Nacional',
            start: '2020-06-20',
            className: 'feriado'
          },

          {
            title: 'Ponto Facultativo',
            description: '<strong>Ponto Facultativo</strong><br>Ponto Facultativo',
            start: '2020-06-21',
            className: 'facultativo'
          },
          {
            title: 'Nome do Evento',
            description: '<strong>Nome do Evento</strong><br>Horário: 16h | Local: Nome do local',
            start: '2020-06-22T07:30:00',
            end: '2020-06-23T17:30:00',
            className: 'evento-long'
          },
          
          {
            title: 'Nome do Evento',
            description: '<strong>Nome do Evento</strong><br>Horário: 16h | Local: Nome do local',
            start: '2020-06-25',
            className: 'evento'
          },
          {
            title: 'Aula 2',
            description: '<strong>Aula 2</strong><br>Horário: 16h | Local: Nome do local',
            start: '2019-08-19',
            className: 'aula'
          },
          {
            title: 'Aula 3',
            description: '<strong>Aula 3</strong><br>Horário: 16h | Local: Nome do local',
            start: '2019-08-19',
            className: 'aula'
          },
          {
            title: 'Aula 1',
            description: '<strong>Aula 1</strong><br>Horário: 16h | Local: Nome do local',
            start: '2019-08-26',
            className: 'aula'
          },
          {
            title: 'Aula 2',
            description: '<strong>Aula 2</strong><br>Horário: 16h | Local: Nome do local',
            start: '2019-08-26',
            className: 'aula'
          },
          {
            title: 'Evento 2',
            description: '<strong>Evento 2</strong><br>Horário: 16h | Local: Nome do local',
            start: '2019-08-20T07:30:00',
            end: '2019-08-21T17:30:00',
            className: 'evento'
          }
        ]
      });
    
      calendar.render();
    });
  }
}
