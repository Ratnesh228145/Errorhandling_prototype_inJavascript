function getperson(person){
    try{
        if(typeof person!=="object" || !person.name || !person.age){
            throw new Error("Invalid parameter type");
        }
        return `name: ${person.name}, age:${person.age}`;
    }catch(error){
        return error.message;
    }
}

//Expected output
console.log(getperson({name:"Mithun",age:20}));
console.log(getperson({name:"Mithun"}));
console.log(getperson(["name","Mithun"]));