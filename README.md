# tagger - a link tagging application

### ...from REST to Relay

<hr />

This is a story about **communication**.

Communication requires language.

> <b>How language can affect the way we think</b>

> ...in Chinese, saying “this is my uncle” is not as straightforward as you might think. In Chinese, you have no choice but to encode more information about said uncle. The language requires that you denote the side the uncle is on, whether he’s related by marriage or birth and, if it’s your father’s brother, whether he’s older or younger.

> “All of this information is obligatory. Chinese doesn’t let me ignore it,” says Chen. “In fact, if I want to speak correctly, Chinese forces me to constantly think about it.”

> http://ideas.ted.com/5-examples-of-how-the-languages-we-speak-can-affect-the-way-we-think/

Though expressed and constrained by language, communication is highly domain specific.
A great vocabulary will not provide a better ordering experience at the drive-thru.

Constraining communication even further are human emotions, environmental factors and cute cat pictures constantly bombarding us via distraction---protocols, seen an unseen, effective and disastrous--the current state of our ability to communicate shapes the way we think, subtly manipulating our decisions.

What do we do as individuals and groups to improve the quality and experience of communication? Emojis? Shortening "whatever" to "whatevs"? We're all in this journey together and we should constantly be reimagining ways communication with one another can produce better results, but not at the expense of enjoyment.

Can we alleviate constraints while being constrained by them? We can, but it's hard and it often takes generations... but this is a JavaScript talk and every year in JS land is like a whole new generation passing so maybe we're in luck.

With that in mind, let's look at communication on the web over the last decade or so.

Consider one of the most common scenarios in web development:

- There's some data that lives on a server
- There are UI requirements to retrieve and display that data

Separate execution environments
call a function on the server
return from that function back to the client

graphql suffers from an identity problem.

### PRE SPA DAYS

- Go to url (make a GET request to server)
- Server goes to database
- Data is used to build HTML page
- Send back HTML

### SPA DAYS (XHR)

- Go to url (make a GET request to.. somewhere)
- Get HTML page with a bunch of JavaScript too
- Make XHR request to retrieve data
- modify the DOM

Client -> Server relationship

-
