(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["data-md"] = factory();
	else
		root["data-md"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/error.js
// 创造高密封的对象
class Futils {
	constructor(){

	}

	// 合法值校验
	transparent(parments){
		// 校验参数是否必传了？
		if(parments == undefined || parments.length!=2){throw new Error('非常抱歉，本方法必须传入两个参数，lastData, vmodel. lastData为后台返回的数据对象，vmodel为前端数据模型'); return;}
		// 校验参数是否是对象？
		if( !this.isJson(parments[0]) && !this.isJson(parments[1])){throw new Error('非常抱歉，两个参数都必须是JSON对象'); return;}
		// 校验vmodle的合法性
		for (let item in parments[1]) {
		    let {type, key, defaults} = parments[1][item];
		    if(type == undefined || (key == undefined && defaults == undefined)){throw new Error('非常抱歉，vmodel语法错误'); break; return;}
		}


	}

	isJson(val){
		if(typeof val == 'object' && Object.prototype.toString.call(val).toLowerCase() == '[object object]' && !val.length){return true;}else{return false;}
	}

	isArray(val){
		return Object.prototype.toString.call(val) =='[object Array]'
	}

	isFn(val){
		return typeof val === 'function'
	}
}

/* harmony default export */ var error = (new Futils());
// CONCATENATED MODULE: ./src/f/mutils.js

function transVal(rval, type, key, defaults, expect){
	let result;

	
    
    if(expect != undefined && expect != '' && !error.isFn(expect)){
        result = type(rval);
        if(type === String){
            return result.substring(...expect);
        };
        if(type === Number){

            return expect[result] || result + parseInt(expect);
        };
        if(type === Date){
            let [_expect, ...g] = expect.split(',')
            return pattern(result, _expect, g);
        };
        if(type === Array){
            return result[0].split(expect);
        }
        
    }

    result = rval;
    if(expect != undefined && expect != '' && error.isFn(expect)){

        return expect(rval);
    }


	return result;
};

function lookup(data, key){
    let datas = data;
    let keyArr = key.split('.');
    let results = "";
    for(let i=0; i<keyArr.length; i++){
        let key = keyArr[i];
        datas = datas[key];
    }
    return datas;
}

/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423  
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04  
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04  
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04  
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18  
 */ 
function pattern(date, fmt, g) {
    let dates = date;
    let fmts = fmt;
    let l = g.length;
    if(l>0){
        for(let i=0; i<l; i++){
            dates = toDate(dates, g);
        }
    }


    var o = {         
    "M+" : dates.getMonth()+1, //月份         
    "d+" : dates.getDate(), //日         
    "h+" : dates.getHours()%12 == 0 ? 12 : dates.getHours()%12, //小时         
    "H+" : dates.getHours(), //小时         
    "m+" : dates.getMinutes(), //分         
    "s+" : dates.getSeconds(), //秒         
    "q+" : Math.floor((dates.getMonth()+3)/3), //季度         
    "S" : dates.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "日",         
    "1" : "一",         
    "2" : "二",         
    "3" : "三",         
    "4" : "四",         
    "5" : "五",         
    "6" : "六"        
    };         
    if(/(y+)/.test(fmts)){         
        fmts=fmts.replace(RegExp.$1, (dates.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmts)){         
        fmts=fmts.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[dates.getDay()+""]);         
    }        
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmts)){         
            fmts = fmts.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmts;         
}

function toDate(date, AddDayCount) {
    let dates = new Date(date);
    return new Date(dates.setDate(dates.getDate()+parseInt(AddDayCount))); //获取AddDayCount天后的日期
}    

// CONCATENATED MODULE: ./src/f/createVal.js


function createVal(lastData, vmodel, mresult){
	let result = mresult;

	for(let keys in vmodel){
		let {type, key, defaults, filters, expect} = vmodel[keys];
		
		if(key == undefined || key == ""){
			// 启用默认值 
			result[keys] = defaults;
			continue;
		}else{
			// 当key 非undefind 时 此时默认值的作用是 拦截 空值和 undefind
			if(lastData[key] == "" || lastData[key] == undefined || lastData[key] == null){
				result[keys] = defaults || "";
				console.log("%c注意，后端返回的"+key+"字段是空、或undefined、或null, 请注意预设defaults", 'color: green;')
				continue;
			}else{
				// key 非空的 且是有值的
				let rval = lookup(lastData, key);
				if(! (error.isArray(type) || error.isJson(type) )){

					// 非可迭代类行
					let val = transVal(rval, type, key, defaults, expect);
					result[keys] = val; continue;
				}else{
					error.isArray(type) ? result[keys] = [] : result[keys] = {};
					if(error.isArray(rval)){
						let l = rval.length;
						for(let i=0; i<l;i++){
							let p = {};
							createVal(rval[i], type[0], p);
							result[keys].push(p);
						}
					}else{
						createVal(rval, type, result[keys]);
					} 
					
				}

			}
		}
		
	}

	return result

}


// CONCATENATED MODULE: ./src/main.js
// 主函数




function main(lastData, vmodel){
	// 错误校验开启 验证输入值的合法性
	error.transparent(arguments);

	// 以model 的 key 取 lastData对应的属性值 并且完成格式转换
	let result = {}; //搜集器
	
	createVal(lastData, vmodel, result);

	// 最后再启用一个终极过滤

	return result;
}


// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = __webpack_exports__["default"] = (main);




/***/ })
/******/ ])["default"];
});