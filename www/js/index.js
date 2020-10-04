$(document).on("ready", function(){
    database.createDatabase();
});
function addProduct(){
    var name = $("#name").val();
    var type = $("#type option:selected").text();
    var dateTime = $("#time option:selected").text();
    var price = $("#price").val();
    var note = $("#note").val();
    var nameReport = $("#nameReport").val();
    var serviceRating = $("#service option:selected").text();
    var cleanRating = $("#clean option:selected").text();
    var foodRating = $("#food option:selected").text();

    if(!name || !price || !nameReport){
        alert("field is require");
    }else{
        var r = confirm(`Name : ${name}
        Type : ${type}
        Date time : ${dateTime}
        Price : ${price}
        Note : ${note}
        Name Report : ${nameReport}
        Service Rating : ${serviceRating}
        Clean Rating : ${cleanRating}
        Food Rating : ${foodRating}`);
                        
        if(r==true){
            productHandler.addProduct(name, type, dateTime, price, note, nameReport , serviceRating , cleanRating , foodRating );
            // $("#name").val("");
            // $("#type").val("");
            // $("#time").val("");
            // $("#price").val("");
            // $("#note").val("");
            // $("#nameReport").val("");
            // $("#service").val("");
            // $("#clean").val("");
            // $("#food").val("");
        }
    }
};




