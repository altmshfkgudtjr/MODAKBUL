$(document).ready(function(){
    picker = new jQuery.ColorPicker('#colorpicker', {
        color: '#d8d8d8',
        imagepath: '',
        change: function(hex) {
            $('body').css('background-color', hex);
            $('#hex_input').val(hex);
        }
    });
    $('#hex_input').keydown(function(e){
        if(e.which == 8
            || (48 <= e.which && e.which <= 57)
            || (97 <= e.which && e.which <= 102)) {
                var hex = $(this).val();
                picker.hex(hex);
            };
    });
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();