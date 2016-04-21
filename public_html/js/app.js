angular.module('AppModule', ['ngRoute', 'ClienteModule', 'ImovelModule', 'AluguelModule'])

        .controller('AppController', ['$scope', '$location', function ($scope, $location) {

                // listagem no escopo maior da aplicação;
                // disponível a todos os controllers
                $scope.listaCliente = [
                    {
                        id: 100,
                        nome: 'ciro',
                        email: 'ciro.sda@gmail.com',
                        
                    },
                    {
                        id: 200,
                        nome: 'Moacir',
                        email: 'snow@gmail.com',
                        pagamento: 0
                    },
                    {
                        id: 300,
                        nome: 'bruno',
                        email: 'cersei@got.com',
                        
                    }
                ];

                $scope.listaImovel = [
                    {
                        id: 100,
                        nome: 'Edificio Panama',
                        endereco: 'St.nigga 5',
                        diaria: 100
                    },
                    {
                        id: 200,
                        nome: 'Blue Tower',
                        endereco: 'Rua dos mulambos 300',
                        diaria: 50
                    },
                    {
                        id: 300,
                        nome: 'Edificio JP',
                        endereco: 'Na conceição / na vila',
                        diaria: 10
                    }
                ];


                $scope.listaaluguel = [
                    {
                        id: 100,
                        nome: 'Edificio Panama',
                        cliente: 'Ciro',
                        dias: 10,
                        pagamento: 0 
                    },
                    {
                        id: 200,
                        nome: 'Blue Tower',
                        cliente: 'Bruno',
                        dias: 15,
                        pagamento: 0
                    },
                    {
                        id: 300,
                        nome: 'Edificio JP',
                        cliente: 'Moacir',
                        dias: 30,
                        pagamento: 0
                    }
                ];

                // gerar uma chave falsa para o registro
                $scope.getFakeID = function () {
                    return Math.floor((Math.random() * 10000) + 500);
                };

                // função para redir de página disponível a todos os controllers
                $scope.redir = function (onde) {
                    $location.path(onde);
                };

                $scope.pagar = function() {

                    for (var a = 0; a < $scope.listaaluguel.length; a++) {
                        for (var i = 0; i < $scope.listaImovel.length; i++) {
                            
                            if($scope.listaaluguel[a].nome==$scope.listaImovel[i].nome)
                            {
                                $scope.pagamento= $scope.listaaluguel[a].dias * $scope.listaImovel[i].diaria;
                                
                            }            
                        }
                    }

                };



            }])

                .config(['$routeProvider', function ($routeProvider) {
                        $routeProvider.
                                // CLIENTE
                                when('/relatorio', {
                                    templateUrl: 'partials/relatorio.html',
                                    controller: 'ClienteController'
                                }).
                                when('/cliente-lista', {
                                    templateUrl: 'partials/cliente-lista.html',
                                    controller: 'ClienteController'
                                }).
                                when('/cliente-novo', {
                                    templateUrl: 'partials/cliente-novo.html',
                                    controller: 'ClienteController'
                                }).
                                when('/Imovel_Lista', {
                                    templateUrl: 'partials/Imovel_Lista.html',
                                    controller: 'ImovelController'
                                }).
                                when('/Imovel_Novo', {
                                    templateUrl: 'partials/Imovel_Novo.html',
                                    controller: 'ImovelController'
                                }).
                                when('/aluguel', {
                                    templateUrl: 'partials/aluguel.html',
                                    controller: 'aluguelController'
                                }).
                                // PADRÃO
                                when('/', {
                                    templateUrl: 'partials/home.html',
                                    controller: 'AppController'
                                }).
                                when('/404', {
                                    templateUrl: 'partials/404.html'
                                }).
                                  
                                  
                                
                                  
                                
                                
                                // PÁGINA NÃO PREVISTA - 404 
                                otherwise({
                                    redirectTo: '/404'
                                });
                    }])

                ;       