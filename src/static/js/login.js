//로그인 버튼을 누를 시, 실행되는 함수
function user_login(){
	var login_ID = $('#user_id').val();	// user_id 란 ID 값의 value 값 가져옴
	var login_PW = $('#user_pw').val();	// user_pw 란 ID 값의 value 값 가져옴
	
	if (login_ID.length <= 0 || login_PW.length <= 0){
		snackbar("아이디 및 비밀번호를 입력해주세요.");
		return;
	}

	var send_data = {id: login_ID, pw: login_PW};
	var a_jax = A_JAX(TEST_IP+"sign-in-up", "POST", null, send_data);	//"/login" 이라는 url에 아이디/비밀번호 data 전송
	$.when(a_jax).done(function(){
		var json = a_jax.responseJSON;
		if (json['result'] == "you are not sejong"){			// result 값이 "your not Sejong" 이라면 실행
			snackbar("올바르지 않은 회원 정보입니다.");
		}
		else if (json['result'] == "wrong info"){	// result 값이 "password incorrect" 이라면 실행
			snackbar("비밀번호를 다시 입력해주세요.");
		}
		else if (json['result'] == "success"){				// result 값이 "success" 이라면 실행
			// 로그인 성공 token 생성
			localStorage.setItem('modakbul_token', json['access_token']);
			snackbar("로그인 성공!");
			location.href = "/";
		}
		else {
			snackbar("올바르지 않은 회원 정보입니다.");
		}
	});
}
//로그아웃 버튼을 누를 시, 실행되는 함수
function user_logout(){
	localStorage.removeItem('modakbul_token');
	$("#M_nav_user_login").animate({height: 'hide'}, 'fast');
	snackbar("로그아웃 되었습니다.");
}

//엔터 로그인
function login_enter(){
    if (window.event.keyCode == 13) {
        user_login();
    }
}

function need_login_snackbar(){
	snackbar("로그인을 해주세요!");
}

function get_user_info() {
	var token = localStorage.getItem('modakbul_token');
	if (token == null){
		return;
	}
	var color = $('#M_user_img');
	var name = $('#M_user_content_name');
	var major = $('#M_user_content_major');
	var number = $('#M_user_content_number');
	var a_jax = A_JAX(TEST_IP+"get-userinfo", "GET", token, null);
	$.when(a_jax).done(function(){
		var json = a_jax.responseJSON;
		if (json['result'] == "success"){
			name.empty();
			major.empty();
			number.empty();
			name.append(json['user_name']);
			for (var i = 0; i < json['user_tag'].length; i++){
				major.append(json['user_tag'][i]['tag_id'], "<br>");
				if (i == 1) break;
			}
			number.append(json['user_id']);
			color.css("background-color", json['user_color']);
		}
		else{
			snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
		}
	});
}



//로그인 창 애니메이션 함수
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
})(jQuery);