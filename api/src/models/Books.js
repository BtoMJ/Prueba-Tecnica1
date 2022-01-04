const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Book', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
    year: { 
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.STRING,
    },
    content_short: {
      type: DataTypes.TEXT
    },
    publisher: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })};