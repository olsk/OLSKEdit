const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKEdit_Misc', function () {

	const OLSKEditURL = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKEditURL,
		});
	});

	describe('OLSKEdit', function test_OLSKEdit () {

		it('sets href', function () {
			browser.assert.attribute(OLSKEdit, 'href', OLSKEditURL);
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKEdit, 'target', '_blank');
		});

	});

});
