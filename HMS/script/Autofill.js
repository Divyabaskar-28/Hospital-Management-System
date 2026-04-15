
angular.module('app', ['ngSanitize', 'MassAutoComplete'])
.controller('mainCtrl', function ($scope, $timeout) {
  
    $scope.changeEvent = function ()
    {
        alert("dsfdsfds");
    }

    $scope.dirty = {};
    $scope.dirty.states = Array.apply(null, Array(100));
    var url = '../Incident/BindallIncidentDdl';
    var data1 = {};
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            data = JSON.parse(data);
            arr = [];
            $scope.ModCountry = data.Table3;
            //for (var prop in data) {
            //    arr.push(data.Table3[prop].CityName);
            //}
            //$scope.ModCountry = arr;
        }

        
    });

   


    var url = '../Lead/Taskautofill';
    var data1 = { "sstring": '' };
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            arr = [];
            for (var prop in data) {
                arr.push(data[prop].TASKNAME);
            }
            $scope.ModTask = arr;
        }
    });

    var states = $scope.ModCountry;
    var tasks = $scope.ModTask;

    function suggest_state(term) {
        var q = term.toLowerCase().trim(),
            results = [];
        for (var i = 0; i < states.length && results.length < 10; i++) {
            var state = states[i];
            if (state.CityName.toLowerCase().indexOf(q) === 0)
                results.push({ label: state.CityName, value: state.CityName });
        }
        return results;
    }
  
    function suggest_task(term) {
        var q = term.toLowerCase().trim(),
            results = [];
        for (var i = 0; i < tasks.length && results.length < 10; i++) {
            var task = tasks[i];
            if (task.toLowerCase().indexOf(q) === 0)
                results.push({ label: task, value: task });
        }
        return results;
    }
    $scope.ac_options = {
        suggest: suggest_state
    }
   

    $scope.fillTask = {
        suggest: suggest_task
    }
});
