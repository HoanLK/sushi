frontApp.controller("menuCategoryProductController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categories = [];
    $scope.posts = [];



    $http.get('/CategoryProducts/GetCategoryProduct/')
        .success(function (categoryProducts) {
            $scope.categoryProducts = categoryProducts;
        });

}]);