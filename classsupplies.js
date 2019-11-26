$(document).ready(function() {
	
	//print on click
	document.getElementById("print").onclick = printChecked;
	
	//store checked options
	var options = { container: $('.category9'), showIndeterminate: true };
		$('#mainCheckbox1').checkAll(options);
	 
	var options2 = { container: $('.category10'), showIndeterminate: true };
		$('#mainCheckbox2').checkAll(options2);
		

	//function to print checked items	
	function printChecked(divName) {
		
		//format checked options
		var printContents = '<div id="print-content"><form><table width="30%"><tbody>';
		var labels, index;
	  
		//print checked items
		var items=document.getElementsByTagName('input');
		var selectedItems="";
			for(var i=0; i<items.length; i++){
				if(items[i].type=='checkbox' && items[i].checked==true && items[i].value!="checkuncheck")
					printContents+=items[i].value+"<br />";
			}


	//finish formatting
	 printContents +='</tbody></table>';

	//open window and print
	 w=window.open();
	 w.document.write(printContents);
	 w.print();
	 w.close();
	}

});