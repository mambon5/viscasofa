currentTab = 0; // Current tab is set to be the first tab (0)
//showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Envia";
  } else {
    document.getElementById("nextBtn").innerHTML = "Següent <i class='fa fa-arrow-right'></i>";
  }
  //... and run a function that will display the correct step indicator:

  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
fsubmited = false;
function validateForm() {
  // This function deals with validation of the form fields
  if(fsubmited) return false; //to avoid multiple form submissions
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" && y[i].parentElement.style.display != "none"  && y[i].required) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  
  y = x[currentTab].getElementsByTagName("select");
  // A loop that checks every select field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" && y[i].parentElement.style.display != "none" && y[i].required) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
//return true;
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var x = document.getElementsByClassName("step");
  
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  
   x[n].className += " active";
}

function deleteinvalid(element) {
    element.classList.remove("invalid");
}

function emptyform(formId) {
  document.getElementById(formId).reset(); 
  showTab(0); // Display the current tab$
}
  

function set_ticket_type(id_tipus, valor, id_form) {
  document.getElementById(id_tipus).value = valor;
}