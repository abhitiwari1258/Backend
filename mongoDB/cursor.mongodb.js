// a cursor is a pointer (or iterator) that allows you to traverse through the result set of a query one document at a time, instead of loading all documents into memory at once.

/**
 a cursor is a pointer (or iterator)

 data will come in form of batch not all data loaded at once

 a cursor have multiple batches

 byDefault in single batch we have 20 data
 */

// Why Cursor is Important
// Avoids loading all data into memory
// Improves performance for large collections
// Enables batch processing

// cursor methods
/**
 next() -> fetch nxt doc
 hasNext() -> show krta h doc m data h y nhi
 limit() -> kitne doc chiya
 skip() , sort()
 */
use("test")

// let arr = []
// for(let i=1; i<=100; i++){
//     arr.push({value: i})
// }

// db.data.insertMany(arr)

const cursor = db.data.find()

// console.log(cursor);// 1-20 data show
// console.log(cursor.next()); // 21 data show

// console.log(cursor.hasNext());

// while(cursor.hasNext()){
//     console.log(cursor.next());
// }

// db.data.find().sort({value: -1})


// db.data.find().limit(4)

db.data.find().skip(90)

// Cursor chain

// db.data.find().limit(50).sort({value:-1}).skip(20)

// db.data.find().sort({value: -1}).limit(20).skip(11)

// Pagination

let page = 1
let limit = 5

const data = db.data.find().skip((page -1) * limit).limit(limit)
console.log(data);
