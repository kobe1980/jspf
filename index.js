var util = require('util');

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
	if (!util.isArray(track)) return false;
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
	for (var i in track) {
		if (!track[i].isTrack()) return false;
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

function Track(location, identifier, title, creator, annotation, info, image, album, trackNum, duration, link, meta, extension) {
	this.location = location || "";
	this.identifier = identifier || "";
	this.title = title || "";
	this.creator = creator || "";
	this.annotation = annotation || "";
	this.info = info || "";
	this.image = image || "";
	this.album = album || "";
	this.trackNum = trackNum;
	this.duration = duration;
	this.link = link || Array();
	this.meta = meta || Array();
	this.extension = extension || Array();
}

Track.prototype.setLocation = function(location) {
	this.location = location;
};

Track.prototype.getLocation = function() {
	return this.location;
};

Track.prototype.setIdentifier = function(identifier) {
	this.identifier = identifier;
};

Track.prototype.getIdentifier = function() {
	return this.identifier;
};

Track.prototype.setTitle = function(title) {
	this.title = title;
};

Track.prototype.getTitle = function() {
	return this.title;
};

Track.prototype.setCreator = function(creator) {
	this.creator = creator;
};

Track.prototype.getCreator = function() {
	return this.creator;
};

Track.prototype.setAnnotation = function(annotation) {
	this.annotation = annotation;
};

Track.prototype.getAnnotation = function() {
	return this.annotation;
};

Track.prototype.setInfo = function(info) {
	this.info = info;
};

Track.prototype.getInfo = function() {
	return this.info;
};

Track.prototype.setImage = function(image) {
	this.image = image;
};

Track.prototype.getImage = function() {
	return this.image;
};

Track.prototype.setAlbum = function(album) {
	this.album = album;
};

Track.prototype.getAlbum = function() {
	return this.album;
};

Track.prototype.setTrackNum = function(trackNum) {
	this.trackNum = trackNum;
};

Track.prototype.getTrackNum = function() {
	return this.trackNum;
};

Track.prototype.setDuration = function(duration) {
	this.duration = duration;
};

Track.prototype.getDuration = function() {
	return this.duration;
};

Track.prototype.setLink = function(link) {
	this.link = link;
};

Track.prototype.getLink = function() {
	return this.link;
};

Track.prototype.setMeta = function(meta) {
	this.meta = meta;
};

Track.prototype.getMeta = function() {
	return this.meta;
};

Track.prototype.setExtension = function(extension) {
	this.extension = extension;
};

Track.prototype.getExtension = function() {
	return this.extension;
};

Track.prototype.isTrack = function(track) {
	console.log(Object.prototype.toString.call(track));
};

Track.prototype.toString = function() {
	return JSON.stringify(this);
};

module.exports = Track;
module.exports = Jspf;

