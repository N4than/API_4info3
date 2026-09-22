import mysql from 'mysql2/promise';

const conexao = async () => {
    const con = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: '4info3'
    });

    return con;
}

const getUsuario = async () => {
    const con = await conexao();
    const dados = await con.query('SELECT * FROM usuarios');
    
    con.close();
    return dados[0];
}

console.log( await getUsuario());