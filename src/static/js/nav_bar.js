$(window).ready(function () {

    let a_jax = A_JAX(TEST_IP+'get_board', 'GET', null, null);
    $.when(a_jax).done(function () {
        let response_data = a_jax.responseJSON.board;
        let result_html = '<ul id="gn-menu2" class="gn-menu">';

        for (let i=0; i<response_data.length; i++) {
            let board = response_data[i];
            if (board.board_name === '공지사항') {
                result_html += '<li><a href="/board?type='+ board.board_url+'" class="M_nav_user_button">' +
                    '<i class="fas fa-bullhorn" style="padding: 0 22px"></i>' + board.board_name + '</a></li>';
            }
            else if (board.board_name === '학생회소개') {
                result_html += '<li><a href="/intro" class="M_nav_user_button">' +
                    '<i class="far fa-bell" style="padding: 0 22px"></i>' + board.board_name + '</a></li>';
            }
            else if (board.board_name === '학생회비내역') {
                result_html +=
                    '<li><a onclick="M_dropdown_global($(this))" class="M_nav_user_button">' +
                    '<i id="M_studentMoneyButton" class="fas fa-file-invoice-dollar" style="padding: 0 23px"></i>학생회비내역<i id="M_dropdown_icon_money" class="fas fa-sort-down M_dropdown_icon"></i></a></li>'+
                    '<div id="M_studentMoney" class="display_none"><div>'+
                    '<a href="board?type=장부_소프트웨어융합대학" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>소프트웨어융합대학</a>'+
                    '<a href="board?type=장부_컴퓨터공학과" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>컴퓨터공학과</a>'+
                    '<a href="board?type=장부_소프트웨어학과" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>소프트웨어학과</a>'+
                    '<a href="board?type=장부_정보보호학과" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>정보보호학과</a>'+
                    '<a href="board?type=장부_데이터사이언스학과" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>데이터사이언스학과</a>'+
                    '<a href="board?type=장부_지능기전공학부" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>지능기전공학부</a>'+
                    '<a href="board?type=장부_디자인이노베이션" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>디자인이노베이션</a>'+
                    '<a href="board?type=장부_만화애니메이션택" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>만화애니메이션택</a>'+
                    '</div></div>';
            }
            else if (board.board_name === '민원') {
                result_html += '<li><a href="/board?type=민원" class="M_nav_user_button">' +
                    '<i class="fas fa-feather-alt" style="padding: 0 22px"></i>민원</a></li>';
            }
            else if (board.board_name === '갤러리') {
                result_html += '<li><a href="/gallery" class="M_nav_user_button">' +
                    '<i class="far fa-images" style="padding: 0 22px"></i>갤러리</a></li>';
            }
            else if (board.board_name === '대외활동') {
                let data = board.board_url.split('_');
                if (data[1] === '') {
                    let subboard = '';
                    for (let j=0; j<response_data.length; j++) {
                        if (response_data[j].board_url.indexOf(board.board_name+'_') === 0) {
                            let subboard_data = response_data[j].board_url.split('_');
                            if (subboard_data[1] !== '') {
                                subboard += '<a href="/board?type=' + response_data[j].board_url + '" class="M_nav_user_button"><i class="fas fa-minus M_dropdown_hypeon"></i>' + response_data[j].board_name + '</a>';
                            }
                        }
                    }
                    result_html +=
                        '<li><a onclick="M_dropdown_global($(this))" class="M_nav_user_button">' +
                        '<i id="M_studentCompetitionButton" class="fab fa-dribbble" style="padding: 0 22px">' +
                        '</i>' + board.board_name + '<i id="M_dropdown_icon_competition" class="fas fa-sort-down M_dropdown_icon"></i></a></li>'+
                        '<div id="M_studentCompetition" class="display_none"><div>'+ subboard +'</div></div>';
                }
            }
            else if (board.board_name === '투표/설문조사') {
                result_html += '<li><a class="M_nav_user_button">' +
                    '<i class="far fa-check-square" style="padding: 0 22px"></i>' + board.board_name + '</a></li>';
            }
            else if (board.board_name === '통계자료') {
                result_html += '<li><a class="M_nav_user_button">' +
                    '<i class="far fa-chart-bar" style="padding: 0 22px"></i>' + board.board_name + '</a></li>';
            }
            else {
                if (board.board_url.indexOf('_') === -1) {
                    result_html += '<li><a class="M_nav_user_button">' +
                        '<i class="far fa-check-square" style="padding: 0 22px"></i>' + board.board_name + '</a></li>';
                }
                else {
                    if (board.board_url.split('_')[1] === '') {
                        let subboard = '';
                        for (let j=0; j<response_data.length; j++) {
                            if (response_data[j].board_url.indexOf(board.board_url) === 0) {
                                let subboard_data = response_data[j].board_url.split('_');
                                if (subboard_data[1] !== '') {
                                    subboard += '<a href="/board?type=' + response_data[j].board_url + '"  class="M_nav_user_button">' +
                                        '<i class="fas fa-minus M_dropdown_hypeon"></i>' + response_data[j].board_name + '</a>';
                                }
                            }
                        }
                        result_html +=
                            '<li><a onclick="M_dropdown_global($(this))" class="M_nav_user_button">' +
                            '<i class="far fa-sticky-note" style="padding: 0 22px">' +
                            '</i>' + board.board_name + '<i id="M_dropdown_icon_competition" class="fas fa-sort-down M_dropdown_icon"></i></a></li>'+
                            '<div class="display_none"><div>'+ subboard +'</div></div>';
                    }
                }

            }
        }

        result_html += '</ul>';
        $('#gn-scroller').append(result_html);
        setTheme();
    });
});