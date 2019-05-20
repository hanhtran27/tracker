db = db.getSiblingDB('sample')  //create a sample db
db.createCollection('users')
usersCollection = db.getCollection('users')
usersCollection.remove({})

usersCollection.insert({
    firstName: "Hanh",
    lastName: "Tran",
    email: "htran@fake.email.com",
    userName: "hanh",
    hash: "1"
})
usersCollection.insert(
{
    email: "chenq5@seattleu.edu",
    userName: "qian",
    hash: "123"
}
)
usersCollection.insert(
{
    email: "khanh@seattleu.edu",
    userName: "khanh",
    hash: "456"
}
)

db.createCollection('goals')
goalsCollection = db.getCollection("goals")
goalsCollection.remove({})

goalsCollection.insert(
{
    userId: usersCollection.find()[0]["_id"],
    goalName:"read Effective Java",
    tag: "study",
    goalNumber: 370,
    goalUnit:"page",
    startDate: "2019-05-19", //vali: no earlier than today
    dueDate:"2019-05-29"    //vali: no earlier than startDate 
}
)

goalsCollection.insert(
{
    userId: usersCollection.find()[0]["_id"],
    goalName:"save money for new bag",
    tag: "life",
    goalNumber: 100,
    goalUnit:"dollar",
    startDate: "2019-05-20", //vali: no earlier than today
    dueDate:"2019-06-20"    //vali: no earlier than startDate 
}
)

goalsCollection.insert(
{
    userId: usersCollection.find()[1]["_id"],
    goalName:"workout",
    tag: "health",
    goalNumber: 10,
    goalUnit:"hour",
    startDate: "2019-06-01", //vali: no earlier than today
    dueDate:"2019-06-06"    //vali: no earlier than startDate 
}
)

db.createCollection('records')
recordsCollection = db.getCollection("records")
recordsCollection.remove({})

goalsCollection.find()[0]["_id"]
recordsCollection.insert({
    goalId: goalsCollection.find()[0]["_id"],
    finishedUnits: 10,
    finishedDate:"2019-05-20" // startDate <= finishedDate <= today
})

recordsCollection.insert({
    goalId: goalsCollection.find()[1]["_id"],
    finishedUnits: 15,
    finishedDate:"2019-05-21" 
})

recordsCollection.insert({
    goalId: goalsCollection.find()[1]["_id"],
    finishedUnits: 35,
    finishedDate:"2019-05-22" 
})






