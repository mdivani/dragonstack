const pool = require("../../databasePool");

class AccountTable {
    static storeAccount({usernameHash, passwordHash}) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO account("usernameHash", "passwordHash") VALUES ($1, $2)',
                [usernameHash, passwordHash],
                (error, response) => {
                    if (error) return reject(error);
                    return resolve();
                }
            );
        });
    }

    static getAccount({usernameHash}) {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT id FROM account WHERE "usernameHash" = $1',
                [usernameHash],
                (error, response) => {
                    if (error) return reject(error);
                    resolve({account: response.rows[0]})
                }
            )
        })
    }
}

module.exports = AccountTable;