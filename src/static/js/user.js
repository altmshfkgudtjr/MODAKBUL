function user_img(user_id) {
	//로그인 -> identification
	var hash___ = MD5(user_id + "");
	var data___ = new Identicon(hash___, img_options).toString();
	$('#M_user_img').attr("src", "data:image/png;base64," + data___);
}


function user_info() {
	user_img(16011075);
}
//닉네임 수정 실행함수
function fix_user_nickname() {
	//닉네임 수정 코드
}


//포스트 제작 함수
function user_make_list(data) {
	
}
//작성글 불러오기 함수
var user_get_write_cnt = 0;
var user_get_like_cnt = 0;
function user_get_write() {
	if (user_get_write_cnt == 0){
		user_get_write_cnt = 1;
		user_get_like_cnt = 0;
		$('#M_user_choice_write').addClass("M_user_choice_selected");
		$('#M_user_choice_like').removeClass("M_user_choice_selected");
		// 작성글 불러오는 코드
	} else {return;}
}
//좋아요 불러오기 함수
function user_get_like() {
	if (user_get_like_cnt == 0){
		user_get_like_cnt = 1;
		user_get_write_cnt = 0;
		$('#M_user_choice_like').addClass("M_user_choice_selected");
		$('#M_user_choice_write').removeClass("M_user_choice_selected");
		// 좋아요 불러오는 코드
	} else {return;}
}