angular.module('eateryApp').directive('homeDir', function($interval, $document) {
    return {
        templateUrl: './views/homeDir.html',
        restrict: 'E',
        link: function(scope, elems, attrs) {

            var images = ['./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg','./images/11.jpg','./images/12.jpg','./images/1.jpg'];
            var i = 0;
           var background = $document[0].getElementById('background');
           $interval(function() {
            background.style.backgroundImage = "url(" + images[i] + ")";
            i = i + 1;
            if (i == images.length) {
                i =  0;
            }
            }, 3000);
        }
    };
});