function getData() {
	var data = JSON.parse(localStorage.getItem('Users'));
	var table = document.getElementById("userTable");	
	for (var i = 0 ; i < data.Users.length ; i++) 
    {  
		table.innerHTML+=	"<tr>"+
							"<td>"+data.Users[i].Name+"</td>"+
							"<td>"+data.Users[i].Phone+"</td>"+
							"<td>"+data.Users[i].Email+"</td>"+
							"</tr>"			
    }	
	
}

