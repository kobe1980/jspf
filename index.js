var util = require('util');

function jspf(title, creator, annotation, info, location, identifier, image, date, license, attribution, link, meta, extension, track) {
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

jspf.prototype.setTitle = function(title) {
	if (!util.isString(title)) return false;
	this.title = title;
	return true;
};

jspf.prototype.getTitle = function() {
	return this.title;
};

jspf.prototype.setCreator = function(creator) {
	if (!util.isString(creator)) return false;
	this.creator = creator;
	return true;
};

jspf.prototype.getCreator = function() {
	return this.creator;
};

jspf.prototype.setAnnotation = function(annotation) {
	if (!util.isString(annotation)) return false;
	this.annotation = annotation;
	return true;
};

jspf.prototype.getAnnotation = function() {
	return this.annotation;
};

jspf.prototype.setInfo = function(info) {
	if (!util.isString(info)) return false;
	this.info = info;
	return true;
};

jspf.prototype.getInfo = function() {
	return this.info;
};

jspf.prototype.setLocation = function(location) {
	if (!util.isString(location)) return false;
	this.location = location;
	return true;
};

jspf.prototype.getLocation = function() {
	return this.location;
};

jspf.prototype.setIdentifier = function(identifier) {
	if (!util.isString(identifier)) return false;
	this.identifier = identifier;
	return true;
};

jspf.prototype.getIdentifier = function() {
	return this.identifier;
};

jspf.prototype.setImage = function(image) {
	if (!util.isString(image)) return false;
	this.image = image;
	return true;
};

jspf.prototype.getImage = function() {
	return this.image;
};

jspf.prototype.setDate = function(date) {
	if (!util.isString(date) && ! util.isDate(date)) return false;
	this.date = date;
	return true;
};

jspf.prototype.getDate = function() {
	return this.date;
};

jspf.prototype.setLicense = function(license) {
	if (!util.isString(license)) return false;
	this.license = license;
	return true;
};

jspf.prototype.getLicense = function() {
	return this.license;
};

jspf.prototype.setAttribution = function(attribution) {
	if (!util.isArray(attribution)) return false;
	this.attribution = attribution;
	return true;
};

jspf.prototype.getAttribution = function() {
	return this.attribution;
};

jspf.prototype.setLink = function(link) {
	if (!util.isArray(link)) return false;
	this.link = link;
	return true;
};

jspf.prototype.getLink = function() {
	return this.link;
};

jspf.prototype.setMeta = function(meta) {
	if (!util.isArray(meta)) return false;
	this.meta = meta;
	return true;
};

jspf.prototype.getMeta = function() {
	return this.meta;
};

jspf.prototype.setExtension = function(extension) {
	if (!util.isArray(extension)) return false;
	this.extension = extension;
	return true;
};

jspf.prototype.getExtension = function() {
	return this.extension;
};

jspf.prototype.setTrack = function(track) {
	if (!util.isArray(track)) return false;
	this.track = track;
	return true;
};

jspf.prototype.getTrack = function() {
	return this.track;
};

jspf.prototype.getTrackById = function(trackId) {
	return this.track[trackId];
};

jspf.prototype.addTrack = function(location, identifier, title, creator, annotation, info, image, album, trackNum, duration, link, meta, extension) {
	this.track.push({
		"location": location,
		"identifier": identifier,
		"title": title,
		"creator": creator,
		"annotation": annotation,
		"info": info,
		"image": image,
		"album": album,
		"trackNum": trackNum,
		"duration": duration,
		"link": link,
		"meta": meta,
		"extension": extension
	});
	return true;
};

jspf.prototype.setTrackLocation = function(trackId, location) {
	if (!util.isNumber(trackId) || !util.isString(location) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["location"] = location;
	return true;
};

jspf.prototype.setTrackIdentifier = function(trackId, identifier) {
	if (!util.isNumber(trackId) || !util.isString(identifier) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["identifier"] = identifier;
	return true;
};

jspf.prototype.setTrackTitle = function(trackId, title) {
	if (!util.isNumber(trackId) || !util.isString(title) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["title"] = title;
	return true;
};

jspf.prototype.setTrackCreator = function(trackId, creator) {
	if (!util.isNumber(trackId) || !util.isString(creator) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["creator"] = creator;
	return true;
};

jspf.prototype.setTrackAnnotation = function(trackId, annotation) {
	if (!util.isNumber(trackId) || !util.isString(annotation) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["annotation"] = annotation;
	return true;
};

jspf.prototype.setTrackInfo = function(trackId, info) {
	if (!util.isNumber(trackId) || !util.isString(info) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["info"] = info;
	return true;
};

jspf.prototype.setTrackImage = function(trackId, image) {
	if (!util.isNumber(trackId) || !util.isString(image) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["image"] = image;
	return true;
};

jspf.prototype.setTrackAlbum= function(trackId, album) {
	if (!util.isNumber(trackId) || !util.isString(album) || trackId > this.track.length || trackId < 0) return false;
   	this.track[trackId]["album"] = album;
	return true;
};

jspf.prototype.setTrackTrackNum = function(trackId, trackNum) {
	if (!util.isNumber(trackId) || !util.isNumber(trackNum) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["trackNum"] = trackNum;
	return true;
};

jspf.prototype.setTrackDuration = function(trackId, duration) {
	if (!util.isNumber(trackId) || !util.isNumber(duration) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["duration"] = duration;
	return true;
};

jspf.prototype.setTrackLink = function(trackId, link) {
	if (!util.isNumber(trackId) || !util.isArray(link) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["link"] = link;
	return true;
};

jspf.prototype.setTrackMeta = function(trackId, meta) {
	if (!util.isNumber(trackId) || !util.isArray(meta) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["meta"] = meta;
	return true;
};

jspf.prototype.setTrackExtension = function(trackId, extension) {
	if (!util.isNumber(trackId) || !util.isObject(extension) || trackId > this.track.length || trackId < 0) return false;
    	this.track[trackId]["extension"] = extension;
	return true;
};

jspf.prototype.toString = function() {
	return JSON.stringify(this);
};

module.exports = jspf;
