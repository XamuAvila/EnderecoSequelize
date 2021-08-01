const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    class Bairro extends Model{
        static associate(models){
            Bairro.belongsTo(models.Estados,{
                foreignKey: 'uf'
            })

            Bairro.belongsTo(models.Localidades, {
                foreignKey: 'id_localidade'
            })

            Bairro.hasMany(models.BairrosCep,{
                foreignKey: "id_bairro"
            })

            Bairro.hasMany(models.Logradouros,{
                foreignKey: "id_bairro"
            })
        }
    }

    Bairro.init({
        id_bairro:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING
        },
        abreviatura: {
            type: DataTypes.STRING
        }

    },{
        sequelize,
        timestamps: false,
        modelName: 'Bairros',
        tableName:'bairros',
        schema: 'endereco'
    })

    return Bairro;
}