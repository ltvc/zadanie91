var a,h;
function getTriangleArea(a, h) {
	if (a<=0 || h<=0)  {
	alert ('Nieprawidłowe dane');
	console.log('Nieprawidłowe dane');}
	var triangleArea=a*h/2;
	return triangleArea;}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
console.log(getTriangleArea(10, 15));
var triangle2Area = getTriangleArea(10, 10);
console.log(getTriangleArea(10, 10));
var triangle3Area = getTriangleArea(5, 20);
console.log(getTriangleArea(5, 20));