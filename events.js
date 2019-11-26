$(document).ready(function() {

	//timepicker function
	$('.timepicker').wickedpicker();

	//datepicker function
	$(".date").datepicker();

	//datepicker function
	  $( function() {
		$( ".datepicker" ).datepicker();
	  });

	});
	
	//function to print options
	function printDiv(divName) {
	 
	 //format print page
	var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
	var inputs, index;
	
	//get all inputs
	inputs = document.getElementsByTagName('input');
	for (index = 0; index < inputs.length - 1; ++index) {

		//store input name and values
		var fieldName = inputs[index].name;
		var fieldValue = inputs[index].value;

		//print selected time
		if ((index-2)%3==0 && inputs[index-2].value!=""){
			printContents +='<tr><td><label>'+"Time "+(((index-2)/3)+1)+": "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
			printContents +='<td><br></td>';
		}
		//print selected date
		else if ((index-1)%3==0 && fieldValue!="") {
			printContents +='<tr><td><label>'+"Date "+(((index-1)/3)+1)+": "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
		}
		//print entered event
		else if ((index)%3==0 && fieldValue!="") {
			printContents +='<tr><td><label>'+"Event "+((index/3)+1)+": "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
		}
	}
	
	//finish print formatting
	printContents +='</tbody></table>';

	//open window and print
	 w=window.open();
	 w.document.write(printContents);
	 w.print();
	 w.close();
}