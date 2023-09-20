const db = require("./banco")

const Prova = db.sequelize.define("provas", {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.NUMBER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

// 

module.exports = Prova