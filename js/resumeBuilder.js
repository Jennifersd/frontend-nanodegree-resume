/*
This is empty on purpose! Your code to build the resume will go here.
 */

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


var bio = {
	"name" : "Jennifer",
	"role" : "Designer",
	"contacts" : {
		"mobile" : "699323200",
		"email" : "jennifersduenas@gmail.com",
		"github" : "jennifersd",
		"twitter" : "@jennifersd",
		"location" : "Spain"
	},
	"welcomeMessage" : "Hello!",
	"skills" : [
		"developers" , "designer", "JS"
	],
	"bioPic" : "images/fry.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "Trazos",
			"city" : "Madrid",
			"degree" : "Master",
			"language" : ["English", "Spanish"]
		},
		{
			"name" : "Trazos",
			"city" : "Madrid",
			"degree" : "Master",
			"language" : ["English"]
		}
	],

	"onlineCourses" : [
		{
			"title" : "JavaScript",
			"school" : "Udacity"
		},
		{
			"title" : "JavaScript",
			"school" : "Udacity"
		}
	]
}


var work = {
	"jobs" : [
		{
			"employer" : "ISP",
			"title" : "Designer",
			"dates" : "January - 2000",
			"description" : "Lorem ipsum. lorem lorem"
		},
		{
			"employer" : "ISSW",
			"title" : "Web Designer",
			"dates" : "2000 - Future",
			"description" : "Lorem ipsum. lorem lorem"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "January - 2000",
			"description" : "Lorem ipsum. lorem lorem"
		},
		{
			"title" : "Sample Project 2",
			"dates" : "2000 - Future",
			"description" : "Lorem ipsum. lorem lorem"
		}
	]
}










