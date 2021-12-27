
// Change width of nav bar on scroll

window.addEventListener('scroll', (event) => {
   
    if (scrollY > 150) {
        document.getElementById("navbar").style.paddingTop = "10px"
        document.getElementById("navbar").style.paddingBottom = "10px"
      }
    else
        {document.getElementById("navbar").style.paddingTop = "16px"
        document.getElementById("navbar").style.paddingBottom = "16px"   
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


  // Entry animations

  const observerFade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });


  const observerSwing = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('entry-swing');
      }
    });
  });
  
  window.onload = function(){
    observerFade.observe(document.querySelector('#git'));
    observerFade.observe(document.querySelector('.me-intro'));
    observerFade.observe(document.querySelector('#contactMe'));
    observerFade.observe(document.querySelector('.PopFord_open'));
    observerFade.observe(document.querySelector('.PopUnknown_open'));
    observerFade.observe(document.querySelector('.PopFoodIdeas_open'));
    observerFade.observe(document.querySelector('.PopLincoln_open'));
    observerFade.observe(document.querySelector('.PopMovistar_open'));
    observerFade.observe(document.querySelector('.PopGerber_open'));
    observerFade.observe(document.querySelector('.PopFordAds_open'));
    observerFade.observe(document.querySelector('.PopFordAds_open'));
    observerSwing.observe(document.querySelector('#contactMe #name'));
    observerSwing.observe(document.querySelector('#contactMe #email'));
    observerSwing.observe(document.querySelector('#contactMe #message'));
}
  
  

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

  