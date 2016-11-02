function StaffController() {
  var vm = this;

  vm.name = 'Tim Cook';
  vm.email = "tim@apple.com";
  vm.phone = '0123456710';
}

angular
    .module('app')
    .controller('StaffController', StaffController);