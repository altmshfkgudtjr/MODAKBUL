function toggle(flag) {
    let info = $('.M_info');
    let bio = $('.M_bio');
    let user = $('.M_user');
    let menu = $('.M_menu');
    let tag = $('.M_tag');

    if (flag === 0){
        info.css('display', 'inline-block');
        bio.css('display', 'none');
        user.css('display', 'none');
        menu.css('display', 'none');
        tag.css('display', 'none');
    }
    else if (flag === 1){
        info.css('display', 'none');
        bio.css('display', 'inline-block');
        user.css('display', 'none');
        menu.css('display', 'none');
        tag.css('display', 'none');
    }
    else if (flag === 2){
        info.css('display', 'none');
        bio.css('display', 'none');
        user.css('display', 'inline-block');
        menu.css('display', 'none');
        tag.css('display', 'none');
    }
    else if (flag === 3){
        info.css('display', 'none');
        bio.css('display', 'none');
        user.css('display', 'none');
        menu.css('display', 'inline-block');
        tag.css('display', 'none');
    }
    else if (flag === 4){
        info.css('display', 'none');
        bio.css('display', 'none');
        user.css('display', 'none');
        menu.css('display', 'none');
        tag.css('display', 'inline-block');
    }
}

function modify_tag(tag) {
    tag.replaceWith('<input type="text" style="width:30%"></input>');
}

function upload_logo() {
    $('#M_logo_upload').trigger('click');
}

function image_preview(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            $('#M_image_preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$('#M_logo_upload').change(function () {
   image_preview(this);
});

function settingsPage_check_admin() {
    let a_jax = A_JAX(TEST_IP+"get_userinfo", "GET", null, null);
    $.when(a_jax).done(function(){
        let json = a_jax.responseJSON;
        if (json['result'] == "success"){
            //You are admin!
        } else {
            alert("접근 권한이 없습니다.");
            location.href = "/";
        }
    });
    $.when(a_jax).fail(function(){
        alert("접근 권한이 없습니다.");
        location.href = "/";
    });
}