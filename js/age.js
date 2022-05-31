function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

//console.log(calculate_age(new Date(2022, 05, 31)));
//console.log(calculate_age(new Date(1995, 11, 15)));

document.getElementById("needyamin_age").innerHTML = calculate_age(new Date(1995, 11, 15));
