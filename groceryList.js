$(document).ready(function() {
	
	//on click print function
	document.getElementById("print").onclick = printChecked;
		
		
	//store checked items for all categories
	var options = { container: $('.category1'), showIndeterminate: true };
		$('#mainCheckbox1').checkAll(options);
	 
	var options2 = { container: $('.category2'), showIndeterminate: true };
		$('#mainCheckbox2').checkAll(options2);
		
	var options3 = { container: $('.category3'), showIndeterminate: true };
		$('#mainCheckbox3').checkAll(options3);
		
	var options4 = { container: $('.category4'), showIndeterminate: true };
		$('#mainCheckbox4').checkAll(options4);
		
	var options5 = { container: $('.category5'), showIndeterminate: true };
		$('#mainCheckbox5').checkAll(options5);
		
	var options6 = { container: $('.category6'), showIndeterminate: true };
		$('#mainCheckbox6').checkAll(options6);
		
	var options7 = { container: $('.category7'), showIndeterminate: true };
		$('#mainCheckbox7').checkAll(options7);
		
	var options8 = { container: $('.category8'), showIndeterminate: true };
		$('#mainCheckbox8').checkAll(options8);


	  
			
			

			

	//function for printing checked items	
	function printChecked(divName) {
		
		//format contents to be printed
		var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
		var labels, index;
	  
		//print inputs and and checked items
		var items=document.getElementsByTagName('input');
		var selectedItems="";
			for(var i=0; i<items.length; i++){
				if(items[i].type=='checkbox' && items[i].checked==true && items[i].value!="checkuncheck")
					printContents+=items[i].value+"<br />";
			}



	   
	 
	  



	//finish print formatting
	 printContents +='</tbody></table>';

	//open print window and print
	 w=window.open();
	 w.document.write(printContents);
	 w.print();
	 w.close();
	}

});