shipments = [{lastName:'Alderton', firstName:'Anne', parcelCount:'1', shipmentId:'56372956', orderNumber:'303-0000000-0000001'},
            {lastName:'Alderton', firstName:'Anne', parcelCount:'1', shipmentId:'56372981', orderNumber:'303-0000000-0000023'},
            {lastName:'Allen', firstName:'Matthew', parcelCount:'1', shipmentId:'1234567', orderNumber:'301-0000000-0000001'},
            {lastName:'Allen', firstName:'Matthew', parcelCount:'1', shipmentId:'50234567', orderNumber:'303-0000000-0000111'},
            {lastName:'Aneja', firstName:'Praveer', parcelCount:'1', shipmentId:'8765432', orderNumber:'302-0000000-0000012'},            
            {lastName:'Ashton', firstName:'Hayley', parcelCount:'1', shipmentId:'2345678', orderNumber:'301-0000000-0000002'},
            {lastName:'Chowdhury', firstName:'Daniel', parcelCount:'1', shipmentId:'3456789', orderNumber:'301-0000000-0000003'},            
            {lastName:'Chowdhury', firstName:'Daniel', parcelCount:'1', shipmentId:'4567890', orderNumber:'301-0000000-0000004'},
            {lastName:'Doe', firstName:'John', parcelCount:'1', shipmentId:'0987654', orderNumber:'302-0000000-0000014'},
            {lastName:'Gillard', firstName:'David', parcelCount:'1', shipmentId:'50987654', orderNumber:'303-0000000-0000014'},
            {lastName:'Gillard', firstName:'David', parcelCount:'1', shipmentId:'50987114', orderNumber:'303-0000000-0000051'},
            {lastName:'Gulati', firstName:'Samaksh', parcelCount:'1', shipmentId:'5017114', orderNumber:'304-0000000-0000051'},
            {lastName:'Gupta', firstName:'Sumit', parcelCount:'1', shipmentId:'5678901', orderNumber:'301-0000000-0000005'},            
            {lastName:'Khanna', firstName:'Abhunav', parcelCount:'1', shipmentId:'6789012', orderNumber:'301-0000000-0000006'},
            {lastName:'Kohli', firstName:'Prakash', parcelCount:'1', shipmentId:'8901234', orderNumber:'302-0000000-0000008'},
            {lastName:'Panwar', firstName:'Mayank', parcelCount:'1', shipmentId:'9012345', orderNumber:'302-0000000-0000009'},
            {lastName:'Pandy', firstName:'Sachin', parcelCount:'1', shipmentId:'0123456', orderNumber:'302-0000000-0000010'},
            {lastName:'Phillips', firstName:'Neil', parcelCount:'1', shipmentId:'01234567', orderNumber:'303-0000000-0000010'},                                                            
            {lastName:'Rawat', firstName:'Rakesh', parcelCount:'1', shipmentId:'7890123', orderNumber:'302-0000000-0000007'},
            {lastName:'Rawat', firstName:'Rakesh', parcelCount:'1', shipmentId:'9876543', orderNumber:'302-0000000-0000013'},
            {lastName:'Richey', firstName:'Pauline', parcelCount:'1', shipmentId:'509876543', orderNumber:'303-0000000-0000113'},            
            {lastName:'Salisbury', firstName:'Arfon', parcelCount:'1', shipmentId:'7654321', orderNumber:'302-0000000-0000011'},
            {lastName:'Sharma', firstName:'Chhavi', parcelCount:'1', shipmentId:'52654321', orderNumber:'303-0000000-0000351'},
            {lastName:'Singh', firstName:'Rishi', parcelCount:'1', shipmentId:'517654321', orderNumber:'303-0000000-0000211'},
            {lastName:'Smith', firstName:'John', parcelCount:'1', shipmentId:'246810', orderNumber:'302-0000000-0000015'},
            {lastName:'Smith', firstName:'John', parcelCount:'1', shipmentId:'246814', orderNumber:'302-0000000-0000016'},
            {lastName:'Stadden', firstName:'Dominic', parcelCount:'1', shipmentId:'53456814', orderNumber:'303-0000000-0000027'},
            {lastName:'Stadden', firstName:'Dominic', parcelCount:'1', shipmentId:'53400814', orderNumber:'303-0000000-0000041'},
            {lastName:'Stiles', firstName:'Stuart', parcelCount:'1', shipmentId:'1078476', orderNumber:'303-0000000-0000016'},
            {lastName:'Stiles', firstName:'Stuart', parcelCount:'1', shipmentId:'50788886', orderNumber:'303-0000000-0000948'},
            {lastName:'Zuurbier', firstName:'Claire', parcelCount:'1', shipmentId:'5078476', orderNumber:'303-0000000-0000888'}]
                       


