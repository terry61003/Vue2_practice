/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	;(function () {

	    var debug = false;

	    var root = this;

	    var EXIF = function EXIF(obj) {
	        if (obj instanceof EXIF) return obj;
	        if (!(this instanceof EXIF)) return new EXIF(obj);
	        this.EXIFwrapped = obj;
	    };

	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = EXIF;
	        }
	        exports.EXIF = EXIF;
	    } else {
	        root.EXIF = EXIF;
	    }

	    var ExifTags = EXIF.Tags = {

	        // version tags
	        0x9000: "ExifVersion", // EXIF version
	        0xA000: "FlashpixVersion", // Flashpix format version

	        // colorspace tags
	        0xA001: "ColorSpace", // Color space information tag

	        // image configuration
	        0xA002: "PixelXDimension", // Valid width of meaningful image
	        0xA003: "PixelYDimension", // Valid height of meaningful image
	        0x9101: "ComponentsConfiguration", // Information about channels
	        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

	        // user information
	        0x927C: "MakerNote", // Any desired information written by the manufacturer
	        0x9286: "UserComment", // Comments by user

	        // related file
	        0xA004: "RelatedSoundFile", // Name of related sound file

	        // date and time
	        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
	        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
	        0x9290: "SubsecTime", // Fractions of seconds for DateTime
	        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
	        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

	        // picture-taking conditions
	        0x829A: "ExposureTime", // Exposure time (in seconds)
	        0x829D: "FNumber", // F number
	        0x8822: "ExposureProgram", // Exposure program
	        0x8824: "SpectralSensitivity", // Spectral sensitivity
	        0x8827: "ISOSpeedRatings", // ISO speed rating
	        0x8828: "OECF", // Optoelectric conversion factor
	        0x9201: "ShutterSpeedValue", // Shutter speed
	        0x9202: "ApertureValue", // Lens aperture
	        0x9203: "BrightnessValue", // Value of brightness
	        0x9204: "ExposureBias", // Exposure bias
	        0x9205: "MaxApertureValue", // Smallest F number of lens
	        0x9206: "SubjectDistance", // Distance to subject in meters
	        0x9207: "MeteringMode", // Metering mode
	        0x9208: "LightSource", // Kind of light source
	        0x9209: "Flash", // Flash status
	        0x9214: "SubjectArea", // Location and area of main subject
	        0x920A: "FocalLength", // Focal length of the lens in mm
	        0xA20B: "FlashEnergy", // Strobe energy in BCPS
	        0xA20C: "SpatialFrequencyResponse", //
	        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
	        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
	        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
	        0xA214: "SubjectLocation", // Location of subject in image
	        0xA215: "ExposureIndex", // Exposure index selected on camera
	        0xA217: "SensingMethod", // Image sensor type
	        0xA300: "FileSource", // Image source (3 == DSC)
	        0xA301: "SceneType", // Scene type (1 == directly photographed)
	        0xA302: "CFAPattern", // Color filter array geometric pattern
	        0xA401: "CustomRendered", // Special processing
	        0xA402: "ExposureMode", // Exposure mode
	        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
	        0xA404: "DigitalZoomRation", // Digital zoom ratio
	        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
	        0xA406: "SceneCaptureType", // Type of scene
	        0xA407: "GainControl", // Degree of overall image gain adjustment
	        0xA408: "Contrast", // Direction of contrast processing applied by camera
	        0xA409: "Saturation", // Direction of saturation processing applied by camera
	        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
	        0xA40B: "DeviceSettingDescription", //
	        0xA40C: "SubjectDistanceRange", // Distance to subject

	        // other tags
	        0xA005: "InteroperabilityIFDPointer",
	        0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
	    };

	    var TiffTags = EXIF.TiffTags = {
	        0x0100: "ImageWidth",
	        0x0101: "ImageHeight",
	        0x8769: "ExifIFDPointer",
	        0x8825: "GPSInfoIFDPointer",
	        0xA005: "InteroperabilityIFDPointer",
	        0x0102: "BitsPerSample",
	        0x0103: "Compression",
	        0x0106: "PhotometricInterpretation",
	        0x0112: "Orientation",
	        0x0115: "SamplesPerPixel",
	        0x011C: "PlanarConfiguration",
	        0x0212: "YCbCrSubSampling",
	        0x0213: "YCbCrPositioning",
	        0x011A: "XResolution",
	        0x011B: "YResolution",
	        0x0128: "ResolutionUnit",
	        0x0111: "StripOffsets",
	        0x0116: "RowsPerStrip",
	        0x0117: "StripByteCounts",
	        0x0201: "JPEGInterchangeFormat",
	        0x0202: "JPEGInterchangeFormatLength",
	        0x012D: "TransferFunction",
	        0x013E: "WhitePoint",
	        0x013F: "PrimaryChromaticities",
	        0x0211: "YCbCrCoefficients",
	        0x0214: "ReferenceBlackWhite",
	        0x0132: "DateTime",
	        0x010E: "ImageDescription",
	        0x010F: "Make",
	        0x0110: "Model",
	        0x0131: "Software",
	        0x013B: "Artist",
	        0x8298: "Copyright"
	    };

	    var GPSTags = EXIF.GPSTags = {
	        0x0000: "GPSVersionID",
	        0x0001: "GPSLatitudeRef",
	        0x0002: "GPSLatitude",
	        0x0003: "GPSLongitudeRef",
	        0x0004: "GPSLongitude",
	        0x0005: "GPSAltitudeRef",
	        0x0006: "GPSAltitude",
	        0x0007: "GPSTimeStamp",
	        0x0008: "GPSSatellites",
	        0x0009: "GPSStatus",
	        0x000A: "GPSMeasureMode",
	        0x000B: "GPSDOP",
	        0x000C: "GPSSpeedRef",
	        0x000D: "GPSSpeed",
	        0x000E: "GPSTrackRef",
	        0x000F: "GPSTrack",
	        0x0010: "GPSImgDirectionRef",
	        0x0011: "GPSImgDirection",
	        0x0012: "GPSMapDatum",
	        0x0013: "GPSDestLatitudeRef",
	        0x0014: "GPSDestLatitude",
	        0x0015: "GPSDestLongitudeRef",
	        0x0016: "GPSDestLongitude",
	        0x0017: "GPSDestBearingRef",
	        0x0018: "GPSDestBearing",
	        0x0019: "GPSDestDistanceRef",
	        0x001A: "GPSDestDistance",
	        0x001B: "GPSProcessingMethod",
	        0x001C: "GPSAreaInformation",
	        0x001D: "GPSDateStamp",
	        0x001E: "GPSDifferential"
	    };

	    var StringValues = EXIF.StringValues = {
	        ExposureProgram: {
	            0: "Not defined",
	            1: "Manual",
	            2: "Normal program",
	            3: "Aperture priority",
	            4: "Shutter priority",
	            5: "Creative program",
	            6: "Action program",
	            7: "Portrait mode",
	            8: "Landscape mode"
	        },
	        MeteringMode: {
	            0: "Unknown",
	            1: "Average",
	            2: "CenterWeightedAverage",
	            3: "Spot",
	            4: "MultiSpot",
	            5: "Pattern",
	            6: "Partial",
	            255: "Other"
	        },
	        LightSource: {
	            0: "Unknown",
	            1: "Daylight",
	            2: "Fluorescent",
	            3: "Tungsten (incandescent light)",
	            4: "Flash",
	            9: "Fine weather",
	            10: "Cloudy weather",
	            11: "Shade",
	            12: "Daylight fluorescent (D 5700 - 7100K)",
	            13: "Day white fluorescent (N 4600 - 5400K)",
	            14: "Cool white fluorescent (W 3900 - 4500K)",
	            15: "White fluorescent (WW 3200 - 3700K)",
	            17: "Standard light A",
	            18: "Standard light B",
	            19: "Standard light C",
	            20: "D55",
	            21: "D65",
	            22: "D75",
	            23: "D50",
	            24: "ISO studio tungsten",
	            255: "Other"
	        },
	        Flash: {
	            0x0000: "Flash did not fire",
	            0x0001: "Flash fired",
	            0x0005: "Strobe return light not detected",
	            0x0007: "Strobe return light detected",
	            0x0009: "Flash fired, compulsory flash mode",
	            0x000D: "Flash fired, compulsory flash mode, return light not detected",
	            0x000F: "Flash fired, compulsory flash mode, return light detected",
	            0x0010: "Flash did not fire, compulsory flash mode",
	            0x0018: "Flash did not fire, auto mode",
	            0x0019: "Flash fired, auto mode",
	            0x001D: "Flash fired, auto mode, return light not detected",
	            0x001F: "Flash fired, auto mode, return light detected",
	            0x0020: "No flash function",
	            0x0041: "Flash fired, red-eye reduction mode",
	            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
	            0x0047: "Flash fired, red-eye reduction mode, return light detected",
	            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
	            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
	            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
	            0x0059: "Flash fired, auto mode, red-eye reduction mode",
	            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
	            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
	        },
	        SensingMethod: {
	            1: "Not defined",
	            2: "One-chip color area sensor",
	            3: "Two-chip color area sensor",
	            4: "Three-chip color area sensor",
	            5: "Color sequential area sensor",
	            7: "Trilinear sensor",
	            8: "Color sequential linear sensor"
	        },
	        SceneCaptureType: {
	            0: "Standard",
	            1: "Landscape",
	            2: "Portrait",
	            3: "Night scene"
	        },
	        SceneType: {
	            1: "Directly photographed"
	        },
	        CustomRendered: {
	            0: "Normal process",
	            1: "Custom process"
	        },
	        WhiteBalance: {
	            0: "Auto white balance",
	            1: "Manual white balance"
	        },
	        GainControl: {
	            0: "None",
	            1: "Low gain up",
	            2: "High gain up",
	            3: "Low gain down",
	            4: "High gain down"
	        },
	        Contrast: {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        Saturation: {
	            0: "Normal",
	            1: "Low saturation",
	            2: "High saturation"
	        },
	        Sharpness: {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        SubjectDistanceRange: {
	            0: "Unknown",
	            1: "Macro",
	            2: "Close view",
	            3: "Distant view"
	        },
	        FileSource: {
	            3: "DSC"
	        },

	        Components: {
	            0: "",
	            1: "Y",
	            2: "Cb",
	            3: "Cr",
	            4: "R",
	            5: "G",
	            6: "B"
	        }
	    };

	    function addEvent(element, event, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(event, handler, false);
	        } else if (element.attachEvent) {
	            element.attachEvent("on" + event, handler);
	        }
	    }

	    function imageHasData(img) {
	        return !!img.exifdata;
	    }

	    function base64ToArrayBuffer(base64, contentType) {
	        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
	        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
	        var binary = atob(base64);
	        var len = binary.length;
	        var buffer = new ArrayBuffer(len);
	        var view = new Uint8Array(buffer);
	        for (var i = 0; i < len; i++) {
	            view[i] = binary.charCodeAt(i);
	        }
	        return buffer;
	    }

	    function objectURLToBlob(url, callback) {
	        var http = new XMLHttpRequest();
	        http.open("GET", url, true);
	        http.responseType = "blob";
	        http.onload = function (e) {
	            if (this.status == 200 || this.status === 0) {
	                callback(this.response);
	            }
	        };
	        http.send();
	    }

	    function getImageData(img, callback) {
	        function handleBinaryFile(binFile) {
	            var data = findEXIFinJPEG(binFile);
	            var iptcdata = findIPTCinJPEG(binFile);
	            img.exifdata = data || {};
	            img.iptcdata = iptcdata || {};
	            if (callback) {
	                callback.call(img);
	            }
	        }

	        if (img.src) {
	            if (/^data\:/i.test(img.src)) {
	                // Data URI
	                var arrayBuffer = base64ToArrayBuffer(img.src);
	                handleBinaryFile(arrayBuffer);
	            } else if (/^blob\:/i.test(img.src)) {
	                // Object URL
	                var fileReader = new FileReader();
	                fileReader.onload = function (e) {
	                    handleBinaryFile(e.target.result);
	                };
	                objectURLToBlob(img.src, function (blob) {
	                    fileReader.readAsArrayBuffer(blob);
	                });
	            } else {
	                var http = new XMLHttpRequest();
	                http.onload = function () {
	                    if (this.status == 200 || this.status === 0) {
	                        handleBinaryFile(http.response);
	                    } else {
	                        throw "Could not load image";
	                    }
	                    http = null;
	                };
	                http.open("GET", img.src, true);
	                http.responseType = "arraybuffer";
	                http.send(null);
	            }
	        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {
	            var fileReader = new FileReader();
	            fileReader.onload = function (e) {
	                if (debug) console.log("Got file of length " + e.target.result.byteLength);
	                handleBinaryFile(e.target.result);
	            };

	            fileReader.readAsArrayBuffer(img);
	        }
	    }

	    function findEXIFinJPEG(file) {
	        var dataView = new DataView(file);

	        if (debug) console.log("Got file of length " + file.byteLength);
	        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }

	        var offset = 2,
	            length = file.byteLength,
	            marker;

	        while (offset < length) {
	            if (dataView.getUint8(offset) != 0xFF) {
	                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
	                return false; // not a valid marker, something is wrong
	            }

	            marker = dataView.getUint8(offset + 1);
	            if (debug) console.log(marker);

	            // we could implement handling for other markers here,
	            // but we're only looking for 0xFFE1 for EXIF data

	            if (marker == 225) {
	                if (debug) console.log("Found 0xFFE1 marker");

	                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

	                // offset += 2 + file.getShortAt(offset+2, true);
	            } else {
	                offset += 2 + dataView.getUint16(offset + 2);
	            }
	        }
	    }

	    function findIPTCinJPEG(file) {
	        var dataView = new DataView(file);

	        if (debug) console.log("Got file of length " + file.byteLength);
	        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }

	        var offset = 2,
	            length = file.byteLength;

	        var isFieldSegmentStart = function isFieldSegmentStart(dataView, offset) {
	            return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4D && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
	        };

	        while (offset < length) {

	            if (isFieldSegmentStart(dataView, offset)) {

	                // Get the length of the name header (which is padded to an even number of bytes)
	                var nameHeaderLength = dataView.getUint8(offset + 7);
	                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
	                // Check for pre photoshop 6 format
	                if (nameHeaderLength === 0) {
	                    // Always 4
	                    nameHeaderLength = 4;
	                }

	                var startOffset = offset + 8 + nameHeaderLength;
	                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

	                return readIPTCData(file, startOffset, sectionLength);

	                break;
	            }

	            // Not the marker, continue searching
	            offset++;
	        }
	    }
	    var IptcFieldMap = {
	        0x78: 'caption',
	        0x6E: 'credit',
	        0x19: 'keywords',
	        0x37: 'dateCreated',
	        0x50: 'byline',
	        0x55: 'bylineTitle',
	        0x7A: 'captionWriter',
	        0x69: 'headline',
	        0x74: 'copyright',
	        0x0F: 'category'
	    };
	    function readIPTCData(file, startOffset, sectionLength) {
	        var dataView = new DataView(file);
	        var data = {};
	        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
	        var segmentStartPos = startOffset;
	        while (segmentStartPos < startOffset + sectionLength) {
	            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
	                segmentType = dataView.getUint8(segmentStartPos + 2);
	                if (segmentType in IptcFieldMap) {
	                    dataSize = dataView.getInt16(segmentStartPos + 3);
	                    segmentSize = dataSize + 5;
	                    fieldName = IptcFieldMap[segmentType];
	                    fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
	                    // Check if we already stored a value with this name
	                    if (data.hasOwnProperty(fieldName)) {
	                        // Value already stored with this name, create multivalue field
	                        if (data[fieldName] instanceof Array) {
	                            data[fieldName].push(fieldValue);
	                        } else {
	                            data[fieldName] = [data[fieldName], fieldValue];
	                        }
	                    } else {
	                        data[fieldName] = fieldValue;
	                    }
	                }
	            }
	            segmentStartPos++;
	        }
	        return data;
	    }

	    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
	        var entries = file.getUint16(dirStart, !bigEnd),
	            tags = {},
	            entryOffset,
	            tag,
	            i;

	        for (i = 0; i < entries; i++) {
	            entryOffset = dirStart + i * 12 + 2;
	            tag = strings[file.getUint16(entryOffset, !bigEnd)];
	            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
	            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
	        }
	        return tags;
	    }

	    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
	        var type = file.getUint16(entryOffset + 2, !bigEnd),
	            numValues = file.getUint32(entryOffset + 4, !bigEnd),
	            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
	            offset,
	            vals,
	            val,
	            n,
	            numerator,
	            denominator;

	        switch (type) {
	            case 1: // byte, 8-bit unsigned int
	            case 7:
	                // undefined, 8-bit byte, value depending on field
	                if (numValues == 1) {
	                    return file.getUint8(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 4 ? valueOffset : entryOffset + 8;
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint8(offset + n);
	                    }
	                    return vals;
	                }

	            case 2:
	                // ascii, 8-bit byte
	                offset = numValues > 4 ? valueOffset : entryOffset + 8;
	                return getStringFromDB(file, offset, numValues - 1);

	            case 3:
	                // short, 16 bit int
	                if (numValues == 1) {
	                    return file.getUint16(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 2 ? valueOffset : entryOffset + 8;
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 4:
	                // long, 32 bit int
	                if (numValues == 1) {
	                    return file.getUint32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 5:
	                // rational = two long values, first is numerator, second is denominator
	                if (numValues == 1) {
	                    numerator = file.getUint32(valueOffset, !bigEnd);
	                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
	                    val = new Number(numerator / denominator);
	                    val.numerator = numerator;
	                    val.denominator = denominator;
	                    return val;
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
	                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
	                        vals[n] = new Number(numerator / denominator);
	                        vals[n].numerator = numerator;
	                        vals[n].denominator = denominator;
	                    }
	                    return vals;
	                }

	            case 9:
	                // slong, 32 bit signed int
	                if (numValues == 1) {
	                    return file.getInt32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 10:
	                // signed rational, two slongs, first is numerator, second is denominator
	                if (numValues == 1) {
	                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	        }
	    }

	    function getStringFromDB(buffer, start, length) {
	        var outstr = "",
	            n = start;
	        for (; n < start + length; n++) {
	            outstr += String.fromCharCode(buffer.getUint8(n));
	        }
	        return outstr;
	    }

	    function readEXIFData(file, start) {
	        if (getStringFromDB(file, start, 4) != "Exif") {
	            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
	            return false;
	        }

	        var bigEnd,
	            tags,
	            tag,
	            exifData,
	            gpsData,
	            tiffOffset = start + 6;

	        // test for TIFF validity and endianness
	        if (file.getUint16(tiffOffset) == 0x4949) {
	            bigEnd = false;
	        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
	            bigEnd = true;
	        } else {
	            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
	            return false;
	        }

	        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
	            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
	            return false;
	        }

	        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

	        if (firstIFDOffset < 0x00000008) {
	            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
	            return false;
	        }

	        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

	        if (tags.ExifIFDPointer) {
	            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
	            for (tag in exifData) {
	                switch (tag) {
	                    case "LightSource":
	                    case "Flash":
	                    case "MeteringMode":
	                    case "ExposureProgram":
	                    case "SensingMethod":
	                    case "SceneCaptureType":
	                    case "SceneType":
	                    case "CustomRendered":
	                    case "WhiteBalance":
	                    case "GainControl":
	                    case "Contrast":
	                    case "Saturation":
	                    case "Sharpness":
	                    case "SubjectDistanceRange":
	                    case "FileSource":
	                        exifData[tag] = StringValues[tag][exifData[tag]];
	                        break;

	                    case "ExifVersion":
	                    case "FlashpixVersion":
	                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
	                        break;

	                    case "ComponentsConfiguration":
	                        exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
	                        break;
	                }
	                tags[tag] = exifData[tag];
	            }
	        }

	        if (tags.GPSInfoIFDPointer) {
	            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
	            for (tag in gpsData) {
	                switch (tag) {
	                    case "GPSVersionID":
	                        gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
	                        break;
	                }
	                tags[tag] = gpsData[tag];
	            }
	        }

	        return tags;
	    }

	    EXIF.getData = function (img, callback) {
	        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;

	        if (!imageHasData(img)) {
	            getImageData(img, callback);
	        } else {
	            if (callback) {
	                callback.call(img);
	            }
	        }
	        return true;
	    };

	    EXIF.getTag = function (img, tag) {
	        if (!imageHasData(img)) return;
	        return img.exifdata[tag];
	    };

	    EXIF.getIptcTag = function (img, tag) {
	        if (!imageHasData(img)) return;
	        return img.iptcdata[tag];
	    };

	    EXIF.getAllTags = function (img) {
	        if (!imageHasData(img)) return {};
	        var a,
	            data = img.exifdata,
	            tags = {};
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                tags[a] = data[a];
	            }
	        }
	        return tags;
	    };

	    EXIF.getAllIptcTags = function (img) {
	        if (!imageHasData(img)) return {};
	        var a,
	            data = img.iptcdata,
	            tags = {};
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                tags[a] = data[a];
	            }
	        }
	        return tags;
	    };

	    EXIF.pretty = function (img) {
	        if (!imageHasData(img)) return "";
	        var a,
	            data = img.exifdata,
	            strPretty = "";
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                if (_typeof(data[a]) == "object") {
	                    if (data[a] instanceof Number) {
	                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
	                    } else {
	                        strPretty += a + " : [" + data[a].length + " values]\r\n";
	                    }
	                } else {
	                    strPretty += a + " : " + data[a] + "\r\n";
	                }
	            }
	        }
	        return strPretty;
	    };

	    EXIF.readFromBinaryFile = function (file) {
	        return findEXIFinJPEG(file);
	    };
	    /*if (typeof define === 'function' && define.amd) {
	        define('exif-js', [], function() {
	            return EXIF;
	        });
	    }*/
	    window.EXIF = EXIF;
	}).call();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    var ForEach = function ForEach(array, func) {
	        [].forEach.call(array, function (item, i) {
	            func(item, i);
	        });
	    },
	        method = {
	        Init: function Init(v) {
	            // dom target
	            this.target = v;
	            // methods
	            this.Check = method.check;
	            this.Display = method.display;
	            this.Html = method.html;
	            this.SetAttr = method.setAttr;
	            this.GetAttr = method.getAttr;
	            this.RemoveAttr = method.removeAttr;
	            this.GetVal = method.getVal;
	            this.SetVal = method.setVal;
	            this.AddClass = method.addClass;
	            this.RemoveClass = method.removeClass;
	            this.On = method.on;
	            this.Off = method.off;

	            return this;
	        },
	        display: function display(d) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD display no target');
	                    break;
	                case 1:
	                    this.target[0].style.display = d;
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.style.display = d;
	                    });
	            }
	            return this;
	        },
	        html: function html(t) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD html no target');
	                    break;
	                case 1:
	                    this.target[0].innerHTML = t;
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.innerHTML = t;
	                    });
	            }
	            return this;
	        },
	        setAttr: function setAttr(a, v) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD setAttr no target');
	                    break;
	                case 1:
	                    this.target[0].setAttribute(a, v);
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.setAttribute(a, v);
	                    });
	            }
	            return this;
	        },
	        removeAttr: function removeAttr(a) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD removeAttr no target');
	                    break;
	                case 1:
	                    this.target[0].removeAttribute(a);
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.removeAttribute(a);
	                    });
	            }
	            return this;
	        },
	        getAttr: function getAttr(a) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD getAttr no target');
	                    break;
	                case 1:
	                    var attr = this.target[0].getAttribute(a);
	                    break;
	                default:
	                    var attr = [];
	                    ForEach(this.target, function (item) {
	                        val.push(item.getAttribute(a));
	                    });
	            }
	            return attr;
	        },
	        setVal: function setVal(v) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD setVal no target');
	                    break;
	                case 1:
	                    this.target[0].value = v;
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.value = v;
	                    });
	            }
	            return this;
	        },
	        getVal: function getVal(v) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD getVal no target');
	                    break;
	                case 1:
	                    var val = this.target[0].value;
	                    break;
	                default:
	                    var val = [];
	                    ForEach(this.target, function (item) {
	                        val.push(item.value);
	                    });
	            }
	            return val;
	        },
	        on: function on(e, func) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD On no target');
	                    break;
	                case 1:
	                    this.target[0].addEventListener(e, func, false);
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.addEventListener(e, func, false);
	                    });
	            }
	        },
	        off: function off() {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD On no target');
	                    break;
	                case 1:
	                    this.target[0].removeEventListener(e, func, false);
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.removeEventListener(e, func, false);
	                    });
	            }
	        },
	        check: function check() {
	            switch (this.target.length) {
	                case 0:
	                    return false;
	                    break;
	                case 1:
	                    return true;
	                    break;
	                default:
	                    return true;
	            }
	        },
	        addClass: function addClass(c) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD addClass no target');
	                    break;
	                case 1:
	                    if (!this.target[0].classList.contains(c)) {
	                        this.target[0].classList.add(c);
	                    }
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        if (!item.classList.contains(c)) {
	                            item.classList.add(c);
	                        }
	                    });
	            }
	            return this;
	        },
	        removeClass: function removeClass(c) {
	            switch (this.target.length) {
	                case 0:
	                    console.log('XD addClass no target');
	                    break;
	                case 1:
	                    if (this.target[0].classList.contains(c)) {
	                        this.target[0].classList.remove(c);
	                    }
	                    break;
	                default:
	                    ForEach(this.target, function (item) {
	                        item.classList.remove(c);
	                        if (item.classList.contains(c)) {
	                            item.classList.remove(c);
	                        }
	                    });
	            }
	            return this;
	        }
	    },
	        XD = function XD(v) {
	        return new method.Init(document.querySelectorAll(v));
	    },
	        Vue_sup = {
	        Alert_sup: {
	            dom: {
	                window: '#alert_window',
	                title: '#alert_title',
	                content: '#alert_content',
	                btn: '#alert_btn',
	                block: '#window_block',
	                status: false
	            },
	            Show: function Show(title, content, status) {
	                if (XD(this.dom.block).Check()) {
	                    XD(this.dom.block).Display('block');
	                }
	                switch (status) {
	                    case 'tip':
	                        XD(this.dom.window).AddClass('tip');
	                        break;
	                    case 'error':
	                        XD(this.dom.window).RemoveClass('tip');
	                        break;
	                    default:
	                        console.log('forget alert status');
	                };
	                XD(this.dom.title).Html(title);
	                XD(this.dom.content).Html(content);
	                XD(this.dom.window).Display('block');
	                this.dom.status = true;
	            },
	            Hide: function Hide() {
	                if (XD(this.dom.block).Check()) {
	                    XD(this.dom.block).RemoveAttr('style');
	                }
	                XD(this.dom.title).Html(null);
	                XD(this.dom.content).Html(null);
	                XD(this.dom.window).RemoveAttr('style');
	                this.dom.status = false;
	            }
	        },
	        left_menu_sup: {
	            dom: {
	                menu: '#left_menu',
	                block: '#window_block',
	                status: false
	            },
	            Show: function Show() {
	                if (!this.dom.status) {
	                    if (XD(this.dom.block).Check()) {
	                        XD(this.dom.block).Display('block');
	                    }
	                    XD(this.dom.menu).AddClass('slideInLeft').Display('block');
	                    this.dom.status = true;
	                }
	            },
	            Hide: function Hide() {
	                if (this.dom.status) {
	                    if (XD(this.dom.block).Check()) {
	                        XD(this.dom.block).RemoveAttr('style');
	                    }
	                    XD(this.dom.menu).RemoveClass('slideInLeft').AddClass('slideOutLeft');
	                    setTimeout(function () {
	                        XD(Vue_sup.left_menu_sup.dom.menu).RemoveClass('slideOutLeft').RemoveAttr('style');
	                        Vue_sup.left_menu_sup.dom.status = false;
	                    }, 500);
	                }
	            }
	        },
	        img_rotate: function img_rotate(img, maxEdge) {
	            var canvas = document.createElement('canvas'),
	                ctx = canvas.getContext("2d");
	            EXIF.getData(img, function () {
	                var orientation = EXIF.getTag(img, "Orientation");
	                if ([3, 6, 8].indexOf(orientation) > -1) {
	                    if (img.height > maxEdge) {
	                        canvas.width = maxEdge;
	                        canvas.height = img.width / img.height * maxEdge;
	                    } else {
	                        canvas.width = img.height;
	                        canvas.height = img.width;
	                    }
	                } else {
	                    if (img.width > maxEdge) {
	                        canvas.width = maxEdge;
	                        canvas.height = img.height / img.width * maxEdge;
	                    } else {
	                        canvas.width = img.width;
	                        canvas.height = img.height;
	                    }
	                }
	                switch (orientation) {
	                    case 3:
	                        ctx.transform(-1, 0, 0, -1, canvas.width, canvas.height);
	                        break;
	                    case 6:
	                        ctx.transform(0, 1, -1, 0, canvas.width, 0);
	                        break;
	                    case 8:
	                        ctx.transform(0, -1, 1, 0, 0, canvas.height);
	                        break;
	                    default:
	                        ctx.transform(1, 0, 0, 1, 0, 0);
	                }
	                if ([3, 6, 8].indexOf(orientation) > -1) {
	                    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.height, canvas.width);
	                } else {
	                    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
	                }
	            });
	            return canvas.toDataURL("image/png");
	            //toDataURL('imageType','imageQuality')
	        }
	    };
	    window.ForEach = ForEach;
	    window.XD = XD;
	    window.Vue_sup = Vue_sup;
	}).call();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	//alert
	var Alert = {
	    template: '<div class="pop alert animated bounce" id="alert_window">\n        <div class="title">\n            <div class="text" id="alert_title"></div>\n            <div class="icon" v-on:click="close">\n                <i class="fa fa-times" aria-hidden="true"></i>\n            </div>\n        </div>\n        <div class="content" id="alert_content"></div>\n        <div class="footer">\n            <div class="btn_group">\n                <button class="confirm" id="alert_btn" v-on:click="close">OK</button>\n            </div>\n        </div>\n     </div>',
	    methods: {
	        close: function close() {
	            Vue_sup.Alert_sup.Hide();
	        }
	    },
	    mounted: function mounted() {}
	};
	Vue.component('alert', Alert);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	//block
	var Block = {
	    template: '<div class="page window_block" id="window_block" v-on:click="close"></div>',
	    methods: {
	        close: function close() {
	            if (Vue_sup.Alert_sup.dom.status) {
	                Vue_sup.Alert_sup.Hide();
	            }
	            if (Vue_sup.left_menu_sup.dom.status) {
	                Vue_sup.left_menu_sup.Hide();
	            }
	        }
	    },
	    mounted: function mounted() {}
	};
	Vue.component('block', Block);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    //login page
	    var login = {
	        template: '<div class="page_login animated zoomIn">\n            <div class="login_main">\n                <div class="input_group">\n                    <input type="text" v-model="ac" placeholder="account" v-on:keyup.enter="focus_ps">\n                    <input type="password" v-model="ps" placeholder="password" v-on:keyup.enter="login">\n                </div>\n                <div class="btn_group">\n                    <button v-on:click="login">login</button>\n                </div>\n            </div>\n        </div>',
	        data: function data() {
	            return {
	                ac: null,
	                ps: null
	            };
	        },
	        methods: {
	            login: function login() {
	                var text;
	                if (this.ac == 1 && this.ps == 1) {
	                    text = 'success';
	                    Vue_sup.Alert_sup.Show('Alert Title', text, 'tip');
	                } else {
	                    text = 'account:1<br>password:1';
	                    Vue_sup.Alert_sup.Show('Alert Title', text, 'error');
	                }
	            },
	            focus_ps: function focus_ps() {
	                document.querySelector('input[type="password"]').focus();
	            }
	        },
	        mounted: function mounted() {}
	    };
	    window.login = login;
	}).call();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    //login page
	    var uploadImg = {
	        template: '<div class="page_upload_img animated zoomIn">\n            <div class="img" v-show="showImg">\n                <img v-bind:src="img">\n            </div>\n            <div class="upload_block">\n                <input type="file" accept="image/*" v-on:change="show_img">\n                <span>Upload Image</span>\n            </div>\n        </div>',
	        data: function data() {
	            return {
	                img: null,
	                showImg: false
	            };
	        },
	        methods: {
	            show_img: function show_img(e) {
	                var reader = new FileReader(),
	                    file = e.target.files[0],
	                    self = this,
	                    img = document.createElement('img');
	                reader.onload = function () {
	                    img.onload = function () {
	                        self.img = Vue_sup.img_rotate(img, 1000);
	                        self.showImg = true;
	                    };
	                    img.src = reader.result;
	                };
	                if (file && file.type.match('image.*')) {
	                    reader.readAsDataURL(file);
	                } else {
	                    this.showImg = false;
	                }
	            }
	        },
	        mounted: function mounted() {}
	    };
	    window.uploadImg = uploadImg;
	}).call();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    //Main page
	    var mainBase = {
	        template: '<div class="page page_main animated fadeIn">\n            <div class="left_menu animated" id="left_menu">\n                <ul>\n                    <li class="menu_group" v-for="(item, index) in menu">\n                        <a class="main_menu" v-bind="{ \'type\': index, \'href\': item.href }" v-on:click="main_menu_link">{{item.name}}</a>\n                        <a class="sub_menu" v-for="(subItem, subIndex) in item.sub" v-on:click="sub_menu_link" v-bind="{ \'type\': index, \'href\': subItem.href, \'subType\': subIndex }">\n                        {{subItem.name}}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class="sub_page">\n                <div class="left_menu_icon" v-on:click="show_menu">\n                    <i class="fa fa-bars" aria-hidden="true"></i>\n                </div>\n                <div class="page_title">{{pageTitle}}</div>\n                <router-view></router-view>\n            </div>\n            <alert></alert>\n            <block></block>\n        </div>',
	        data: function data() {
	            return {
	                menu: [{ name: 'example', href: null,
	                    sub: [{
	                        name: 'login window',
	                        href: '#/login'
	                    }, {
	                        name: 'upload img',
	                        href: '#/uploadImg'
	                    }]
	                }, { name: 'info', href: null,
	                    sub: [{
	                        name: 'author',
	                        href: '#/authorInfo'
	                    }]
	                }, { name: 'thinking', href: '#/authorInfo' }],
	                pageTitle: this.$route.path.substring(1)
	            };
	        },
	        methods: {
	            show_menu: function show_menu() {
	                Vue_sup.left_menu_sup.Show();
	            },
	            main_menu_link: function main_menu_link(e) {
	                e.preventDefault();
	                var href = e.target.getAttribute('href'),
	                    type = e.target.getAttribute('type');
	                XD('#left_menu .main_menu').RemoveClass('active');
	                XD('#left_menu .sub_menu').RemoveClass('show').RemoveClass('active');
	                e.target.classList.add('active');
	                if (href) {
	                    if (Vue_sup.left_menu_sup.dom.status) {
	                        Vue_sup.left_menu_sup.Hide();
	                    }
	                    this.pageTitle = href.substring(2);
	                    router.push({
	                        path: href.substring(2)
	                    });
	                } else {
	                    XD('#left_menu .sub_menu[type="' + type + '"]').AddClass('show');
	                }
	            },
	            sub_menu_link: function sub_menu_link(e) {
	                e.preventDefault();
	                XD('#left_menu .sub_menu').RemoveClass('active');
	                e.target.classList.add('active');
	                var href = e.target.getAttribute('href'),
	                    type = e.target.getAttribute('type'),
	                    subType = e.target.getAttribute('subType');
	                if (href) {
	                    if (Vue_sup.left_menu_sup.dom.status) {
	                        Vue_sup.left_menu_sup.Hide();
	                    }
	                    this.pageTitle = this.menu[type].sub[subType].name;
	                    router.push({
	                        path: href.substring(2)
	                    });
	                }
	            }
	        },
	        mounted: function mounted() {}
	    };
	    window.mainBase = mainBase;
	}).call();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    //Index page
	    var authorInfo = {
	        template: '<div class="page_author_info animated zoomIn">\n            <div class="img">\n                <img src="img/author.png">\n            </div>\n            <ul class="info">\n                <li v-for="item in info">\n                    <span class="thing">{{item.thing}}\uFF1A</span>\n                    <span class="content">{{item.content}}</span>\n                </li>\n                <li>\n                    <span class="thing">Email\uFF1A</span>\n                    <span class="content"><a href="mailto:flamma0917@gamil.com" target="_blank">flamma0917@gamil.com</a></span>\n                </li>\n            </ul>\n        </div>',
	        data: function data() {
	            return {
	                info: [{ thing: 'Name', content: 'Ken' }, { thing: 'Title', content: 'Junior Front-End-Developer' }, { thing: 'Skill', content: 'HTML & CSS & Javascript' }, { thing: 'Learning', content: 'Vue2 & webpack' }]
	            };
	        },
	        methods: {},
	        mounted: function mounted() {}
	    };
	    window.authorInfo = authorInfo;
	}).call();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    Vue.use(VueRouter);
	    //Router Set
	    var router = new VueRouter({
	        routes: [{ path: '/', redirect: '/index' }, { path: '/', component: mainBase,
	            children: [{
	                path: 'authorInfo',
	                component: authorInfo,
	                name: 'authorInfo'
	            }, {
	                path: 'login',
	                component: login,
	                name: 'login'
	            }, {
	                path: 'uploadImg',
	                component: uploadImg,
	                name: 'uploadImg'
	            }, {
	                path: '*',
	                redirect: 'authorInfo'
	            }] }]
	    });
	    window.router = router;
	}).call();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	//Start
	document.addEventListener('DOMContentLoaded', function () {
	    'use strict';

	    new Vue({
	        router: router,
	        template: '<router-view></router-view>'
	    }).$mount('app');
	});

/***/ }
/******/ ]);