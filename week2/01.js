//目標造一個range跟一個sum

function calculate(min, max){

//range
	var save = [] ;
	while (min <= max) {
		save.push(min) ;
		min = min+1 ;
	}

//sum
	var sum = 0 ;
	for(var i=0 ; i<save.length ; i++){
		sum = sum + save[i] ;
	}
	console.log (sum) ;
}

//test
calculate(1, 3); // 你的程式要能夠計算 1+2+3，最後印出 6 
calculate(4, 8); // 你的程式要能夠計算 4+5+6+7+8，最後印出 30





