const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes)=>{
    class LogradouroTipo extends Model{
        static associate(models){
            LogradouroTipo.hasMany(models.Logradouros, {
                foreignKey: 'id_logradouro_tipo'
            })
        }
    }

    LogradouroTipo.init({
        id_logradouro_tipo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING
        }
    },{
        sequelize,
        timestamps: false,
        modelName: 'LogradourosTipos',
        schema: 'endereco',
        tableName: 'logradouros_tipos',
    })
    return LogradouroTipo;
}