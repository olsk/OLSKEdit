const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKEditStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					OLSKEditURL: Math.random().toString(),
				}, Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).filter(function ([key, value]) {
					return value !== 'undefined';
				}))));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

};

Object.assign(exports, mod);
