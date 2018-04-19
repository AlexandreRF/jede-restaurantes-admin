// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.promocoesadmindex').hide();
$$('.cadastrar_pratosindex').hide();
$$('.pedidos').hide();
$$('.login-screen-open').show();


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Jede Restaurantes', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SingUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }$$('#btnSalvar').on('click', function () {
        var formData = app.form.convertToData('#form-user-content')
        var nameInput = $$('#name [name="email"]').val();
        var nameInput = $$('#password [name="password"]').val();
        alert(JSON.stringify(formData))
        firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
    });
  app.loginScreen.close('Falha ao cadastrar, verifique o erro no console');
  })
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SingIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  
  firebase
    .auth()
    .signInWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: ' + username + ' vc está logado!');
      if(username == "admin@gmail.com"){
      $$('.logoff').show();
      $$('.cardapioindex').show();
      $$('.promocoesindex').show();
      $$('.pedidos').show();
      $$('.cadastrar_pratosindex').show();
      $$('.promocoesadmindex').show();
      $$('.login-screen-open').hide();
      $$('input#email').val('');
      $$('input#password').val('');
      }
      else{
        $$('.logoff').show();
        $$('.login-screen-open').hide();
        $$('input#email').val('');
        $$('input#password').val('');
        $$('.promocoesadmindex').hide();
      }
     
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/user-not-found'){
        app.dialog.alert('Não há registro de usuario correspondente a este identificador. O usuário pode ter sido excluído');
      }
        app.dialog.alert('Email invalido no seu formato!!!');
    })
  app.loginScreen.close('#my-login-screen');
});

$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#email').val('');
  $$('input#password').val('');
});

$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      $$('input#email').val('');
      $$('input#password').val('');
      $$('.logoff').hide();
      $$('.promocoesadmindex').hide();
      $$('.cadastrar_pratosindex').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
  });


$$('#addButton').on('click', function () {
  var numeroprato = $$('#numeroprato').val();
  var mistura = $$('#mistura').val();
  var acompanhamento = $$('#acompanhamento').val();
  var preco = $$('#preco').val();

  var formData = {Numeroprato: numeroprato, Mistura: mistura, Acompanhamento: acompanhamento, Preco: preco}
  console.log(formData);
  firebase.database().ref().child('Promocoes').push(formData)
  .then( function () {
    app.dialog.alert('Cadastro Efetuado com Sucesso');
    $$('input#numeroprato').val('');
    $$('input#mistura').val('');
    $$('input#acompanhamento').val('');
    $$('input#preco').val('');
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});

