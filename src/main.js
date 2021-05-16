// 主函数

import Futils from './error.js'
import createVal from "./f/createVal.js"

export default function main(lastData, vmodel){
	// 错误校验开启 验证输入值的合法性
	Futils.transparent(arguments);

	// 以model 的 key 取 lastData对应的属性值 并且完成格式转换
	let result = {}; //搜集器
	
	createVal(lastData, vmodel, result);

	// 最后再启用一个终极过滤

	return result;
}

