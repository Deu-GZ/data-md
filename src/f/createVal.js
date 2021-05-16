import Futils from '../error.js'
import {transVal, lookup} from './mutils.js'
export default function createVal(lastData, vmodel, mresult){
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
				if(! (Futils.isArray(type) || Futils.isJson(type) )){

					// 非可迭代类行
					let val = transVal(rval, type, key, defaults, expect);
					result[keys] = val; continue;
				}else{
					Futils.isArray(type) ? result[keys] = [] : result[keys] = {};
					if(Futils.isArray(rval)){
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

