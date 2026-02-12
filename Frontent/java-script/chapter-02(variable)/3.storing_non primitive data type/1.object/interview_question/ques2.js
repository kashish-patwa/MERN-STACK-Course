//create a function multiplybytwo() that multiplies all numeric proerties values of num by 2

let nums = {

    a: 100,
    b: 200,
    title: "my nums"
}

function multiplyByTwo(nums) {
    for (key in nums) {
        if (typeof nums[key] === "number")
            nums[key] = nums[key] * 2
    }
}
multiplyByTwo(nums)

console.log(nums)