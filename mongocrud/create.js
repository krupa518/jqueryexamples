function insertData() {
    console.log("About to call AJAX to get Employee Data");
    var employee = {
        'empName':$('#empName').val(),
        'empAge': $('#empAge').val(),
        'empLocation': $('#empLocation').val(),
        'gender': $("input[name='gender']:checked").val()
        
    };

    $.ajax(
        {

            url: "http://localhost:8085/employee/insert",
            method: "POST",
            dataType: 'JSON',
            data: employee,
            async: false,
            success: (posRes) => {
                console.log("AJAX CALL IS SUCESS");
                console.log(posRes);
               
            },
            error: (errRes) => {
                console.log("Error in Middle ware Call");
                console.log(errRes);
            }
        });
}


