function checkPasswordStrength() {
  // Prompt the user for the password
  var password = prompt('Enter the password:');

  // Initialize variables
  var strength = 0;
  var remarks = '';
  var lowerCount = upperCount = numCount = wspaceCount = specialCount = 0;

  // Check each character
  for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);
      // Check for lowercase letter
      if (char.match(/[a-z]/)) {
          lowerCount += 1;
      } 
      // Check for uppercase letter
      else if (char.match(/[A-Z]/)) {
          upperCount += 1;
      } 
      // Check for digit
      else if (char.match(/[0-9]/)) {
          numCount += 1;
      } 
      // Check for space
      else if (char === ' ') {
          wspaceCount += 1;
      } 
      // Check for special character
      else {
          specialCount += 1;
      }
  }

  // Calculate the strength score
  strength = lowerCount + upperCount + numCount + wspaceCount + specialCount;

  // Determine remarks
  if (strength === 1) {
      remarks = 'That\'s a very bad password. Change it as soon as possible.';
  } else if (strength <= 3) {
      remarks = 'That\'s a weak password. You should consider using a tougher password.';
  } else if (strength <= 4) {
      remarks = 'Your password is okay, but it can be improved.';
  } else {
      remarks = 'Now that\'s one hell of a strong password!!! Hackers don\'t have a chance guessing that password!';
  }

  // Display the result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '<p>Your password has:-</p>' +
      '<p>' + lowerCount + ' lowercase letters</p>' +
      '<p>' + upperCount + ' uppercase letters</p>' +
      '<p>' + numCount + ' digits</p>' +
      '<p>' + wspaceCount + ' whitespaces</p>' +
      '<p>' + specialCount + ' special characters</p>' +
      '<p>Password Score: ' + strength + '/5</p>' +
      '<p>Remarks: ' + remarks + '</p>';
}
function checkPasswordStrength() {
  // Prompt the user for the password
  var password = prompt('Enter the password:');

  // Initialize variables
  var strength = 0;
  var remarks = '';
  var lowerCount = upperCount = numCount = wspaceCount = specialCount = 0;

  // Check each character
  for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);
      // Check for lowercase letter
      if (char.match(/[a-z]/)) {
          lowerCount += 1;
      } 
      // Check for uppercase letter
      else if (char.match(/[A-Z]/)) {
          upperCount += 1;
      } 
      // Check for digit
      else if (char.match(/[0-9]/)) {
          numCount += 1;
      } 
      // Check for space
      else if (char === ' ') {
          wspaceCount += 1;
      } 
      // Check for special character
      else {
          specialCount += 1;
      }
  }

  // Calculate the strength score
  strength = lowerCount + upperCount + numCount + wspaceCount + specialCount;

  // Determine remarks
  if (strength === 1) {
      remarks = 'That\'s a very bad password. Change it as soon as possible.';
  } else if (strength <= 3) {
      remarks = 'That\'s a weak password. You should consider using a tougher password.';
  } else if (strength <= 4) {
      remarks = 'Your password is okay, but it can be improved.';
  } else {
      remarks = 'Now that\'s one hell of a strong password!!! Hackers don\'t have a chance guessing that password!';
  }

  // Display the result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '<p>Your password has:-</p>' +
      '<p>' + lowerCount + ' lowercase letters</p>' +
      '<p>' + upperCount + ' uppercase letters</p>' +
      '<p>' + numCount + ' digits</p>' +
      '<p>' + wspaceCount + ' whitespaces</p>' +
      '<p>' + specialCount + ' special characters</p>' +
      '<p>Password Score: ' + strength + '/5</p>' +
      '<p>Remarks: ' + remarks + '</p>';
}








