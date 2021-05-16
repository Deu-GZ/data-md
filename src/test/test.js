console.log('test')
import main from '../main.js';
import api  from '../vmodel/test.js'
console.log(main);
(function (w){
	console.time('result')
	let data1 = {
		_name: 1619903784569, _title: 123, age: "12", _time: "1920,1921,1923"

	}
	console.log(api);
	let result = main(data1, api);
	console.timeEnd('result')
})(window);