// Angular module

var bookingIn = angular.module('bookingIn', ['angular.filter'])
  .controller('searchTagsController', ['$scope', 'filterFilter', function($scope, filter) {
    // Model or controller for adding searchterms 
    $scope.addSearchTerm = function() {
      $('.shipment-table').show();
      $scope.searchTerms.push($scope.newSearchTerm);
    	$scope.newSearchTerm = "";
    };
    //Removing a search term which removes tag and the filter
    $scope.delete = function(searchTerm) {
      var index = $scope.searchTerms.indexOf(searchTerm)
      $scope.searchTerms.splice(index, 1)
    }
    $scope.shipments = shipments;
    //Empty array before search terms are added
    $scope.searchTerms = [];
    //set the filter so it can be passed into the searchTermFilter by the vie
    $scope.baseFilter = filter;
    
    $scope.showAll = function() {
      $scope.searchTerms = [];
    }
  }])
  
  //This filters it based on the search terms, if theres search terms it loops through and shows them all, if there are no search terms it shows all
  .filter('searchTermFilter', function() {
    return function(input, searchTerms, $filter) {
      
      if (searchTerms.length > 0) {
        results = []
        searchTerms.forEach(function(searchTerm){
          $filter(shipments, searchTerm).forEach(function(result){
            results.push(result);
          })
        })
        
        return results
      } else {
        return shipments
      }
    }
  })

// Fixing the element to the top of the screen when you scroll past
var setUpAffix = function(){
  $('#pinned-wrapper').height(
    $('#pinned-elements').height()
  );

  $('#pinned-elements').affix({
    offset: {
      top: $('#pinned-elements').offset().top
    }
  });
}
 

$(document).ready(function() {
// Hide all the content apart from parcel scanning query
  // $('.no-result').hide();
  // $('.main-content').hide();
  //
  // $('.yes-scan').click(function() {
  //   $('.main-content').show();
    $('.parcel-scanning').hide();
    setUpAffix();
  // })
  //
  // $('.no-scan').click(function() {
  //   $('.no-result').show();
  // })


  //hide the tables by default
  $('.shipment-hide').hide();
  $('.shipment-table').hide();
  $('.consignment-table').hide();
  
  //show shipment on link click
  $('.shipment-show').click(function() {
    $('.shipment-table').show();
    $('.consignment-show').show();
  });
  //show and hide consignment on button clicks
  $('.consignment-show').click(function() {
    $('.consignment-table').show();
    $('.consignment-show').hide();
  });
  $('.consignment-hide').click(function() {
    $('.consignment-table').hide();
    $('.consignment-show').show();
  })

// Because the elements are not all on the page at the start, we need to re-run this after the page changes so that we can count the checked boxes
  $('body').change(function() {
    var delayedCount = $('.delayed:checked').length
    $('.delayed-count').text(delayedCount)
    var missingCount = $('.missing:checked').length
    $('.missing-count').text(missingCount)
    var delivered = 31 - (delayedCount + missingCount)
    $('.delivered-count').text(delivered)
  })

});