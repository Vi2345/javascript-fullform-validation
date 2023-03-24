const form=document.getElementById("form");
const gender=document.getElementById("gender");
const generror=document.getElementById("g-error");
var fField=document.getElementById("fname");
var flabel=document.getElementById("flabel");
var ferror=document.getElementById("f-error");
var lField=document.getElementById("lname");
var llabel=document.getElementById("l-label");
var lerror=document.getElementById("l-error");
var emailField=document.getElementById("mail");
var emaillabel=document.getElementById("mail-label");
var emailerror=document.getElementById("e-error");
var mField=document.getElementById("mobile");
var mlabel=document.getElementById("mobile-label");
var merror=document.getElementById("m-error");
var addField=document.getElementById("address");
var addlabel=document.getElementById("address-label");
var adderror=document.getElementById("a-error")
var selectField=document.getElementById("state");
var selectlabel=document.getElementById("select-label");
var selecterror=document.getElementById("s-error");
var disField=document.getElementById("district");
var dislabel=document.getElementById("district-label");
var diserror=document.getElementById("d-error");
var pinField=document.getElementById("pincode");
var pinlabel=document.getElementById("pincode-label");
var pinerror=document.getElementById("p-error");

function validatefname()
{
    if(fField.value===""){
    ferror.innerHTML="please enter the First name";
    fField.style.border="2px solid red";
    return false;
    }
    else if(fField.value.length<4 || fField.value.length>15){
        ferror.innerHTML="Characters of the First name should be Min 4 and Max 15";
        fField.style.border="2px solid red";
        return false;
    }

    else{
        ferror.innerHTML="";
        fField.style.border="2px solid green";
        return true; 

    }

}

function validatelname()
{
    if(lField.value===""){
    lerror.innerHTML="please enter the Last name";
    lField.style.border="2px solid red";
    return false;
    }
    else if(lField.value.length<4 || lField.value.length>15){
        lerror.innerHTML="Characters of the Last name should be Min 4 and Max 15";
        lField.style.border="2px solid red";
        return false;
    }

    else{
        lerror.innerHTML="";
        lField.style.border="2px solid green";
        return true; 

    }

}

function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
}

function validatenumber()
{
    if(mField.value===""){
    merror.innerHTML="please enter your Mobile number";
    mField.style.border="2px solid red";
    return false;
    }
    else if((isNaN(mField.value) || mField.value.length<10 || mField.value.length>10)){
        merror.innerHTML="please enter the valid mobile number ";
        mField.style.border="2px solid red";
        return false;
    }

    else{
        merror.innerHTML="";
        mField.style.border="2px solid green";
        return true; 

    }

}
function validateaddress()
{
    if(addField.value===""){
        adderror.innerHTML="Address cannot be blank";
        addField.style.bordercolor="red";
        return false;
        }

        else if(!addField.value.match(/^[a-z A-Z 0-9.]*$/)){
            adderror.innerHTML ="Please Enter a Valid address";
            addField.style.border = "2px solid red";
            return false;
        }
    
        else{
            adderror.innerHTML="";
            addField.style.border="2px solid green";
            return true; 
    
        }
}

function validatestate()
{
    if(selectField.value==="-1"){
        selecterror.innerHTML="select your State";
        selectField.style.border="2px solid red";
        return false;
        }

   else{
        selecterror.innerHTML="";
        selectField.style.border="2px solid green";
       return true; 
    
        }   

}

function validatepincode()
{
    if(pinField.value===""){
        pinerror.innerHTML="Pincode cannot be empty";
        pinField.style.border="2px solid red";
        return false;
        }
        else if(pinField.value.length>6 || pinField.value.length<6){
            pinerror.innerHTML="Maximum six digits required";
            pinField.style.border="2px solid red";
            return false;
        }
    
        else{
            pinerror.innerHTML="";
            pinField.style.border="2px solid green";
            return true; 
    
        }
}

function validatedistrict()
{
    if(disField.value===""){
        diserror.innerHTML="District cannot be black";
        disField.style.border="2px solid red";
        return false;
        }
       
        else if(!disField.value.match(/^[a-z A-Z.]*$/)){
            diserror.innerHTML = "District Should only contain alphabet"; 
            disField.style.border = "2px solid red";
            return false;
        }
        else{
            diserror.innerHTML="";
            disField.style.border="2px solid green";
            return true; 
    
        } 
    
}

form.addEventListener('submit',e=>{
 e.preventDefault();
 checkinput();
})

function checkinput() {
    const firstnamevalue = fField.value.trim();
    const lastnamevalue = lField .value.trim();
    const emailvalue = emailField.value.trim();
    const mobilevalue= mField.value.trim();
    const gendervalue = document.formmy.gender.value;
    const addressvalue = addField.value.trim();
    const selectvalue= selectField.value.trim();
    const pincodevalue = pinField.value.trim();
    const districtvalue = disField.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (!gender.length) {
        generror.innerHTML = "please click your gender";
        return false;
    }
    
    var checkboxes =document.getElementsByName('languages');
    var langerror = document.getElementById("lang-error");
    var languages="";
    var n=0;
    for(i=0; i<checkboxes.length; i++){
        if (checkboxes[i].checked){
        languages += checkboxes[i].value + " ";
        n++;
        }
    }
    if (n == 0){
        langerror.innerHTML="select the language";
        return false;
    }

    document.write("First Name:"+" "+firstnamevalue + "<br>");
    document.write("Last Name:"+" " +lastnamevalue + "<br>");
    document.write("Gender:"+" " + gendervalue + "<br>");
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Phone Number:"+" " +mobilevalue + "<br>");
    document.write("Address:"+" " + addressvalue + "<br>");
    document.write("State:"+" " + selectvalue + "<br>");
    document.write("District:"+" " + districtvalue + "<br>");
    document.write("Language:"+" " + languages + "<br>");
    document.write("Pincode:"+" " + pincodevalue + "<br>");


}
