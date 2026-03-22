show('dbs')

use('shopApp')

// show('dbs')

db.createCollection('users')

// level 2

use('shopApp')

// db.users.insertOne({
//     name:"rahul",
//     email:"rahul@gmail.com",
//     city:'Jaipur',
//     age:22
// })



db.users.insertOne({
    name:"mohan",
    email:"mohan@gmail.com",
    city:'Udaipur',
    age:23
})


use('shopApp')
db.users.insertMany([
    {
        name:"amit",
        email:"amit@gmail.com",
        city:'Rampur',
        age:21
    },
    {
        name:"sumit",
        email:"sumit@gmail.com",
        city:'Gyanpur',
        age:20
    }
])


db.users.find()

db.users.find({
    city:'Gyanpur'
})

// Level 3

use("Ecom")

db.createCollection("Products")

use("Ecom")
db.Products.insertMany([
    {
        name:"Iphone",
        Price: 80000,
        category:'electronics',
        stock:21
    },
    {
        name:"Laptop",
        Price: 100000,
        category:'electronics',
        stock:20
    },
    {
        name:"Headphone",
        Price: 8000,
        category:'electronics',
        stock:21
    },
    {
        name:"Shoes",
        Price: 10000,
        category:'fashion',
        stock:20
    }
])

db.Products.find()
db.Products.find({category:'electronics'})

// count
db.Products.countDocuments()

db.Products.countDocuments({category:'fashion'})

// Level 4

use('shopApp')

db.users.updateMany(
    {city: 'Gyanpur'},
    {$set: {city:'Mumbai'}}
)

use('Ecom')

db.Products.updateOne(
    {name:'Laptop'},
    {$set: {Price: 10000}}
)

// increment
db.Products.updateMany(
    {category:'electronics'},
    {$inc: {stock: 10}}
)

db.Products.updateOne(
    {category:'fashion'},
    {$inc: {stock: 1}}
)

use('shopApp')

db.users.updateOne(
    {email:"sumit@gmail.com"},
    {$set: {email: "john@gmail.com"}}
)

// Level 5

db.users.deleteMany({name:'sumit'})

db.users.deleteMany(
    {age:{$lt : 23}}
)

use("Ecom")

db.Products.deleteOne({})

// Level 6
use('shopApp')
db.users.find(
    {age:{$gt : 20}}
)

use("Ecom")
db.Products.find(
    {Price:{$lt: 9000}}
)


use("shopApp")
db.users.find(
    {name:'mohan'}
)


db.users.countDocuments(
    {city:'Udaipur'}
)


show('collections')

db.dropDatabase('users')

// new task instagram

use("instaClone")

db.createCollection('users')
db.createCollection('posts')

// insert user

db.users.insertOne({
    userName: "hiike",
    follower: 110,
    city: "DC"
})

// insert post

// db.posts.insertOne({
//     userName: "Like",
//     follower: 120,
//     city: "BC"
// })

// db.posts.updateOne(
//     {userName: 'Like'},
//     {$set: {follower:13}}
// )

// db.posts.deleteOne(
//     {follower: 13}
// )

db.posts.find()