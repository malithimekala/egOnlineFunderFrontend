<%@page import="model.Funder"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Funder Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css"> 
<script src="components/jquery-3.2.1.min.js"></script>
<script src="components/main.js"></script>
</head>
<body>
<div class="container"> 
		<div class="row">  
		
			<div class="col-8">       
				<h1 class="m-3">Funder Management</h1>        
				
				<form id="formFunder" name="formFunder" method="post" action="funder.jsp">  
					Name:  
					<input id="name" name="name" type="text" class="form-control form-control-sm">  
					
					<br> 
					Email:  
					<input id="email" name="email" type="text" class="form-control form-control-sm">  
					
					<br>
					 Contact:  
					 <input id="contact" name="contact" type="text" class="form-control form-control-sm">  
					 
					 <br> 
					 Type:  
					 <input id="type" name="type" type="text" class="form-control form-control-sm"> 


					 
					 <br>  
					 <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">  
					 <input type="hidden" id="hidFunderIDSave" name="hidFunderIDSave" value=""> 
					 
				</form> 
				<br>
				
				<div id="alertSuccess" class="alert alert-success"></div>  
				<div id="alertError" class="alert alert-danger"></div> 
				
				<br>  
				<div id="divItemsGrid">   
					<%    
						Funder funderObj = new Funder();
						out.print(funderObj.readFunder());   
					%>  
					
				</div> 
				  
 			</div>
 		 
 		</div>    
 		
 
	</div> 

</body>

</html>