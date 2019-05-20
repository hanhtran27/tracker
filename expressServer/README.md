
mongod -port 3000 -dbpath "./db"
//the first time to log in
mongo --port 3000 
>load ('createDB/createAdminUser.js');
>load ('createDB/createSampleData.js');
>exit


//the sceond time to log in 
mongo --port 3000 -u dbAdmin -p test --authenticationDatabase admin