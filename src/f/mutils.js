import Futils from '../error.js'
export function transVal(rval, type, key, defaults, expect){
	let result;

	
    
    if(expect != undefined && expect != '' && !Futils.isFn(expect)){
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
    if(expect != undefined && expect != '' && Futils.isFn(expect)){

        return expect(rval);
    }


	return result;
};

export function lookup(data, key){
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
export function pattern(date, fmt, g) {
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

export function toDate(date, AddDayCount) {
    let dates = new Date(date);
    return new Date(dates.setDate(dates.getDate()+parseInt(AddDayCount))); //获取AddDayCount天后的日期
}    
