//https://www.chartjs.org/docs/latest/ 출처참고
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

function pie(id_, title_, labels_, data_, bgcolor_, tfsize_, lfsize_, fcolor_) {
var ctx = document.getElementById(id_);
function op100(value, index, array) {
    return value + "FF";
}
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