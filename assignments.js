$(document).ready(function() {

	//allow users to select a date from a calendar
	$(".date").datepicker();

	//function to allow users to select a date
	  $( function() {
		$( ".datepicker" ).datepicker();
	  } );

	});

	//print contents of form
	function printDiv(divName) {
	 
		//inialize variable to hold contents being printed
		var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
		var inputs, index;
		inputs = document.getElementsByTagName('input');
		
	for (index = 0; index < inputs.length - 1; ++index) {

		//inialize variable to hold contents being printed
		var fieldName = inputs[index].name;
		var fieldValue = inputs[index].value;

		//print due date
		if ((index-2)%3==0 && inputs[index-2].value!=""){
			printContents +='<tr><td><label>'+"Due Date: "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
			printContents +='<td><br></td>';
		}
		//print class
		else if ((index-1)%3==0 && fieldValue!="") {
			printContents +='<tr><td><label>'+"Class: "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
		}
		//print assignment
		else if ((index)%3==0 && fieldValue!="") {
			printContents +='<tr><td><label>'+"Assignment "+((index/3)+1)+": "+'</label></td>';
			printContents +='<td>'+fieldValue+'</td></tr>';
		}
	}

	 printContents +='</tbody></table>';

	//print and close the previous window
	 w=window.open();
	 w.document.write(printContents);
	 w.print();
	 w.close();
}