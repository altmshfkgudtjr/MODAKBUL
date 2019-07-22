//라벨, 이름, 시간, 제목, 본문, 조회수, 공감수, 댓글, 첨부파일, 사진, 태그
var is_postmodal_open = 0;
var now_postmodal_top = 0;
function postmodal_open(){
	now_postmodal_top = $(window).scrollTop();
	history.pushState(null, null, "#post");
	is_postmodal_open = 1;
	$('#M_user_post_modal_background').css("height", $(window).height());
	//$('#M_user_post_modal_background').css("top", (($(window).height()-$('div#M_user_post_modal_background').outerHeight())/2+$(window).scrollTop()));
	$('#M_user_post_modal_background').css('position', "fixed");
	$('#M_user_post_modal_background').removeClass('display_none');
	$('#M_user_post_modal_background').removeClass('fadeOut');
	$('#M_user_post_modal_background').addClass('fadeIn');
	$('html, body').css({'overflow': 'hidden'});
	$('html, body').css({'top': now_postmodal_top*-1});
	$('html, body').addClass('M_modal_open_fixed');
	$('#M_user_post_modal_container').removeClass('fadeOutDown');
	$('#M_user_post_modal_container').addClass('fadeInUp');
	$('#M_user_post_modal_container').removeClass('display_none');
	$('#M_user_post_modal_container').css('height', $(window).height() - 100);
}

function postmodal_close(){
	is_postmodal_open = 0;
	//history.go(-1);
	history.replaceState(null, null, "");
	$('#M_user_post_modal_background').addClass('fadeOut');
	$('#M_user_post_modal_background').removeClass('fadeIn');
	$('#M_user_post_modal_container').addClass("fadeOutDown");
	$('#M_user_post_modal_container').removeClass('fadeInUp');
	setTimeout(function(){
  		$('#M_user_post_modal_container').addClass("display_none");
  		$('#M_user_post_modal_background').addClass('display_none');
  	}, 400);
	$('html, body').removeAttr("style");
	$('html, body').removeClass('M_modal_open_fixed');
	$('html').scrollTop(now_postmodal_top);
}

// modal 이 외 클릭 시, modal 닫기
$(document).mouseup(function (e) {
	if (is_postmodal_open == 1){
		var container = $("#M_user_post_modal_container");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			postmodal_close();
		}
	}
});

//마우스 드래그로 스크롤할 수 있는 함수  = 이미지 container
const slider = document.querySelector('#M_post_body_image_container');

let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
//마우스 드래그로 스크롤할 수 있는 함수  = 첨부파일 container
const slider2 = document.querySelector('#M_post_body_attachment_container');
let isDown2 = false;
let startX2;
let scrollLeft2;
slider2.addEventListener('mousedown', (e) => {
  isDown2 = true;
  slider2.classList.add('active');
  startX2 = e.pageX - slider.offsetLeft;
  scrollLeft2 = slider.scrollLeft;
});
slider2.addEventListener('mouseleave', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
  if(!isDown2) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk2 = (x - startX2) * 3; //scroll-fast
  slider2.scrollLeft = scrollLeft2 - walk2;
  console.log(walk2);
});