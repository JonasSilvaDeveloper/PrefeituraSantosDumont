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
    
    //AQUI VAI O CODIGO JS 
    console.log('Funcao JavaScript Página Structure');
    
    
  }
};

// Função JavaScript da Página Home
var home = {
  init: function() {

    //AQUI VAI O CODIGO JS 
    console.log('Funcao JavaScript Página Home');
    
  }
};
