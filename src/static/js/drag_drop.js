let main_list = document.getElementById('M_sortable_list');
let main_sortable = new Sortable(main_list, {
    group: {
        name: 'M_sortable_list',
        put: false
    },
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
});

let sortable_list = [];
sortable_list.push(main_sortable);

$(document).ready(function(){
    let ajax = A_JAX(TEST_IP+'get_tags', 'GET', null, null);
    $.when(ajax).done(function() {

        for (let i=0; i<ajax.responseJSON.tags.length; i++)
        {
            $('.M_nav_add').append('<div onclick="select_tag($(this))" class="M_nav_tag"># ' + ajax.responseJSON.tags[i] + '</div>')            
        }
    })
});


let ajax = A_JAX(TEST_IP+'get_boards', 'GET', null, null);
$.when(ajax).done(function () {
    result_html = '';

    let data = ajax.responseJSON.boards;
    let result_list = [];
    let nested_list = [];

    for (let i=0; i<data.length; i++) {
        if (data[i].board_url.split('_')[1] === undefined) result_list.push(data[i]);
        else nested_list.push(data[i]);      
    }

    for (let i=0; i<nested_list.length; i++) {
        for (let j=0; j<result_list.length; j++) {
            for (let k=0; k<nested_list[i].board_url.split('_').length; k++) {
                let check;
                if (Array.isArray(result_list[j]) === true) {
                    check = result_list[j][0].board_url;
                }
                else {
                    check = result_list[j].board_url;
                }

                if (nested_list[i].board_url.split('_')[k] == check)
                {
                    if (Array.isArray(result_list[j]) === true) {
                        result_list[j].push(nested_list[i]);
                    }
                    else {
                        result_list[j] = [result_list[j], nested_list[i]];
                    }
                }
            }
        }
    }
    let response_data = ajax.responseJSON.boards;

    for (let i=0; i<result_list.length; i++) {
        let board_html = '';
        if (Array.isArray(result_list[i]) === true){
            board_html = '<div id="M_sortable_'+ i +'" data-id="'+result_list[i][0].board_url+
            '"class="M_sortable M_sortable_menu">' + result_list[i][0].board_name;

            for (let j=1; j<result_list[i].length; j++) {
                board_html += '<div data-id="'+result_list[i][j].board_url+
                    '"class="M_sortable M_sortable_menu">'+result_list[i][j].board_name+'</div>';
            }
        }
        else {
            board_html = '<div id="M_sortable_'+ i +'" data-id="'+result_list[i].board_url+
            '"class="M_sortable M_sortable_menu">' + result_list[i].board_name;
        }
        board_html += '</div>';
        $('#M_sortable_list').append(board_html);

        let board_list = document.getElementById('M_sortable_' + i);
        let new_sortable = new Sortable(board_list, {
            group: {
                name: 'M_sortable_' + i,
                put: false
            },
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.65
        });
        sortable_list.push(new_sortable);
    }


});

function nav_submit(){
    let final_result = [];

    for (let i=0; i<sortable_list.length; i++){
        if (sortable_list[i].toArray().length != 0) final_result.push(sortable_list[i].toArray());
    }


    let ajax = A_JAX(TEST_IP+'get_boards', 'GET', null, null);

    let output = new FormData();
    let send_data = new Array;
    $.when(ajax).done(function () {

        for (let i=0; i<final_result.length; i++) {
            
            for (let j=0; j<final_result[i].length; j++) {
                for (let k=0; k<ajax.responseJSON.boards.length; k++) {
                    if (ajax.responseJSON.boards[k].board_url == final_result[i][j]) {
                        let tmp = ajax.responseJSON.boards[k];
                        tmp.board_rank = j;
                        send_data.push(tmp);

                    }
                }
            }
        }
        console.log(send_data);
        output.append('boards', JSON.stringify(send_data));
    
        let send_ajax = A_JAX_FILE(TEST_IP+'board_upload', 'POST', null, output);
        $.when(send_ajax).done(function() {
            console.log(send_ajax.responseJSON);
            location.reload();
        })
    });
}

function select_tag(target) {
    if (target.hasClass('M_tag_nav'))
    {
        target.removeClass('M_tag_nav');
    }
    else 
    {
        target.addClass('M_tag_nav');
    }
}