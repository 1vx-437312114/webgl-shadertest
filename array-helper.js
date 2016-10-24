function createArray(r){var a=new Array(r||0),e=r;if(arguments.length>1)for(var t=Array.prototype.slice.call(arguments,1);e--;)a[r-1-e]=createArray.apply(this,t);return a}
