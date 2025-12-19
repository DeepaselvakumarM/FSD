// let names:string="Deepa"
// let age:number=23
// console.log(names,age)

// enum Status {
//   LOADING="done",
//   SUCCESS="ok",
//   ERROR=200
// }

// let state: Status = Status.LOADING;

// console.log(state)



type userID=number| string
type userStatus="active"|"inactive" | "blocked"

enum Role{
    admin="admin",
    user="user",
    guest="guest"
}

interface User{
    id:userID;
    name:string;
    age:number;
    verified:boolean;
    role:Role;
    status:userStatus;
    skills:string[];
    location?:string;
}


const companyname="Tech"
let users:User[]=[]

function addUser(user:User):void{
    users.push(user)
    console.log(users)
}

let search="Deepa"


let api:any={
    name:"Deepa",
    age:22,
    verified:true,
    role:Role.user,
    status:"active",
    skills:["React","Type"
    ]
}

addUser(api)


function login(user:User):boolean{
    return user.verified && user.status=="active"
}