export let get = async endpoint => await fetch(`http://localhost:4000/${endpoint}`, {
  headers: { 'Content-type': `application/json` },
}).then(r => r.json()).then(json => json.data)
