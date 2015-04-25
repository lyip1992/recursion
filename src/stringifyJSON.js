// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	
	var container, i, j, key, value;

	switch (typeof obj) {

		case 'string':
			return '"' + obj + '"';

		case 'number':
		case 'boolean':
			return String(obj);

		case 'object':
			if (!obj) return 'null';

			container = [];
			if (Object.prototype.toString.apply(obj) === '[object Array]') {
				for (i = 0; i < obj.length; i++)
					container[i] = stringifyJSON(obj[i]);
				return '[' + container.join(',') + ']';
			} else {
				for (var j in obj) {
					key = stringifyJSON(j);
					value = stringifyJSON(obj[j]);
					if (value) container.push(key + ':' + value);
				}
				return '{' + container.join(',') + '}';
			}
	}
};
