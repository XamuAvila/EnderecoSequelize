const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes)=>{
    class Endereco extends Model{
        static associate(models){
            Endereco.belongsTo(models.Estados, {
                foreignKey: 'uf'
            })
            Endereco.belongsTo(models.Localidades, {
                foreignKey: 'id_localidade'
            })
            Endereco.belongsTo(models.Bairros, {
                foreignKey: 'id_bairro'
            })
            Endereco.belongsTo(models.LogradourosTipos, {
                foreignKey: 'id_logradouro_tipo'
            })
            Endereco.belongsTo(models.Logradouros, {
                foreignKey: 'id_logradouro'
            })
            Endereco.belongsTo(models.Logradouros, {
                foreignKey: 'logradouro'
            })
            Endereco.belongsTo(models.Logradouros, {
                foreignKey: 'complemento'
            })
            Endereco.belongsTo(models.Logradouros, {
                foreignKey: 'cep'
            })
        }
    }

    Endereco.init({
        id_endereco:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        numero:{
            type: DataTypes.INTEGER
        }
    },{
        sequelize,
        modelName: 'Enderecos',
        timestamps: false,
        schema: 'endereco',
        tableName: 'enderecos'
    })

    return Endereco
}