//連續的zero得到數字

function maxZeros(nums){

    var i=0; 
    var save=[];
    var n=1 ;
    while(i<= nums.length){

        if(nums[i]==nums[i+1]==0){
            n =n+1 ;
            save.push(n);
        }
        else{
            n=1 ;
            save.push(parseInt("0"));
        }
        i++ ;
    }
    console.log(save);
}
    
//test
maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4 
maxZeros([1, 1, 1, 1, 1]); // 得到 0 
maxZeros([0, 0, 0, 1, 1]) ;// 得到 3

