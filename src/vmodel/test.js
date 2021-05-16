export const kpi = {
	name: {type: Date, key: '_name', defaults: 1, expect: "yyyy年MM月dd日 EEE hh:mm:ss,-11"},

	title: {type: String,key: "_time", defaults: '这里是vmodel', expect: [0,3]},

	sex: {type: Number,key: 'age', defaults: 1, expect: 2},

	age: {type: Array, key: '_time', defaults: [], expect: ","},

	ageMax: {type: Array, key: '_time', defaults: [], expect: (val)=>{let rval = val.split(','); return Math.max(...rval)}},

	studenName: {type: Array, key: '_studens._name', expect: ","},

	studens: {
		type: {
			name: {type: Array, key: '_name', expect: ","}
		},key: "_studens"
	},

	data: {
		type: [
			{ 
				_title: {type: String,key: "title", defaults: 1},
				author: {type: String, key: "author"},
				_age: {type: String, key: "age"},
				tag: {type: Array, key: "_tag"},
				tagstr: {type: String, key: "_tagstr", expect: ','},
				mtime: {
					type:[
						{
							_crea: {type: Date, key: "createTime"},
							_upda: {type: Date, key: "uptime"}
						}
					],
					key: "_time"

				}
			}
		],
		key: "_data"
	}
}
