// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var results = [];

	var traverse = function(node) {
		var children = node.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].classList.contains(className)) results.push(children[i]);
			if (children[i].hasChildNodes()) traverse(children[i]);
		}
	};

	traverse(document);
	return results;
};
