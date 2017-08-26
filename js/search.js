var fdb = new ForerunnerDB();
var db = fdb.db('acco')
var accoCollection = db.collection('acco')
accoCollection.load();

function createhtmlstring(info, date, category, item, cost) {


    return "<tr class = " + info + " ><td>" + date + "</td><td>" + category + "</td><td>" + item + "</td><td>" + cost + "</td></tr>"
}




    $("#search").click(function() {
    		$("#accotable").find("tr").remove()

            var date = new Date();
            var year = date.getUTCFullYear()
            var month = date.getUTCMonth()

            month = month + 1
            var a = month + 1
            if (month < 10) {
                month = "0" + month;
            }
            if (a < 10) {
                a = "0" + a;
            }
            var dateStrin = year + "-" + a;
            var dateString = year + "-" + month;
            console.log(dateString)
            console.log(dateStrin)
            var Acco = accoCollection.find({
                date: {
                    $gte: dateString,
                    $lt: dateStrin
                }

            });


        if ($("input[name=op]:checked").val() == 'thi') {

        	 for (var i = 0; i < Acco.length; i++) {
                $("#accotable").append(createhtmlstring("info", Acco[i].date, Acco[i].category, Acco[i].item, Acco[i].cost));
            }

   } else if($("input[name=op]:checked").val() == 'oth') {

        var fromTime = $("#c").val()
        var toTime = $("#d").val()
        var Acco = accoCollection.find({
            date: {
                $gte: fromTime,
                $lt: toTime
            }
            
        });
        for (var i = 0; i < Acco.length; i++) {
            $("#accotable").append(createhtmlstring("info", Acco[i].date, Acco[i].category, Acco[i].item, Acco[i].cost));
        }
    } else {

    	
        var Acco = accoCollection.find({
           
            
        });
        for (var i = 0; i < Acco.length; i++) {
            $("#accotable").append(createhtmlstring("info", Acco[i].date, Acco[i].category, Acco[i].item, Acco[i].cost));
        }


    }


           

        }
        )


function myFunction() {
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;

}

function myFunctio() {


	$("#c").val("")
	$("#d").val("")
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

}

