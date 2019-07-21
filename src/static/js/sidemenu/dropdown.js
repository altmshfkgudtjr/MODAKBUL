function M_dropdown_money() {
	$("#M_dropdown_icon_money").toggleClass("fa-sort-down");
	$("#M_dropdown_icon_money").toggleClass("fa-sort-up M_dropdwon_trf");
	$("#M_studentMoney").animate({height: 'toggle'});
}
function M_dropdown_competition() {
	$("#M_dropdown_icon_competition").toggleClass("fa-sort-down");
	$("#M_dropdown_icon_competition").toggleClass("fa-sort-up M_dropdwon_trf");
	$("#M_studentCompetition").animate({height: 'toggle'});
}
function M_dropdown_volunteer() {
	$("#M_dropdown_icon_volunteer").toggleClass("fa-sort-down");
	$("#M_dropdown_icon_volunteer").toggleClass("fa-sort-up M_dropdwon_trf");
	$("#M_studentVolunteer").animate({height: 'toggle'});
}
function M_dropdown_user() {
	if (localStorage.getItem('modakbul_token') != null){
		$("#M_nav_user_login").animate({height: 'toggle'}, 'fast');
	} else {
		$("#M_nav_user_nologin").animate({height: 'toggle'}, 'fast');
	}
}
// modal 이 외 클릭 시, modal 닫기
$(document).mouseup(function (e) {
	var container = $("#M_nav_user");
	if (localStorage.getItem('modakbul_token') != null){
		if (!container.is(e.target) && container.has(e.target).length === 0){
			$("#M_nav_user_login").animate({height: 'hide'}, 'fast');
		}
	} else {
		if (!container.is(e.target) && container.has(e.target).length === 0){
			$("#M_nav_user_nologin").animate({height: 'hide'}, 'fast');
		}
	}
});
var search_bar_value = 0;
//search bar animation
//검색 아이콘을 클릭했을 때,
function M_search_bar_on() {
	if (search_bar_value == 0){
		search_bar_value = 1;
		var search_bar = $("#M_search_bar");
		search_bar.removeClass("display_none");
		search_bar.removeClass("fadeOutUp");
		search_bar.addClass("fadeInDown animated");
		$("#M_search_input").focus();
	}
}
//검색 창 닫을 때
$(document).mouseup(function (e) {
	if (search_bar_value == 1){
		search_bar_value = 0;
		var container = $("#M_search_bar");
		var search_bar = $("#M_search_bar");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			search_bar.removeClass("fadeInDown");
			search_bar.addClass("fadeOutUp");
			setTimeout(function(){search_bar.addClass("display_none")}, 400);
			$("#M_search_input").val("")
		}
	}
});
//엔터 검색 함수
function search_enter(){
	search_bar_value = 0;
    if (window.event.keyCode == 13) {
    	var search_bar = $("#M_search_bar");
    	search_bar.removeClass("fadeInDown");
		search_bar.addClass("fadeOutUp");
		setTimeout(function(){search_bar.addClass("display_none")}, 400);
		$("#M_search_input").val("")
    }
}