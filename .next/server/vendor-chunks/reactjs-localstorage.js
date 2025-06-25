/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reactjs-localstorage";
exports.ids = ["vendor-chunks/reactjs-localstorage"];
exports.modules = {

/***/ "(ssr)/./node_modules/reactjs-localstorage/react-localstorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/reactjs-localstorage/react-localstorage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.reactLocalStorage = {\n    set: function(key, value) {\n        localStorage[key] = value;\n        return localStorage[key];\n    },\n    get: function(key, defaultValue=undefined, silent=true) {\n        var value = localStorage[key] || defaultValue;\n\n        // if silent=false throw error\n        if(!silent && !value)\n            throw key + \" not found in localStorage\";\n\n        return value;\n    },\n    setObject: function(key, value) {\n        localStorage[key] = JSON.stringify(value);\n        return localStorage[key];\n    },\n    getObject: function(key, defaultValue={}, silent=true) {\n        value = this.get(key, JSON.stringify(defaultValue), silent);\n\n        try{\n            return JSON.parse(value);\n        } catch(e) {\n            // will raise error for parsing\n            if(!silent)\n                throw 'Error in parsing value'\n        }\n    },\n    clear: function() {\n        return localStorage.clear();\n    },\n    remove: function(key) {\n        return localStorage.removeItem(key);\n    },\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Rqcy1sb2NhbHN0b3JhZ2UvcmVhY3QtbG9jYWxzdG9yYWdlLmpzIiwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdGpzLWxvY2Fsc3RvcmFnZS9yZWFjdC1sb2NhbHN0b3JhZ2UuanM/OGU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLnJlYWN0TG9jYWxTdG9yYWdlID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV07XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlPXVuZGVmaW5lZCwgc2lsZW50PXRydWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgIC8vIGlmIHNpbGVudD1mYWxzZSB0aHJvdyBlcnJvclxuICAgICAgICBpZighc2lsZW50ICYmICF2YWx1ZSlcbiAgICAgICAgICAgIHRocm93IGtleSArIFwiIG5vdCBmb3VuZCBpbiBsb2NhbFN0b3JhZ2VcIjtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXRPYmplY3Q6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XTtcbiAgICB9LFxuICAgIGdldE9iamVjdDogZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWU9e30sIHNpbGVudD10cnVlKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXQoa2V5LCBKU09OLnN0cmluZ2lmeShkZWZhdWx0VmFsdWUpLCBzaWxlbnQpO1xuXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAvLyB3aWxsIHJhaXNlIGVycm9yIGZvciBwYXJzaW5nXG4gICAgICAgICAgICBpZighc2lsZW50KVxuICAgICAgICAgICAgICAgIHRocm93ICdFcnJvciBpbiBwYXJzaW5nIHZhbHVlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0sXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reactjs-localstorage/react-localstorage.js\n");

/***/ })

};
;