//case3:block scope

//defination:block scope:variable declared in any block rather than function block is called block block level variable and that region is called block scope



    {
        //block scope
       let a=89
       var b=77
       const c=44
       // we are trying to eccess blaock variable from the bloack scope
       //console.log(a)
       //console.log(b)
       //console.log(c)
    }


//from the global scope
//console.log(a)
//console.log(c) 
console.log(b)








//conclustion

////if let,var,const are declared in block scope than only let and const are treated a block scope where as var is treated as outside the block.

// so if outside the block there is function then it is treatd as local variable  and if outsite is not any function then it is treated as global variable