frontApp.controller("showProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.product = {};
    $scope.relateProducts = [];
    $scope.idCategoryProduct;
    $scope.idProduct = angular.element('#idProduct').val();

    $http.get('/API/ProductsAPI/' + $scope.idProduct)
        .success(function (data) {
            $scope.product = data;
            $scope.idCategoryProduct = data.idCategoryProduct;

            $http.get('/Products/RelateProduct?idProduct=' + $scope.product.idProduct + '&numLimit=4')
                .success(function (products) {
                    $scope.relateProducts = products;

                });
        });
}]);