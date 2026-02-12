//case2:local scope

//defination:variable decalred inside a body of  function is  called local variable and that region is called local scope or function scope

function fun()
{
    let a=89
    var b=88
    const c=67
    //we are trying to eccess the local variable from the local scope
    console.log(a,b,c)
    {
        //we are tryioing to eccess local variable from the block scope
        console.log(a,b,c)
    }
}

fun()

//console.log("form global scope",a)
//console.log("form global scope",b)
console.log("form global scope",c)


//local variable is accessible only from the  local scope outside it ca't be accessible














//conclustion 
//if let,var,const are declared in local scope or function scope  than they all are treated as local variable and  accessible from the only local scope  outside the local scope it is not exccesible 

//there is no diffrence b/w let var and const




