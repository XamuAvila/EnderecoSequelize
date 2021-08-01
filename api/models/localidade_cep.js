const { Model, DataTypes } = require('sequelize');
const localidade = require('./localidade')
module.exports = (sequelize, DataTypes) => {
    class LocalidadeCep extends Model {
        static associate(models) {
            LocalidadeCep.belongsToMany(models.Localidades, { through: 'id_localidade'})
        }
    }

    LocalidadeCep.init(
        {
            id_localidade:{
                type: DataTypes.STRING,
                primaryKey: true,
                references: localidade
            },
            cep_ini:{
                primaryKey: true,
                type: DataTypes.STRING
            },
            cep_fim: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: 'Localidades_cep',
            tableName:'localidades_cep',
            timestamps: false,
            schema: 'endereco'
        }
    )
    return LocalidadeCep;
}