//시간 보여주는 함수
function printClock() {   
    var clock = document.getElementById("M_statistics_time_js");            // 출력할 장소 선택
    var currentDate = new Date();                                     // 현재시간
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = 'AM'; // 초기값 AM
    var currentHours = addZeros(currentDate.getHours(),2); 
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);
    
    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
        amPm = 'PM';
        currentHours = addZeros(currentHours - 12,2);
    }
    clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:50px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
}
function addZeros(num, digit) { // 자릿수 맞춰주기
      var zero = '';
      num = num.toString();
      if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
          zero += '0';
        }
      }
      return zero + num;
}

//https://www.chartjs.org/docs/latest/ 출처참고
//막대그래프
function hist(id_, title_, labels_, data_, bgcolor_, tfsize_, lfsize_, fcolor_) {
    var ctx = document.getElementById(id_);
    function op100(value, index, array) {
        return value + "FF";
    }
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels_,
            datasets: [{
                label: ' ',
                data: data_,
                backgroundColor: bgcolor_.map(op100),
                borderColor: bgcolor_.map(op100),
                borderWidth: 1
            }]
        },
        options:{
             tooltips: {
                titleFontSize: lfsize_,
                bodyFontSize: lfsize_,
                //titleFontFamily: ,
                //bodyFontFamily: ,
            },
            legend: {
                display: false,
                //fontFamily: ,
            },
            title: {
                display: (title_ == "") ? false:true,
                text: title_,
                fontSize : tfsize_,
                fontColor: fcolor_,
                //fontFamily: ,
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });
}
//원형그래프
function pie(id_, title_, labels_, data_, bgcolor_, tfsize_, lfsize_, fcolor_) {
    var ctx = document.getElementById(id_);
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels_,
            datasets: [{
                label: ' ',
                data: data_,
                backgroundColor: bgcolor_.map(op100),
                borderColor: bgcolor_.map(op100),
                borderWidth: 1
            }]
        },
        options:{
            legend: {
                display: true,
               labels: {
                    fontSize : lfsize_,
                    fontColor: fcolor_,
                    //fontFamily: ,
                }
            },
            title: {
                display: (title_ == "") ? false:true,
                text: title_,
                fontSize : tfsize_,
                fontColor: fcolor_,
                //fontFamily: ,
            },
             tooltips: {
                titleFontSize: lfsize_,
                bodyFontSize: lfsize_,
                //titleFontFamily: ,
                //bodyFontFamily: ,
            }
           
        }
    });
}
//선형그래프
function line(id_, title_, labels_, data_, bgcolor_, tfsize_, lfsize_, fcolor_) {
    var ctx = document.getElementById(id_);
    function op100(value, index, array) {
        return value + "FF";
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_,
            datasets: [{
                label: ' ',
                data: data_,
                backgroundColor: "#00000000",
                borderColor: bgcolor_,
                borderWidth: 2
            }]
        },
        options:{
            legend: {
                display: false,
            },
            title: {
                display: (title_ == "") ? false:true,
                text: title_,
                fontSize : tfsize_,
                fontColor: fcolor_,
                //fontFamily: ,
            },
             tooltips: {
                titleFontSize: lfsize_,
                bodyFontSize: lfsize_,
                displayColors: true,
                //titleFontFamily: ,
                //bodyFontFamily: ,
            },
             scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                    fontSize : tfsize_,
                    fontColor: fcolor_,
                }
                }],
                xAxes: [{
                    display: true,
                    ticks: {
                    fontSize : tfsize_,
                    fontColor: fcolor_,
                }
                }]
            }
           
        }
    });
}

//날짜 list 형식으로 calculate 함수
//'today' or 'week' or 'month' 를 인자로 넘긴다.
function calculate_date_list(what) {
    let currentDate = new Date();
    let date_one = currentDate.getDate();
    let date_week = [];
    let date_month = [];
    if (what == 'today'){
        return date_one;   
    } else if (what == 'week'){
        for (let i = 0; i < 7; i++){
            currentDate.setDate(currentDate.getDate() - 1)
            date_week.push(currentDate.getDate());
        }
        return date_week.reverse();
    } else if (what == 'month'){
        currentDate.setDate(currentDate.getDate() - 1);
        date_month.push(currentDate.getDate());
        for (let i = 0; i < 6; i++){
            currentDate.setDate(currentDate.getDate() - 5);
            date_month.push(currentDate.getDate());
        }
        return date_month.reverse();
    }
}

//AJAX 데이터 요청 밎 송신 (what == 'visitor' or 'post' or 'both')
function visitor_post_graph(what, who){
    let a_jax = A_JAX(TEST_IP+'visitor_analysis/'+31, "GET", null, null);
    $.when(a_jax).done(function(){
        let json = a_jax.responseJSON;
        if (json['result'] == 'success'){
            if (who == 'visitor'){
                draw_visitor_graph(what, json);
            } else if (who == 'post'){
                draw_post_upload_graph(what, json);
            } else if (who == 'both'){
                draw_visitor_graph(what, json);
                draw_post_upload_graph(what,json);
            }
        } else {
            snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
            return;
        }
    });
}

