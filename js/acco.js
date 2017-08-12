var fdb = new ForerunnerDB();
var db = fdb.db('acco')
var accoCollection = db.collection('acco')



accoCollection.load();


 


$("#sub").click(su)




function su() {
	var p = confirm("確認支出: 日期:  " + $("#a").val() + ". 類別:  " + $("#no").val() + ".  項目:  " + $("#b").val() + ". 金額" + $("#c").val() + ".")
	if(p == 1){



		var date = $("#a").val();
var category = $("#no").val();
var item = $("#b").val();
var cost = $("#c").val()

var newacco = {
	date: date,
	category: category,
	item: item,
	cost: cost

}
accoCollection.insert(newacco);
accoCollection.save();

	alert("儲存成功")




	}else{

	}
}