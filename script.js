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