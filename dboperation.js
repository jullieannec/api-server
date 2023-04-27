var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log("error :" + error);
  }
}

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM Users");
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }
}

async function getUserByUserName(username) {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().input("username", username).query("SELECT *  FROM Users WHERE username = @username");
    return res.recordsets;
  } catch (error) {
    console.log("error :" + error);
  }
}

async function getAllCareer() {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query("SELECT *  FROM CareerObjective");
    return res.recordsets;
  } catch (error) {
    console.log("error :" + error);
  }
}

async function addNew(data) {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request()
                        .input("careername", data.careername)
                        .input("careerdescription", data.careerdescription)
                        .input("reason", data.reason)
                        .input("targetdate", data.targetdate)
                        .input("completeddate", data.completeddate)
                        .query("INSERT INTO [CareerObjective] ([careername], [careerdescription], [reason], [targetdate], [completeddate]) VALUES (@careername, @careerdescription, @reason, @targetdate, @completeddate)");
    return res.recordsets;
  } catch (error) {
    console.log("error :" + error);
  }
}

async function update(data) {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request()
                        .input("id", data.id)
                        .input("careername", data.careername)
                        .input("careerdescription", data.careerdescription)
                        .input("reason", data.reason)
                        .input("targetdate", data.targetdate)
                        .input("completeddate", data.completeddate)
                        .query("UPDATE [CareerObjective] SET careername = @careername, careerdescription = @careerdescription, reason = @reason, targetdate = @targetdate, completeddate = @completeddate WHERE id = @id");
    return res.recordsets;
  } catch (error) {
    console.log("error :" + error);
  }
}

async function deleteObj(id) {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().input("id", id).query("DELETE FROM [CareerObjective] WHERE id = @id");
    return res;
  } catch (error) {
    console.log("error :" + error);
  }
}

module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery,
  getUserByUserName:getUserByUserName,
  getAllCareer: getAllCareer,
  addNew: addNew,
  update: update,
  deleteObj: deleteObj
};
