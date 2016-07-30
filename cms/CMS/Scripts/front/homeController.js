frontApp.controller("homeController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.products = [];
    $scope.posts = [];

    //$scope.idCategory = angular.element('#idCategory').val();

    //$http.get('/API/CategoriesAPI/')
    //    .success(function (data) {
    //        var categories = CategoryPost.getallCategory(data);
    //        angular.forEach(categories, function (value, key) {
    //            if (alue.idCategoryParent != null) {
    //                $scope.categories.push(value);
    //            }
    //        });
    //    })
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                $scope.posts.push(value);
            });
        });

    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            $scope.products = data;
        });
}]);