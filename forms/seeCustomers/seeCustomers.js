seeCustomers.onshow=function(){
  
    let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)
 
    if (req1.status == 200) { 
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            companyDrop.clear()
            for (i = 0; i <= allCustomerData.length - 1; i++) {
                companyDrop.addItem(allCustomerData[i][1])
 
        }
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    }  
}

companyDrop.onclick=function(){
  
  if (typeof(s) == "object"){  
    return                     
  } else {
    companyDrop.value = s   
    let query = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + companyDrop.value + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)
 
    if (req1.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req1.responseText)
            console.log(allCustomerData)
            console.log(query)
            textOutput.value = allCustomerData[0][0] + '\n'  + allCustomerData[0][1] + '\n' + allCustomerData[0][2]  + " " + allCustomerData[0][3]
    } else {
        
        NSB.MsgBox("Error: " + req1.status);
    }  
  }
}

Hamburger3.onclick=function(){
  if (typeof(s) == "object") 
    return
    switch(s) {
        case "See Customer":
            ChangeForm(seeCustomers)
            break
        case "Add Customer":
            ChangeForm(addcustomer)
            break
        case "Edit Customer":
            ChangeForm(deleteUpdateCustomer)
            break
        case "Delete Customer":
            ChangeForm(deleteUpdateCustomer)
            break
    
    }
    
// hamburger, border color, border style, dropdown color, background 
