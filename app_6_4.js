var obj = [
	{
					name: "Kunal Shaw",
					age: 32,
					Salary:45599,
					address:{
							city:'Kolkata',
							State:'West Bengal',
							pincode:743135,
							
					},
				},
	{
		name: "Nick Shaw",
		age: 30,
		Salary:65999,
		address:{
				city:'Purulia',
				State:'West Bengal',
				pincode:743139,
				
		},
	},
	{
		name: "Kumar Shaw",
		age: 29,
		Salary:69999,
		address:{
				city:'Salt Lake',
				State:'West Bengal',
				pincode:110096,
				
		},
	},
	{
		name: "Kunal Shaw",
		age: 32,
		Salary:45599,
		address:{
				city:'Delhi',
				State:'Delhi',
				pincode:110096,
				
		},
	},
	{
		name: "Nick",
		age: 33,
		Salary:75599,
		address:{
				city:'Kuchupuri',
				State:'Warangal',
				pincode:743135,
				
		},
	},
];
for( var n=0; n<obj.length;n++){
	console.log('Employee Name '+parseInt(n+1)+': '+obj[n]['name']);
	console.log('Employee Age '+parseInt(n+1)+': '+obj[n]['age']);
	console.log('Employee Salary '+parseInt(n+1)+': '+obj[n]['Salary']);
	console.log('Employee city '+parseInt(n+1)+': '+obj[n]['address']['city']);
	console.log('Employee State '+parseInt(n+1)+': '+obj[n]['address']['State']);
	console.log('Employee Pincode '+parseInt(n+1)+': '+obj[n]['address']['pincode']);
}

