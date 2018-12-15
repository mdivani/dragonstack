const pool = require("../../databasePool");

class AccountTable {
    static storeAccount({user, pass}) {
        return new Promise((resolve, reject) => {
            pool.query(
                "INSERT INTO account (username, pass) VALUES ($1, $2)",
                [user, pass],
                (error, response) => {
                    if (error) return reject(error.message);
                    console.log(response);
                    return resolve();
                }
            );
        });
    }
}