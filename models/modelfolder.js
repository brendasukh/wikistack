var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack',{
  logging: false
});

const Page=db.define('page',{
  title: {
    type:Sequelize.STRING, allowNull: false
  },
  urlTitle:{
    type:Sequelize.STRING, allowNull: false,
    validate: {isUrl: true},
    /*get(){
      const route=this.getDataValue('urlTitle')
      return "/wiki/" + route;
    }
    */
  },
  content: {
    type:Sequelize.TEXT, allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open','closed')
  },

  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },

}, {
  getterMethods:{
    route(){
      const route=this.getDataValue('urlTitle')
      return "/wiki/" + route;
    }
  }

});

const User=db.define('user',{
    name: {
      type: Sequelize.STRING, allowNull: false
    },
    email: {
      type: Sequelize.STRING, allowNull: false,
      validate: {isEmail: true}
    }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
}
