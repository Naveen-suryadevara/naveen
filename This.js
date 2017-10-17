var mySampleFun= function() {
    mySample= function() {
    console.log(this.city);
   }
 }

var foo= {
     country:'USA',
     city:'Houston',
}

var bar= {
   country:'uk',
   city:'austria',
  }

mySampleFun(foo);  // console.log(foo)
mySampleFun(bar);  // console.log(bar)

foo.mySample();  // Houston
bar.mySample();  // austria