var util = require('util');
util.isObject = function(arg) {
	return typeof arg === 'object' && arg !== null;
};

util.isString = function(arg) {
	return typeof arg === 'string';
};

util.isNumber = function(arg) {
	return typeof arg === 'number';
};

function Jspf(title, creator, annotation, info, location, identifier, image, date, license, attribution, link, meta, extension, track) {
	this.title = title || "";
	this.creator = creator || "";
	this.annotation = annotation || "";
	this.info = info || "";
	this.location = location || "";
	this.identifier = identifier || "";
	this.image = image || "";
	this.date = date || "";
	this.license = license || "";
	this.attribution = attribution || Array();
	this.link = link || Array();
	this.meta = meta || Array();
	this.extension = extension || Array();
	this.track = track || Array();
}

Jspf.prototype.setTitle = function(title) {
	if (!util.isString(title)) return false;
	this.title = title;
	return true;
};

Jspf.prototype.getTitle = function() {
	return this.title;
};

Jspf.prototype.setCreator = function(creator) {
	if (!util.isString(creator)) return false;
	this.creator = creator;
	return true;
};

Jspf.prototype.getCreator = function() {
	return this.creator;
};

Jspf.prototype.setAnnotation = function(annotation) {
	if (!util.isString(annotation)) return false;
	this.annotation = annotation;
	return true;
};

Jspf.prototype.getAnnotation = function() {
	return this.annotation;
};

Jspf.prototype.setInfo = function(info) {
	if (!util.isString(info)) return false;
	this.info = info;
	return true;
};

Jspf.prototype.getInfo = function() {
	return this.info;
};

Jspf.prototype.setLocation = function(location) {
	if (!util.isString(location)) return false;
	this.location = location;
	return true;
};

Jspf.prototype.getLocation = function() {
	return this.location;
};

Jspf.prototype.setIdentifier = function(identifier) {
	if (!util.isString(identifier)) return false;
	this.identifier = identifier;
	return true;
};

Jspf.prototype.getIdentifier = function() {
	return this.identifier;
};

Jspf.prototype.setImage = function(image) {
	if (!util.isString(image)) return false;
	this.image = image;
	return true;
};

Jspf.prototype.getImage = function() {
	return this.image;
};

Jspf.prototype.setDate = function(date) {
	if (!util.isString(date) && ! util.isDate(date)) return false;
	this.date = date;
	return true;
};

Jspf.prototype.getDate = function() {
	return this.date;
};

Jspf.prototype.setLicense = function(license) {
	if (!util.isString(license)) return false;
	this.license = license;
	return true;
};

Jspf.prototype.getLicense = function() {
	return this.license;
};

Jspf.prototype.setAttribution = function(attribution) {
	if (!util.isArray(attribution)) return false;
	this.attribution = attribution;
	return true;
};

Jspf.prototype.getAttribution = function() {
	return this.attribution;
};

Jspf.prototype.setLink = function(link) {
	if (!util.isArray(link)) return false;
	this.link = link;
	return true;
};

Jspf.prototype.getLink = function() {
	return this.link;
};

Jspf.prototype.setMeta = function(meta) {
	if (!util.isArray(meta)) return false;
	this.meta = meta;
	return true;
};

Jspf.prototype.getMeta = function() {
	return this.meta;
};

Jspf.prototype.setExtension = function(extension) {
	if (!util.isArray(extension)) return false;
	this.extension = extension;
	return true;
};

Jspf.prototype.getExtension = function() {
	return this.extension;
};

Jspf.prototype.setTrack = function(track) {
	var j = new Jspf();
	if (!util.isArray(track) && !j.isTrack(track)) return false;
	this.track = track;
	return true;
};

Jspf.prototype.getTrack = function() {
	return this.track;
};

Jspf.prototype.getTrackById = function(trackId) {
	return this.track[trackId];
};

Jspf.prototype.isTrack = function(track) {
	if (!util.isArray(track)) return false;
	var t = new Trac();
	for (var i in track) {
		if (!t.isTrack(track[i])) return false;
	}
	return true;
};

Jspf.prototype.addTrack = function(location, identifier, title, creator, annotation, info, image, album, trackNum, duration, link, meta, extension) {
	this.track.push(new Track(
		location,
		identifier,
		title,
		creator,
		annotation,
		info,
		image,
		album,
		trackNum,
		duration,
		link,
		meta,
		extension
	));
	return true;
};

