var fdb = new ForerunnerDB();
var db = fdb.db('acco')
var accoCollection = db.collection('acco')
accoCollection.load();

function createhtmlstring(info, date, category, item, cost) {
	return "<tr class = "+ info+" ><td>"+date+"</td><td>"+category+"</td><td>"+item+"</td><td>"+cost+"</td></tr>"
}


setTimeout(function(){
	var Acco = accoCollection.find(
	{},
	{
		$orderBy: {date: -1},
		$limit: 10
	}


	);

	for (var i = 0; i < Acco.length; i++) {
		$("#accotable").append(createhtmlstring("info", Acco[i].date , Acco[i].category, Acco[i].item, Acco[i].cost));
		console.log(Acco[i])
	}
	

}
	, 500);


