// what's a JSON.strigifi and JSON.parse:used to convert the js object to the json string

//what's JSON.stringify and JSON.parse:used to get java script object back

const user = {
    name: "piyush",
    age: 24
}
let jsonobj = JSON.stringify(user)//it convert the js object to the json string
console.log(jsonobj)
// console.log(jsonobj.name)//undefined bcz name property doesn't exist
// let backobj = JSON.parse(jsonobj)//back to get a js object
// console.log(backobj.name)

// localStorage.setItem("test", jsonobj)