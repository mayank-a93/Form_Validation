function match(data, key) {	
	var res = [];
	for(var i = 1 ; i <= Object.keys(data).length ; i++)
	{
		if(data[i].Name == key || data[i].Phone == key || data[i].Email == key)
			res.push(i);
	}
	return res;	
}


function search(form) {	
	var data = JSON.parse(localStorage.getItem('Users'));
	var key = form.key.value;
	var res = match(data,key);
	var table = document.getElementById("userTable");	
	table.innerHTML = 	"<thead><tr>"+
						"<th>Name</th>"+
						"<th>Phone Number</th>"+
						"<th>Email</th>"+		
						"</thead></tr>";
	for (var i = 0 ; i < res.length ; i++) 
    {  
		table.innerHTML+=	"<tr>"+
							"<td>"+data[res[i]].Name+"</td>"+
							"<td>"+data[res[i]].Phone+"</td>"+
							"<td>"+data[res[i]].Email+"</td>"+
							"</tr>"			
    }
}

function res() {
	var table = document.getElementById("userTable");	
	table.innerHTML = 	"<thead><tr>"+
						"<th>Name</th>"+
						"<th>Phone Number</th>"+
						"<th>Email</th>"+		
						"</thead></tr>";
    getData();						
}