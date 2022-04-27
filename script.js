function registration()
		  {
	  
			  var name= document.getElementById("t1").value;
			  var email= document.getElementById("t2").value;
			  var pwd= document.getElementById("t3").value;

			  
			  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
			  var letters = /^[A-Za-z]+$/;
			  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
			  if(name=='')
			  {
				  alert('Please enter your name');
			  }
			  else if(!letters.test(name))
			  {
				  alert('Name field required only alphabet characters');
			  }
			  else if(email=='')
			  {
				  alert('Please enter your user email id');
			  }
			  else if (!filter.test(email))
			  {
				  alert('Invalid email');
			  }
			  else if(pwd=='')
			  {
				  alert('Please enter Password');
			  }
			  else if(!pwd_expression.test(pwd))
			  {
				  alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
			  }
			  else
			  {				                            
					 alert('Thank You for creating account');
			  }
		  }
		  function clearFunc()
		  {
			  document.getElementById("t1").value="";
			  document.getElementById("t2").value="";
			  document.getElementById("t3").value="";
		  }
	  