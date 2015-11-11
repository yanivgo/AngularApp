app.controller('TestAppController', function (MyService, $scope) {

	//tabs start
	$scope.tabs = [{
		title: 'Pie Chart',
		url: 'pie.tpl.html'
	}, {
		title: 'table',
		url: 'table.tpl.html'
	}];

	$scope.currentTab = 'pie.tpl.html';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function (tabUrl) {
		return tabUrl == $scope.currentTab;
	}
	//tabs end

	//pie start
	MyService.getPie().then(function (d) {
		$scope.labels = [];
		$scope.data = [];

		angular.forEach(d.data.geo, function (value, key) {
			$scope.labels.push(value.country);
			$scope.data.push(value.count);
		});
	});
	//pie end

	//table start
	MyService.getTable().then(function (d) {
		$scope.tableData = d.data;
	});
	//table end
});
