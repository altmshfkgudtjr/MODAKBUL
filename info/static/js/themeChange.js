function changeTheme() {
	var now_thema = $('#M_theme').attr('class');
	// now thema : white
	if (now_thema.indexOf("moon") != -1 ){
		$('#M_theme').removeClass("fa-moon");
		$('#M_theme').addClass("fa-sun");
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
		$('.M_info_div').css({"background-color": "#494e52", "color": "#f5f6fa"});
		$('.gn-menu-wrapper').css("background-color", "#202124");
		$('meta[name="theme-color"]').attr('content', "#202124");
	}
	// now thema : dark
	else {
		$('#M_theme').removeClass("fa-sun");
		$('#M_theme').addClass("fa-moon");
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
		$('.M_info_div').css({"background-color": "white", "color": "#3E5569"});
		$('.gn-menu-wrapper').css("background-color", "white");
		$('meta[name="theme-color"]').attr('content', "white");
	}
}
//#323639
//#202124
//e2e2e2