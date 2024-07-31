const userData = [
	{
		name : 'Duc Hung',
		age : 18,
		jobs : "Database Engineering",
	}, {
		name : 'Duc Dung',
		age : 22,
		jobs : "Restaurant Manage",
	},
];

for(let i = 0; i < userData.length; i++) {
	console.log(`${userData[i].name}'s properties are: `);
	console.log(` name : ${userData[i].name}`);
	console.log(` age : ${userData[i].age}`);
	console.log(` jobs : ${userData[i].jobs}`);
}
