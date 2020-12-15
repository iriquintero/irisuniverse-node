var pool = require('./bd');

//obtener base de datos irisunivese
async function getBlog(){
    var query = "select id,title,body,image,date_format(date,'%d %M, %Y')as date from blog order by id desc";
    var rows = await pool.query(query);
    return rows;
}
async function getBlog2(){
    var query = "select id,title,body,image,date_format(date,'%d %M, %Y')as date from blog order by id desc limit 1";
    var rows = await pool.query(query);
    return rows;
}
async function getBlog3(){
    var query = "select id,title,body,image,date_format(date,'%d %M, %Y')as date from blog order by id desc limit 5";
    var rows = await pool.query(query);
    return rows;
}

//insertar
// async function insertNewPost(obj){
//     try{
//         var query = "insert into blog set ?";
//         var rows = await pool.query(query,[obj]);
//         return rows;
//     }catch (error){
//         console.log(error);
//         throw error;
//     };
// };
//borrar
async function deleteBlogById(id){
    var query = "delete from blog where id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}
//modificar> obtener base de datos para modificar 
async function getBlogById(id){
    var query = "select id,title,body,image,date_format(date,'%d %M, %Y')as date from blog where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
};
//guardar cambios modificados
async function editBlogById(obj,id){
    try{
        var query = "update blog set ? where id = ?";
        var rows = await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        throw error;
    };
};

//search blog

async function searchBlog(search){
    var query = "select id,title,body,image,date_format(date,'%d %M, %Y')as date from blog where title like ? or body like ?";
    var rows = await pool.query(query,['%' + search + '%','%' + search + '%']);
    return rows;
}

async function getBlogById2(id){
    var query = "select id,title,body,image,date_format(date,'%Y-%m-%d')as date from blog where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
};




module.exports = { getBlog , deleteBlogById, getBlogById , editBlogById ,getBlog2 ,getBlog3, searchBlog, getBlogById2};