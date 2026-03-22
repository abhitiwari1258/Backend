use('myData')

// db.createCollection('users')

// ordered

// db.users.insertMany([
//     {
//         _id:1,
//         name:"a"
//     },
//     {
//         _id:2,
//         name:"b"
//     },
//     {
//         _id:1,
//         name:"c"
//     },
//     {
//         _id:3,
//         name:"d"
//     }
// ])

// unordered

db.users.insertMany([
    {
        _id:1,
        name:"a"
    },
    {
        _id:2,
        name:"b"
    },
    {
        _id:1,
        name:"c"
    },
    {
        _id:3,
        name:"d"
    }
],{ordered: false})