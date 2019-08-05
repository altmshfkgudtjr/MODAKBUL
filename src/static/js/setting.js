const DEPARTMENTS = ['데이터사이언스학과', '디자인이노베이션', '디지털콘텐츠학과', '만화애니메이션텍', '소프트웨어학과', '정보보호학과', '지능기전공학부', '창의소프트학부', '컴퓨터공학과'];
$(document).ready(()=>{
   let ajax = A_JAX(TEST_IP+'get_variables', "GET", null, null);
   $.when(ajax).done(()=>{

       let name = ajax.responseJSON.variables.filter(data => {
           return data.v_key === '학생회이름'
       });
       let subtitle = ajax.responseJSON.variables.filter(data => {
           return data.v_key === '학생회부제'
       });
       let image = ajax.responseJSON.variables.filter(data =>{
           return data.v_key === '학생회로고'
       });
       $('#M_union_name').attr('placeholder', name[0].value);
       $('#M_union_subtitle').attr('placeholder', subtitle[0].value);
       $('#M_image_preview').attr('src', '../static/image/'+image[0].value);
   });

   black_list();
});

function black_list() {
    let black_ajax = A_JAX(TEST_IP+'get_blacklist', 'GET', null, null);
    $.when(black_ajax).done(()=>{
        result_html = ''
        for (let i=0; i<black_ajax.responseJSON.blacklist.length; i++) {
            let major = '';
            for (let j=0; j<DEPARTMENTS.length; j++)
            {
                if (black_ajax.responseJSON.blacklist[i].tags.indexOf(DEPARTMENTS[j]) !== -1) {
                    major = DEPARTMENTS[j];
                }
            }


            result_html += '<div class="M_black_user_info">' +
                '<div class="M_setting_user_tag"></div>'+
                '<div class="M_setting_subtitle">'+
                black_ajax.responseJSON.blacklist[i].user_name + ' ' +
                black_ajax.responseJSON.blacklist[i].user_id + ' ' +
                major +
                '</div>'+
                '<div onclick="white_user($(this))" class="M_setting_unblack_button">취소</div></div>';
        }
        $('.M_setting_blacklist').append(result_html);
    })
}

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

let image;
function image_preview(input) {
    console.log(input);
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            console.log(e);
            $('#M_image_preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        image = input.files;
    }
}


let image_updated = false;
let name_updated = false;
let subtitle_updated = false;

$('#M_logo_upload').change(function () {
   image_preview(this);
   image_updated = true;
});

$('#M_union_name').change(()=>{
    name_updated = true;
});

$('#M_union_subtitle').change(()=>{
    subtitle_updated = true;
})

function submit_bio() {

    console.log(image_updated, name_updated, subtitle_updated);
    if (image_updated === true)
    {
        let img_data = new FormData();
        img_data.append('img', image[0]);
        let img_ajax = A_JAX_FILE(TEST_IP+'change_logo', 'POST', localStorage.getItem('modakbul_token'), img_data);
        $.when(img_ajax).done(()=>{
            location.reload();
        })
    }
    if (name_updated === true)
    {
        let div = $('#M_union_name');
        let new_name = div.val();
        let name_data = {'key': '학생회이름', 'value': div.val()};
        let name_ajax = A_JAX(TEST_IP+'variable_update', 'POST', null, name_data);
        $.when(name_ajax).done(()=>{
            div.val('');
            div.attr('placeholder', new_name);
        });
        snackbar('적용되었습니다.');
    }
    if (subtitle_updated === true)
    {
        let div = $('#M_union_subtitle');
        let new_subtitle = div.val();
        let subtitle_data = {'key': '학생회부제', 'value': div.val()};
        let subtitle_ajax = A_JAX(TEST_IP+'variable_update', 'POST', null, subtitle_data);
        $.when(subtitle_ajax).done(()=>{
            div.val('');
            div.attr('placeholder', new_subtitle);
        });
        snackbar('적용되었습니다.');
    }
}
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
function search_user() {
    let search = $('.M_user_search').val();
    let ajax = A_JAX(TEST_IP+"get_user_search", "POST", null, {'search': search});
    let result_html = '';
    $.when(ajax).done(()=>{
        if (ajax.responseJSON.result === 'user is not defined') {
            snackbar('사용자가 없습니다.')
        }
        else {
            let major = '';
            for (let j=0; j<DEPARTMENTS.length; j++)
            {
                if (ajax.responseJSON.user_tags.indexOf(DEPARTMENTS[j]) !== -1) {
                    major = DEPARTMENTS[j];
                }
            }

            result_html +=
                '<div class="M_setting_user_tag"></div>'+
                '<div class="M_setting_subtitle">'+
                ' ' + ajax.responseJSON.user.user_name + ' ' + ajax.responseJSON.user.user_id + ' '+ major +
                '</div>'+
                '<div onclick="black_user($(this).parent())" class = "M_setting_black_button"> 블랙</div>';
            $('#M_user_info').empty();
            $('#M_user_info').append(result_html);
        }
    })
}

$('.M_user_search').keypress(function (e) {
    let key = e.which;
    if(key === 13)
    {
        search_user();
    }
});

function black_user(div) {
    let ajax = A_JAX(TEST_IP+"user_black_apply", "POST", null, {'target_id': div[0].childNodes[1].innerText.split(' ')[1]});
    $.when(ajax).done(()=>{
        if (ajax.responseJSON.result === 'already blacklist') {
            snackbar('이미 블랙리스트에 추가된 사용자 입니다.');
            $('#M_user_info').empty();
        }
        else {
            $('#M_user_info').empty();
            $('.M_setting_blacklist').empty();
            black_list();
        }
    })
}
function white_user(div) {
    let ajax = A_JAX(TEST_IP+"user_black_cancel", "POST", null, {'target_id': div.parent()[0].childNodes[1].innerText.split(' ')[1]});
    $.when(ajax).done(()=>{
        if (ajax.responseJSON.result === 'no blacklist') {
            snackbar('이미 블랙리스트에서 제거된 사용자 입니다.');
        }
        $('.M_setting_blacklist').empty();
        black_list();
    })
}