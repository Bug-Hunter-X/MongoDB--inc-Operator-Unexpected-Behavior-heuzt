```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("someId")}, {"$inc": {"field": 1}});
```