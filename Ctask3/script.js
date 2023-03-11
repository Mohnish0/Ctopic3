// Define user accounts
var userAccounts = [
	{username: "Mohnish", password: "Mohnish", userType: "oldSchool"},
	{username: "piyush", password: "piyush", userType: "NewCars"},
	{username: "pairav", password: "pairav", userType: "E-cars"}
];

// Listen for form submission
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent default form submission behavior
	var usernameInput = document.querySelector('#username');
	var passwordInput = document.querySelector('#password');
	// Loop through user accounts to find matching username and password
	for (var i = 0; i < userAccounts.length; i++) {
		if (usernameInput.value === userAccounts[i].username && passwordInput.value === userAccounts[i].password) {
			// Store user type in session storage
			sessionStorage.setItem('userType', userAccounts[i].userType);
			// Redirect to user-specific page
			switch (userAccounts[i].userType) {
				case "oldSchool":
					window.location.href = "mustang.html";
					break;
				case "NewCars":
					window.location.href = "GTR.html";
					break;
				case "E-cars":
					window.location.href = "E-cars.html";
					break;
			}
			return;
		}
	}
	// Show error message if no matching user account found
	alert("Invalid username or password.");
});
