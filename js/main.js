var topic = document.querySelector('h2');
topic.textContent = "Your Daily Horoscope!";


//ARRAY OF DATA TO STORE ZODIAC'S DAY

var zodiac = [
 {
    sign: "aries",
   day: "well spent by meeting with special people today.",
   image: "img/aries.png"
 },
 {
 	sign: "aquarius",
 	day: "full of adventures.",
 	image: "img/aquarius.png"
 },
 {
 	sign: "cancer",
 	day: "kind of rough but still there is hope",
 	image: "img/cancer.png"
 },
 {
 	sign: "leo",
 	day: "full of positive vibes.",
 	image: "img/leo.png"
 },
 {
 	sign: "capricorn",
 	day: " spent hovering around mindgames and full of trouble.",
 	image: "img/capricon.png"
 },
 {
 	sign: "pisces",
 	day: "full of courage and you will able to handle anything coming on the way",
 	image: "img/pisces.png"
 },
 {
   sign: "libra",
   day: "full of motion and fluctuation",	
   image: "img/libra.png"
 },
 {
 	sign: "sagittarius", 
 	day: "Experimental and you can be a part of something new.",
 	image: "img/sagittarius.png"
 },
 {
   sign: "taurus",
   day: "very practical.",
   image: "img/taurus.png"	
 },
 {
 	sign: "virgo",
 	day: "secure and self-willed with good fortune.",
 	image: "img/virgo.png"
 },
 {
 	sign: "gemini",
 	day: "full of quality time with relatives.",
 	image: "img/gemini.png"
 },
 {
 	sign: "scorpio",
 	day: "troublesome, your speech is going to be poisonous as a scorpion's bite",
 	image: "img/scorpio.png"
 } ]


function horoscope() {
	var userInput = document.getElementById("userdata").value;
	console.log(userInput);
	console.log("users value is: " + userInput)
	for(var i = 0; i < zodiac.length; i = i + 1) {
console.log("users value lowercase is: " + userInput.toLowerCase());
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);
	if(userdata.value.toLowerCase() == zodiac[i].sign) {
			// to confirm the if statement ran
			console.log("if statement ran");

			//to check some of the values in the console before updating HTML
			console.log("users typed in: " + userInput);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].day);

			// to get the element with id="sign" and change the text to the user input
			document.getElementById("sign").textContent = userInput;
			// get element with id="image" and change source attribute to current zodiac image path
			document.getElementById("image").src = zodiac[i].image;
			// get element with id="horoscope and change the content to this concatenated string
			document.getElementById("day").textContent = "Your day will be " + zodiac[i].day;

			// stop the function because we found a match and added the data to the screen!!!
			return(horoscope);
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("sign").textContent = "Not one of the zodiac. Try again!";
		document.getElementById("day").textContent = "";
		document.getElementById("image").src = "";
	};
	userInput.reset()
};
