var fdb = new ForerunnerDB();
var db = fdb.db('acco')
var accoCollection = db.collection('acco')
accoCollection.load();



function createhtmlstring(info, date, category, item, cost, _id) {
    return "<tr class = "+ info+" ><td>"+date+"</td><td>"+category+"</td><td>"+item+"</td><td>"+cost+"</td> <td> <button class = 'del' data-id =" + _id + " >del</button> </td></tr>"
}


setTimeout(function(){
    var Acco = accoCollection.find(
    {},
    {
       
    }


    );

    for (var i = 0; i < Acco.length; i++) {
        $("#accotable").append(createhtmlstring("info", Acco[i].date , Acco[i].category, Acco[i].item, Acco[i].cost, Acco[i]._id));
        console.log(Acco[i])
    }
    
}

    , 500);


$("#accotable").on("click", ".del", delte)


function delte() {




var id = $(this).attr("data-id")

console.log()
        
        accoCollection.remove({
            _id: id
        });


        $(this).parents("tr").remove();
       accoCollection.save();




}
