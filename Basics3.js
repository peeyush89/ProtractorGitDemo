function add (a,b) {
return a+b;
 }
 console.log(add(2,3));


 //-----------------------Arrays------------------------

 var b =["Hello","4", "abc", "Bye"];

 console.log(b.length);// variable name.lenght is used to get the length of array

 for ( var i=0; i<b.length; i++) {
	//console.log (b[i]);

	console.log(b[0] + b[1] + b[2] + b[3]);
}


//----------------- create an empty array and feed values in it ----------------

var c = new Array ();

c[0]="a";
c[1]="b";
c[2]="3";
c[3]="Peeyush";
c[4]="Mobioquity";

console.log(c.length+ " is the size of array called c");

for (i=0; i<c.length; i++) {

	console.log(c[i]);
}
//----------print array values in reverse------------------

console.log ("reverse order of array c")

for ( j=c.length-1;j>=0;j--) { // length-1 is used to define the maximum index of array

	console.log(c[j]);
}


//------------------String Functions----------------------------------------------

var name ="Peeyush"; // String literal declaration

console.log(name.charAt(3));

var newname=name.concat("Agrawal");
console.log(newname);

console.log(name.indexOf("u"));

console.log(name.slice(1, 4));
//starting index is inclusive - ending index is exclusive

console.log(name.toUpperCase());

var name ="Peeyush   ";

console.log(name.trim());

var name2=new String("Rahul");  // string object declaration