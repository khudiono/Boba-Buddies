const { buildSchema } = require('graphql');
const FavoriteModel = require('../db/schema.js').Favorite;

const schema = buildSchema(`
    type Favorite {
      id: String!
      name: String!
      url: String!
      location: Location
      coordinates: Coordinates
    }
    type Location {
      address1: String
      city: String
      state: String
    }
    type Coordinates {
      latitude: Float
      longitude: Float
    }
    type Query {
      favorites: [Favorite]
      favorite(name: String!) : Favorite
    }
  `)

const root = {
  favorites: async () => {
    const favorites = await FavoriteModel.find()
    if(!favorites) {
      throw new Error('Error')
    }
    return favorites
  }
}

module.exports.schema = schema;
module.exports.root = root;
