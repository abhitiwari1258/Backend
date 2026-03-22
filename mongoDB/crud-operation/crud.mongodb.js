show('dbs')

use('E-commerce')

// show('collections')

// db.users.insertMany([{name:'abhishek'},{name:'yash'}])

// db.users.find()
// db.users.findOne({name:'abhishek'})

// db.users.deleteOne({name:'sachin'})

db.users.updateOne({name:'abhishek'},{$set: {age:21}})