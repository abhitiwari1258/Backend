// Comparision operator
/**
 $eq -> equal to
 $ne -> not equal
 $gt -> greater then
 $lt -> less then
 $gte -> grtr then or eql
 $lte -> less then or eql
 */
// show('dbs')

use('ecom')
// db.products.find(
//     {},
//     {title:1,category:1,price:1}  // projection
// )


db.products.find(
    {price: {$gte:12.99}},
    {title:1,category:1,price:1}
)

db.products.find(
    {price: {$lte:12.99}},
    {title:1,category:1,price:1}
)

db.products.find(
    {price: {$ne:12.99}},
    {title:1,category:1,price:1}
)