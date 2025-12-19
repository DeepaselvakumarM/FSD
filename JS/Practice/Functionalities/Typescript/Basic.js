// let names:string="Deepa"
// let age:number=23
// console.log(names,age)
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
    Role["guest"] = "guest";
})(Role || (Role = {}));
var companyname = "Tech";
var users = [];
function addUser(user) {
    users.push(user);
    console.log(users);
}
var search = "Deepa";
var api = {
    name: "Deepa",
    age: 22,
    verified: true,
    role: Role.user,
    status: "active",
    skills: ["React", "Type"
    ]
};
addUser(api);
