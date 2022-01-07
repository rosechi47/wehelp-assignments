function avg(data){
	var count = parseInt(data["count"]) ;

	var team = []; //name+salary
	for(var i=0;i<count;i++){
		team.push(data["employees"][i]);
	}

	var salary=[];//共有多少salary的list
	for(var j=0;j<count;j++){
		salary.push(team[j]["salary"]);
	}

	var sum=0;//加起來是多少
	for(var k=0;k<count;k++){
		sum = sum+salary[k]
	}

	ans = sum/count;
	console.log(ans) ;
}
	
//test//
avg({
	"count":3,
	"employees":[ 
	{"name":"John","salary":30000 },
	{"name":"Bob","salary":60000 },
	{"name":"Jenny","salary":50000 }
	]
}); // 呼叫 avg 函式