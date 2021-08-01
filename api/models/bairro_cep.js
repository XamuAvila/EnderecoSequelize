const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class BairroCep extends Model {
        static associate(models) {
            BairroCep.belongsTo(models.Bairros, {
                foreignKey: 'id_bairro'
            })
        }
    }
    BairroCep.init(
        {
            id_bairro:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            cep_ini:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            cep_fim:{
                type: DataTypes.STRING
            }
        },
        {   
            modelName: 'BairrosCep',
            tableName: 'bairros_cep',
            schema: 'endereco',
            timestamps: false,
            sequelize
        })
    return BairroCep;
}