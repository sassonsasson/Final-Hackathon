var app = angular.module('city', []);

// app.directive('formAutofillFix', function() {
//   return function(scope, elem, attrs) {
//     // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
//     elem.prop('method', 'POST');

//     // Fix autofill issues where Angular doesn't know about autofilled inputs
//     if(attrs.ngSubmit) {
//       setTimeout(function() {
//         elem.unbind('submit').submit(function(e) {
//           e.preventDefault();
//           elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
//           scope.$apply(attrs.ngSubmit);
//         });
//       }, 0);
//     }
//   };
// });


app.directive('autofill', ['$timeout', function ($timeout) {
    return {
        scope: true,
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            $timeout(function(){
                $(elem).trigger('input');
                // elem.trigger('input'); try this if above don't work
            }, 200)
        }
    }
}]);