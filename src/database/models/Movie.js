module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config)
    //Configuracion de las relaciones
Movie.associate = models => {
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        })

        Movie.belongsToMany(models.Actor, {
            as: 'actores',
            through: ' actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: true,
            onDelete: 'cascade',
        })
    }
    return Movie
}