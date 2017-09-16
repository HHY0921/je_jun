var fdb = new ForerunnerDB();
var db = fdb.db('acco')
var accoCollection = db.collection('acco')
accoCollection.load();





myFunctio()

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
        // console.log(dateString)
        // console.log(dateStrin)








        if ($("input[name=op]:checked").val() == 'thi') {



        var Acco = accoCollection.find({
            date: {
                $gte: dateString,
                $lt: dateStrin
            }

        });
        console.log(Acco)

        var ec = 0;
        var sc = 0;
        var lc = 0;
        var wc = 0;
        var bc = 0;
        var hc = 0;

console.log(ec)

        for (var i = 0; i < Acco.length; i++) {
            if (Acco[i].category == "食") {
                ec += Acco[i].cost / 1;
            } else if (Acco[i].category == "衣") {
                sc += Acco[i].cost / 1;
            } else if (Acco[i].category == "住") {
                lc += Acco[i].cost / 1;
            } else if (Acco[i].category == "行") {
                wc += Acco[i].cost / 1;
            } else if (Acco[i].category == "育") {
                bc += Acco[i].cost / 1;
            } else if (Acco[i].category == "樂") {
                hc += Acco[i].cost / 1;
            }


        }
            console.log(ec)
            console.log(bc)

            var tc = ec + sc + lc + wc + bc + hc;
            $("#ea").text(ec);
            $("#eb").text(Math.round((ec / tc) * 100) + "%");
            $("#sa").text(sc);
            $("#sb").text(Math.round((sc / tc) * 100) + "%");
            $("#la").text(lc);
            $("#lb").text(Math.round((lc / tc) * 100) + "%");
            $("#wa").text(wc);
            $("#wb").text(Math.round((wc / tc) * 100) + "%");
            $("#ba").text(bc);
            $("#bb").text(Math.round((bc / tc) * 100) + "%");
            $("#ha").text(hc);
            $("#hb").text(Math.round((hc / tc) * 100) + "%");
            $("#ta").text(tc)
            
        console.log(ec)




            for (var i = 0; i < Acco.length; i++) {
                $("#accotable").append(createhtmlstring("info", Acco[i].date, Acco[i].category, Acco[i].item, Acco[i].cost));
            }






        } else if ($("input[name=op]:checked").val() == 'oth') {

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


             console.log(Acco)

        var ec = 0;
        var sc = 0;
        var lc = 0;
        var wc = 0;
        var bc = 0;
        var hc = 0;

console.log(ec)

        for (var i = 0; i < Acco.length; i++) {
            if (Acco[i].category == "食") {
                ec += Acco[i].cost / 1;
            } else if (Acco[i].category == "衣") {
                sc += Acco[i].cost / 1;
            } else if (Acco[i].category == "住") {
                lc += Acco[i].cost / 1;
            } else if (Acco[i].category == "行") {
                wc += Acco[i].cost / 1;
            } else if (Acco[i].category == "育") {
                bc += Acco[i].cost / 1;
            } else if (Acco[i].category == "樂") {
                hc += Acco[i].cost / 1;
            }


        }
            console.log(ec)
            console.log(bc)

            var tc = ec + sc + lc + wc + bc + hc;
            $("#ea").text(ec);
            $("#eb").text(Math.round((ec / tc) * 100) + "%");
            $("#sa").text(sc);
            $("#sb").text(Math.round((sc / tc) * 100) + "%");
            $("#la").text(lc);
            $("#lb").text(Math.round((lc / tc) * 100) + "%");
            $("#wa").text(wc);
            $("#wb").text(Math.round((wc / tc) * 100) + "%");
            $("#ba").text(bc);
            $("#bb").text(Math.round((bc / tc) * 100) + "%");
            $("#ha").text(hc);
            $("#hb").text(Math.round((hc / tc) * 100) + "%");
            $("#ta").text(tc)
            
        console.log(ec)





            for (var i = 0; i < Acco.length; i++) {
                $("#accotable").append(createhtmlstring("info", Acco[i].date, Acco[i].category, Acco[i].item, Acco[i].cost));
            }


        }

    }

);








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