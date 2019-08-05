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


});

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