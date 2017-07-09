var app = angular.module("example",
[
    'dialogModalService'
]);


app.controller('mainCtrl', ['$scope','dialogModal',function($scope,dialogModal)
{

    $scope.callback_btn_ok=function(param) {
      alert(param);
    }

    $scope.showConfirm=function()
    {
      dialogModal.showConfirm("title","body","CANCEL","OK",$scope.callback_btn_ok,{param:'yes'});
    }

    $scope.showAlert=function()
    {
      dialogModal.showAlert("title","body","OK");
    }

    $scope.showWaiting=function()
    {
      dialogModal.showWaiting();
    }

    $scope.showAlertWithRedirect=function()
    {
      dialogModal.showAlertWithRedirect("title","body","text_btn",{route:'state', param:null})
    }

}]);
