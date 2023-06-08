function missingNumber(arr,N){
    const expectedSum = (N * (N+1))/2;
    
    const arrsum = arr.reduce((acc,el)=> acc + el);

    const missingNum = expectedSum - arrsum;

    return missingNum;
}

const numbers = [1,2,4,5,6];
const findMissing = missingNumber(numbers, 6);
console.log(findMissing);