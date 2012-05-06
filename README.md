### NAME
short-service

### NOTES

A node.js/express based short-url service that uses 
[shortness](https://github.com/techosaurus/shortness) as the storage library.


Available through npm: `npm install short-service`
edit the config file to use your own domain, and you're off to the races.


### API

`POST /shorten`:`{ target: "http://some-long.tld/whatever" }`
Returns: `{ "url": "http://local.tld/39J930jn" }`

`GET /:id`
301 redirects to the target.

`GET /:id/json`
Returns: `{ "target": "http://some-long.tld/whatever" }`


