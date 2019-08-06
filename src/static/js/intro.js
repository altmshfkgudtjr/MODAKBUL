$(document).ready(()=>{
    let ajax = A_JAX(TEST_IP+'get_value/총인사말', 'GET', null, null);
    $.when(ajax).done(()=>{
        $('.main_intro').append(ajax.responseJSON.value);
    });

    let intro_ajax = A_JAX(TEST_IP+'get_department/0', 'GET', null, null);
    $.when(intro_ajax).done(()=>{
        for (let i=0; i<intro_ajax.responseJSON.department.length; i++) {
            console.log(intro_ajax.responseJSON.department[i].dm_intro.replace(/\<br \/\>/g, "\n"));
            if (intro_ajax.responseJSON.department[i].dm_name.indexOf('소프트웨어융합대학 학생회장') !== -1) {
                $('#M_principle').text(intro_ajax.responseJSON.department[i].dm_name);
                $('#M_principle_name').text(intro_ajax.responseJSON.department[i].dm_chairman);
                $('#M_principle_bio').append(intro_ajax.responseJSON.department[i].dm_intro);
                $('#M_principle_image').attr('src', intro_ajax.responseJSON.department[i].dm_img);
            }
            else {
                $('#M_vice_principle').text(intro_ajax.responseJSON.department[i].dm_name);
                $('#M_vice_principle_name').text(intro_ajax.responseJSON.department[i].dm_chairman);
                $('#M_vice_principle_bio').append(intro_ajax.responseJSON.department[i].dm_intro);
                $('#M_vice_principle_image').attr('src', intro_ajax.responseJSON.department[i].dm_img);
            }
        }
    });

    let intro_ajax2 = A_JAX(TEST_IP+'get_department/1', 'GET', null, null);

    $.when(intro_ajax2).done(()=>{
        let data = intro_ajax2.responseJSON.department;
        result_html = '';

        for (let i=0; i<data.length; i++) {
            result_html +=
                '<div class="info_wrapper">'+
                '<div class="info_img_wrapper"><img src="'+data[i].dm_img+'" class="info_img"></div>'+
                '<div class="info_text_wrapper"><div>'+
                '<h2 class="info_text info_department">'+ data[i].dm_name+'</h2>'+
                '<h4 class="info_text info_dept_head">'+data[i].dm_chairman+'</h4>'+
                '<div class="info_text info_bio">'+data[i].dm_intro+'</div></div></div></div>';
        }
        $('#M_principles').append(result_html);
    });

    let contacts_ajax =  A_JAX(TEST_IP+'get_value/연락처', 'GET', null, null);
    $.when(contacts_ajax).done(()=>{
        $('#M_contacts').text(contacts_ajax.responseJSON.value);
    })
});

function set_display(type) {
    let intro_main = $('.intro_main');
    let principle_bio = $('.principle_bio');
    let director_bio = $('.director_bio');
    let contacts = $('.contacts');

    if (type === 0) {
        intro_main.css('display', 'inline-block');
        principle_bio.css('display', 'inline-block');
        director_bio.css('display', 'inline-block');
        contacts.css('display', 'inline-block');
    }
    if (type === 1) {
        principle_bio.css('display', 'none');
        director_bio.css('display', 'none');
        contacts.css('display', 'none');
    }
    if (type === 2) {
        intro_main.css('display', 'none');
        director_bio.css('display', 'none');
        contacts.css('display', 'none');
    }
    if (type === 3) {
        intro_main.css('display', 'none');
        principle_bio.css('display', 'none');
        contacts.css('display', 'none');
    }
    if (type === 4) {
        intro_main.css('display', 'none');
        principle_bio.css('display', 'none');
        director_bio.css('display', 'none');
    }
}