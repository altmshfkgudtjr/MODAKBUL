$(window).scroll(function() {
    //여기 수정
    if ($(window).scrollTop() + 150 >= $(document).height() - $(window).height()) {
        let div_class = 'M_info_div M_board_content M_boxshadow wow flipInX';
        if (localStorage.getItem('modakbul_theme') === 'dark') {
            div_class +=  ' M_boxshadow_dark_shadow" style="' +
                'visibility: visible; background-color: rgb(73, 78, 82); color: rgb(245, 246, 250); border: 0px solid rgb(221, 221, 221);';
        }

        $(".M_board_contents_container")
            .append(
                '<div class="' + div_class + '" onclick="postmodal_open()">' +
                '<div class="M_user_profile_color"></div>' +
                '<div class="M_user_name">정재경</div>' +
                '<div class="M_time_info">| 2019년 7월 21일 20:48:12</div>' +
                '<i class="fas fa-lock M_board_content_icon M_board_content_lock"></i>' +
                '<i class="fas fa-paperclip M_board_content_icon M_board_content_paperclip"></i>' +
                '<i class="fas fa-image M_board_content_icon M_board_content_image"></i>' +
                '<div class="M_board_content_info">40</div>' +
                '<i class="fas fa-comment M_board_content_icon"></i>' +
                '<div class="M_board_content_info">15</div>' +
                '<i class="fas fa-heart M_board_content_icon"></i>' +
                '<div class="M_board_content_info">30</div>' +
                '<i class="fas fa-eye M_board_content_icon"></i>' +
                '<div class="M_board_content_title">제목입니다</div>' +
                '</div>');
    }
});