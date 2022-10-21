     // Get the button
     let mybutton = document.getElementById("myBtn");
            
     // When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function() {scrollFunction()};
     mybutton.style.display = "block";
     
     
     // When the user clicks on the button, scroll to the top of the document
     function topFunction() {
       location.replace("index.html")
     }