use("myDB")

// db.createCollection('users')

// db.users.insertMany([
//     {
//         name:"a",
//         age:12,
//         class: 3
//     },
//     {
//         name:"b",
//         age:14,
//         class: 6
//     },
//     {
//         name:"c",
//         age:11,
//         class: 1
//     }
// ])

db.users.find({name:'a'})

// Projection

db.users.find(
    {name:'a'},
    {name:1,_id:0}
)