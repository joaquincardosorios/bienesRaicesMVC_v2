import { DataTypes } from 'sequelize'
import db from '../config/db.js'


const Propiedad = db.define('propiedades',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKeu: true
    },
    titulo:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
    }, 
    habitaciones: {
        type: DataTypes.INTEGER
    },
    estacionamiento: {
        type: DataTypes.INTEGER
    },
    wc: {
        type: DataTypes.INTEGER
    },
    calle:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    lat:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lng:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: false
    },
    publicado:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})

export default Propiedad;