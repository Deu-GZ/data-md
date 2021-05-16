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

export default new Futils();