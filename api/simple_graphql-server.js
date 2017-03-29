import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import * as db from '../db'
import { join } from './utils'

let schema = buildSchema(`
  type Link {
    id: ID!
    url: String!
    description: String
    tags: [Tag]
  }

  type Tag {
    id: ID!
    name: String!
    links: [Link]
  }

  type Query {
    links(id: ID): [Link]
    tags(id: ID): [Tag]
  }

  input LinkInput {
    url: String!
    description: String
  }

  type Mutation {
    createLink(input: LinkInput): Link
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)

let root = {
  links: ({ id }) => id
    ? db.links.filter(x => x.id === id).map(join(`link`, `tag`))
    : db.links.map(join(`link`, `tag`)),

  tags: ({ id }) => id
    ? db.tags.filter(x => x.id === id).map(join(`tag`, `link`))
    : db.tags.map(join(`tag`, `link`)),

  createLink: ({ input: { url, description } }) => {
    let newLink = {
      id: db.links.length + 1,
      url,
      description,
    }

    db.links.push(newLink)
    return newLink
  },
}

let app = express()

app.use(`/graphql`, graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4001, () => console.log(`Now browse to localhost:4001/graphql`))
