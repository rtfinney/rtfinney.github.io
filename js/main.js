//this is a Javascript comment
/*this is also a Javascript comment*/
//i.e. do when the page has loaded
//JQuery DOM ready function
function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);


	if (firstName.toLowerCase().trim() == 'general' && lastName.toLowerCase().trim() != 'assembly') {
	    console.log('Yo General ' + lastName);
	} else {
		console.log('Try again!!');
	}

	//if first name is General and last name not Assembly then greet General. 


	if (age >=18) {
		console.log('User in an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var faveColour = prompt('What is your favourite colour?');
	//lowercase with no spaces either side
	faveColour = faveColour.toLowerCase().trim();
	if (faveColour == 'red' ||
		faveColour == 'green' || 
		faveColour == 'blue' ||
		faveColour == 'yellow') {
	//use JQuery to turn h1 element the colour
		$('h1').css('color',faveColour);
	} 	

}

$(function(){
//when the user clicks the image, interrogate them
	$('img').on('click', askQuestions);
//when the user clicks an h3..
//finds all the h3s on the page
	$('h3').on('click', function() {
	
	//Toggle the next element
	$(this).next().slideToggle(5000);
	});

});
