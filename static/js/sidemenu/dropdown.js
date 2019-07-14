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
	$("#M_nav_user").animate({height: 'toggle'}, 'fast');
}
// modal 이 외 클릭 시, modal 닫기
$(document).mouseup(function (e) {
	var container = $("#M_nav_user2");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$("#M_nav_user").animate({height: 'hide'}, 'fast');
	}
});
//search bar animation
//검색 아이콘을 클릭했을 때,
function M_search_bar_on() {
	var search_bar = $("#M_search_bar");
	search_bar.removeClass("display_none");
	search_bar.removeClass("flipOutX");
	search_bar.addClass("flipInX animated");
	$("#M_search_input").focus();
}
//검색 창 닫을 때
$(document).mouseup(function (e) {
	var container = $("#M_search_bar");
	var search_bar = $("#M_search_bar");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		search_bar.removeClass("flipInX");
		search_bar.addClass("flipOutX");
		$("#M_search_input").val("")
	}
});
//엔터 검색 함수
function search_enter(){
    if (window.event.keyCode == 13) {
    	var search_bar = $("#M_search_bar");
    	search_bar.removeClass("flipInX");
		search_bar.addClass("flipOutX");
		$("#M_search_input").val("")
    }
}