var jspf = function(title, creator, annotation, info, location, identifier, image, date, license, attribution, link, meta, extension, track) {
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

	return this;
};

module.exports.jspf = jspf;

jspf.prototype.setTitle = function(title) {
	this.title = title;
};

jspf.prototype.getTitle = function() {
	return this.title;
};

jspf.prototype.setCreator = function(creator) {
	this.creator = creator;
};

jspf.prototype.getCreator = function() {
	return this.creator;
};

jspf.prototype.setAnnotation = function(annotation) {
	this.annotation = annotation;
};

jspf.prototype.getAnnotation = function() {
	return this.annotation;
};

jspf.prototype.setInfo = function(info) {
	this.info = info;
};

jspf.prototype.getInfo = function() {
	return this.info;
};

jspf.prototype.setLocation = function(location) {
	this.location = location;
};

jspf.prototype.getLocation = function() {
	return this.location;
};

jspf.prototype.setIdentifier = function(identifier) {
	this.identifier = identifier;
};

jspf.prototype.getIdentifier = function() {
	return this.identifier;
};

jspf.prototype.setImage = function(image) {
	this.image = image;
};

jspf.prototype.getImage = function() {
	return this.image;
};

jspf.prototype.setDate = function(date) {
	this.date = date;
};

jspf.prototype.getDate = function() {
	return this.date;
};

jspf.prototype.setLicense = function(license) {
	this.license = license;
};

jspf.prototype.getLicense = function() {
	return this.license;
};

jspf.prototype.setAttribution = function(attribution) {
	this.attribution = attribution;
};

jspf.prototype.getAttribution = function() {
	return this.attribution;
};

jspf.prototype.setLink = function(link) {
	this.link = link;
};

jspf.prototype.getLink = function() {
	return this.link;
};

jspf.prototype.setMeta = function(meta) {
	this.meta = meta;
};

jspf.prototype.getMeta = function() {
	return this.meta;
};

jspf.prototype.setExtension = function(extension) {
	this.extension = extension;
};

jspf.prototype.getExtension = function() {
	return this.extension;
};

jspf.prototype.setTrack = function(track) {
	this.track = track;
};

jspf.prototype.getTrack = function() {
	return this.track;
};

jspf.prototype.getTrack = function(trackId) {
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
};

jspf.prototype.setTrackLocation = function(trackId, location) {
    this.track[trackId]["location"] = location;
};

jspf.prototype.setTrackIdentifier = function(trackId, identifier) {
    this.track[trackId]["identifier"] = identifier;
};

jspf.prototype.setTrackTitle = function(trackId, title) {
    this.track[trackId]["title"] = title;
};

jspf.prototype.setTrackCreator = function(trackId, creator) {
    this.track[trackId]["creator"] = creator;
};

jspf.prototype.setTrackAnnotation = function(trackId, annotation) {
    this.track[trackId]["annotation"] = annotation;
};

jspf.prototype.setTrackInfo = function(trackId, info) {
    this.track[trackId]["info"] = info;
};

jspf.prototype.setTrackImage = function(trackId, image) {
    this.track[trackId]["image"] = image;
};

jspf.prototype.setTrackAlbum= function(trackId, album) {
    this.track[trackId]["album"] = album;
};

jspf.prototype.setTrackTrackNum = function(trackId, trackNum) {
    this.track[trackId]["trackNum"] = trackNum;
};

jspf.prototype.setTrackDuration = function(trackId, duration) {
    this.track[trackId]["duration"] = duration;
};

jspf.prototype.setTrackLink = function(trackId, link) {
    this.track[trackId]["link"] = link;
};

jspf.prototype.setTrackMeta = function(trackId, meta) {
    this.track[trackId]["meta"] = meta;
};

jspf.prototype.setTrackExtension = function(trackId, extension) {
    this.track[trackId]["extension"] = extension;
};

jspf.prototype.toString = function() {
	return JSON.stringify(this);
 };