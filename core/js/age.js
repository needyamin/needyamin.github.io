/* Month/Day/Year */	
var dob = new Date("11/15/1995");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff); 
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

//print HTML
document.getElementById("needyamin_age").innerHTML = age;
