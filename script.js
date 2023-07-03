function getFormvalue() {
	 
        // var divElement = document.createElement('div');
        // divElement.setAttribute('id', 'abc');
        // document.body.appendChild(divElement);
	var form = document.getElementById('myForm');
  
  // Get the values of the first and last name input fields
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  
  // Display the values using alert
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);

}
