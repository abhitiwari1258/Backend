// Element operator
/*
$exists -> chk if field exist
$type -> chk bson data type of a field
 */


use('ecom')

db.products.find(
    {title: {$exists: true}},
)

db.products.find(
    {title: {$type: 'string'}},
)