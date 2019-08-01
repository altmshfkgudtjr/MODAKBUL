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

let ajax = A_JAX(TEST_IP+'get_boards', 'GET', null, null);
$.when(ajax).done(function () {
    console.log(ajax.responseJSON);
    result_html = '';

    let response_data = ajax.responseJSON.boards;

    for (let i=0; i<response_data.length; i++)
    {
        let board = response_data[i];
        if (board.board_url.indexOf('_') === -1)
        {
            $('#M_sortable_list').append(
                '<div data-id="'+board.board_url+'"class="M_sortable M_sortable_menu">'+board.board_name+'</div>');
        }
        else
        {
            if (board.board_url.split('_')[1] === '') {
                let board_html = '<div id="M_sortable_'+ i +'" data-id="'+board.board_url+
                    '"class="M_sortable M_sortable_menu">' + board.board_name;
                for (let j=0; j<response_data.length; j++) {
                    if (response_data[j].board_url.indexOf(board.board_url) === 0 && response_data[j] !== board) {
                        board_html += '<div data-id="'+response_data[j].board_url+
                            '"class="M_sortable M_sortable_menu">'+response_data[j].board_name+'</div>';
                    }
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
        }
    }
    for (let i=0; i<sortable_list.length; i++){
        console.log(sortable_list[i].toArray());
    }
});
