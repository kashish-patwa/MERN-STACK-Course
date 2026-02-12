//case 1:global scope

//defination:variable decalared in a region other that  any function block or any other block than it is called global vriable and that region is called global scope

//global variable is accessible from the any where of the program



//global scope

let a=89
var b=88
const c=67

//we are trying to eccess global avriable from the global scope
//console.log(a)
//console.log(b)
//console.log(c)

function fun()
{
    // we ae trying to eccess from the local scope
    console.log(a)
    console.log(b)
    console.log(c)

    {
          console.log(a)
          console.log(b)
          console.log(c)
    }
}

fun()








//conclustion
//if let,var,const are declared in global scope , than they all are treated as global variable and  accessible from any where of the program

//there is no diffrence b/w let var and const