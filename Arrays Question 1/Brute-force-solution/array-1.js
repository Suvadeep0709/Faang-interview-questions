const arr=[1,3,7,9,2];
const t=16;
const findTwoSum=(nums,target)=>{
    for(let v=0;v<nums.length;v++){
        const numbertoFind=target-nums[v];
        for(let w=v+1;w<nums.length;w++){
            if(numbertoFind===nums[w]){
                return [v,w];
            }
        }

    }
    return null;

    
};
console.log(findTwoSum(arr,t));