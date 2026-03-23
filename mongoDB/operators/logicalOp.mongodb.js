// Logical operator
/**
$and , $or, $not,
$nor -> all condn false
 */

// for multiple condition use arr

use('ecom')

db.products.find(
    {$and: 
        [
            {category:'beauty'},
            {price: {$lt: 12.99}}
        ]
    },
    {title:1,category:1,price:1}
)


db.products.find(
    {$or: 
        [
            {category:'beauty'},
            {price: {$lt: 12.99}}
        ]
    },
    {title:1,category:1,price:1}
)


db.products.find(
    {$nor: 
        [
            {category:'beauty'},
            {price: {$gt: 10}}
        ]
    },
    {title:1,category:1,price:1}
)