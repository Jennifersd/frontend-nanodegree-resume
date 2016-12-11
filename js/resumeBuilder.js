/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Jennifer Sánchez Dueñas");

var firstName = "Jennifer Sánchez Dueñas";

var awesomeThoughts = "I am Jennifer Sánchez Dueñas and I am AWESOME!";

var funThoughts = 
	awesomeThoughts.replace("AWESOME", "FUN");

//console.log(funThoughts);

// $("#main").append(funThoughts);


// [string].replace([old],[new])
// Remplazar una cadena de texto por otra

// variabledondeestaeldato.replace("vieja cadena", "nueva cadena");

var email = "jennifer@sanchezdueñas.com";

var newEmail = 
	email.replace("sanchezdueñas", "gmail");

/************ EJEMPLO REPLACE **************/

/*

var str = 'Twas the night before Xmas...';
var newstr = 
	str.replace(/xmas/i, 'Christmas');

// Twas the night before Christmas...  console.log(newstr);

*/


/************ EJEMPLO DATOS CV **************/


var name = "Jennifer Sánchez";
var role = "Designer";


/*Insert name*/

var formattedName =
	HTMLheaderName.replace("%data%", name);

/*Insert role*/

var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/************ STRING MAIPULACION QUIZ 1 **************/

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
//console.log(udacityizer(s));




