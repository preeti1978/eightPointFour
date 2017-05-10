import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

myName: String;
divText:String="";

	// property for event object
  event:Object={
  	name:"",
  	username:"",
	email:"",
	mobile:"",
  	pwd:"",
  	confirmpwd:""
  }

  
  
nameInvalid;usernameInvalid;emailInvalid;mobileInvalid;pwdInvalid;confirmpwdInvalid;nameIsAvnesh;

//function for validating the iform
  validateMe=function(form){
this.nameInvalid=false;
this.usernameInvalid=false;
this.emailInvalid=false;
this.mobileInvalid=false;
this.pwdInvalid=false;
this.confirmpwdInvalid=false;
this.nameIsAvnesh=false;
 	//validate name
   this.event = form;
   if ((this.event.name.length<2)||(this.event.name.length>50)) this.nameInvalid=true;
   if (this.event.name.toUpperCase()=='AVNESH') this.nameIsAvnesh=true;

//validate password
var passw=  /^[A-Za-z]\w{7,14}$/;  
if(!this.event.pwd.match(passw))
 	this.pwdInvalid=true;

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(this.event.email) == false) 
            {
               this.emailInvalid=true;
            }

if (this.event.pwd!=this.event.confirmpwd) this.confirmpwdInvalid=true;

  }

 checkIfAvnesh=()=>{

  	if (this.myName.toUpperCase()=='AVNESH'){
  		this.divText = "Hello Avnesh";
  	}
  	else
  		this.divText = "Hi! Thanks";
  }

}
