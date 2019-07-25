function A_JAX(url, type, token, data){
    var ajax_;
    var json_data = data;
    if(token == null)
    {
        ajax_ = $.ajax({
            type: type,
            url: url,
            data: json_data,
            dataType : "json",
            success: function(res){
            },
            error: function(res){
                snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
            }
        });
    }
    else
    {
        ajax_ = $.ajax({
            type: type,
            url: url,
            headers: {"Authorization": 'Bearer ' + token },
            data: json_data,
            processData: false,
            contentType: false,
            dataType : "json",
            success: function(res){},
            error: function(res){
                snackbar("일시적인 오류로 정보를 가져오지 못하였습니다.");
            }
        });
    }
    return ajax_;
}

