/*let search_bar_value;
$(document).keydown(function(event){
	if (event.keyCode == 13){
		if (search_bar_value == 1){
			search_bar_value = 0;
			console.log("이동");
			location.href("/board");
			let user_search_value = $("#M_search_input").val();
			snackbar("'"+user_search_value+"' 가 검색되었습니다.");
			var container = $("#M_search_bar");
			var search_bar = $("#M_search_bar");
			search_bar.removeClass("fadeInDown");
			search_bar.addClass("fadeOutUp");
			setTimeout(function(){search_bar.addClass("display_none")}, 400);
			$("#M_search_input").val("")
			let send_data = new FormDate();
			send_data.append("topic", user_search_value);
			let a_jax = A_JAX(TEST_IP+"search", "POST", null, send_data);
			$.when(a_jax).done(function() {
				let json = a_jax.reponseJSON;
				if (json['result'] == 'success'){
					console.log(json);
				} else if (json['result'] == 'unavailable word') {
					snackbar("적절치 못한 단어입니다.");
				} else  {
					snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
				}
			});
		}
	}
});*/