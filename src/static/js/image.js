//Gallery animation 적용
function image_get_posts_after(){
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	[].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
		if (window.outerWidth < 1030 && window.outerWidth >1020){
			var translateXvalue = 'translateX(-25vw)';
		} else {var translateXvalue = 'translateX(3vw)';}
		new IsoGrid(el, {
			type : 'scrollable',
			transform : translateXvalue + ' translateY(375px) rotateX(30deg) rotateZ(30deg)',
			stackItemsAnimation : {
				properties : function(pos) {
					return {
						translateZ: (pos+1) * 50,
						rotateZ: getRandomInt(-3, 3)
					};
				},
				options : function(pos, itemstotal) {
					return {
						type: dynamics.bezier,
						duration: 500,
						points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
						//delay: (itemstotal-pos-1)*40
					};
				}
			},
			onGridLoaded : function() {
				classie.add(document.body, 'grid-loaded');
			}
		});
	});
}

//포스트 li 태그 생성해주는 함수
function image_get_posts(json) {
	var target = document.getElementById("M_image_container");
	for (var i =0; i < json['posts'].length; i++){
		var item = document.createElement('li');
		item.setAttribute('title', json['posts'][i]['post_id']);
		item.classList.add('grid__item', 'shown');
		var item_a = document.createElement('a');
		item_a.classList.add('grid__link');
		var item_img_first = document.createElement('img');
		item_img_first.classList.add('grid__img', 'layer');
		item_img_first.setAttribute('src', '../static/image/canvas.png');
		item_a.append(item_img_first);
		for (var j = 0; j < json['posts'][i]['files'].length; j++){
			let item_img = document.createElement('img');
			item_img.classList.add('grid__img', 'layer');
			item_img.setAttribute('src', '../static/files/'+json['posts'][i]['files'][j]);
			item_a.append(item_img);
		}
		item_span = document.createElement('span');
		item_span.classList.add('grid__title');
		item_span.append(json['posts'][i]['post_title']);
		item_a.append(item_span);
		item.append(item_a);
		target.append(item);
	}
	image_get_posts_after();
}

function image_init() {
	var a_jax = A_JAX(TEST_IP+"image/"+1, "GET", null, null);
	$.when(a_jax).done(function(){
      var json = a_jax.responseJSON;
      if (json['result'] == "success"){
      	image_get_posts(json);
      }
      else if (json['result'] == 'bad request'){
        snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
      }
      else{
        snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
      }
    });
}


function image_send() {

	var M_files = document.getElementById('files-upload').files;
	var M_list = [];
	for (var i = 0; i < M_files.length; i++){
		M_list.push(M_files[i]);
	}
	var send_data = new FormData();
	send_data.append('title', '16011075');
	send_data.append('content', '메롱');
	send_data.append('anony', '0');
	send_data.append('tages', '갤러리');
	for (var i = 0; i< M_files.length; i++){
		send_data.append('files', M_list[i]);
	}
	var a_jax = A_JAX(`TEST_IP`+'post_upload', "POST", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjM2MTg5MDUsIm5iZiI6MTU2MzYxODkwNSwianRpIjoiMTc2NWZmYmEtMTBiOS00OGZlLTkzYTMtNWVjYzUyZWUwYmNmIiwiaWRlbnRpdHkiOiIxNjAxMTA3NSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.PgNcNefJjh1ZYVWtTZ297KhUOkvWunBQLsWyHZKjHc8', send_data);
	$.when(a_jax).done(function(){
      var json = a_jax.responseJSON;
      if (json['result'] == "success"){
      }
      else if (json['result'] == 'bad request'){
       	alert("실패");
      }
      else{
        alert("실패");
      }
    });
}
/*스크롤할시 생성
$(window).scroll(function(event){
	if (now_gallery_scroll_function == 0){
		if ($(window).scrollTop() + 400 >= ($(document).height() - $(window).height())){
			now_gallery_scroll_function = 1;
			image_get_posts_test();
		}
	}
});*/