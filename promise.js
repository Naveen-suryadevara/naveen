/// Pending state
var foo = function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() { 
          console.log('Welcome'); 
          resolve(); 
       }, 5000); 
    });
    return promise;
 };
 foo() 
////
new Promise(function(resolve, reject) {
	
	setTimeout(function() { resolve(5; }, 4000);
})
.then(function(result) {
	console.log(result);
});
////
using multipe timeout's
new Promise(function(resolve, reject) { 
	
	setTimeout(function() { resolve(5); }, 4000);
})
.then(function(num) { 
console.log('first then: ', num); 
   return num * 3; 
})
.then(function(num) { 
console.log('second then: ', num);
 return num * 3; 
})
.then(function(num) {
 console.log('last then: ', num);
});
///
 var req1 = new Promise(function(resolve, reject) { 
	setTimeout(function() { resolve('First!'); }, 5000);
});
var req2 = new Promise(function(resolve, reject) { 
	setTimeout(function() { reject('Second!'); }, 4000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});
//////Reject or resolved
var isMomHappy = false;

// Promise
var willIGetNewCar = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var car = {
                company: 'Cheverlovet',
                model: 'Camero',
                color: 'Blue'
            };
            resolve(car); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
///
var askMom = function () {
    willIGetNewcar
        .then(function (fulfilled) {
           // yay, you got a new car
            console.log(fulfilled);
         // output: { company: 'cheverlovet', model:'Camaero', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
///
var askMom = function () {
    console.log('before asking Mom'); 
    willIGetNewCar
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom'); 
}

askMom()