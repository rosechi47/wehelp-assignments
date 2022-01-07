function maxProduct(nums){

	var save=[];
	var i = 0 ;
	var n = 1 ;

	while(i<nums.length){

		while(n<nums.length){
			save.push(parseInt(nums[i]*nums[n])) ;
			n = n + 1; 
		}
	i=i+1;
    n=i+1;
}

    console.log(Math.max(...save)); //解構子？？

}

//test
maxProduct([5, 20, 2, 6]); // 得到 120 
maxProduct([10, -20, 0, 3]); // 得到 30 
maxProduct([-1, 2]); // 得到 -2 
maxProduct([-1, 0, 2]); // 得到 0

