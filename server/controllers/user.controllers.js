const pool = require('../../connect');

exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            console.log(connection.threadId)
            connection.query('SELECT * FROM user', (err, rows) => {
                connection.release();
                if (!err) {
                    console.log(rows);
                    res.render('pages/home', { rows });
                } else {
                    console.log(err)
                }
            })
        }
    })
}

exports.find = (req, res) => {
    pool.getConnection((err, connection) => {
        let searchTerm = req.body.search;
        console.log(searchTerm);
        if (err) {
            throw err;
        } else {
            console.log(connection.threadId)
            connection.query('SELECT * FROM user WHERE firstname LIKE ? OR lastname LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
                connection.release();
                if (!err) {
                    console.log(rows);
                    res.render('pages/home', { rows });
                } else {
                    console.log(err)
                }
            })
        }
    })
}
exports.form = (req, res) => {
    res.render('pages/add-user');
}

exports.create = (req, res) => {
    const { firstname, lastname, email, contact, comment } = req.body;
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            console.log(connection.threadId)
            connection.query('INSERT INTO user SET firstname = ?, lastname = ?, email = ?, contact = ?, comment = ?', [firstname, lastname, email, contact, comment], (err, rows) => {
                connection.release();
                if (!err) {
                    res.render('pages/add-user');
                } else {
                    console.log(err)
                }
            })
        }
    })
}

exports.edit = (req, res) => {
    let termId = req.params.id;
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            connection.query('SELECT * FROM user WHERE id = ?', [termId], (err, row) => {
                connection.release();
                if (!err) {
                    console.log(row)
                    res.render('pages/edit-user', { row });
                } else {
                    console.log(err)
                }
            })
        }
    })
}

exports.update = (req, res) => {
    let termId = req.params.id;
    const { firstname, lastname, email, contact, comment } = req.body;
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            connection.query('UPDATE user SET firstname = ?, lastname = ?, email = ?, contact = ?, comment = ? WHERE id = ?', [firstname, lastname, email, contact, comment, termId], (err, row) => {
                connection.release();
                if (!err) {
                    pool.getConnection((err, connection) => {
                        if (err) {
                            throw err;
                        } else {
                            connection.query('SELECT * FROM user WHERE id = ?', [termId], (err, row) => {
                                connection.release();
                                if (!err) {
                                    console.log(row)
                                    res.render('pages/edit-user', { row });
                                } else {
                                    console.log(err)
                                }
                            })
                        }
                    })
                } else {
                    console.log(err)
                }
            })
        }
    })
}

exports.delete = (req, res) => {
    let termId = req.params.id;
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            connection.query('DELETE FROM user WHERE id = ?', [termId], (err) => {
                connection.release();
                if (!err) {
                    res.redirect('/');
                } else {
                    console.log(err)
                }
            })
        }
    })
}

exports.viewUser = (req, res) => {
    let termId = req.params.id;
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            connection.query('SELECT * FROM user WHERE id = ?', [termId], (err, row) => {
                connection.release();
                if (!err) {
                    console.log(row);
                    res.render('pages/view-user', { row });
                } else {
                    console.log(err);
                }
            })
        }
    })

}

