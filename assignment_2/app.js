// app.js
var app = angular.module('personalApp', []);

app.controller('MainController', function() {
    var vm = this;

    // Function to manage the current page/view
    vm.currentPage = 'about.html';

    vm.setPage = function(page) {
        vm.currentPage = page + '.html';
    };

    vm.getPage = function() {
        return vm.currentPage;
    };
});
