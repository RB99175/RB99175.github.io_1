
//creating an array of objects to get all the parameters like Country, Flag, and Images
var flagArray = [{ "flag": "US", "img": "https://www.countryflags.io/US/flat/64.png", "countryName": "USA" }, { "flag": "IN", "img": "https://www.countryflags.io/IN/flat/64.png", "countryName": "India" },{ "flag": "MX", "img": "https://www.countryflags.io/MX/flat/64.png", "countryName": "Mexico" },{ "flag": "AD", "img": "https://www.countryflags.io/AD/flat/64.png", "countryName": "Andora" },{ "flag": "CN", "img": "https://www.countryflags.io/CN/flat/64.png", "countryName": "China" },{ "flag": "CK", "img": "https://www.countryflags.io/CK/flat/64.png", "countryName": "Cook Islands" },{ "flag": "FR", "img": "https://www.countryflags.io/FR/flat/64.png", "countryName": "France" },{ "flag": "GL", "img": "https://www.countryflags.io/GL/flat/64.png", "countryName": "Greenland" },{ "flag": "BE", "img": "https://www.countryflags.io/BE/flat/64.png", "countryName": "Belgium" },{ "flag": "BT", "img": "https://www.countryflags.io/BT/flat/64.png", "countryName": "Bhutan" },]
//console log to see if all the parameters are coming or not 
console.log(flagArray);
renderFlags();


// using a for loop to get the and populating option values for the drop down menu
function createOptions(options) {
  for (var i = 0; i < flagArray.length; i++) {
    options += '<option value="' + flagArray[i].flag + '">' + flagArray[i].countryName + '</option>'
    console.log(options);
  }
  return options;
}

//Calling a function where option is initalized, I am populating the images,country and flag name
function renderFlags() {
  var options = '';
  //calling the create option functions to generate the Options for a drop down
  options = createOptions(options);
  for (var i = 0; i < flagArray.length; i++) {
    var img = '<img src="' + flagArray[i].img + '" />';
    var id = i+1;
    // console.log(options);
    //creating the grid item using div class & the drop down option including the images.
    var flag_grid_item = '<div class="cell" id = >' + img + '<select class="dropdown" id="flag' + id + '">' + options + '</select>' + '</div>';
    //getting the flag grid element 
    var grids = document.getElementById('flagGrid');
    //setting the inner HTML of the flag grid div with the flag grid item
    grids.innerHTML += flag_grid_item
  }
// console.log(options)
} 

//declaring the points and the comments using the submit function, which calcutes the total score and displays the message 
function onSubmit() {
  var points = 0;
  var submitStr = "";
  
  //comparing the user output value with the object array and if the values are equals, adding 1 point to the total score 
  for(i = 0; i < flagArray.length; i++) {
    var dropDownVal = document.getElementById("flag" + [i+1]).value;
    var flagVal = flagArray[i].flag;
    if(dropDownVal === flagVal) {
      points += 1;
    }
    //console.log(points)
  }
//based on the number of points, I have set the string
if (points >= 7 && points <= 10) {
  submitStr = "Hurrayyyyyyyy you did an awesome job!"
} else if (points >= 4 && points <= 6) {
  submitStr = " Good Job, give it a try again!"
} else if (points >= 0 && points <= 3) {
  submitStr = " Keep practising, you will reach your goal for sure!";
}
  console.log("Points: " + points);
  //alert popsup with previously set string
  window.alert(submitStr);
}