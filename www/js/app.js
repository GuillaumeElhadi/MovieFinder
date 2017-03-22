var app = angular.module('starter', ['ionic'])
// je definie une varible app pour utiliser ionic

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// j'utilise la variable app pour créer le routing
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('homepage',{
    url:'/homepage',
    templateUrl:'views/index.html'
  });

  $stateProvider.state('search',{
    url:'/search',
    templateUrl:'views/search.html',

  });


  $stateProvider.state('about',{
    url:'/about',
    templateUrl:'views/about.html',
    // controller:'AboutController'
  });
  // Route par default
  $urlRouterProvider.otherwise('/homepage');

});

app.controller('SearchController',function($scope, $ionicLoading){
  $ionicLoading.show({
    template:'Chargement..',
    duration: 1000
  });

  var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1/comments',
  method: 'GET'
}).then(function demo(response) {
  console.log(response);
  $scope.datas = response;
},function error(response){
  console.log("erreur");
});

});


// app.controller('AboutController', function($scope, $ionicPopup){


//  $ionicPopup.prompt({
//    title: 'Password',
//    template: 'Enter your secret password',
//    inputType: 'password',
//    inputPlaceholder: 'Your password'
//  }).then(function(res) {
//    console.log('Your password is', res);
//  });
// });


