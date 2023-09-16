function table1(){
        event.preventDefault();
        let fname=document.getElementById("firstname").value;
        let lname=document.getElementById("lastname").value;
        let address=document.getElementById("address").value;
        let pincode=document.getElementById("pincode").value;
        let state=document.getElementById("state").value;
        let country=document.getElementById("country").value;
       let food= document.getElementsByName("food");
       
       let checkcount=0;
       let count;
       let selected = [];
      
       for(count=0;count<food.length;count++){
        if(food[count].checked == true){
            selected.push(food[count].value);
            checkcount++;
            

        }
       }
       
       if(checkcount<2){
        alert("please select atleast 2 food items");
       }
       else{
        var html="";
 
		html="<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+address+"</td><td>"+pincode+"</td><td>"+state+"</td><td>"+country+"</td><td>"+selected.join(", ")+"</td></tr>";
 
		document.getElementById('body').innerHTML += html;
 
		document.getElementById('first-name').value="";
		document.getElementById('last-name').value="";
		document.getElementById('address').value="";
        document.getElementById('pincode').value="";
        document.getElementById('state').value="";
        document.getElementById('country').value="";
       }
       

}

