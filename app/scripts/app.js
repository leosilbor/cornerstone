'use strict';

/**
 * @ngdoc overview
 * @name cornerstoneApp
 * @description
 * # cornerstoneApp
 *
 * Main module of the application.
 */
angular
  .module('cornerstoneApp', ['ngRoute'])
  
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
          templateUrl : "views/main.html"
      })
      .when("/entrar", {
          templateUrl : "views/entrar.html"
      })
      .when("/registrar", {
          templateUrl : "views/registrar.html"
      })
      .when("/carrinho", {
          templateUrl : "views/carrinho.html"
      });
});


