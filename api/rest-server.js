import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as db from '../db'

let app = express()

app.use(cors())
app.use(bodyParser.json())

app.get(`/links`, (req, res) =>
  res.json({ data: db.links })
)

app.get(`/links/:id`, (req, res) =>
  res.json({ data: db.links.find(x => x.id === req.params.id) })
)

app.get(`/links/:id/tags`, (req, res) => {
  let edges = db.edges.filter(x => x.link_id === req.params.id)
  res.json({ data: db.tags.filter(tag => edges.find(edge => edge.tag_id === tag.id)) })
})

app.post(`/links`, (req, res) => {
  db.links.push({ id: db.links + 1, url: req.body.url, description: req.body.description })
  res.json({ success: true })
})

app.listen(4000, () => console.log(`⚡️ rest server on :4000`))
