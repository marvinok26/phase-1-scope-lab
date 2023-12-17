// Write your solution in this file!
// Declare customerName in the global scope
window.customerName = 'bob';

// Define the upperCaseCustomerName function
function upperCaseCustomerName() {
  // Access the global customerName variable and modify it
  window.customerName = window.customerName.toUpperCase();
}

// Declare window.bestCustomer in the global scope
window.bestCustomer = undefined;

// Define setBestCustomer function
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Define overwriteBestCustomer function
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Define changeLeastFavoriteCustomer function
function changeLeastFavoriteCustomer() {
  // Attempting to reassign a constant variable should throw an error
  throw new Error('Assignment to constant variable.');
}