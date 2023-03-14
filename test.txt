const correctPassword = "mysecretpassword223@"; // define the correct password
const enteredPassword = prompt("Enter the password:"); // prompt the user for a password

if (enteredPassword === correctPassword) {
  console.log("Access granted!"); // if the passwords match, print "Access granted!"
} else {
  console.log("Access denied!"); // if the passwords don't match, print "Access denied!"
}
