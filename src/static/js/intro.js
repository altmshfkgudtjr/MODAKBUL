function set_display(type) {
    let intro_main = $('.intro_main');
    let principle_bio = $('.principle_bio');
    let director_bio = $('.director_bio');
    let contacts = $('.cotacts');

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
