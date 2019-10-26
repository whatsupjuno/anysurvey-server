import mariadb from "mariadb"

export const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "anysurvey"
})

export const getAllUsers = async () => {
    const conn = await pool.getConnection()
    const data = await conn.query('SELECT * FROM userinfo')
    return data
}

export const getAUser = async (id) => {
    const conn = await pool.getConnection() 
    const data = (await conn.query(`SELECT * FROM userinfo where id=${id}`))[0]
    return data

  }

export const addAUser = async (givenName, 
                                surName, 
                                googleId, 
                                userName, 
                                password, 
                                googleEmail) => {
    const conn = await pool.getConnection()
    const data = await conn.query(`INSERT INTO 
                                    userinfo(givenName, surName, googleId, userName, password, googleEmail) 
                                    VALUES("${givenName}", "${surName}", ${googleId}, "${userName}", "${password}", "${googleEmail}")
                                    `)
    if(!data) return false
    return true
}

export const delUser = async (id) => {
    const conn = await pool.getConnection()
    const predata = await conn.query(`DELETE from userinfo where id=${id}`)
    const nxtdata = await conn.query(`SELECT id FROM userinfo`)
    if(!nxtdata.indexOf(id)) return false
    return true
  }
  