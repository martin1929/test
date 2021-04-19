var app=angular.module('app',[]);

app.controller('myInput',function ($scope) {
     $scope.name="name";
    $scope.lastname="lastname";
    $scope.age="age";
    $scope.e=function () {


    }

});
app.controller('mySelect',function ($scope) {
    $scope.options = [
        {value: 'Bond'},
        {value: 'Org'},
        {value: 'Led'},
        {value: 'PVQ'},
        {value: 'Trans'},
        {value: 'Kvadrat'}
    ];

    $scope.doSomething = function (option) {
    $scope.material=option.value;
    $scope.thickness="thickness";
    $scope.lenght="lenght";
    $scope.wide="wide";
    $scope.count="count";
    $scope.all=$scope.material +" " + $scope.thickness +" " + $scope.lenght +" " + $scope.wide + " " + $scope.count ;
    $scope.hi="sdfs";
    console.log($scope.hi);
    };
});