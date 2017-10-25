/**
 * Created by alfonso on 02/05/17.
 */

angular.module('dialogModalService',['ngAnimate',
'ui.router',
'ui.bootstrap',
'angularCSS',
'ngSanitize',])
.service('dialogModal', [ '$uibModal','$state','$timeout',function($uibModal,$state,$timeout)
{
    var modalInstance ;
    var _redirect={route:null,param:null};
    var _uibModalInstance;
    var element;
    return{

        hide:function()
        {

            $timeout(function(){_uibModalInstance()}, 200);

        },
        setElement:function(_element)
        {
            element=_element;
        },
        showConfirm: function (title,body,text_btn_cancel,text_btn_ok,callback_btn_ok,param)
        {
            modalInstance = $uibModal.open({
                animation: true,
                appendTo:element,
                template: '<div class="modal-header">    <h3 class="modal-title" id="modal-title">{{title}}</h3></div><div class="modal-body" id="modal-body">    {{body}}</div><div class="modal-footer">    <button class="btn btn-default" type="button" ng-click="cancel()">{{text_btn_cancel}}</button>    <button class="btn btn-primary" type="button" ng-click="callback()">{{text_btn_ok}}</button></div>',
                controller: function($scope,$uibModalInstance) {
                    $scope.cancel=function()
                    {
                        $uibModalInstance.dismiss('cancel');
                    }
                    $scope.title=title;
                    $scope.body=body;
                    $scope.text_btn_cancel=text_btn_cancel;
                    $scope.text_btn_ok=text_btn_ok;
                    $scope.callback=function()
                    {
                        $uibModalInstance.dismiss('cancel');
                        callback_btn_ok(param);
                    }

                }
            });
        },
        showAlert: function (title,body,text_btn)
        {
            modalInstance = $uibModal.open({
                animation: true,
                appendTo:element,
                template: '<div class="modal-header">    <h3 class="modal-title" id="modal-title">{{title}}</h3></div><div class="modal-body" id="modal-body">    <p ng-bind-html="body"></p></div><div class="modal-footer">    <button class="btn btn-primary" type="button" ng-click="cancel()">{{text_btn_cancel}}</button></div>',
                controller: function($scope,$uibModalInstance) {
                    $scope.cancel=function()
                    {
                        if(_redirect)
                        {
                            var red=_redirect;
                            _redirect={route:null,param:null};
                            $uibModalInstance.dismiss('cancel');
                            $state.go(red.route,red.param);
                        }
                    }
                    $scope.title=title;
                    $scope.body=body;
                    $scope.text_btn_cancel=text_btn;
                }
            });
        },
        showAlertWithRedirect: function (title,body,text_btn,redirect)
        {
            _redirect=redirect;
            this.showAlert(title,body,text_btn);
        },
        showWaiting: function ()
        {

            modalInstance = $uibModal.open({
                animation: true,
                backdrop:false,
                appendTo:element,
                template: '<div class="modal-header">    <h3 class="modal-title" id="modal-title"></h3></div><div class="modal-body text-center" id="modal-body">   <img width="100px" height="100px" ng-src="loading.gif"></div><div class="modal-footer"></div>',
                controller: function($scope,$uibModalInstance)
                {
                    $scope.cancel=function()
                    {
                        $uibModalInstance.dismiss('cancel');
                    }
                    _uibModalInstance=$scope.cancel;
                }
            });
        },
        redirect: function (red)
        {
            $state.go(red.route,red.param);
        }

    }

}]);
