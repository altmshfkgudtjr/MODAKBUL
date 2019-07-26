function format_time(raw_data) {
    raw_data = raw_data.split(' ');
    let date = raw_data[1];
    let month = raw_data[2];
    let year = raw_data[3];
    let time = raw_data[4];

    return year+'년 '+month+'월 '+date+'일 '+time;
}
let flag = true;
$(window).ready(function() {
    let a_jax = A_JAX(TEST_IP+'get_posts/공지/1', 'GET', null, null);
        $.when(a_jax).done(function () {
            if (a_jax.responseJSON['result'] == 'success'){
                flag = false;
                let div_class = 'M_info_div M_board_content M_boxshadow wow flipInX';
                if (localStorage.getItem('modakbul_theme') === 'dark') {
                    div_class +=  ' M_boxshadow_dark_shadow" style="' +
                        'visibility: visible; background-color: rgb(73, 78, 82); color: rgb(245, 246, 250); border: 0px solid rgb(221, 221, 221);';
                }
                for (let i=0; i<a_jax.responseJSON.posts.length; i++) {
                    let data = a_jax.responseJSON.posts[i];
                    let submission_time = data.post_date;
                    let title = data.post_title;
                    let views = data.post_view;
                    let comment_count = data.comment_cnt;
                    let likes = data.like_cnt;
                    let post_id = data.post_id;
                    let user_color = data.author_color;
                    let is_image_icon = data.img_cnt;
                    let is_attachment_icon = data.file_cnt;
                    let is_lock_icon = data.private;
                    if (is_image_icon == 0){
                        is_image_icon = "M_board_content_image_none";
                    } else {
                        is_image_icon = "M_board_content_image_block";
                    }
                    if (is_attachment_icon == 0) {
                        is_attachment_icon = "M_board_content_paperclip_none";
                    } else {
                        is_attachment_icon = "M_board_content_paperclip_block";
                    }
                    if (is_lock_icon == 0){
                        is_lock_icon = "M_board_content_lock_none";
                    } else {
                        is_lock_icon = "M_board_content_lock_block";
                    }
                    $(".M_board_contents_container")
                        .append(
                            '<div class="' + div_class + '" onclick="postmodal_open('+ post_id +')">' +
                            '<div class="M_user_profile_color" style="background-color:'+user_color+'"></div>' +
                            '<div class="M_user_name">' + data.author_name + '</div>' +
                            '<div class="M_time_info">| ' + submission_time + '</div>' +
                            '<i class="fas fa-lock M_board_content_icon M_board_content_lock '+is_lock_icon+'"></i>' +
                            '<i class="fas fa-paperclip M_board_content_icon M_board_content_paperclip '+is_attachment_icon+'"></i>' +
                            '<i class="fas fa-image M_board_content_icon M_board_content_image '+is_image_icon+'"></i>' +
                            '<div class="M_board_content_info">' + comment_count + '</div>' +
                            '<i class="fas fa-comment M_board_content_icon"></i>' +
                            '<div class="M_board_content_info">' + likes + '</div>' +
                            '<i class="fas fa-heart M_board_content_icon"></i>' +
                            '<div class="M_board_content_info">' + views +'</div>' +
                            '<i class="fas fa-eye M_board_content_icon"></i>' +
                            '<div class="M_board_content_title">'+ title +'</div>' +
                            '</div>');
                }
            }
        });
    }
);

let page = 2;
$(window).scroll(function() {
    if ($(window).scrollTop() + 100 >= $(document).height() - $(window).height()) {
        if (flag === false)
        {
            flag = true;
            let a_jax = A_JAX(TEST_IP+'get_posts/공지/'+page, 'GET', null, null);
            $.when(a_jax).done(function () {
                if (a_jax.responseJSON['result'] == 'success'){
                    let div_class = 'M_info_div M_board_content M_boxshadow wow flipInX';
                    if (localStorage.getItem('modakbul_theme') === 'dark') {
                        div_class +=  ' M_boxshadow_dark_shadow" style="' +
                            'visibility: visible; background-color: rgb(73, 78, 82); color: rgb(245, 246, 250); border: 0px solid rgb(221, 221, 221);';
                    }
                    if (a_jax.responseJSON.posts.length > 1)
                    {
                        for (let i=0; i<a_jax.responseJSON.posts.length; i++) {
                            let data = a_jax.responseJSON.posts[i];
                            let submission_time = data.post_date;
                            let title = data.post_title;
                            let views = data.post_view;
                            let comment_count = data.comment_cnt;
                            let likes = data.like_cnt;
                            let post_id = data.post_id;
                            let user_color = data.author_color;
                            let is_image_icon = data.img_cnt;
                            let is_attachment_icon = data.file_cnt;
                            let is_lock_icon = data.private;
                            if (is_image_icon == 0){
                                is_image_icon = "M_board_content_image_none";
                            } else {
                                is_image_icon = "M_board_content_image_block";
                            }
                            if (is_attachment_icon == 0) {
                                is_attachment_icon = "M_board_content_paperclip_none";
                            } else {
                                is_attachment_icon = "M_board_content_paperclip_block";
                            }
                            if (is_lock_icon == 0){
                                is_lock_icon = "M_board_content_lock_none";
                            } else {
                                is_lock_icon = "M_board_content_lock_block";
                            }
                            $(".M_board_contents_container")
                                .append(
                                    '<div class="' + div_class + '" onclick="postmodal_open('+ post_id +')">' +
                                    '<div class="M_user_profile_color" style="background-color:'+user_color+'"></div>' +
                                    '<div class="M_user_name">' + data.author_name + '</div>' +
                                    '<div class="M_time_info">| ' + submission_time + '</div>' +
                                    '<i class="fas fa-lock M_board_content_icon M_board_content_lock '+is_lock_icon+'"></i>' +
                                    '<i class="fas fa-paperclip M_board_content_icon M_board_content_paperclip '+is_attachment_icon+'"></i>' +
                                    '<i class="fas fa-image M_board_content_icon M_board_content_image '+is_image_icon+'"></i>' +
                                    '<div class="M_board_content_info">' + comment_count + '</div>' +
                                    '<i class="fas fa-comment M_board_content_icon"></i>' +
                                    '<div class="M_board_content_info">' + likes + '</div>' +
                                    '<i class="fas fa-heart M_board_content_icon"></i>' +
                                    '<div class="M_board_content_info">' + views +'</div>' +
                                    '<i class="fas fa-eye M_board_content_icon"></i>' +
                                    '<div class="M_board_content_title">'+ title +'</div>' +
                                    '</div>');
                        }
                        page++;
                        flag = false;
                    }
                    else {
                        flag = true;
                    }
                }
            });
        }
    }
});