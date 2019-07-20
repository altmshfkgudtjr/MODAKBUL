function darkSetTheme() {
	$('.M_theme').removeClass("fa-moon");
	$('.M_theme').addClass("fa-sun");
	$('body').addClass('M_dark_theme M_dark_theme_body');
	$('#M_body').addClass('M_dark_theme M_dark_theme_body');
	$('#gn-menu').addClass('M_dark_theme M_boxshadow_dark_shadow');
	$('#M_fire_logo').addClass('M_dark_theme');
	$('#gn-menu-wrapper').addClass('M_boxshadow_dark_sidemenu');
	$('#M_nav_user_login').addClass('M_boxshadow_dark_user M_dark_theme');
	$('#M_nav_user_nologin').addClass('M_boxshadow_dark_user M_dark_theme');
	$('#gn-scroller').addClass('M_dark_theme');
	$('.gn-menu-main ul').css({"background-color": "#202124", "color": "#e2e2e2"});
	$('#M_gn-icon').addClass('M_dark_theme');
	$('.M_info_div').css({"background-color": "#494e52", "color": "#f5f6fa", "border": "0px solid #dddddd"});
	$('.gn-menu-wrapper').css("background-color", "#202124");
	$('meta[name="theme-color"]').attr('content', "#202124");
	$('.input100').css("color", "#f5f6fa");
	$('#M_nav_user_nologin a').css("color", "#e2e2e2");
	$('.M_nav_user_button').css("color", "#e2e2e2");
	$('.M_boxshadow').addClass('M_boxshadow_dark_shadow');
	$('#M_search_bar').addClass('M_dark_theme');
	$('#M_search_input').css("color", "#e2e2e2");
}
function whiteSetTheme() {
	$('.M_theme').removeClass("fa-sun");
	$('.M_theme').addClass("fa-moon");
	$('body').removeClass('M_dark_theme M_dark_theme_body');
	$('#M_body').removeClass('M_dark_theme M_dark_theme_body');
	$('#gn-menu').removeClass('M_dark_theme M_boxshadow_dark_shadow');
	$('#M_fire_logo').removeClass('M_dark_theme');
	$('#gn-menu-wrapper').removeClass('M_boxshadow_dark_sidemenu');
	$('#M_nav_user_login').removeClass('M_boxshadow_dark_user M_dark_theme');
	$('#M_nav_user_nologin').removeClass('M_boxshadow_dark_user M_dark_theme');
	$('#gn-scroller').removeClass('M_dark_theme');
	$('.gn-menu-main ul').css({"background-color": "white", "color": '#5f6f81'});
	$('#M_gn-icon').removeClass('M_dark_theme');
	$('.M_info_div').css({"background-color": "white", "color": "#3E5569", "border": "0.5px solid #dddddd"});
	$('.gn-menu-wrapper').css("background-color", "white");
	$('meta[name="theme-color"]').attr('content', "white");
	$('.input100').css("color", "#555555");
	$('#M_nav_user_nologin a').css("color", "#5f6f81");
	$('.M_nav_user_button').css("color", "#5f6f81");
	$('.M_boxshadow').removeClass('M_boxshadow_dark_shadow');
	$('#M_search_bar').removeClass('M_dark_theme');
	$('#M_search_input').css("color", "#5f6f81");
}
function changeTheme() {
	// now_theme check
	if (localStorage.getItem('modakbul_theme') == null){
		localStorage.setItem('modakbul_theme', "dark");
	} else if (localStorage.getItem('modakbul_theme') == 'white') {
		localStorage.setItem('modakbul_theme', "dark");
	} else {
		localStorage.setItem('modakbul_theme', "white");
	}
	var now_theme = localStorage.getItem('modakbul_theme');
	if (now_theme == 'white'){
		whiteSetTheme();
	}
	else {
		darkSetTheme();
	}
}
function setTheme() {
	if (localStorage.getItem('modakbul_theme') == null){
		localStorage.setItem('modakbul_theme', "white");
	} else if (localStorage.getItem('modakbul_theme') == 'white') {
		whiteSetTheme();
	} else {
		darkSetTheme();
	}
}