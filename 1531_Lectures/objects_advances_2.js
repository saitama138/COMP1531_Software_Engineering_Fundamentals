const userData = {
	Sally : {
		age : 18,
		height : "186cm",
	}, 
	Bob : {
		age : 17,
		height : "188cm",
	},
};

for(const key in userData) {
	console.log(` ${key}'s are properties : `);
	for(const key2 in userData[key]) {
		console.log(` ${key2}: ${userData[key][key2]}`);
	}
}
