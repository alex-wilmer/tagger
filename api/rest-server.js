import express from 'express'
import cors from 'cors'
import * as db from '../db'

let app = express()

app.use(cors())

app.get(`/links`, (req, res) =>
  res.json({ data: db.links })
)

app.get(`/links/:id`, (req, res) =>
  res.json({ data: db.links.find(l => l.id === req.params.id) })
)

app.get(`/tags`, (req, res) =>
  res.json({ data: db.tags })
)

app.listen(4000, () => console.log(`⚡️ rest server on :4000`))
