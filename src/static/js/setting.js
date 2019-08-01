

function toggle(flag) {
    let info = $('.M_info');
    let bio = $('.M_bio');
    let user = $('.M_user');
    let menu = $('.M_menu');

    if (flag === 0){
        info.css('display', 'inline-block');
        bio.css('display', 'none');
        user.css('display', 'none');
        menu.css('display', 'none');
    }
    else if (flag === 1){
        info.css('display', 'none');
        bio.css('display', 'inline-block');
        user.css('display', 'none');
        menu.css('display', 'none');
    }
    else if (flag === 2){
        info.css('display', 'none');
        bio.css('display', 'none');
        user.css('display', 'inline-block');
        menu.css('display', 'none');
    }
    else if (flag === 3){
        info.css('display', 'none');
        bio.css('display', 'none');
        user.css('display', 'none');
        menu.css('display', 'inline-block');
    }
}