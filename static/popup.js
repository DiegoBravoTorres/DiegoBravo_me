 $(document).ready(function() {

    // Initialize the plugin
    $('#JPO').popup();
    $('#PopFord').popup();
    $('#PopUnknown').popup();
    $('#PopFoodIdeas').popup();
    $('#PopLincoln').popup();
    $('#PopMovistar').popup();
    $('#thankyou').popup();

    // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
    $.fn.popup.defaults.pagecontainer = '#page'
  });