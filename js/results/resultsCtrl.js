angular.module('eateryApp').controller('resultsCtrl', function($scope, mainService, $stateParams, $http) {

    $scope.searchResults = mainService.searchResults;
    console.log($scope.searchResults)
    console.log()


});





// {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png", id: "dfac6385da5cb4b0b52b148f2e7f37de8afb71b8", name: "Levi's Gastrolounge & Bar", opening_hours: {…}, …}
// geometry
// :
// location
// :
// lat
// :
// 36.331296
// lng
// :
// -94.11801299999999
// __proto__
// :
// Object
// viewport
// :
// {northeast: {…}, southwest: {…}}
// __proto__
// :
// Object
// icon
// :
// "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png"
// id
// :
// "dfac6385da5cb4b0b52b148f2e7f37de8afb71b8"
// name
// :
// "Levi's Gastrolounge & Bar"
// opening_hours
// :
// open_now
// :
// true
// weekday_text
// :
// Array(0)
// length
// :
// 0
// __proto__
// :
// Array(0)
// __proto__
// :
// Object
// photos
// :
// Array(1)
// 0
// :
// height
// :
// 2988
// html_attributions
// :
// Array(1)
// 0
// :
// "<a href="https://maps.google.com/maps/contrib/112561789772925655711/photos">john fielding</a>"
// length
// :
// 1
// __proto__
// :
// Array(0)
// photo_reference
// :
// "CmRaAAAAub-iEXMtll3H206MUQm_9VotHIsAXNEzEQeG-EQBbxGpBBci_xW7hX1DYAicVHaF9ASWTrwkL5SSaEFz8J4iR7MuFHhxKSBgjMKJg1RMa4cRYyYhaq_6L6YwF5N6m-DZEhA3vcp-vFV9QRJW1TNymlUsGhQknzoSvHdveiDuBX6wZti4zoNSvQ"
// width
// :
// 5312
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
// place_id
// :
// "ChIJRVzHpwUXyYcRmwxec3u3_l8"
// rating
// :
// 4.4
// reference
// :
// "CmRRAAAAkdcX0JX-1yfg7C99Zh74KHC6G-OxpAm2aN1gUctUbagR68p1a715KaKfZOHEsN9-Bifs6-tX0mMfJVKbW_jVrEFJlRdVCj4Ii59oLZijEelcaTHMs1-E38LLNXJj0YUmEhAC2y_ai0NoE9unRQllzdGqGhR6IQ29_uN2MKZP2bFkia1wY0Dn2A"
// scope
// :
// "GOOGLE"
// types
// :
// Array(6)
// 0
// :
// "bar"
// 1
// :
// "night_club"
// 2
// :
// "restaurant"
// 3
// :
// "food"
// 4
// :
// "point_of_interest"
// 5
// :
// "establishment"
// length
// :
// 6
// __proto__
// :
// Array(0)
// vicinity
// :
// "224 South 2nd Street, Rogers"
// __proto__
// :
// Object