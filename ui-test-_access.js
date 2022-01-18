const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKEdit: '.OLSKEdit',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKEdit_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKEdit', function () {
		browser.assert.elements(OLSKEdit, 1);
	});

});
