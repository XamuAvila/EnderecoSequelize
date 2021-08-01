const { Sequelize, Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Localidade extends Model {
        static associate(models) {
            Localidade.belongsTo(models.Estados,{
                foreignKey: {
                    name: 'uf'
                }
            })
            Localidade.belongsToMany(Localidade, {as:'subordinada', through: 'id_localidade'})
            Localidade.hasMany(models.Localidades)
            Localidade.hasMany(models.Estados, {
                foreignKey: 'uf'
            })
            Localidade.hasMany(models.Bairros, {
                foreignKey: 'id_localidade'
            })
        };
    };
    
    Localidade.init(
        {
            id_localidade: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome:{
                type: DataTypes.STRING
            },
            tipo:{
                type: DataTypes.STRING
            },
            abreviatura:{
                type: DataTypes.STRING
            },
            cod_ibge:{
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Localidades',
            schema: 'endereco'
        }
    )

    Localidade.removeAttribute('id');
    return Localidade;
}