function format_time(raw_data) {
    raw_data = raw_data.split(' ');
    let date = raw_data[1];
    let month = raw_data[2];
    let year = raw_data[3];
    let time = raw_data[4];

    return year+'년 '+month+'월 '+date+'일 '+time;
}

$(window).ready(function() {
    let a_jax = A_JAX(TEST_IP+'posts/공지/1', 'GET', null, null);
        $.when(a_jax).done(function () {
            console.log(a_jax.responseJSON);

            let div_class = 'M_info_div M_board_content M_boxshadow wow flipInX';
            if (localStorage.getItem('modakbul_theme') === 'dark') {
                div_class +=  ' M_boxshadow_dark_shadow" style="' +
                    'visibility: visible; background-color: rgb(73, 78, 82); color: rgb(245, 246, 250); border: 0px solid rgb(221, 221, 221);';
            }
            for (let i=0; i<a_jax.responseJSON.posts.length; i++) {
                let data = a_jax.responseJSON.posts[i];
                let submission_time = format_time(data.post_date);
                let title = data.post_title;
                let views = data.post_view;
                let comment_count = data.comment_cnt;
                let likes = data.like_cnt;
                let post_id = data.post_id;

                $(".M_board_contents_container")
                    .append(
                        '<div class="' + div_class + '" onclick="postmodal_open('+ post_id +')">' +
                        '<div class="M_user_profile_color"></div>' +
                        '<div class="M_user_name">' + data.post_author + '</div>' +
                        '<div class="M_time_info">| ' + submission_time + '</div>' +
                        '<i class="fas fa-paperclip M_board_content_icon"></i>' +
                        '<i class="fas fa-image M_board_content_icon M_board_content_image"></i>' +
                        '<div class="M_board_content_info">' + comment_count + '</div>' +
                        '<i class="fas fa-comment M_board_content_icon"></i>' +
                        '<div class="M_board_content_info">' + likes + '</div>' +
                        '<i class="fas fa-heart M_board_content_icon"></i>' +
                        '<div class="M_board_content_info">' + views +'</div>' +
                        '<i class="fas fa-eye M_board_content_icon"></i>' +
                        '<div class="M_board_content_title">'+ title +'</div>' +
                        '</div>');
            }
        });
    }
);

let page = 2;
let flag = true;
$(window).scroll(function() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
        if (flag === true)
        {
            let a_jax = A_JAX(TEST_IP+'posts/공지/'+page, 'GET', null, null);
            $.when(a_jax).done(function () {
                console.log(page);
                let div_class = 'M_info_div M_board_content M_boxshadow wow flipInX';
                if (localStorage.getItem('modakbul_theme') === 'dark') {
                    div_class +=  ' M_boxshadow_dark_shadow" style="' +
                        'visibility: visible; background-color: rgb(73, 78, 82); color: rgb(245, 246, 250); border: 0px solid rgb(221, 221, 221);';
                }
                if (a_jax.responseJSON.posts.length > 1)
                {
                    console.log(a_jax.responseJSON.posts);
                    for (let i=0; i<a_jax.responseJSON.posts.length; i++) {
                        let data = a_jax.responseJSON.posts[i];
                        let submission_time = format_time(data.post_date);
                        let title = data.post_title;
                        let views = data.post_view;
                        let comment_count = data.comment_cnt;
                        let likes = data.like_cnt;
                        let post_id = data.post_id;

                        $(".M_board_contents_container")
                            .append(
                                '<div class="' + div_class + '" onclick="postmodal_open('+ post_id +')">' +
                                '<div class="M_user_profile_color"></div>' +
                                '<div class="M_user_name">' + data.post_author + '</div>' +
                                '<div class="M_time_info">| ' + submission_time + '</div>' +
                                '<i class="fas fa-paperclip M_board_content_icon"></i>' +
                                '<i class="fas fa-image M_board_content_icon M_board_content_image"></i>' +
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
                }
                else
                {
                    page++;
                    flag = false;
                }
            });
        }
    }
});