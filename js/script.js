$('#toggle').on({
   mouseenter: function() {
      $(this).addClass('active');
      $('#overlay').addClass('open');
   },
   mouseleave: function() {
      $(this).removeClass('active');
      $('#overlay').removeClass('open');
   }
});
