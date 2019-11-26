$(document).ready(function() {

	//insert datepicker
	$(".date").datepicker();

	//datepicker function
	  $( function() {
		$( ".datepicker" ).datepicker();
	  } );

	});

	//print function
	function printDiv(divName) {
		
	//format contents to be printed 
	var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
	var labels, index;

	//get and store results chosen from Type dropdown  
	var e1 = document.getElementById("selectT1");
	var option1 = e1.options[e1.selectedIndex].text;

	var e2 = document.getElementById("selectT2");
	var option2 = e2.options[e2.selectedIndex].text;

	var e3 = document.getElementById("selectT3");
	var option3 = e3.options[e3.selectedIndex].text;

	var e4 = document.getElementById("selectT4");
	var option4 = e4.options[e4.selectedIndex].text;

	var e5 = document.getElementById("selectT5");
	var option5 = e5.options[e5.selectedIndex].text;

	var e6 = document.getElementById("selectT6");
	var option6 = e6.options[e6.selectedIndex].text;

	var e7 = document.getElementById("selectT7");
	var option7 = e7.options[e7.selectedIndex].text;

	var e8 = document.getElementById("selectT8");
	var option8 = e8.options[e8.selectedIndex].text;

	var e9 = document.getElementById("selectT9");
	var option9 = e9.options[e9.selectedIndex].text;

	var e10 = document.getElementById("selectT10");
	var option10 = e10.options[e10.selectedIndex].text;

	//cycle through all the input fields
	inputs = document.getElementsByTagName('input');
	for (index = 0; index < 20; ++index) {
	
	//store input name and value
	var fieldName = inputs[index].name;
	var fieldValue = inputs[index].value;
	
	//print date
	if ((index)%2==1 && fieldValue!=""){
	  printContents +='<tr><td><label>'+"Date: "+'</label></td>';
		printContents +='<td>'+fieldValue+'</td></tr>';
	  printContents +='<td><br></td>';
  }
  
  //print class
  else if (fieldValue!=""){
	  printContents +='<tr><td><label>'+"Class: "+'</label></td>';
  printContents +='<td>'+fieldValue+'</td></tr>';
}
	//print type
	 if (index==0 && option1!="Choose") {
	 var fieldOption = option1;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 2 && option2!="Choose") {
		  var fieldOption = option2;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 4 && option3!="Choose") {
		  var fieldOption = option3;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 6 && option4!="Choose") {
		  var fieldOption = option4;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 8 && option5!="Choose") {
		  var fieldOption = option5;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 10 && option6!="Choose") {
		  var fieldOption = option6;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 12 && option7!="Choose") {
		  var fieldOption = option7;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 14 && option8!="Choose") {
		  var fieldOption = option8;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 16 && option9!="Choose") {
		  var fieldOption = option9;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 else if (index == 18 && option10!="Choose") {
		  var fieldOption = option10;
	 printContents +='<tr><td><label>'+"Type: "+'</label></td>';
  	 printContents +='<td>'+fieldOption+'</td></tr>';
	 }
	 



   
 
  


}

	//finish print formatting
	printContents +='</tbody></table>';

	//open print window and print
	w=window.open();
	w.document.write(printContents);
	w.print();
	w.close();
}