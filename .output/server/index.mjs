globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/AnimatePresence-Ba1oPeBM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108d-z6mxOKmhqCIhVVDjm7uHYVmtkx4\"",
		"mtime": "2026-08-26T10:43:13.543Z",
		"size": 4237,
		"path": "../public/assets/AnimatePresence-Ba1oPeBM.js"
	},
	"/assets/articles.index-COHw-kXS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d4-nPnmALz8yMjAhoRhKF260NSdRao\"",
		"mtime": "2026-08-26T10:43:13.546Z",
		"size": 1492,
		"path": "../public/assets/articles.index-COHw-kXS.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"a19-2gWvn8ocf7Z4LjTy3dytB5ksd3M\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2585,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/articles._slug-wS9FP0pg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86f-8/Nd++uTiCHSBBH8Gc5HJGNq0Vw\"",
		"mtime": "2026-08-26T10:43:13.546Z",
		"size": 2159,
		"path": "../public/assets/articles._slug-wS9FP0pg.js"
	},
	"/assets/book-appointment-CWzBM3GY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da7-xX1qXJZFape5m40Ef1qHt6H+Y6s\"",
		"mtime": "2026-08-26T10:43:13.546Z",
		"size": 11687,
		"path": "../public/assets/book-appointment-CWzBM3GY.js"
	},
	"/assets/clinic-EtwU9bSi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ad-AygUax3dBYMhni/gWPtFp3Gbaqg\"",
		"mtime": "2026-08-26T10:43:13.547Z",
		"size": 685,
		"path": "../public/assets/clinic-EtwU9bSi.js"
	},
	"/assets/contact-CspTPA3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1375-qVsui4ostvB17ywoYjMOZFMoU48\"",
		"mtime": "2026-08-26T10:43:13.547Z",
		"size": 4981,
		"path": "../public/assets/contact-CspTPA3b.js"
	},
	"/assets/Container-Dha9R0E8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fafc-mKTtU7T1jdP9QIAnAxH5O236NJI\"",
		"mtime": "2026-08-26T10:43:13.543Z",
		"size": 64252,
		"path": "../public/assets/Container-Dha9R0E8.js"
	},
	"/assets/DoctorCard-NGsM_pK1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c8-zv5E8CYuevyh+YhfeQgL0cm/Djw\"",
		"mtime": "2026-08-26T10:43:13.543Z",
		"size": 2504,
		"path": "../public/assets/DoctorCard-NGsM_pK1.js"
	},
	"/assets/doctors.index-aMrwdyYp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"427-c5iD5ibxTP8/3QezktOsYnL8+Fo\"",
		"mtime": "2026-08-26T10:43:13.547Z",
		"size": 1063,
		"path": "../public/assets/doctors.index-aMrwdyYp.js"
	},
	"/assets/doctors._slug-rZcFXsIr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14df-DEcwIxG8sOIhcBqsbq+AAHOYs5c\"",
		"mtime": "2026-08-26T10:43:13.547Z",
		"size": 5343,
		"path": "../public/assets/doctors._slug-rZcFXsIr.js"
	},
	"/assets/FaqAccordion-DIv6Y-AL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5737-4aTqHTxORojqU2Zpsz0T5+sel2A\"",
		"mtime": "2026-08-26T10:43:13.543Z",
		"size": 22327,
		"path": "../public/assets/FaqAccordion-DIv6Y-AL.js"
	},
	"/assets/faqs-CxvHRY8f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"116c-yQeu/KBrbTAr+TtVU9UUXtGr1/Q\"",
		"mtime": "2026-08-26T10:43:13.547Z",
		"size": 4460,
		"path": "../public/assets/faqs-CxvHRY8f.js"
	},
	"/assets/gallery-K5Uv0GK3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b0-/gD6Wu55948/7AsqTZ4it9vnQjQ\"",
		"mtime": "2026-08-26T10:43:13.548Z",
		"size": 4272,
		"path": "../public/assets/gallery-K5Uv0GK3.js"
	},
	"/assets/generic-instruments-D7lniivr.jpg": {
		"type": "image/jpeg",
		"etag": "\"14f63-SwqXxO7Wo2wVm6MOK3TEcooGCgU\"",
		"mtime": "2026-08-26T10:43:13.551Z",
		"size": 85859,
		"path": "../public/assets/generic-instruments-D7lniivr.jpg"
	},
	"/assets/generic-sterilisation-D_ykyS8N.jpg": {
		"type": "image/jpeg",
		"etag": "\"18182-Y10Pdk9y44YJbQ5GvxTkOTgY8dA\"",
		"mtime": "2026-08-26T10:43:13.551Z",
		"size": 98690,
		"path": "../public/assets/generic-sterilisation-D_ykyS8N.jpg"
	},
	"/assets/generic-treatment-room-BhDFpvHP.jpg": {
		"type": "image/jpeg",
		"etag": "\"16e29-IFqH0wogAsVjbb1s5B+1mro4JtI\"",
		"mtime": "2026-08-26T10:43:13.551Z",
		"size": 93737,
		"path": "../public/assets/generic-treatment-room-BhDFpvHP.jpg"
	},
	"/assets/locations.index-ZSW3pNhq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f3-20jdQ1nN1a5puOpF3GHkV4lmMoc\"",
		"mtime": "2026-08-26T10:43:13.548Z",
		"size": 2291,
		"path": "../public/assets/locations.index-ZSW3pNhq.js"
	},
	"/assets/locations._branch-AHvtmM5u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c64-z8U0LdKZqnLn0UBXJ1v3YMS110M\"",
		"mtime": "2026-08-26T10:43:13.548Z",
		"size": 3172,
		"path": "../public/assets/locations._branch-AHvtmM5u.js"
	},
	"/assets/MapEmbed-DF7632MT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"411-4D2bf/OqlY+6gq3tp3eVmsCTGS8\"",
		"mtime": "2026-08-26T10:43:13.544Z",
		"size": 1041,
		"path": "../public/assets/MapEmbed-DF7632MT.js"
	},
	"/assets/hero-clinic-DoqozHa5.jpg": {
		"type": "image/jpeg",
		"etag": "\"319c1-cmzoy3I+iE+MkvjxTYlnvCLeiss\"",
		"mtime": "2026-08-26T10:43:13.552Z",
		"size": 203201,
		"path": "../public/assets/hero-clinic-DoqozHa5.jpg"
	},
	"/assets/media-BKIpCgUA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131b-KUJ+p8+5uG3I0YBImbfqYm8bmMU\"",
		"mtime": "2026-08-26T10:43:13.548Z",
		"size": 4891,
		"path": "../public/assets/media-BKIpCgUA.js"
	},
	"/assets/MedicalReviewer-Bit4qW2r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f7-+N1dGV5KzGhSWuhsIBLlaNy6/eY\"",
		"mtime": "2026-08-26T10:43:13.544Z",
		"size": 1271,
		"path": "../public/assets/MedicalReviewer-Bit4qW2r.js"
	},
	"/assets/index-CuDXPDWx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84512-AY6gb4HUynAYpNkd6nkDq/Osy50\"",
		"mtime": "2026-08-26T10:43:13.541Z",
		"size": 541970,
		"path": "../public/assets/index-CuDXPDWx.js"
	},
	"/assets/PageHeader-MVf8-FlU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59f-wCgjt9cBx0CeOJnq76crfRfDdy4\"",
		"mtime": "2026-08-26T10:43:13.545Z",
		"size": 1439,
		"path": "../public/assets/PageHeader-MVf8-FlU.js"
	},
	"/assets/Placeholders-CmyrGB1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"408-Q9s5O1bEDMgOw1nOH9Rgg0iDOig\"",
		"mtime": "2026-08-26T10:43:13.545Z",
		"size": 1032,
		"path": "../public/assets/Placeholders-CmyrGB1f.js"
	},
	"/assets/reception-DEngVea5.jpg": {
		"type": "image/jpeg",
		"etag": "\"175a7-qB7MNyKuAKYVvJ/mm56sCO1wPH0\"",
		"mtime": "2026-08-26T10:43:13.552Z",
		"size": 95655,
		"path": "../public/assets/reception-DEngVea5.jpg"
	},
	"/assets/routes-Bp2ijLqs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e375-dBogfN6lEoRgBoqbV5Ci/l9tIeo\"",
		"mtime": "2026-08-26T10:43:13.549Z",
		"size": 58229,
		"path": "../public/assets/routes-Bp2ijLqs.js"
	},
	"/assets/shield-check-CVQ8sjg5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-qS+Ln3Cah9avArE5hH7yFqb90TE\"",
		"mtime": "2026-08-26T10:43:13.549Z",
		"size": 313,
		"path": "../public/assets/shield-check-CVQ8sjg5.js"
	},
	"/assets/smile-gallery-BOdwmIfw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1954-5DdSs22hBotmaav6y6R9j5lzDn8\"",
		"mtime": "2026-08-26T10:43:13.549Z",
		"size": 6484,
		"path": "../public/assets/smile-gallery-BOdwmIfw.js"
	},
	"/assets/testimonials-CRpzWRFX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123c-TXrXJRe7P/lb6qan3xT2FG0Bacg\"",
		"mtime": "2026-08-26T10:43:13.549Z",
		"size": 4668,
		"path": "../public/assets/testimonials-CRpzWRFX.js"
	},
	"/assets/styles-Q4ArR68L.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c38f-APvsFqixrTBfIj/FKLIEq0kPj+4\"",
		"mtime": "2026-08-26T10:43:13.552Z",
		"size": 115599,
		"path": "../public/assets/styles-Q4ArR68L.css"
	},
	"/assets/TreatmentCard-Cr70SQfl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb2-a0o5Anzf0QIe8Rmg+q5tdqTjivU\"",
		"mtime": "2026-08-26T10:43:13.545Z",
		"size": 2994,
		"path": "../public/assets/TreatmentCard-Cr70SQfl.js"
	},
	"/assets/treatments.index-Csuk_G8o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55d-gOxKLdfGXbv9k0dNRThl10iwoYg\"",
		"mtime": "2026-08-26T10:43:13.550Z",
		"size": 1373,
		"path": "../public/assets/treatments.index-Csuk_G8o.js"
	},
	"/assets/treatments._slug-DkN8v3gz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a71-0+EbMEDoMSk9c6DOfUcvEE1e2U4\"",
		"mtime": "2026-08-26T10:43:13.550Z",
		"size": 6769,
		"path": "../public/assets/treatments._slug-DkN8v3gz.js"
	},
	"/assets/types-C1epKRow.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-pSgyk4r8sJWTR8njKVctf5ICkmE\"",
		"mtime": "2026-08-26T10:43:13.550Z",
		"size": 189,
		"path": "../public/assets/types-C1epKRow.js"
	},
	"/assets/WhatsAppCta-BvbyuvOq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"782-yTTOx6ype0u1llTlPm8jEJ34osg\"",
		"mtime": "2026-08-26T10:43:13.546Z",
		"size": 1922,
		"path": "../public/assets/WhatsAppCta-BvbyuvOq.js"
	},
	"/images/gallery/dent-arena-clinic-exterior-signboard.webp": {
		"type": "image/webp",
		"etag": "\"9f96-duo9T3Yka+RMikzS0Z39lcegBVk\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 40854,
		"path": "../public/images/gallery/dent-arena-clinic-exterior-signboard.webp"
	},
	"/images/gallery/dent-arena-consultation-room-desk.webp": {
		"type": "image/webp",
		"etag": "\"4582-G5UytQzmry+QNqT3F3i5FtiyWD0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 17794,
		"path": "../public/images/gallery/dent-arena-consultation-room-desk.webp"
	},
	"/images/gallery/dent-arena-entrance-door-signage.webp": {
		"type": "image/webp",
		"etag": "\"5542-d4ynkkIZQUd7pEszjMVKlQW9DjI\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 21826,
		"path": "../public/images/gallery/dent-arena-entrance-door-signage.webp"
	},
	"/images/gallery/dent-arena-reception-counter.webp": {
		"type": "image/webp",
		"etag": "\"8b1c-uOKRHadicYeVMgRTIRn/QjScyMw\"",
		"mtime": "2026-08-21T07:23:40.777Z",
		"size": 35612,
		"path": "../public/images/gallery/dent-arena-reception-counter.webp"
	},
	"/images/gallery/dent-arena-reception-counter1.webp": {
		"type": "image/webp",
		"etag": "\"43e4-Ed2odgXdbRhRm5OqvznXAX+CyIA\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 17380,
		"path": "../public/images/gallery/dent-arena-reception-counter1.webp"
	},
	"/images/gallery/dent-arena-treatment-room-chair.webp": {
		"type": "image/webp",
		"etag": "\"abb6-NkEWFLrVdOAeq6KcFGIUZx11KXI\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 43958,
		"path": "../public/images/gallery/dent-arena-treatment-room-chair.webp"
	},
	"/images/gallery/image-after.jpg": {
		"type": "image/jpeg",
		"etag": "\"98d1e-Avo8xNFLhhdWV4oxAiP5KJ+59UU\"",
		"mtime": "2026-08-21T04:58:07.298Z",
		"size": 625950,
		"path": "../public/images/gallery/image-after.jpg"
	},
	"/images/gallery/g1.jpg": {
		"type": "image/jpeg",
		"etag": "\"170b12-u7577+F8tvJn7qBTleNyMa2yuJQ\"",
		"mtime": "2026-08-20T07:26:08.935Z",
		"size": 1510162,
		"path": "../public/images/gallery/g1.jpg"
	},
	"/images/gallery/image-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c936c-jZmx6qiO7G2G9KkWVkiXwKeyj2k\"",
		"mtime": "2026-08-21T09:29:48.073Z",
		"size": 1872748,
		"path": "../public/images/gallery/image-3.jpg"
	},
	"/images/gallery/g4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ad489-EMZQ4+5apGkKuCqDFoN/KGCqeiw\"",
		"mtime": "2026-08-20T08:32:13.401Z",
		"size": 1758345,
		"path": "../public/images/gallery/g4.jpg"
	},
	"/images/gallery/image-after.png": {
		"type": "image/png",
		"etag": "\"14d763-+S4f0y3OVk6smvsvEVGf5b8pQ1k\"",
		"mtime": "2026-08-21T10:23:57.926Z",
		"size": 1365859,
		"path": "../public/images/gallery/image-after.png"
	},
	"/images/gallery/logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"cc01-m4f6Wn8ITGzbMtrPPw0cgS5GkgA\"",
		"mtime": "2026-08-20T04:47:34.757Z",
		"size": 52225,
		"path": "../public/images/gallery/logo.jpg"
	},
	"/images/gallery/logo.png": {
		"type": "image/png",
		"etag": "\"7d9ab-BHqwP+sQWTraWD3cyHk6dTKGz0A\"",
		"mtime": "2026-08-20T06:17:08.235Z",
		"size": 514475,
		"path": "../public/images/gallery/logo.png"
	},
	"/images/gallery/dent-arena-clinic-exterior-signboard.png": {
		"type": "image/png",
		"etag": "\"214fa6-53o4R7ESbp9DXpO7zBqqu4ftTWk\"",
		"mtime": "2026-08-21T09:06:43.159Z",
		"size": 2183078,
		"path": "../public/images/gallery/dent-arena-clinic-exterior-signboard.png"
	},
	"/images/gallery/image-before.jpg": {
		"type": "image/jpeg",
		"etag": "\"a574f-rwhx4NDGpixpX2ATiyq56Sr13Tg\"",
		"mtime": "2026-08-21T04:53:46.274Z",
		"size": 677711,
		"path": "../public/images/gallery/image-before.jpg"
	},
	"/images/gallery/image-before.png": {
		"type": "image/png",
		"etag": "\"16faa3-2EzMhSXFxOpYF2kjLgNq1buEXBI\"",
		"mtime": "2026-08-21T10:24:06.611Z",
		"size": 1505955,
		"path": "../public/images/gallery/image-before.png"
	},
	"/images/gallery/mayank-shah.png": {
		"type": "image/png",
		"etag": "\"13dd4d-AfR5/oEMOrFGTS/j/rXqMMXLW/g\"",
		"mtime": "2026-08-20T09:34:27.979Z",
		"size": 1301837,
		"path": "../public/images/gallery/mayank-shah.png"
	},
	"/images/gallery/minal-shah1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bd271-+J8z9Hu41Ld3tKLfQPZY0if43uk\"",
		"mtime": "2026-08-20T08:39:49.087Z",
		"size": 1823345,
		"path": "../public/images/gallery/minal-shah1.jpg"
	},
	"/images/gallery/male-after.png": {
		"type": "image/png",
		"etag": "\"24bae0-QrCdxug81b2EL3GPggnTVSiAwHI\"",
		"mtime": "2026-08-21T06:53:20.868Z",
		"size": 2407136,
		"path": "../public/images/gallery/male-after.png"
	},
	"/images/gallery/male-before.png": {
		"type": "image/png",
		"etag": "\"25653b-F2gJZLVqsxrB5MI3n/+KudduBa0\"",
		"mtime": "2026-08-21T09:27:52.433Z",
		"size": 2450747,
		"path": "../public/images/gallery/male-before.png"
	},
	"/images/gallery/minal-shah.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b9e6a-yUI1HlCg1kigxpuiKQmezvXb7bY\"",
		"mtime": "2026-08-24T07:16:12.742Z",
		"size": 6004330,
		"path": "../public/images/gallery/minal-shah.jpg"
	},
	"/images/gallery/mayank-shah.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d2e09-wB83fYahm2vlAyJgCJe5YYxmjCU\"",
		"mtime": "2026-08-24T07:14:32.839Z",
		"size": 6106633,
		"path": "../public/images/gallery/mayank-shah.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pWKU0d = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pWKU0d
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
