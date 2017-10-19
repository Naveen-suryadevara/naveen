var clientData = {      //client data is an object
    id: 094545,
    fullName: "Not Set", /// It is a method
       setUserName: function (firstName, lastName)  { // setusername is a method
        
      this.fullName = firstName + " " + lastName;  // This is an object,fullname is a property
    }
}

function getUserInput(firstName, lastName, callback)  {
        callback (firstName, lastName); // function execution
}
getUserInput ("Barack", "Obama", clientData.setUserName); ///barack& obama are the properties

console.log (clientData.fullName); // notset
console.log (window.fullName); // barack obama
/////////////////////////////
var clientData = {      //client data is an object
    id: 094545,
    fullName: "Not Set", /// It is a method
       setUserName: function (firstName, lastName)  { // setusername is a method
        
      this.fullName = firstName + " " + lastName;  // This is an object,fullname is a property
    }
}
function getUserInput(firstName, lastName, callback, callbackObj)  {
   
        callback.apply (callbackObj, [firstName, lastName]);
}
getUserInput ("Barack", "Obama", clientData.setUserName, clientData); ///(propterty,Parameter,parameter)

console.log (clientData.fullName); 