//방문자수 그래프 그리는 함수 (what == 'week' or 'month')
function draw_visitor_graph(what, json) {
    let user_color = json['user_color'];
    let font_color;
    var graph_lable_name = calculate_date_list(what);
    var graph_lable_value = [];    // 연산값
    let visitor_cnt_list = json['visitor_cnt_list'];
    let total_visitor = json['total_visitor'];
    $('#M_statistics_today_data').empty();
    $('#M_statistics_today_data').append(visitor_cnt_list[visitor_cnt_list.length-1]['visitor_cnt']);  //오늘 방문자수
    $('#M_statistics_today_all_data').empty();
    $('#M_statistics_today_all_data').append(total_visitor);
    //visitor_cnt_list 가 7개 미만일 경우
    if (visitor_cnt_list.length < 7){
        graph_lable_name = [];
        for (let i =0; i< visitor_cnt_list.length; i++){
            let time = new Date(Date.parse(visitor_cnt_list[i]['v_date']));
            graph_lable_name.push(time.getDate()*1);
        }
    }
    if (what == 'week'){
        for (let i = visitor_cnt_list.length - 7; i< visitor_cnt_list.length; i++){
            graph_lable_value.push(visitor_cnt_list[i]['visitor_cnt']*1);
        }
    } else if (what == 'month'){
        let j = 6;
        for (let i = visitor_cnt_list.length - 1; i >= 0; i--){
            let time = new Date(Date.parse(visitor_cnt_list[i]['v_date']));
            if (time.getDate()*1 == graph_lable_name[j]){
                graph_lable_value.unshift(visitor_cnt_list[i]['visitor_cnt']);
                j -= 1;
            }
        }
        if (graph_lable_value.length != 7){
            let value_list_len = 7 - graph_lable_value.length;
            for (let i = 0; i < value_list_len; i++){
                graph_lable_value.unshift(0);
            }
        }
    }
    if (what == 'today'){
        return visitor_cnt_list[visitor_cnt_list.length-1]['visitor_cnt'];
    } else {
        if (localStorage.getItem('modakbul_theme') != null){
            if (localStorage.getItem('modakbul_theme') == 'white'){
                font_color = '#5f6f81';
            } else {
                font_color = '#e2e2e2';
            }
        }
        $('#M_today_visitors_graph').remove();
        $('#M_statistics_graph_visitor_js').empty();
        $('#M_statistics_graph_visitor_js').append('<canvas id="M_today_visitors_graph" width="auto" height="auto"></canvas>');
        //선형 그래프
        line(
            "M_today_visitors_graph",   // target ID
            "방문자 수",                 // graph title
            graph_lable_name,           // lable_name_list
            graph_lable_value,          // lable_value_list
            user_color,                // line_color
            20,                         // title_font_size
            20,                         // label_font-size
            font_color                  // font_color
            );
    }
}

//포스트 업로드 그래프 그리는 함수 (what == 'week' or 'month')
function draw_post_upload_graph(what, json) {
    let user_color = json['user_color'];
    let font_color;
    var graph_lable_name = calculate_date_list(what);
    var graph_lable_value = [];    // 연산값
    let a_jax = A_JAX(TEST_IP+'visitor_analysis/'+31, "GET", null, null);
    let visitor_cnt_list = json['visitor_cnt_list'];
    let total_visitor = json['total_visitor'];
    $('#M_statistics_today_data').empty();
    $('#M_statistics_today_data').append(visitor_cnt_list[visitor_cnt_list.length-1]['visitor_cnt']);  //오늘 방문자수
    $('#M_statistics_today_all_data').empty();
    $('#M_statistics_today_all_data').append(total_visitor);
    //visitor_cnt_list 가 7개 미만일 경우
    if (visitor_cnt_list.length < 7){
        graph_lable_name = [];
        for (let i =0; i< visitor_cnt_list.length; i++){
            let time = new Date(Date.parse(visitor_cnt_list[i]['v_date']));
            graph_lable_name.push(time.getDate()*1);
        }
    }
    if (what == 'week'){
        for (let i = visitor_cnt_list.length - 7; i< visitor_cnt_list.length; i++){
            graph_lable_value.push(visitor_cnt_list[i]['visitor_cnt']*1);
        }
    } else if (what == 'month'){
        let j = 6;
        for (let i = visitor_cnt_list.length - 1; i >= 0; i--){
            let time = new Date(Date.parse(visitor_cnt_list[i]['v_date']));
            if (time.getDate()*1 == graph_lable_name[j]){
                graph_lable_value.unshift(visitor_cnt_list[i]['visitor_cnt']);
                j -= 1;
            }
        }
        if (graph_lable_value.length != 7){
            let value_list_len = 7 - graph_lable_value.length;
            for (let i = 0; i < value_list_len; i++){
                graph_lable_value.unshift(0);
            }
        }
    }
    if (what == 'today'){
        snackbar("잘못된 접근입니다.");
        return;
    } else {
        if (localStorage.getItem('modakbul_theme') != null){
            if (localStorage.getItem('modakbul_theme') == 'white'){
                font_color = '#5f6f81';
            } else {
                font_color = '#e2e2e2';
            }
        }
        $('#M_today_post_upload_graph').remove();
        $('#M_statistics_graph_post_upload_js').empty();
        $('#M_statistics_graph_post_upload_js').append('<canvas id="M_today_post_upload_graph" width="auto" height="auto"></canvas>');
        //선형 그래프
        line(
            "M_today_visitors_graph",   // target ID
            "방문자 수",                 // graph title
            graph_lable_name,           // lable_name_list
            graph_lable_value,          // lable_value_list
            user_color,                // line_color
            20,                         // title_font_size
            20,                         // label_font-size
            font_color                  // font_color
            );
    }
}

//document load시 실행되는함수
function statistics(){
    $('html').animate({scrollTop : 0}, 400);
    printClock();   // 현재시간 JS
    visitor_post_graph('both');
}


