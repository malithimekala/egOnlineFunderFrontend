$(document).ready(function() 
{  
	if ($("#alertSuccess").text().trim() == "")  
	{   
		$("#alertSuccess").hide();  
	} 
	$("#alertError").hide(); 
}); 

//SAVE ============================================ 
$(document).on("click", "#btnSave", function(event) 
{  
	// Clear alerts---------------------  
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text("");  
	$("#alertError").hide(); 

	// Form validation-------------------  
	var status = validateHospitalForm();  
	if (status != true)  
	{   
		$("#alertError").text(status);   
		$("#alertError").show();   
		return;  
	} 

	// If valid------------------------  
	var t = ($("#hidFunderIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "FunderAPI",
		type : t,
		data : $("#formFunder").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onFunderSaveComplete(response.responseText, status);
		}
	});
}); 

function onFunderSaveComplete(response, status){
	if(status == "success")
	{
		var resultSet = JSON.parse(response);
			
		if(resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully Saved.");
			$("#alertSuccess").show();
					
			$("#divItemsGrid").html(resultSet.data);
	
		}else if(resultSet.status.trim() == "error"){
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}else if(status == "error"){
		$("#alertError").text("Error While Saving.");
		$("#slertError").show();
	}else{
		$("#alertError").text("Unknown Error while Saving.");
		$("#alertError").show();
	}
	$("#hidFunderIDSave").val("");
	$("#formFunder")[0].reset();
}

//UPDATE========================================== 
$(document).on("click", ".btnUpdate", function(event) 
		{     
	$("#hidFunderIDSave").val($(this).closest("tr").find('#hidFunderIDUpdate').val());     
	$("#name").val($(this).closest("tr").find('td:eq(0)').text());    
	$("#email").val($(this).closest("tr").find('td:eq(1)').text());     
	$("#contact").val($(this).closest("tr").find('td:eq(2)').text());     
	$("#type").val($(this).closest("tr").find('td:eq(3)').text()); 


});


//Remove Operation
$(document).on("click", ".btnRemove", function(event){
	$.ajax(
	{
		url : "FunderAPI",
		type : "DELETE",
		data : "funderID=" + $(this).data("funderid"),
		dataType : "text",
		complete : function(response, status)
		{
			onFunderDeletedComplete(response.responseText, status);
		}
	});
});

function onFunderDeletedComplete(response, status)
{
	if(status == "success")
	{
		var resultSet = JSON.parse(response);
			
		if(resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully Deleted.");
			$("#alertSuccess").show();
					
			$("#divItemsGrid").html(resultSet.data);
	
		}else if(resultSet.status.trim() == "error"){
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}else if(status == "error"){
		$("#alertError").text("Error While Deleting.");
		$("#alertError").show();
	}else{
		$("#alertError").text("Unknown Error While Deleting.");
		$("#alertError").show();
	}
}

//CLIENTMODEL
function validateFunderForm() {  
	// NAME  
	if ($("#name").val().trim() == "")  {   
		return "Insert name.";  
		
	} 
		 
	 // Email 
	if ($("#email").val().trim() == "")  {   
		return "Insert Email.";  
		
	} 
	
	 // CONTACT  
	if ($("#contact").val().trim() == "")  {   
		return "Insert contact.";  
		
	} 
	 
	 // is numerical value  
	var tmpContact = $("#contact").val().trim();  
	if (!$.isNumeric(tmpContact))  {   
		return "Insert a numerical value for Contact Number.";  
		
	}
	
	// TYPE  
	if ($("#type").val().trim() == "")  {   
		return "Insert TYPE.";  
		
	} 
	 
	 
	 return true;
}