Jspf.prototype.pushTrack = function(track) {
	var t = new Track();
	if (!t.isTrack(track)) return false;
	this.track.push(track);
	return true;
};

Jspf.prototype.removeTrack = function(track) {
	var t = new Track();
	if (!t.isTrack(track)) return false;
	for (var i in this.track) {
		if (this.track[i].compare(track)) {this.track.splice(i, 1);
		break;
	}
	return true;	
}

Jspf.prototype.setTrackLocation = function(trackId, location) {
	if (!util.isNumber(trackId) || !util.isString(location) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setLocation(location);
	return true;
};

Jspf.prototype.setTrackIdentifier = function(trackId, identifier) {
	if (!util.isNumber(trackId) || !util.isString(identifier) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setIdentifier(identifier);
	return true;
};

Jspf.prototype.setTrackTitle = function(trackId, title) {
	if (!util.isNumber(trackId) || !util.isString(title) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setTitle(title);
	return true;
};

Jspf.prototype.setTrackCreator = function(trackId, creator) {
	if (!util.isNumber(trackId) || !util.isString(creator) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setCreator(creator);
	return true;
};

Jspf.prototype.setTrackAnnotation = function(trackId, annotation) {
	if (!util.isNumber(trackId) || !util.isString(annotation) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setAnnotation(annotation);
	return true;
};

Jspf.prototype.setTrackInfo = function(trackId, info) {
	if (!util.isNumber(trackId) || !util.isString(info) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setInfo(info);
	return true;
};

Jspf.prototype.setTrackImage = function(trackId, image) {
	if (!util.isNumber(trackId) || !util.isString(image) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setImage(image);
	return true;
};

Jspf.prototype.setTrackAlbum= function(trackId, album) {
	if (!util.isNumber(trackId) || !util.isString(album) || trackId > this.track.length || trackId < 0) return false;
   	this.track[trackId].setAlbum(album);
	return true;
};

Jspf.prototype.setTrackTrackNum = function(trackId, trackNum) {
	if (!util.isNumber(trackId) || !util.isNumber(trackNum) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setTrackNum(trackNum);
	return true;
};

Jspf.prototype.setTrackDuration = function(trackId, duration) {
	if (!util.isNumber(trackId) || !util.isNumber(duration) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setDuration(duration);
	return true;
};

Jspf.prototype.setTrackLink = function(trackId, link) {
	if (!util.isNumber(trackId) || !util.isArray(link) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setLink(link);
	return true;
};

Jspf.prototype.setTrackMeta = function(trackId, meta) {
	if (!util.isNumber(trackId) || !util.isArray(meta) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setMeta(meta);
	return true;
};

Jspf.prototype.setTrackExtension = function(trackId, extension) {
	if (!util.isNumber(trackId) || !util.isObject(extension) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId].setExtension(extension);
	return true;
};

Jspf.prototype.toString = function() {
	return JSON.stringify(this);
};

Jspf.prototype.isJspf = function(arg) {
	if (!util.isObject(arg)) return false;
	return arg instanceof Jspf;
};

Jspf.prototype.isParsableTrack = function(arg) {
	if (!util.isArray(arg)) return false;
	var t = new Track();
	for (var i in arg) {
		if (!t.parsable(arg[i])) return false;
	}
	return true;
};

Jspf.prototype.parsable = function(arg) {
	if (!util.isObject(arg)) return false;
	if (
		arg["title"]!=null && util.isString(arg["title"]) &&
		arg["creator"]!=null && util.isString(arg["creator"]) &&
		arg["annotation"]!=null && util.isString(arg["annotation"]) &&
		arg["info"]!=null && util.isString(arg["info"]) &&
		arg["location"]!=null && util.isString(arg["location"]) &&
		arg["identifier"]!=null && util.isString(arg["identifier"]) &&
		arg["image"]!=null && util.isString(arg["image"]) &&
		arg["date"]!=null && (util.isString(arg["date"]) || util.isDate(arg["date"]))&&
		arg["license"]!=null && util.isString(arg["license"]) &&
		arg["attribution"]!=null && util.isArray(arg["attribution"]) &&
		arg["link"]!=null && util.isArray(arg["link"]) &&
		arg["meta"]!=null && util.isArray(arg["meta"]) &&
		arg["extension"]!=null && util.isObject(arg["extension"]) &&
		arg["track"]!=null && this.isParsableTrack(arg["track"])) return true;
	return false;
};

/* 
 * @param path - path of the file in which the playlist is stored
 * @param callback - callback called when finished or when an error occure. Params are boolean is_error, string msg, Error err.
 */
Jspf.prototype.saveToDisk = function(path, callback) {
	var fs = require('fs');
	var jspf = this;
	fs.open(path, 'w', function(err, fd) {
		if (err) return callback(true, "Could not open File.", err);
		fs.write(fd, jspf.toString(), 0, 'utf8', function(err, written, string) {
			if (err) return callback(true, "Could not write to file", err);
			return callback(false, "File written successfully");
		}); 
	});
};

Jspf.prototype.loadFromDisk = function(path, callback) {
	var fs = require('fs');
	var jspf = this;
	fs.readFile(path, function(err, data) {
		if (err) return callback(true, "Could not open File.", err);
		var o = JSON.parse(data);
		if (!jspf.parsable(o)) return callback(true, "Object stored in file is not a JSPF playlist");
		jspf.setTitle(o["title"]);
		jspf.setCreator(o["creator"]);
		jspf.setAnnotation(o["annotation"]);
		jspf.setInfo(o["info"]);
		jspf.setLocation(o["location"]);
		jspf.setIdentifier(o["identifier"]);
		jspf.setImage(o["image"]);
		jspf.setDate(o["date"]);
		jspf.setLicense(o["license"]);
		jspf.setAttribution(o["attribution"]);
		jspf.setLink(o["link"]);
		jspf.setMeta(o["meta"]);
		jspf.setExtension(o["extension"]);
		jspf.setTrack(o["track"]);
		
		return callback(false, "Playlist loaded successfully", "");	
	});
};

function Track(location, identifier, title, creator, annotation, info, image, album, trackNum, duration, link, meta, extension) {
	this.location = location || "";
	this.identifier = identifier || "";
	this.title = title || "";
	this.creator = creator || "";
	this.annotation = annotation || "";
	this.info = info || "";
	this.image = image || "";
	this.album = album || "";
	this.trackNum = trackNum || 0;
	this.duration = duration || 0;
	this.link = link || Array();
	this.meta = meta || Array();
	this.extension = extension || {};
}

Track.prototype.setLocation = function(location) {
	if (!util.isString(location)) return false;
	this.location = location;
	return true;
};

Track.prototype.getLocation = function() {
	return this.location;
};

Track.prototype.setIdentifier = function(identifier) {
	if (!util.isString(identifier)) return false;
	this.identifier = identifier;
	return true;
};

Track.prototype.getIdentifier = function() {
	return this.identifier;
};

Track.prototype.setTitle = function(title) {
	if (!util.isString(title)) return false;
	this.title = title;
	return true;
};

Track.prototype.getTitle = function() {
	return this.title;
};

Track.prototype.setCreator = function(creator) {
	if (!util.isString(creator)) return false;
	this.creator = creator;
	return true;
};

Track.prototype.getCreator = function() {
	return this.creator;
};

Track.prototype.setAnnotation = function(annotation) {
	if (!util.isString(annotation)) return false;
	this.annotation = annotation;
	return true;
};

Track.prototype.getAnnotation = function() {
	return this.annotation;
};

Track.prototype.setInfo = function(info) {
	if (!util.isString(info)) return false;
	this.info = info;
	return true;
};

Track.prototype.getInfo = function() {
	return this.info;
};

Track.prototype.setImage = function(image) {
	if (!util.isString(image)) return false;
	this.image = image;
	return true;
};

Track.prototype.getImage = function() {
	return this.image;
};

Track.prototype.setAlbum = function(album) {
	if (!util.isString(album)) return false;
	this.album = album;
	return true;
};

Track.prototype.getAlbum = function() {
	return this.album;
};

Track.prototype.setTrackNum = function(trackNum) {
	if (!util.isNumber(trackNum)) return false;
	this.trackNum = trackNum;
	return true;
};

Track.prototype.getTrackNum = function() {
	return this.trackNum;
};

Track.prototype.setDuration = function(duration) {
	if (!util.isNumber(duration)) return false;
	this.duration = duration;
	return true;
};

Track.prototype.getDuration = function() {
	return this.duration;
};

Track.prototype.setLink = function(link) {
	if (!util.isArray(link)) return false;
	this.link = link;
	return true;
};

Track.prototype.getLink = function() {
	return this.link;
};

Track.prototype.setMeta = function(meta) {
	if (!util.isArray(meta)) return false;
	this.meta = meta;
	return true;
};

Track.prototype.getMeta = function() {
	return this.meta;
};

Track.prototype.setExtension = function(extension) {
	if (!util.isObject(extension)) return false;
	this.extension = extension;
	return true;
};

Track.prototype.getExtension = function() {
	return this.extension;
};

Track.prototype.isTrack = function(arg) {
	if (!util.isObject(arg)) return false;
	return arg instanceof Track;
};

Track.prototype.compare = function(track) {
	if (!this.isTrack(track)) return false;
	if (
		this.location == track.location &&
		this.identifier == track.identifier &&
		this.title == track.title &&
		this.creator == track.creator &&
		this.annotation == track.annotation &&
		this.info == track.info &&
		this.image == track.image &&
		this.album == track.album &&
		this.trackNum == track.trackNum &&
		this.duration == track.duration &&
		arrayCompare(this.link, track.link) &&
		arrayCompare(this.meta, track.meta) &&
		objectCompare(this.extension, track.extension)) return true;
	return false;
	
}

Track.prototype.parsable = function(arg) {
	if (!util.isObject(arg)) return false;
	if (
		arg["location"]!=null && util.isString(arg["location"]) &&
		arg["identifier"]!=null && util.isString(arg["identifier"]) &&
		arg["title"]!=null && util.isString(arg["title"]) &&
		arg["creator"]!=null && util.isString(arg["creator"]) &&
		arg["annotation"]!=null && util.isString(arg["annotation"]) &&
		arg["info"]!=null && util.isString(arg["info"]) &&
		arg["image"]!=null && util.isString(arg["image"]) &&
		arg["album"]!=null && util.isString(arg["album"]) && 
		arg["trackNum"]!=null && util.isNumber(arg["trackNum"]) &&
		arg["duration"]!=null && util.isNumber(arg["duration"]) &&
		arg["link"]!=null && util.isArray(arg["link"]) &&
		arg["meta"]!=null && util.isArray(arg["meta"]) &&
		arg["extension"]!=null && util.isObject(arg["extension"])) return true;
	return false;
};

Track.prototype.toString = function() {
	return JSON.stringify(this);
};

module.exports.Track = Track;
module.exports.Jspf = Jspf;

// attach the .equals method to Array's prototype to call it on any array
function arrayCompare(array, array2) {
	// if the other array is a falsy value, return
        if (!array || !array2)
		return false;
                
	// compare lengths - can save a lot of time 
	if (array.length != array2.length)
		return false;
                                
	for (var i = 0, l=array.length; i < l; i++) {
		// Check if we have nested arrays
		if (array[i] instanceof Array && array2[i] instanceof Array) {
			// recurse into the nested arrays
			if (!array[i].equals(array2[i]))
				return false;       
		}           
		else if (array[i] != array2[i]) { 
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;   
		}           
	}       
	return true;
};

function objectCompare(object, object2) {
	//For the first loop, we only check for types
	for (propName in object) {
		//Check for inherited methods and properties - like .equals itself
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
		//Return false if the return value is different
		if (object.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
			return false;
		}
		//Check instance type
        	else if (typeof object[propName] != typeof object2[propName]) {
			//Different types => not equal
			return false;
		}
	}
	//Now a deeper check using other objects property names
	for (propName in object2) {
		//We must check instances anyway, there may be a property that only exists in object2
		//I wonder, if remembering the checked values from the first loop would be faster or not 
		if (object.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
			return false;
		}
		else if (typeof object[propName] != typeof object2[propName]) {
			return false;
		}
		//If the property is inherited, do not check any more (it must be equa if both objects inherit it)
		if (!object.hasOwnProperty(propName))
			continue;
                                                                                       
		//Now the detail check and recursion
                                                                                        
		//This returns the script back to the array comparing
		if (object[propName] instanceof Array && object2[propName] instanceof Array) {
			// recurse into the nested arrays
			if (!object[propName].equals(object2[propName]))
				return false;
		}
		else if (object[propName] instanceof Object && object2[propName] instanceof Object) {
			// recurse into another objects
			if (!object[propName].equals(object2[propName]))
				return false;
		}
		//Normal value comparison for strings and numbers
		else if(object[propName] != object2[propName]) {
			return false;
		}
	}
	//If everything passed, let's say YES
        return true;
}; 
