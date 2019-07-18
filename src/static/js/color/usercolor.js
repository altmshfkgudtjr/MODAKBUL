var user_color_output;
function rgb2hex(rgb) {
     if (  rgb.search("rgb") == -1 ) {
          return rgb;
     } else {
          rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
          function hex(x) {
               return ("0" + parseInt(x).toString(16)).slice(-2);
          }
          return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
     }
}

var user_color_selected;
$(document).ready(function(){
    picker = new jQuery.ColorPicker('#colorpicker', {
        color: '#d8d8d8',
        imagepath: '',
        change: function(hex) {
          $('.user_color_selected_change').css('background-color', hex);
          user_color_output = hex;
          user_color_selected = hex;
        }
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

function user_color_select_ok() {
  $('#M_user_color_selector_container').addClass("display_none");
  var send_data = new FormData();
  send_data.append('new_color', user_color_output.toString());
  var token = localStorage.getItem('modakbul_token');
  if (token == null){
    snackbar("올바르지 않은 접근입니다.");
  } else {
    var a_jax = A_JAX(TEST_IP+"user-color", "POST", token, send_data);
    $.when(a_jax).done(function(){
      var json = a_jax.responseJSON;
      if (json['result'] == "success"){
        var color = $('#M_user_img');
        color.css("background-color", user_color_output);
        snackbar("라벨 색 변경 완료!");
      }
      else if (json['result'] == 'bad request'){
        snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
      }
      else{
        snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
      }
    });
  }
}
function user_color_select_cancel() {
  $('#M_user_color_selector_container').addClass("display_none");
}

function user_color_select_label() {
  var user_color = $('#M_user_img').css('background-color');
  var hex_color = rgb2hex(user_color);
  $('.user_color_selected_change').css('background-color', hex_color);
}

function user_color_select_page_open() {
  user_color_select_label();
  $('#M_user_color_selector_container').removeClass('display_none');
  $('#user_color_selector_info_content_name').empty();
  $('#user_color_selector_info_content_name').append($('#M_user_content_name').text());
}