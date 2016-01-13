function getData() {
	var data = JSON.parse(localStorage.getItem('Users'));
	var table = document.getElementById("userTable");
	for (var i = 0 ; i < data.length ; i++) 
    {  
		var tr = document.createElement("tr");	
		tr.append("<td>" + data[i].Name  + "</td>");
		tr.append("<td>" + data[i].Phone + "</td>");
		tr.append("<td>" + data[i].Email + "</td>");           
        table.appendChild(tr);     	                
    }	
}

