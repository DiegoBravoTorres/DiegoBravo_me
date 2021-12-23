
// Change width of nav bar on scroll

window.addEventListener('scroll', (event) => {
    console.log(scrollY);
    if (scrollY > 150) {
        document.getElementById("navbar").style.paddingTop = "12px"
        document.getElementById("navbar").style.paddingBottom = "12px"
      }
    else
        {document.getElementById("navbar").style.paddingTop = "26px"
        document.getElementById("navbar").style.paddingBottom = "26px"   
    }
    if (scrollY > 270) 
    {document.getElementById("navbar").style.boxShadow = "0px 0.1px 8px 1px #f0f0f0";}
    else
        {document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px #f0f0f0";}

        
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (scrollY  > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myUpBtn").style.display = "block";
    } else {
        document.getElementById("myUpBtn").style.display = "none";
    }
  }


  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        console.log("elementvisible");
        entry.target.classList.add('show-animation');
      }
    });
  });
  
  window.onload = function(){
    observer.observe(document.querySelector('#contactMe'));
    observer.observe(document.querySelector('#brands'));
}
  


  

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

  