const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes)=>{
    class Logradouros extends Model{
        static associate(models){
            Logradouros.belongsTo(models.Bairros, {
                foreignKey: 'id_bairro'
            })
            Logradouros.belongsTo(models.LogradourosTipos, {
                foreignKey: 'id_logradouro_tipo'
            })

        }
    }

    Logradouros.init({
        id_logradouro:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        exibir_tipo_logradouro:{
            type: DataTypes.ENUM('0', '1')
        },
        logradouro:{
            type: DataTypes.STRING
        },
        complemento:{
            type: DataTypes.STRING
        },
        cep:{
            type: DataTypes.STRING(8)
        },
        abreviatura:{
            type: DataTypes.STRING
        }
    },{
        sequelize,
        timestamps: false,
        modelName: 'Logradouros',
        tableName: 'logradouros',
        schema: 'endereco'
    })
    return Logradouros;
}