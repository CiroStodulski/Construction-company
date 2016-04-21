angular.module('AluguelModule', ['AppModule']).
        controller('aluguelController', ['$scope', function ($scope) {

                $scope.aluguel = {};
                
                $scope.pesquisa = '';
                $scope.editarRegistro = false;
                $scope.filtroCombo = '';
                $scope.pagamento = 0;
               

                $scope.editar = function (obj) {
                    $scope.editarRegistro = true;
                    $scope.aluguel = angular.copy(obj);
                };


                $scope.excluir = function (key) {
                    for (var i = 0; i < $scope.listaaluguel.length; i++) {
                        if ($scope.listaaluguel[i].id == key) {
                            $scope.listaaluguel.splice(i, 1);
                            $scope.pesquisa = '';
                        }
                    }
                };


                $scope.salvarEdicao = function () {
                    if (!$scope.aluguel.nome || !$scope.aluguel.cliente || !$scope.aluguel.dias) {
                        alert('Campos obrigatórios não foram preenchidos!');
                        return;
                    }

                    $scope.excluir($scope.aluguel.id);

                    $scope.aluguel.id = $scope.getFakeID();
                    $scope.listaaluguel.push($scope.aluguel);
                    $scope.editarRegistro = false;
                };

                $scope.cancelarEdicao = function () {
                    $scope.editarRegistro = false;
                };

                $scope.salvar = function () {
                    if (!$scope.aluguel.nome || !$scope.aluguel.cliente || !$scope.aluguel.dias) {
                        alert('Campos obrigatórios não foram preenchidos!');
                        return;
                    }
                    $scope.aluguel.id = $scope.getFakeID();
                    $scope.listaaluguel.push($scope.aluguel);
                    alert(" Alocado cliente: "+$scope.aluguel.cliente+" \nPara o imovel: "+$scope.aluguel.nome);
                    $scope.redir('/');
                   
                };

            }]);