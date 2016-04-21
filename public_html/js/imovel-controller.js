// adicionado o AppModule para 'herdar' a lista de imovels
angular.module('ImovelModule', ['AppModule']).

controller('ImovelController', ['$scope', function($scope){
	
	$scope.imovel = {};
	$scope.pesquisa = '';
	$scope.editarRegistro = false;
        $scope.filtroCombo = '';

	$scope.editar = function (obj) {
		$scope.editarRegistro = true;
		$scope.imovel = angular.copy(obj);
	};

	$scope.excluir = function (key) {
		for (var i = 0; i < $scope.listaImovel.length; i++) {
			if($scope.listaImovel[i].id==key) {
				$scope.listaImovel.splice(i, 1);
				$scope.pesquisa = '';
                                console.log("teste");
			}
		}		
	};

	$scope.salvarEdicao = function () {
		if(!$scope.imovel.nome || !$scope.imovel.endereco) {
			alert('Campos obrigatórios não foram preenchidos!');
			return;
		}

		$scope.excluir($scope.imovel.id);

		$scope.imovel.id = $scope.getFakeID();
		$scope.listaImovel.push($scope.imovel);
		$scope.editarRegistro = false;	
	};

	$scope.cancelarEdicao = function () {
		$scope.editarRegistro = false;	
	};

	$scope.salvar = function () {
		if(!$scope.imovel.nome || !$scope.imovel.endereco) {
			alert('Campos obrigatórios não foram preenchidos!');
			return;
		}

		$scope.imovel.id = $scope.getFakeID();
		$scope.listaImovel.push($scope.imovel);
		$scope.redir('/imovel');
	};

}]);