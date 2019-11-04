let allCusNames = ""

addCustomer.onshow=function(){
      let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)

    if (req1.status == 200) { 
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            for (i = 0; i <= allCustomerData.length - 1; i++) {
                allCusNames = allCusNames + allCustomerData[i][1] + "\n"
                choiceOutput1.value = allCusNames
        }
    } else {
        
        NSB.MsgBox("Error: " + req1.status);
        }
        }
    

Button1.onclick=function(){
    let name = input1.value
    let street = input2.value
    let city = input3.value
    let state = input4.value
    let zipcode = input5.value
    var query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   
            allCusNames += name
            choiceOutput1.value = allCusNames
        } else
            NSB.MsgBox("There was a problem with adding the pet to the database.")
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    }  
}

Hamburger1.onclick=function(s){
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
