frontApp.controller("allCategoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categories = [];
    $scope.products = [];
    $scope.product = {};

    $scope.idCategory = angular.element('#idCategory').val();

    //$http.get('/API/CategoryProductsAPI/')
    //    .success(function (data) {
    //        var categories = CategoryProduct.getallCategory(data);
    //        angular.forEach(categories, function (value, key) {
    //            if (value.idCategoryParent == '1') {
    //                $scope.categories.push(value);
    //            }
    //        });
    //    })

    $http.get('/products/GetByCategory?idCategory=' + $scope.idCategory)
        .success(function (products) {
            $scope.products = products;
        });
}]);