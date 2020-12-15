var pool = require('./bd');

async function insertnewsletter(obj){
    try{
        var query = "insert into newsletter set ?";
        var rows = await pool.query(query,[obj]);
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    };
};
module.exports = {insertnewsletter};