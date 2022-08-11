function idCard()
{
var fname =document.getElementById('fname').value;
var lname =document.getElementById('lname').value;
var adress=document.getElementById('adress'). value;
var age = parseInt(document.getElementById('age').value);
var phonenumber = parseInt(document.getElementById('phonenumber').value);
document.getElementById("postFullName").innerHTML =(fname +lname ); 
     document.getElementById('postadress').innerHTML=(adress);
}
 
       
var numberArray=[];
 
numberArray.push(age,phonenumber);


for (var i=0;i<numberArray.length;i++)
if (numberArray[i]<100)
{
    document.getElementById("age").innerHTML =("Age" +age );
} 
 else if (numberArray[i]>100)
 {
 document.getElementById("phonenumber").innerHTML =("phonenumber" +phonenumber );
 }
    