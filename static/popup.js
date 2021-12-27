 $(function() {

    // Initialize the plugin
    $('#JPO').popup();
    $('#PopFord').popup();
    $('#PopUnknown').popup();
    $('#PopFoodIdeas').popup();
    $('#PopLincoln').popup();
    $('#PopMovistar').popup();
    $('#PopGerber').popup();
    $('#PopFordAds').popup();
    $('#thankyou').popup();

    // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
    $.fn.popup.defaults.pagecontainer = '#page'
  });

  //Thank you 
  function off() {
    document.getElementById("overlay-thankyou").style.display = "none";
  }

  function clickMeOff(){
    document.getElementById("click-me").style.display ="none";
    console.log("clicked!");
  }