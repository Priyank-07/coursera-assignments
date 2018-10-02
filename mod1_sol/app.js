(function (){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope,$injector){

      $scope.name="";
      $scope.result;
      $scope.calculate=function(){
        if($scope.name!=''){
      var result1=  calculate2($scope.name);
        $scope.result=result1;
      }
      else {
        $scope.result="Please enter data first";
      }
      };
  function calculate2(string)
    {
      var re = /\s*,\s*/;
      var nameList = string.split(re);
      if(nameList.length<4 )
      {
        var t1="Enjoy!";
      }
      else  {
          var t1="Too much"
        }

      return t1;
    }

  });
})();
