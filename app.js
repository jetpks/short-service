(function() {
  "use strict";

  var express = require('express')
    , app = express.createServer()
    , sh = require('shortness')
    , cfg = require('./config.js')
    ;

  app.use(express.bodyParser());

  app.get('/:id/json', function (req,res) {
    sh.get(req.params.id, function(url) {
      if(!url) {
        res.end(JSON.stringify({error: "invalid request."}));
        return;
      }
      res.end(JSON.stringify({ target: url }));
    });
  });

  app.get('/:id', function (req,res) {
    sh.get(req.params.id, function(url) {
      if(!url) {
        res.end(JSON.stringify({error: "invalid request."}));
        return;
      }
      res.redirect(url, 301);
      res.end();
    });
  });

  app.post('/shorten', function (req,res) {
    var target = req.body.target
      ;

    res.contentType('json');
    
    /* Some light validation */
    if(!/^https?:\/\//.test(target)) {
      target = "http://" + target;
    }
    if(!/^https?:\/\/[A-Za-z0-9.]*\.[A-Za-z0-9]{2,6}(\/.*)?$/.test(target)) {
      res.end(JSON.stringify({ error: "Domain looks invalid..." }));
      return;
    }
    
    sh.add(target, function(id) {
      res.end(JSON.stringify({ url: cfg.domain + '/' + id}));
    });
  });

  app.listen(cfg.port);
}());
