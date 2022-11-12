function missingNumber (arr){
    let missingNum = [];

    //expect minValue == 1
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    for(let i = minNum; i < maxNum; i++){
        if(arr.indexOf(i) < 0){
            missingNum.push(i)
        }
    }

    return missingNum;
}

console.log(missingNumber([5, 2, 8, 4, 3, 10]));