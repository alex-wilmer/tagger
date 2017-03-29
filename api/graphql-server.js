
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import * as db from '../db'
import { join } from './utils'

let typeDefs = [`
  interface Node {
    id: ID!
  }

  type Link implements Node {
    id: ID!
    url: String!
    description: String
  }

  type Tag implements Node {
    id: ID!
    name: String!
    links: [Link]
  }

  type Query {
    links: [Link]
    tags: [Tag]
    node(id: ID!): Node
  }

  schema {
    query: Query
  }
`]

let resolvers = {
  Query: {
    // links: ({ id }) => id

    //   ? db.links.filter(x => x.id === id).map(join(`link`, `tag`))
    //   : db.links.map(join(`link`, `tag`)),
    links: () => db.links,
    node: ({ id }) => id
  },
  Node: {
    __resolveType(obj, context, info) {
      if(obj.url){
        return 'Link';
      }
      if(obj.name){
        return 'Tag';
      }
      return null;
    },
  },
}

let schema = makeExecutableSchema({ typeDefs, resolvers })
let app = express()
app.use(`/graphql`, bodyParser.json(), graphqlExpress({ schema }))
app.use(`/graphiql`, graphiqlExpress({ endpointURL: `/graphql` }))
app.listen(4002, () => console.log(`Now browse to localhost:4002/graphiql`))
