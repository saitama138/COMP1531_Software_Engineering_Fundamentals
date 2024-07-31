function getEvens(nums) {
	const evens_array = [];
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] % 2 === 0) {
			evens_array.push(nums[i]);
		}
	}
	return evens_array;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEvens(numbers));
