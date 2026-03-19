function create_function( name,callback){
  let greet_kash=`hello ${name}`
  callback(greet_kash)
  
}

create_function("dimple",(msg)=>{
   console.log(msg)
})