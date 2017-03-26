export let get = async endpoint => await fetch(`http://localhost:4000/${endpoint}`, {
  headers: { 'Content-type': `application/json` },
}).then(r => r.json()).then(json => json.data)

export let post = async (endpoint, body) => await fetch(`http://localhost:4000/${endpoint}`, {
  method: `POST`,
  headers: { 'Content-type': `application/json` },
  body: JSON.stringify(body),
}).then(r => r.json())
