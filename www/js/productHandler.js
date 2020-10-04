var productHandler={
addProduct: function(name, type, dateTime, price, note, nameReport, serviceRating , cleanRating , foodRating ){
    database.db.transaction(
        function(tx){
            tx.executeSql(
                "insert into restaurant(name, type, bussinesstime, price, note, namereport, service_rating , cleanning_rating , food_rating) values(?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [name, type, dateTime, price, note, nameReport, serviceRating , cleanRating , foodRating],
                function(tx, results){},
                function(tx, error){
                    console.log("add product error: " + error.message);
                }
            );
        },
        function(error){},
        function(){}
    );
}
}


