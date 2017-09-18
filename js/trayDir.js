angular.module('eatsApp').directive('trayyy', function ($document){
    return {
        templateUrl: '/views/tray.html',
        restrict: 'EA',
        link: function(scope, elements, attributes) {


            scope.openNav = function(){
                document.getElementById('about-blurb').style.display='block';
                document.getElementById('tray-bg').style.display='flex';
                document.getElementById('tray').style.width ='450px';
                document.getElementById('tray-out').style.opacity = '0';
                document.getElementById('tray-in').style.opacity = '1';
                document.getElementById('tray-in').style.marginRight = '450px';
            };

            scope.closeNav = function(){               
                document.getElementById('about-blurb').style.opacity ='0';
                document.getElementById('blurb-bg').style.height ='0';
                document.getElementById('blurb-bg').style.padding ='0';
                document.getElementById('tray-in').style.opacity ='0';
                document.getElementById('tray-in').style.marginRight ='0';
                document.getElementById('tray').style.width ='0';
                document.getElementById('about-blurb').style.display = 'none';

                setTimeout(function(){
                    document.getElementById('tray-bg').style.display='none';   
                    document.getElementById('about-blurb').style.display='none';                  
                }, 500)

                setTimeout(function(){
                    document.getElementById('tray-out').style.opacity ='1';
                },300)
                setTimeout(function(){
                    document.getElementById('about-blurb').style.transitionDuration ='.3s';
                    document.getElementById('about-blurb').style.display ='block';
                },200);
            };

            scope.showAbout = function() {
                document.getElementById('blurb-bg').style.height ='auto';
                document.getElementById('blurb-bg').style.padding ='15px 40px';
                
                
                
                setTimeout(function () {
                document.getElementById('about-blurb').style.opacity ='1';
                }, 200)
                
            }

        }
    };
});