# gitbook-plugin-save-url-to-file

Add to the `book.json` the `urls` you want to save. Each _url_ is an object with the url and the destination file name.
The `url` from the object will be save to the `dest` specified.

### plugins

```json
"plugins" : [
  "save-url-to-file"
]
```

### Plugins Config

```json
"saveUrls" : {
  "urls": [
    {
      "url": "https://test.dashboard.bandwidth.com/apidocs/errors.html",
      "dest": "errors.html"
    },
    {
      "url": "https://test.dashboard.bandwidth.com/apidocs/raml/iris.min.raml",
      "dest": "raml/iris.min.raml"
    }
  ]
}
```
