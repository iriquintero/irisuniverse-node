var pool = require('./bd');

async function getGallery(){
    var query = "select id,image,title,tags from gallery order by id desc";
    var rows = await pool.query(query);
    return rows;
};
async function getGallery2(){
    var query = "select id,image,title,tags from gallery order by id desc limit 9";
    var rows = await pool.query(query);
    return rows;
}
async function getGallery3(){
    var query = "select id,image,title,tags from gallery order by id desc limit 18";
    var rows = await pool.query(query);
    return rows;
}



async function insertNewimage(obj){
    try{
        var query = "insert into gallery set ?";
        var rows = await pool.query(query,[obj]);
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    };
}

async function deleteGalleryById(id){
    var query = "delete from gallery where id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getGalleryById(id){
    var query="select id,image,title,tags from gallery where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function editGalleryById(obj,id){
    try{
        var query = "update gallery set ? where id = ?";
        var rows = await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        throw error;
    };
};
async function searchGallery(search){
    var query = "select id,image,title,tags from gallery where title like ? or tags like ?";
    var rows = await pool.query(query,['%' + search + '%','%' + search + '%']);
    return rows;
}

module.exports = {getGallery, insertNewimage, deleteGalleryById, getGalleryById, editGalleryById, searchGallery,getGallery2,getGallery3};

