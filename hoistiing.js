bar();

function bar() { console.log(hi) };
//
var a = y();

function y() { console.log('a+b') };
///
var display = {
    place: 'tx',
    city: 'houston',
}
console.log(display.city);
console.log(display.place);
////
var info = {
    company: 'Tcs',
    job: 'developer',
    payforthejob: function() {
        console.log('$75,000/annum')
    }
}

console.log(info.payforthjob);
console.log(info.payforthejob());
console.log(info.company);
console.log(info.job);
///
var info = {
    company: 'Tcs',
    job: 'developer',
    payforthejob: function() {
        console.log('$75,000/annum')
    }
}

console.log(info.company);
console.log(info.job);
console.log(info.payforthjob);
console.log(info.payforthejob());
///
var x = function() { console.log('y') };
console.log(y);
console.log(y());
///
var y;
console.log(y);
hello = function() { console.log('how are you') };
console.log(y);
console.log(y());
//Hoisting
Wherever a
var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout.
The
var declaration is conceptually "moved"
to the top of its enclosing scope.Technically, this process is more accurately explained by how code is compiled, but we can skip over those details
for now.
var x = 25;
bar();

function bar() {
    x = 45;
    console.log(x);

    var x;
}