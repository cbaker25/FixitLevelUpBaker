let allNames = ""
let oldName = ""

companyDrop1.onclick=function(){
    if (typeof(s) == "object"){  
    return                
  } else {
    companyDrop1.value = s
    oldName = s
    console.log(oldName)
    }
}

deleteUpdateCustomer.onshow=function(){
  
      let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)
 
    if (req1.status == 200) { 
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            companyDrop1.clear()
            allNames = ""
                for (i = 0; i <= allCustomerData.length - 1; i++) {
                    companyDrop1.addItem(allCustomerData[i][1])
                    allNames = allNames + allCustomerData[i][1] + "\n"
                    textOutput1.value = allNames
 
        }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

Button2.onclick=function(){
   if (Radiobutton1.value == 0) {
         let newName = Input7.value
    
    var query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query);
 
    if (req1.status == 200) { 
        if (req1.responseText == 500) { 
            var result = JSON.parse(req1.responseText)
            allNames = allNames.replace(oldName, newName)
            textOutput1.value = allNames
        } else
            NSB.MsgBox("There was a problem changing the customer name.")
    } else {
      
        NSB.MsgBox("Error: " + req1.status);
    }  
} else {
     let customerNameDel = oldName
    let found = false
    for (i = 0; i <= allCustomerData.length - 1; i++) {
        if (customerNameDel == allCustomerData[i][1])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + customerNameDel + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + queryDelete)
      if (req1.status == 200) { 
            if (req1.responseText == 500) {
                allNames = allNames.replace(customerNameDel, "")
                txtOutput1.value = allNames
                NSB.MsgBox("You have successfully deleted the customer named " + customerNameDel)
           } else {
                NSB.MsgBox("There was a problem deleting " + customerNameDel + " from the database.")
                }
      } else {
       
        NSB.MsgBox("Error: " + req1.status);
      }
      }
    }
}
Hamburger2.onclick=function(s){
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
}
