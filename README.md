### NAME
short-service

### NOTES

A node.js/connect based short-url service that uses 
[shortness](https://github.com/techosaurus/shortness) as the storage library.


### API

`POST /shorten`:`{ target: "http://some-long.tld/whatever" }`
Returns: `{ "url": "http://local.tld/39J930jn" }

`GET /:id`
301 redirects to the target.

`GET /:id/json
Returns: `{ "target": "http://some-long.tld/whatever" }`


