const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Estado extends Model {
        static associate(models) {
            Estado.hasMany(models.Localidades, {
                foreignKey: 'uf'
            })
            Estado.hasMany(models.Estados, {
                foreignKey: 'uf'
            })
            Estado.hasMany(models.Bairros, {
                foreignKey: 'uf'
            })
            Estado.belongsTo(models.Localidades)
        };
    };

    Estado.init(
        {
            uf: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            nome: DataTypes.STRING
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Estados',
            schema: 'endereco'
        }
    )
    return Estado;
}