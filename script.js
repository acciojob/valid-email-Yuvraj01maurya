function validEmail(str) {
  //your JS code here.
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check if the provided email matches the pattern
  return emailPattern.test(str);
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

