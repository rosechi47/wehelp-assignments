//把每一個答案算出來記在pos
function twoSum(nums, target){
    
    var i = 0;
    var n = 1 ;
    var pos = [] ; //記錄答案的list
    var save = []; //記錄組合的list
    while (i<nums.length){

        while (n < nums.length){
            pos.push(parseInt(nums[i]+nums[n])) ;
            team = [i,n] ;//把每一個pos的組合存下來
            save.push(team);
            n = n + 1; 
        }
        i=i+1;
        n=i+1;
    }

    var a = 0 ;
    while (a < 100){ 
        if (pos[a] == target){
            console.log(save[a]);
        }
        a = a+1 ;
    }
}
    
//test//
let result=twoSum([2, 11, 7, 15], 9);
console.log(result) ;// show [0, 2] because nums[0]+nums[2] is 9

