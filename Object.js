let user=prompt("Hey there !!!","hloo");
alert(user);

let user1={}
user1.name="sunil";
user1.age=20

let key=prompt("What should i?","greet")
for(let i in user1){
	alert(user1[i]);
}
let isEmpty=(user1)=>{
	for (let i in user1){
		return false;
	}
	return true;
}
alert(isEmpty(user1));

let salaries={
	emp1:2400,
	emp2:3400,
	emp3:5000,
}
sum=0;
for(let i in salaries){
	sum+=salaries[i];
}
alert(sum);

let sizes={
	height:500,
	width:200,
	title:"sas",
}
for(let i in sizes){
	if(typeof(sizes[i])=='number'){
		sizes[i]=sizes[i]*2;
	}
}
for(let i in sizes){
	alert(sizes[i]);
}
