function getData() {
	var data = JSON.parse(localStorage.getItem('Users'));
	var table = document.getElementById("userTable");	
	for (var i = 1 ; i <= Object.keys(data).length ; i++) 
    {  
		table.innerHTML+=	"<tr>"+
							"<td>"+data[i].Name+"</td>"+
							"<td>"+data[i].Phone+"</td>"+
							"<td>"+data[i].Email+"</td>"+
							"</tr>"			
    }	
	
}

