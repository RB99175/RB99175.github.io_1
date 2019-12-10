console.log("working");

var country_list = ["US","CK","IN","MX","GR", "CN", "AD", "FR"];
var country_code = " " ;
var country_flag = " " ; // URL for country flag

var arrayLength = country_list.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(country_list[i]);
}

if (country_code == "US") {
    country_flag =  "https://www.countryflags.io/US/flat/64.png" ; 
  } else if (country_code == "CK") {
    country_flag =  "https://www.countryflags.io/CK/flat/64.png" ; 
  } 
   else if (country_code == "IN") {
    country_flag =  "https://www.countryflags.io/IN/flat/64.png" ; 
  }
  else if (country_code == "MX") {
    country_flag =  "https://www.countryflags.io/MX/flat/64.png" ; 
  }
  else if (country_code == "GR") {
    country_flag =  "https://www.countryflags.io/GR/flat/64.png" ; 
  }
  else if ( country_code == "CN") {
    country_flag =  "https://www.countryflags.io/CN/flat/64.png" ; 
  }
  else if ( country_code == "AD") {
    country_flag =  "https://www.countryflags.io/AD/flat/64.png" ; 
  }
  else if ( country_code == "FR") {
    country_flag =  "https://www.countryflags.io/FR/flat/64.png" ; 
  }