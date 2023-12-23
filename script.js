$(document).ready(function() {
        // Initialize AOS
        AOS.init({
            duration: 1000,  // Set the duration in milliseconds
            offset: 100,     // Adjust the offset as needed
            easing: 'ease',
        });

        // Initialize Slick
        $('.carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            // Add other Slick options as needed
        });
    });

function handleCalendarButtonClick() {
    // Open a new tab and load calender.html
  var newTab = window.open('dyn_calender/calendar.html', '_blank');
  if (newTab) {
    newTab.focus();
  } else {
    alert("Popup blocker may be preventing the new tab from opening.");
  }
}
    
    // Function to toggle the visibility of the dropdown content
function toggleDropdown() {
    var dropdown = document.getElementById("calendarDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}
    
// Attach the toggleDropdown function to the click event of the dropdown button
document.getElementById("calendarDropdownButton").addEventListener("click", toggleDropdown);
    