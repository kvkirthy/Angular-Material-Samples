
// Angular Material uses ngMessages for showing form validation failures. Make sure to add this module as a dependency
angular.module('sampleApp', ['ngMaterial', 'ngMessages'])
.controller('selectSampleController', function($scope, $timeout){
    
    $scope.superHeroes = [
                {id:1, name:"Iron Man", category: "Marvel"},
                {id:2, name:"Mowgli", category: "Disney"},
                {id:3, name: "Spiderman", category: "Marvel"},
                {id:4, name:"Superman", category: "DC Comics"},
                {id:5, name:"Chota Bheem", category: "Indian"}
            ];      
 
    // To an attribute md-on-open following is passed as a callback function.
    // It is called as user clicks to open the select dropdown
    // Timeout is used to mimic deferred loading, like an API call.
    $scope.loadSuperHeroes = function(){
        $timeout(function(){
            $scope.superHeroesDeferred = [
                {id:1, name:"Iron Man", category: "Marvel"},
                {id:2, name:"Mowgli", category: "Disney"},
                {id:3, name: "Spiderman", category: "Marvel"},
                {id:4, name:"Superman", category: "DC Comics"},
                {id:5, name:"Chota Bheem", category: "Indian"}
            ];       
        }, 2000);  
    };
    
    $scope.tagsOnMowgli = ["Jungle Book", "Disney"];
    $scope.contactChipSuperHeroes = [];
    $scope.filterSuperheroesForContactChip = function(filterString){
        var superheroes = [
                {id:1, name:"Iron Man", category: "Marvel"},
                {id:2, name:"Mowgli", category: "Disney"},
                {id:3, name: "Spiderman", category: "Marvel"},
                {id:4, name:"Superman", category: "DC Comics"},
                {id:5, name:"Chota Bheem", category: "Indian"}
            ];       
            
        if(filterString){
           var result = superheroes.filter(function(item){
                return item.name.toLowerCase().indexOf(filterString.toLowerCase()) >= 0;
            });
            console.log(result);
            return result;
            
        }else{
            return superheroes;
        }
            
    };
    $scope.filterSuperheroes = function(filterString){
        var superheroes = [
                "Iron Man", 
                "Mowgli", 
                "Spiderman", 
                "Superman",
                "Chota Bheem"
            ];     
            
        if(filterString){
            return superheroes.filter(function(item){
                return item.toLowerCase().indexOf(filterString.toLowerCase()) >= 0;
            });
            
        }else{
            return superheroes;
        }
            
    };
    
    $scope.radioSuperheroes = [
        {id:1, name:"Iron Man", category: "Marvel"},
        {id:2, name:"Mowgli", category: "Disney"},
        {id:3, name: "Spiderman", category: "Marvel"},
        {id:4, name:"Superman", category: "DC Comics"},
        {id:5, name:"Chota Bheem", category: "Indian"}
    ]; 
    
    $scope.checkSuperHeroes = [
        {id:1, name:"Iron Man", category: "Marvel"},
        {id:2, name:"Mowgli", category: "Disney"},
        {id:3, name: "Spiderman", category: "Marvel"},
        {id:4, name:"Superman", category: "DC Comics"},
        {id:5, name:"Chota Bheem", category: "Indian"}
    ]; 
    
    $scope.selectedSuperheroesCB = [];
    
    $scope.runWhenSelected = function(item){
        if(item.isChecked){
           // Add selected item to scope object
           $scope.selectedSuperheroesCB.push(item);
        }else{
            // Remove an unselected item from the scope object
            $scope.selectedSuperheroesCB = $scope.selectedSuperheroesCB.filter(function(arrayItem){ 
                return arrayItem.name !== item.name; 
            });
        }
    }
    
    // Called on selecting a dropdown option. A callback to md-on-close is provided md-select directive
    $scope.superHeroSelectionComplete = function(){
        if($scope.selectedSuperHero){
            // ngModel on the element/directive is selectedSuperHero
            console.log($scope.selectedSuperHero.name);        
        }     
    };
    
    // As chip/tag is keyed in, logic to format the chip.
    $scope.transformChip = function(chip){
      if(chip){
          for(var state in $scope.uSStateList){
              if($scope.uSStateList[state].toLowerCase() === chip.toLowerCase()
                    || state.toLowerCase() === chip.toLowerCase()){
                  return state;
              }
          }
          
          return null;
      }  
    };
    
    // Selected states by the transform chip.
    $scope.selectedStateList = [];
    
    // All US states list. Used with transform chip sample.
    $scope.uSStateList = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}; 

    
})

.controller("dateController", function($scope){
    $scope.minDate = new Date('01/01/2016');
    $scope.maxDate = new Date();
    $scope.validateDate = function(selectedDate){
        if(selectedDate.getDay() == 0 || selectedDate.getDay() == 3){
            return false;
        }else{
            return true;
        }
    }
    
})

;