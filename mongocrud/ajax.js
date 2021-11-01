var empData = {};
function showData() {
        $("#empname").text(empData.empName);
        $("#empage").text(empData.empAge);
        $("#empLocation").text(empData.empLocation);
        $("#gender").text(empData.Gender);
};
 


function makeajax() {

    console.log("About to call AJAX to get Employee Data");

    $.ajax(
        {

            url: "http://localhost:8085/employee/fetch",
            method: "GET",
            dataType: 'JSON',
            async: false,
            success: (posRes) => {
                console.log("AJAX CALL IS SUCESS");
                console.log(posRes);
                empData = posRes[4];
                showData();
            },
            error: (errRes) => {
                console.log("Error in Middle ware Call");
                console.log(errRes);
            }
        });
} 
            
