# jspf

This is a JSPF playlist object.
See JSPF specifications on [XSPF web site](http://www.xspf.org/jspf/)

### Usage

Install module via npm

Then

```node
var jspf = require('jspf');
var playlist = new jspf.Jspf();
```

You Can also create the playlist with arguments
```node
var jspf = require('jspf');
/**
 * Create a new playlist
 * @param String title
 * @param String creator
 * @param String annotation
 * @param String info
 * @param String location
 * @param String identifier
 * @param String image
 * @param String or Date date
 * @param String license
 * @param Array attribution
 * @param Array link
 * @param Array meta
 * @param Object extension
 * @param Array track
 */
var playlist = new jspf.Jspf(title, creator, annotation, info, location, identifier, image, date, license, attribution, link, meta, extension, track);
```
