
//this is  comment
var day=10;
switch(day){
	case 1:
	document.write("<h1>sunday</h2>");
	break;
	case 2 :
	document.write("<h1>monday</h2>");
	break;
	case 3 :
	document.write("<h1>tueday</h2>");
	break;
case 4 :
	document.write("<h1>wednesday</h2>");
	break;
	case 5 :
	document.write("<h1>thurday</h2>");
	break;
	case 6 :
	document.write("<h1>friday</h2>");
	break;
	case 7 :
	document.write("<h1>saturday</h2>");
	break;
	default:
	document.write("<h2>wrong input</h2>");
}
              	
function hello(g,d) {

	var total=g+d;
	return total;

}
	
var o=	hello("<h2>gattamaneni</h2>"," nitheesh");
document.write(o);
var car1="Tesla";
var car2="Ranger Rover Land Rover";
var car3="bmw";
var car=[car1,car2,car3];
document.write(car);
var h=car.length;
document.write(h);