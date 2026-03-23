// Update Operators

/*
$set -> update field value
$unset -> remove field
$inc , $push, $mul, $rename,  $min, $max, $pull -> remove elm
 $addToSet -> not allow duplicate
*/

use('ecom')

// db.products.updateMany(
//     {},
//     {$set: {price: 10}}
// )

// db.products.updateMany(
//     {},
//     {$unset: {price: 0}}
// )

// db.products.updateMany(
//     {},
//     {$inc: {stock: 10}}
// )


// db.products.updateMany(
//     {},
//     {$mul: {stock: 10}}
// )

// db.products.updateMany(
//     {},
//     {$rename: {stock: 'Stocks'}}
// )


db.products.find()
 
// db.products.updateMany(
//     {},
//     {$min: {Stocks: 1000}}
// )

// db.products.updateMany(
//     {},
//     {$max: {stock: 10000}}
// )

// db.products.find({},{tags:1})

// db.products.updateMany(
//     {},
//     {$push: {tags: 'abhi'}},
// )

// db.products.updateMany(
//     {},
//     {$pull: {tags: 'abhi'}},
// )

// db.products.updateMany(
//     {},
//     {$push: {tags: 'beauty'}},
// )


db.products.updateMany(
    {},
    {$addToSet: {tags: 'beauty'}},
)

db.products.find({},{tags:1})

