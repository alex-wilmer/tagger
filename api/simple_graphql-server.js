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

  type Foo {
    name: String
  }

  type Query {
    foo: Foo
    links(id: ID): [Link]
    tags(id: ID): [Tag]
  }
`)

let root = {
  foo: {
    name: () => new Error(`something fucked up`),
  },
  links: ({ id }) => id
    ? db.links.filter(x => x.id === id).map(join(`link`, `tag`))
    : db.links.map(join(`link`, `tag`)),

  tags: ({ id }) => id
    ? db.tags.filter(x => x.id === id).map(join(`tag`, `link`))
    : db.tags.map(join(`tag`, `link`)),
}

let app = express()

app.use(`/graphql`, graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4001, () => console.log(`Now browse to localhost:4001/graphql`))
