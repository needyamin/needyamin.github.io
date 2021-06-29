function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1995);
    }
/* current date; */    
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + ',' + mm + ',' + dd;    
document.getElementById("needyamin_age").innerHTML = calculate_age(new Date(today)) /*today*/
