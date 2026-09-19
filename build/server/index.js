import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, useLocation } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useSwipeable } from "react-swipeable";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.web.tsx
var entry_server_web_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	let shellRendered = false;
	let userAgent = request.headers.get("user-agent");
	const body = await renderToReadableStream(/* @__PURE__ */ jsx(ServerRouter, {
		context: routerContext,
		url: request.url
	}), {
		signal: AbortSignal.timeout(6e3),
		onError(error) {
			responseStatusCode = 500;
			if (shellRendered) console.error(error);
		}
	});
	shellRendered = true;
	if (userAgent && isbot(userAgent) || routerContext.isSpaMode) await body.allReady;
	responseHeaders.set("Content-Type", "text/html");
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode
	});
}
//#endregion
//#region src/assets/logo.jpg
var logo_default = "/assets/logo-DuxPjr3k.jpg";
//#endregion
//#region src/assets/logo-mark.png
var logo_mark_default = "/assets/logo-mark-Ch2TrX0k.png";
//#endregion
//#region src/assets/Send.svg
var Send_default = "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.4966%200.931172C30.6963%200.109757%2029.5118%20-0.196261%2028.4074%200.125863L2.65282%207.61524C1.48754%207.93897%200.661604%208.8683%200.439113%2010.0489C0.21182%2011.2504%201.00574%2012.7757%202.04297%2013.4135L10.0959%2018.3629C10.9218%2018.8702%2011.9878%2018.743%2012.6713%2018.0537L21.8927%208.77488C22.3569%208.2917%2023.1252%208.2917%2023.5894%208.77488C24.0536%209.24196%2024.0536%209.99895%2023.5894%2010.4821L14.352%2019.7625C13.6669%2020.4503%2013.5389%2021.5213%2014.0431%2022.3524L18.9635%2030.486C19.5397%2031.4524%2020.5321%2032%2021.6206%2032C21.7486%2032%2021.8927%2032%2022.0207%2031.9839C23.2693%2031.8228%2024.2617%2030.9692%2024.6298%2029.7612L32.2649%204.03967C32.6011%202.94445%2032.297%201.75259%2031.4966%200.931172'%20fill='%2300F6FF'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/Shield.svg
var Shield_default = "data:image/svg+xml,%3csvg%20width='28'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5649%2031.8619C13.7421%2031.9544%2013.9402%2032.0015%2014.1384%2031.9999C14.3365%2031.9984%2014.533%2031.9497%2014.7118%2031.8556L20.4204%2028.8039C22.0392%2027.941%2023.3069%2026.9761%2024.2959%2025.8527C26.4463%2023.4051%2027.6206%2020.2813%2027.5997%2017.0602L27.532%206.43517C27.5256%205.21138%2026.7218%204.11938%2025.533%203.72243L14.9131%200.159303C14.2737%20-0.0572148%2013.573%20-0.0525079%2012.9448%200.170286L2.36516%203.8605C1.18284%204.27314%200.393559%205.37298%200.400003%206.59834L0.467655%2017.2155C0.488595%2020.4413%201.70312%2023.551%203.88895%2025.9735C4.88764%2027.0812%206.1666%2028.032%207.80315%2028.8808L13.5649%2031.8619ZM12.0537%2019.3743C12.2921%2019.6034%2012.6014%2019.7163%2012.9106%2019.7132C13.2199%2019.7116%2013.5276%2019.5955%2013.7627%2019.3633L20.0013%2013.213C20.47%2012.7501%2020.4652%2012.0064%2019.9916%2011.5498C19.5164%2011.0933%2018.7513%2011.0964%2018.2826%2011.5593L12.8929%2016.8718L10.6861%2014.7505C10.211%2014.294%209.44745%2014.2987%208.9771%2014.7615C8.50837%2015.2244%208.5132%2015.9681%208.98838%2016.4246L12.0537%2019.3743Z'%20fill='%2300F6FF'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/Star.svg
var Star_default = "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.4696%2019.7122C25.0552%2020.1138%2024.8648%2020.6946%2024.9592%2021.2642L26.3816%2029.1362C26.5016%2029.8034%2026.22%2030.4786%2025.6616%2030.8642C25.1144%2031.2642%2024.3864%2031.3122%2023.7896%2030.9922L16.7032%2027.2962C16.4568%2027.165%2016.1832%2027.0946%2015.9032%2027.0866H15.4696C15.3192%2027.109%2015.172%2027.157%2015.0376%2027.2306L7.94959%2030.9442C7.59919%2031.1202%207.20239%2031.1826%206.81359%2031.1202C5.86639%2030.941%205.23439%2030.0386%205.38959%2029.0866L6.81359%2021.2146C6.90799%2020.6402%206.71759%2020.0562%206.30319%2019.6482L0.525591%2014.0482C0.042391%2013.5794%20-0.125609%2012.8754%200.095191%2012.2402C0.309591%2011.6066%200.856791%2011.1442%201.51759%2011.0402L9.46959%209.88663C10.0744%209.82423%2010.6056%209.45623%2010.8776%208.91223L14.3816%201.72823C14.4648%201.56823%2014.572%201.42103%2014.7016%201.29623L14.8456%201.18423C14.9208%201.10103%2015.0072%201.03223%2015.1032%200.976232L15.2776%200.912232L15.5496%200.800232H16.2232C16.8248%200.862632%2017.3544%201.22263%2017.6312%201.76023L21.1816%208.91223C21.4376%209.43543%2021.9352%209.79863%2022.5096%209.88663L30.4616%2011.0402C31.1336%2011.1362%2031.6952%2011.6002%2031.9176%2012.2402C32.1272%2012.8818%2031.9464%2013.5858%2031.4536%2014.0482L25.4696%2019.7122Z'%20fill='%2300F6FF'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/facebook.svg
var facebook_default = "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5001%200C4.7011%200%200%204.72075%200%2010.544C0%2015.7667%203.78548%2020.092%208.74886%2020.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886%205.10564%2010.2817%203.73225%2012.5209%203.73225C13.5934%203.73225%2014.515%203.8125%2014.7826%203.84784V6.48217L13.2295%206.48292C12.012%206.48292%2011.7773%207.06377%2011.7773%207.91643V9.79645H14.6824L14.3035%2012.7422H11.7773V21C16.9724%2020.3651%2021%2015.9296%2021%2010.5409C21%204.72075%2016.2989%200%2010.5001%200Z'%20fill='white'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/instagram.svg
var instagram_default = "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9466%206.17408C20.8974%205.05826%2020.7169%204.29115%2020.4584%203.62644C20.1917%202.92086%2019.7814%202.28916%2019.2438%201.76402C18.7186%201.23071%2018.0826%200.816309%2017.3851%200.553821C16.7164%200.295339%2015.9531%200.114899%2014.8371%200.0657021C13.7127%200.0123392%2013.3558%200%2010.5041%200C7.65239%200%207.29545%200.0123392%206.17525%200.0615356C5.05923%200.110732%204.29197%200.291333%203.62729%200.549654C2.92142%200.816309%202.28959%201.22655%201.76436%201.76402C1.23095%202.28916%200.816625%202.92503%200.553926%203.62243C0.295395%204.29115%200.114921%205.0541%200.0657146%206.16991C0.0123415%207.29406%200%207.65093%200%2010.5021C0%2013.3532%200.0123415%2013.7101%200.0615474%2014.8301C0.110753%2015.9459%200.291388%2016.713%200.549919%2017.3777C0.816625%2018.0833%201.23095%2018.715%201.76436%2019.2401C2.28959%2019.7735%202.92558%2020.1879%203.62312%2020.4503C4.29197%2020.7088%205.05506%2020.8893%206.17125%2020.9385C7.29128%2020.9878%207.64838%2021%2010.5001%2021C13.3518%2021%2013.7087%2020.9878%2014.8289%2020.9385C15.9449%2020.8893%2016.7122%2020.7088%2017.3769%2020.4503C18.7885%2019.9047%2019.9045%2018.7889%2020.4502%2017.3777C20.7086%2016.709%2020.8892%2015.9459%2020.9385%2014.8301C20.9877%2013.7101%2021%2013.3532%2021%2010.5021C21%207.65093%2020.9958%207.29406%2020.9466%206.17408ZM19.0552%2014.748C19.01%2015.7736%2018.8377%2016.3275%2018.6941%2016.6967C18.3411%2017.6115%2017.6149%2018.3376%2016.6999%2018.6905C16.3306%2018.8341%2015.7726%2019.0063%2014.7509%2019.0514C13.643%2019.1007%2013.3107%2019.1129%2010.5083%2019.1129C7.70576%2019.1129%207.36934%2019.1007%206.26549%2019.0514C5.2397%2019.0063%204.68578%2018.8341%204.31649%2018.6905C3.86114%2018.5222%203.44665%2018.2556%203.11023%2017.9069C2.76146%2017.5663%202.49475%2017.1561%202.32646%2016.7008C2.18285%2016.3316%202.01055%2015.7736%201.96551%2014.7522C1.91614%2013.6446%201.90396%2013.3122%201.90396%2010.5103C1.90396%207.7083%201.91614%207.37194%201.96551%206.26846C2.01055%205.24287%202.18285%204.68905%202.32646%204.31983C2.49475%203.86441%202.76146%203.45016%203.11439%203.11364C3.45483%202.76494%203.86514%202.49828%204.32066%202.33018C4.68994%202.1866%205.24804%202.01433%206.26966%201.96914C7.37751%201.91994%207.70993%201.9076%2010.5123%201.9076C13.3189%201.9076%2013.6512%201.91994%2014.755%201.96914C15.7808%202.01433%2016.3347%202.1866%2016.704%202.33018C17.1594%202.49828%2017.5739%202.76494%2017.9103%203.11364C18.2591%203.45417%2018.5258%203.86441%2018.6941%204.31983C18.8377%204.68905%2019.01%205.24687%2019.0552%206.26846C19.1044%207.3761%2019.1167%207.7083%2019.1167%2010.5103C19.1167%2013.3122%2019.1044%2013.6404%2019.0552%2014.748Z'%20fill='white'/%3e%3cpath%20d='M10.5%206C8.01567%206%206%208.01554%206%2010.5C6%2012.9845%208.01567%2015%2010.5%2015C12.9845%2015%2015%2012.9845%2015%2010.5C15%208.01554%2012.9845%206%2010.5%206ZM10.5%2013.419C8.88829%2013.419%207.58096%2012.1118%207.58096%2010.5C7.58096%208.88816%208.88829%207.58096%2010.5%207.58096C12.1118%207.58096%2013.419%208.88816%2013.419%2010.5C13.419%2012.1118%2012.1118%2013.419%2010.5%2013.419Z'%20fill='white'/%3e%3cpath%20d='M18%205.5C18%206.32835%2017.3284%207%2016.4999%207C15.6716%207%2015%206.32835%2015%205.5C15%204.67146%2015.6716%204%2016.4999%204C17.3284%204%2018%204.67146%2018%205.5Z'%20fill='white'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/people01.png
var people01_default = "/assets/people01-BymPCBLK.png";
//#endregion
//#region src/assets/people02.png
var people02_default = "/assets/people02-CZ7st6Cu.png";
//#endregion
//#region src/assets/people03.png
var people03_default = "/assets/people03-D4R6rPRx.png";
//#endregion
//#region src/assets/patioDesigns.jpeg
var patioDesigns_default = "/assets/patioDesigns-B0IxdwSS.jpeg";
//#endregion
//#region src/assets/stratcoPartner.png
var stratcoPartner_default = "/assets/stratcoPartner-DjQFJojo.png";
//#endregion
//#region src/constants/services.js
/**
* The seven service lines. This drives the nav megamenu, the /services hub,
* each service page, the sitemap and the Service schema — so it is the one
* place a service is defined.
*
* Content is condensed from docs/04-SERVICE-CONTENT.md.
*
* ⚠️ TODO(xpatios): every `priceFrom` is INDICATIVE, sourced from research
* where figures varied 2–3× between sources and some were SEO-spam. Replace
* with real supplier/trade pricing before these pages go live, or remove the
* field. Publishing unverified prices is an ACL exposure.
*/
var services = [
	{
		slug: "metal-roofing-sydney",
		name: "Metal Roofing",
		navLabel: "Metal Roofing",
		tagline: "Re-roofing & Colorbond",
		summary: "Colorbond and Zincalume re-roofing, tile-to-metal conversions, and new metal roof installation across Sydney.",
		title: "Metal Roofing & Re-Roofing Sydney | COLORBOND® Roof Installers",
		metaDescription: "Licensed Sydney metal roofing specialists. COLORBOND® re-roofing, Trimdek, Klip-Lok & corrugated roofs. Free quotes, BlueScope warranty. Call today.",
		h1: "Metal Roofing & Re-Roofing Specialists in Sydney",
		intro: "Metal roofing uses long, factory pre-painted steel sheets, most commonly COLORBOND® steel from BlueScope, fixed over a timber or steel frame. Re-roofing means stripping an old tile roof back to the frame and replacing it entirely, rather than patching it. It's the most common major roof upgrade on Sydney homes built before the 1990s.",
		types: [
			{
				name: "Corrugated (Custom Orb)",
				description: "The classic wavy profile. Can be curved or bullnosed for verandahs, which makes it the usual choice on Federation and heritage homes."
			},
			{
				name: "Trimdek",
				description: "Bold trapezoidal rib. Popular on modern homes, carports and patio kits, strong spanning ability and good value."
			},
			{
				name: "Klip-Lok",
				description: "Concealed fixings, so no visible screws. Works at the lowest pitch of any profile (around 1–2°). Premium look, premium price."
			},
			{
				name: "Standing seam",
				description: "Architectural profile with fully concealed fixings. Used on high-end contemporary builds."
			},
			{
				name: "Zincalume®",
				description: "Unpainted aluminium/zinc-coated steel. Cheaper than painted Colorbond, mostly sheds and rural work."
			},
			{
				name: "Tile-to-Colorbond conversion",
				description: "A full re-roof replacing tile with steel, usually with new sarking, insulation and battens."
			}
		],
		faqs: [
			{
				q: "How much does it cost to re-roof a house in Sydney?",
				a: "Cost depends on roof size, pitch, access and whether the old tiles need removing and disposing of. We quote after a site inspection rather than over the phone, because a steep two-storey roof and a single-storey skillion of the same area are very different jobs."
			},
			{
				q: "Is Colorbond better than tile?",
				a: "For most Sydney homes, yes, mainly because it's roughly a fifth of the weight, sheds water faster, and doesn't need ridge caps re-bedded every 15–20 years. Tile still has advantages: more thermal mass, and it's quieter in heavy rain unless the metal roof is insulated."
			},
			{
				q: "Do I need council approval to replace my roof?",
				a: "A like-for-like re-roof on a single dwelling is usually exempt development or CDC-eligible. You'll generally need a DA if you're changing the roof pitch, increasing height, or the property is heritage-listed. We'll tell you which applies before you commit."
			},
			{
				q: "How long does a Colorbond roof last?",
				a: "Published figures vary widely because it depends heavily on distance from the coast. Inland Sydney suburbs sit at the long end of the range; homes close to breaking surf are materially shorter. We'll advise on whether your site needs COLORBOND® Ultra for the additional corrosion protection."
			},
			{
				q: "Can you lay Colorbond over existing tiles?",
				a: "It's occasionally done but we don't recommend it. You keep the weight of the old roof, you can't inspect or repair the battens and frame underneath, and it usually voids the sheet warranty."
			},
			{
				q: "Is a metal roof noisy in the rain?",
				a: "Uninsulated, yes, noticeably. With proper sarking and insulation (anticon blanket or an insulated panel system) the difference against tile is small. This is worth specifying up front rather than discovering later."
			}
		],
		compliance: "A like-for-like re-roof on a single dwelling is typically exempt development or CDC-eligible in NSW. Changing pitch, increasing height, or working on a heritage item usually triggers a DA. Residential building work over $5,000 must be carried out by a licensed contractor under NSW Fair Trading, and work over $20,000 requires Home Building Compensation Fund insurance in place before any deposit is taken. Roof and fixing specification must satisfy AS/NZS 1170.2 wind actions for your site, Sydney is non-cyclonic (N1–N4).",
		benefits: [
			"Far lighter than tile, reducing load on ageing roof frames",
			"Sheds heat and rain fast, less risk of leaks, moss and cracked tiles",
			"No re-bedding or re-pointing ridge caps every 15–20 years",
			"One of the strongest manufacturer warranties in Australian residential construction",
			"Wide colour range to suit heritage overlays and modern streetscapes"
		],
		priceFrom: null
	},
	{
		slug: "guttering-sydney",
		name: "Guttering",
		navLabel: "Guttering",
		tagline: "Quad, half-round & box",
		summary: "Colorbond guttering, downpipes, fascia and leaf guard, sized to cope with Sydney storm downpours.",
		title: "Guttering Sydney | Colorbond Gutter Installation & Replacement",
		metaDescription: "Sydney guttering specialists, quad, half-round & box gutter installation, gutter replacement and leaf guard. Licensed, insured, free quotes.",
		h1: "Guttering Installation & Replacement in Sydney",
		intro: "Guttering is the channel along your roofline that collects rainwater and directs it through downpipes into stormwater. It's the cheapest part of a roof to replace and the most expensive to ignore, overflowing gutters damage fascia, walls and foundations long before anyone notices the gutter itself has failed.",
		types: [
			{
				name: "Quad gutter",
				description: "The standard residential profile. Good capacity for most Sydney roofs and the most economical option."
			},
			{
				name: "Half-round",
				description: "Rounded profile, traditionally used on heritage and period homes where a square profile would look wrong."
			},
			{
				name: "Box gutter",
				description: "Square profile with higher capacity. Used on larger roofs, valleys and commercial-style buildings."
			},
			{
				name: "Fascia gutter",
				description: "Combined fascia and gutter in one system. Sleek, no separate fascia board, common on contemporary builds."
			},
			{
				name: "Leaf guard & mesh",
				description: "Retro-fitted over any profile. Cuts cleaning frequency significantly and reduces ember entry in bushfire-prone areas."
			}
		],
		faqs: [
			{
				q: "How often should gutters be replaced?",
				a: "Colorbond guttering lasts decades if it's kept clear. Most replacements we do are driven by rust at the joints and behind the fascia rather than the gutter face itself failing."
			},
			{
				q: "How do I know if my gutters need replacing?",
				a: "Common signs: water sheeting over the front edge in heavy rain, sagging between brackets, rust staining down the fascia, or plants growing in the gutter. If the fascia timber behind it is soft, the gutter has been failing for a while."
			},
			{
				q: "Can you replace gutters without replacing the roof?",
				a: "Yes, and it's very common. The gutter comes off independently of the roof sheets. If you're planning a re-roof within a few years, though, doing both together saves a second set-up cost."
			},
			{
				q: "Gutter guard or regular cleaning, which is better value?",
				a: "If you have overhanging trees, guard usually pays for itself within a few years of avoided cleaning. With no trees nearby, regular cleaning is the cheaper option."
			},
			{
				q: "Quad or half-round?",
				a: "Mostly aesthetic. Quad suits most modern homes and has slightly more capacity for its size; half-round suits period homes. We'll show you both against your fascia."
			},
			{
				q: "Can you match my existing roof colour?",
				a: "Yes, Colorbond guttering comes in the full colour range, so it can match or deliberately contrast with your roof and fascia."
			}
		],
		compliance: "Gutter replacement on its own is generally exempt development unless it forms part of a larger roofing job or the property is a heritage item. Note that connecting new downpipes into stormwater generally requires a licensed plumber in NSW, and the discharge must comply with your council's stormwater requirements. Licensing and insurance thresholds are the same as other building work: $5,000 for a licensed contractor, $20,000 for HBCF insurance.",
		benefits: [
			"Protects fascia, walls and foundations from water damage",
			"Reduces ceiling leaks and mould caused by overflow",
			"Colour-matched to your roof and fascia",
			"Leaf guard cuts cleaning frequency and ember risk",
			"Correctly sized to handle Sydney summer downpours"
		],
		priceFrom: null
	},
	{
		slug: "patios-pergolas-sydney",
		name: "Patios & Pergolas",
		navLabel: "Patios & Pergolas",
		tagline: "Flat, gable & insulated",
		summary: "Flat, gable, dome and insulated-panel patios and pergolas, attached or freestanding, engineered for Sydney conditions.",
		title: "Patios & Pergolas Sydney | Custom Outdoor Living Builders",
		metaDescription: "Sydney's patio & pergola specialists, flat, gable, insulated & Stratco Outback designs. Council-approved builds, free measure & quote.",
		h1: "Custom Patios & Pergolas Built for Sydney Homes",
		intro: "A patio is a roofed outdoor living area attached to or near the house, built for year-round shade and weather protection. A pergola is traditionally open or lattice-roofed, prioritising filtered light and airflow. In practice Australians use the two words interchangeably, what actually matters is the roof: solid and weatherproof, or open and adjustable.",
		types: [
			{
				name: "Flat / skillion roof",
				description: "Single-slope roof. The most economical option and the cleanest match for a modern home."
			},
			{
				name: "Gable roof",
				description: "Pitched roof with an open, vaulted feel underneath. Suits larger spans and traditional homes."
			},
			{
				name: "Dome / curved",
				description: "Rounded profile, softer than a gable, often used to echo an existing bullnose verandah."
			},
			{
				name: "Insulated panel (Cooldek)",
				description: "Polystyrene-core steel sandwich panel. Noticeably cooler underneath in summer and doubles as a finished ceiling, so there's nothing to line later."
			},
			{
				name: "Motorised louvre",
				description: "Adjustable louvre blades, open for winter sun, closed for rain. The premium option, and the most flexible."
			},
			{
				name: "Freestanding",
				description: "Not attached to the house. Useful where the existing roofline or eave height makes an attached structure awkward."
			}
		],
		faqs: [
			{
				q: "What's the difference between a patio and a pergola?",
				a: "A patio has a solid, weatherproof roof, you can use it in the rain. A pergola is open or louvred, giving filtered light and airflow rather than full protection. The words get used loosely, so we always confirm which you actually want before quoting."
			},
			{
				q: "Do I need council approval for a patio in NSW?",
				a: "Often not. Exempt development generally covers structures up to 25m², no more than 3m high, at least 900mm from the boundary, not forward of the building line, and not above the existing gutter line if attached. Beyond any of those, you'll need a CDC or a DA."
			},
			{
				q: "What's the largest patio I can build without a DA?",
				a: "25m² is the usual exempt development ceiling, but the other criteria matter just as much as area, height, setback and position relative to the building line. And heritage items and conservation areas are excluded from exempt development regardless of size."
			},
			{
				q: "Is an insulated roof worth the extra cost?",
				a: "If you'll use the space through summer, generally yes. The temperature difference underneath is significant, and because the panel is a finished ceiling you're not paying to line it separately later."
			},
			{
				q: "Flat, gable or skillion, which suits my home?",
				a: "Flat and skillion suit contemporary homes and lower eave heights. Gable gives more headroom and a more open feel, and usually suits larger areas and traditional facades."
			},
			{
				q: "Can a pergola be enclosed later?",
				a: "Yes, and it's a common second stage. Worth telling us up front though, we'd size the footings and frame for the future glazing load rather than retrofitting."
			}
		],
		compliance: "Exempt development in NSW generally applies to structures up to 25m², up to 3m high, at least 900mm from the boundary, not forward of the main building line, and not extending above the existing roof gutter line if attached. Larger or non-compliant structures need a Complying Development Certificate via a private certifier, or a full DA through council. Heritage items and conservation areas are excluded from exempt development regardless of size. A BASIX certificate is required once CDC or DA applies. Licensed contractor over $5,000; HBCF insurance over $20,000. Council setback and site-coverage rules are often stricter than the state code.",
		benefits: [
			"Extends usable living space without a full extension",
			"Insulated roofs stay cooler and double as a finished ceiling",
			"Adds resale value and street appeal",
			"Protects existing paving from sun and rain",
			"Styles to suit Federation through contemporary homes"
		],
		priceFrom: null
	},
	{
		slug: "carports-sydney",
		name: "Carports",
		navLabel: "Carports",
		tagline: "Single, double & custom",
		summary: "Attached and freestanding Colorbond carports, vehicle protection at a fraction of a garage.",
		title: "Carports Sydney | Colorbond Carport Installation & Design",
		metaDescription: "Custom single & double carports across Sydney. Colorbond steel, attached or freestanding, council-compliant designs. Get a free quote today.",
		h1: "Colorbond Carports Built for Sydney Homes",
		intro: "A carport is a roofed, usually open-sided structure that shelters a vehicle from sun, hail and rain without the enclosure, or the cost, of a full garage. For most Sydney homes it's the difference between a few thousand dollars and a few tens of thousands.",
		types: [
			{
				name: "Attached / lean-to",
				description: "Fixed to an existing wall or eave. Generally the cheaper option, though the engineering needed to tie into the house can offset some of that."
			},
			{
				name: "Freestanding",
				description: "Independent posts on all sides. Needed where there's no suitable wall, or for wider double and triple spans."
			},
			{
				name: "Gable roof",
				description: "Pitched roof that matches a gable patio or verandah elsewhere on the property."
			},
			{
				name: "Flat / skillion",
				description: "The most economical profile and the most common."
			},
			{
				name: "Single, double & triple bay",
				description: "Sized to the vehicles and the driveway. Worth allowing for door-opening clearance, not just vehicle width."
			}
		],
		faqs: [
			{
				q: "Do I need council approval for a carport in Sydney?",
				a: "Carports can qualify as exempt development within size, height and setback limits, but those thresholds differ from patios, and they vary between councils. We check this against your specific address and council before quoting, rather than assuming."
			},
			{
				q: "Is an attached or freestanding carport cheaper?",
				a: "Attached is usually cheaper because it uses the house for partial support. Where the wall can't take the load, the engineering to make it work can close the gap with a freestanding structure."
			},
			{
				q: "How close to the boundary can a carport be built?",
				a: "Setback minimums apply and vary by council and by whether the structure is exempt, CDC or DA. Corner blocks and properties backing onto reserves often have stricter rules."
			},
			{
				q: "Can I convert a carport into a garage later?",
				a: "Sometimes, but enclosing it changes its classification and almost always requires fresh approval. If a garage is the eventual goal, tell us now so the slab and frame are specified for it."
			},
			{
				q: "Does a carport need a concrete slab?",
				a: "Not always. Posts can be footed into existing driveways or independent pad footings. A slab is about the surface you want, not structural necessity."
			},
			{
				q: "What size carport do I need for two cars?",
				a: "Wider than most people expect once you allow for opening doors on both sides. We measure against your actual vehicles and driveway rather than a standard figure."
			}
		],
		compliance: "⚠️ Carport exempt-development thresholds in NSW differ from those for patios, and our research could not verify current figures to the same level of confidence. Do not rely on a generic 25m² rule for carports, the applicable size, height and setback limits should be confirmed against the current NSW Planning Portal fact sheet and your local council for your specific address. Licensed contractor over $5,000; HBCF insurance over $20,000. AS/NZS 1170.2 wind actions govern post spacing and footing design, particularly for freestanding structures on exposed sites. A new or widened driveway crossover requires separate council approval.",
		benefits: [
			"Protects vehicles from UV, hail and bird droppings",
			"Faster and cheaper to build than an enclosed garage",
			"Doubles as outdoor entertaining or storage space",
			"Colorbond finish matches your existing roof and fascia",
			"Usually no major structural change to the house"
		],
		priceFrom: null
	},
	{
		slug: "decking-sydney",
		name: "Decking",
		navLabel: "Decking",
		tagline: "Timber & composite",
		summary: "Merbau, Spotted Gum and composite decking, including elevated decks, pool surrounds and BAL-rated builds.",
		title: "Decking Sydney | Timber & Composite Deck Builders",
		metaDescription: "Sydney decking specialists, Merbau, Spotted Gum & composite decking (ModWood, Ekodeck, NewTechWood). BAL-compliant builds. Free quote.",
		h1: "Timber & Composite Decking Builders in Sydney",
		intro: "Decking is an elevated timber or composite platform that creates usable outdoor living space over ground you otherwise couldn't use, a slope, uneven fall, or tired existing paving. The main decision is timber versus composite, and it's mostly a maintenance decision rather than a looks decision.",
		types: [
			{
				name: "Merbau",
				description: "The most common hardwood in Australian decking. Red-brown, affordable, durable. Needs oiling to hold its colour, and will leach tannins early on."
			},
			{
				name: "Spotted Gum",
				description: "Premium Australian hardwood with strong grain and silver-grey tones as it weathers. More expensive than Merbau and worth it where the deck is a feature."
			},
			{
				name: "Blackbutt",
				description: "Pale, even-toned hardwood. Often chosen where a lighter deck is wanted, and it carries good bushfire-rated credentials."
			},
			{
				name: "Composite (ModWood, Ekodeck)",
				description: "Wood-plastic composite. No sanding, oiling or staining, with 20–25 year manufacturer warranties. Capped versions resist fade and stains better than uncapped."
			},
			{
				name: "Elevated decks",
				description: "Anything with a meaningful drop underneath. Needs engineering and, past a 1m fall, a compliant balustrade."
			},
			{
				name: "Pool surrounds",
				description: "Material choice matters more here, heat underfoot and slip resistance become the deciding factors."
			}
		],
		faqs: [
			{
				q: "Timber or composite, which should I choose?",
				a: "If you'll actually oil a deck every year or two, hardwood looks better and costs less up front. If you won't, composite is the honest choice, an unmaintained hardwood deck looks worse after three years than a composite one ever will."
			},
			{
				q: "What's the best decking timber for Sydney's climate?",
				a: "Merbau and Spotted Gum both handle it well. Spotted Gum holds up slightly better in full sun and looks better as it silvers; Merbau is the value option."
			},
			{
				q: "Do I need council approval for a deck?",
				a: "Low decks close to the ground are often exempt development. Once there's a meaningful drop underneath, particularly over 1m, you're generally into CDC or DA territory, plus structural engineering."
			},
			{
				q: "How high can a deck be before it needs a balustrade?",
				a: "Under the NCC, a barrier is required wherever a fall of 1 metre or more is possible. Minimum height is 1000mm and gaps must not pass a 125mm sphere. Above about 4m there are additional restrictions on climbable horizontal elements."
			},
			{
				q: "Does composite decking get hot or slippery?",
				a: "It does get hot in direct summer sun, noticeably more than timber in some colours. Lighter colours help. Slip resistance varies by product and by whether it's capped; around pools this is worth specifying deliberately."
			},
			{
				q: "What decking is suitable for a bushfire-prone area?",
				a: "It depends on your BAL rating under AS 3959. BAL-12.5 and 19 allow a reasonable range; BAL-29 and above narrows it to non-combustible or specified bushfire-resisting timbers, and BAL-FZ requires non-combustible construction throughout."
			}
		],
		compliance: "Decks fall under the same exempt / CDC / DA framework as patios. Elevated decks, particularly those with a fall over 1m, typically require DA or CDC plus structural engineering. The NCC requires a barrier wherever a fall of 1 metre or more is possible: minimum 1000mm high, gaps that will not pass a 125mm sphere, and for decks over roughly 4m no climbable horizontal elements between 150mm and 760mm. In bushfire-prone areas of Sydney, decking material, framing and gap sizing must match the site's BAL rating under AS 3959. A deck forming part of a pool barrier must also satisfy AS 1926.1.",
		benefits: [
			"Makes sloped or uneven blocks genuinely usable",
			"Composite needs no sanding, oiling or staining",
			"Hardwood offers a premium natural look that ages well",
			"Composite warranties typically run 20–25 years",
			"Can be built to BAL-compliant spec for bushfire-exposed sites"
		],
		priceFrom: null
	},
	{
		slug: "fencing-gates-sydney",
		name: "Fencing & Gates",
		navLabel: "Fencing & Gates",
		tagline: "Colorbond, timber & pool",
		summary: "Boundary, privacy and AS 1926.1-compliant pool fencing, plus manual and automated gates.",
		title: "Fencing & Gates Sydney | Colorbond, Timber & Pool Fencing",
		metaDescription: "Sydney fencing contractors, Colorbond, timber, aluminium & AS1926.1-compliant pool fencing and gates. Licensed & insured. Free quotes.",
		h1: "Fencing & Gate Installation Across Sydney",
		intro: "Fencing does three different jobs and they have almost nothing in common: marking a boundary, giving privacy, and, for pools, meeting a legal child-safety standard. Pool fencing in particular is compliance work with a certification deadline, not a landscaping choice.",
		types: [
			{
				name: "Colorbond steel",
				description: "The default in Sydney. Standard 1.8m panels, full colour range, effectively no maintenance."
			},
			{
				name: "Timber paling",
				description: "Cheaper up front, warmer looking, but needs staining or painting periodically and won't last as long in coastal air."
			},
			{
				name: "Aluminium slat",
				description: "Contemporary horizontal slat look with adjustable spacing for privacy versus airflow. Handles coastal salt better than steel or timber."
			},
			{
				name: "Frameless glass pool fencing",
				description: "Preserves sightlines to the pool while meeting AS 1926.1. The premium option."
			},
			{
				name: "Automated driveway gates",
				description: "Sliding or swing, with motor, remote and safety sensors. Usually specified alongside boundary fencing."
			}
		],
		faqs: [
			{
				q: "Do I need council approval for a fence?",
				a: "Front and street-facing boundary fences are generally capped around 1.2m without approval; side and rear fences can often go to 1.8m. Rules vary by council, and corner blocks, heritage areas and fences backing onto public reserves are frequently stricter."
			},
			{
				q: "What are the pool fencing laws in NSW?",
				a: "AS 1926.1 requires a minimum 1.2m fence height, gaps no greater than 100mm at ground level and between vertical members, a 900mm non-climbable zone outside the fence, and gates that are self-closing, self-latching and swing outward only. NSW councils run compliance inspections on existing pools."
			},
			{
				q: "Who pays for a boundary fence in NSW?",
				a: "Under the Dividing Fences Act 1991 adjoining owners generally share the cost of a sufficient dividing fence equally. Disputes go to NCAT. If one owner wants something better than 'sufficient', they usually carry the difference."
			},
			{
				q: "Can my neighbour refuse to pay for a fence?",
				a: "They can disagree on the fence or the cost, which is what the Dividing Fences Act process exists to resolve. It's worth serving a proper Fencing Notice rather than starting work and invoicing afterwards."
			},
			{
				q: "Colorbond or timber?",
				a: "Colorbond for low maintenance and longevity, timber for warmth and lower up-front cost. In coastal suburbs Colorbond or aluminium is the more sensible long-term choice."
			},
			{
				q: "Can I install my own pool fence?",
				a: "Compliance is what matters, not who installs it, and a non-compliant pool barrier is a serious liability. We build to AS 1926.1 and can coordinate certification."
			}
		],
		compliance: "Front and street-facing boundary fences are generally limited to around 1.2m without approval; side and rear fences may be exempt up to 1.8m non-masonry. These limits vary by council. Pool fencing is governed by AS 1926.1 (updated 2024): minimum 1.2m height, maximum 100mm gaps at ground level and between vertical members, a 900mm non-climbable zone outside the barrier, and self-closing, self-latching, outward-swinging gates. Cost-sharing for dividing fences between neighbours is governed separately by the Dividing Fences Act 1991, with disputes heard at NCAT. Licensed contractor over $5,000; HBCF insurance over $20,000.",
		benefits: [
			"Lasting privacy and security with virtually no maintenance",
			"Pool fencing that meets the law while preserving sightlines",
			"Automated gates add convenience and security",
			"Clearly defined boundaries reduce neighbour disputes",
			"Colorbond and aluminium resist coastal salt far better than untreated timber"
		],
		priceFrom: null
	},
	{
		slug: "sunrooms-sydney",
		name: "Sunrooms",
		navLabel: "Sunrooms",
		tagline: "Enclosed outdoor rooms",
		summary: "Enclosed patios, glass rooms and four-season sunrooms, turning an outdoor area into year-round living space.",
		title: "Sunrooms Sydney | Enclosed Patios & Glass Room Builders",
		metaDescription: "Turn your patio into a year-round sunroom. Sydney enclosed patio & glass room specialists, DA/CDC handled, BASIX-compliant. Free quote.",
		h1: "Sunrooms & Enclosed Outdoor Rooms in Sydney",
		intro: "A sunroom is a patio or verandah enclosed with glass, sliding doors or fixed glazing, turning it into a weatherproof room you can use year-round. It's the step between an outdoor area and a full home extension, and, importantly, it's usually treated as an extension for approval purposes.",
		types: [
			{
				name: "Enclosed patio (three-season)",
				description: "Existing patio enclosed with fixed or sliding glass and screens. Weatherproof and bug-proof, but not climate controlled."
			},
			{
				name: "Glass solarium",
				description: "Fully glazed walls and sometimes roof. The most light-filled option and the most expensive."
			},
			{
				name: "Four-season sunroom",
				description: "Insulated roof and walls plus heating and cooling, so it performs as genuine habitable space all year."
			},
			{
				name: "Pool enclosure",
				description: "Glazed structure over a pool or spa for weather protection and extended swimming season."
			},
			{
				name: "Café blinds",
				description: "The budget alternative to full glazing, not a sunroom, but worth considering if the goal is wind and rain protection rather than a sealed room."
			}
		],
		faqs: [
			{
				q: "Do I need council approval to enclose my patio?",
				a: "Almost always, yes. Because you're adding walls and glazing to create enclosed space, a sunroom is generally treated as a home extension rather than exempt development, so expect a DA or CDC even if the original patio was exempt. We'd rather set that expectation now than after you've committed."
			},
			{
				q: "What's the difference between a sunroom and an enclosed patio?",
				a: "Mostly degree. An enclosed patio is weatherproofed outdoor space; a four-season sunroom is insulated, climate-controlled and performs as an indoor room. The approval path and the cost differ accordingly."
			},
			{
				q: "Can I use a sunroom all year round?",
				a: "A three-season room is comfortable most of the Sydney year but hot in peak summer and cool on winter mornings. Insulation, glazing specification and a split system are what make it genuinely four-season."
			},
			{
				q: "Does a sunroom add value to a house?",
				a: "It adds usable floor area, which is generally the thing that moves valuations. Whether it counts as habitable area depends on how it's built and approved."
			},
			{
				q: "Can my existing pergola or patio be converted?",
				a: "Often, yes, but the original footings and frame were sized for a roof, not for glazing loads and wall framing. We assess the existing structure before quoting rather than assuming it'll carry it."
			},
			{
				q: "How long does council approval take?",
				a: "Longer than most people expect. A CDC through a private certifier is usually the faster path; a DA through council can run to several months. Factor it into your timeline from the start."
			}
		],
		compliance: "Because a sunroom encloses and roofs a space and adds walls and glazing, it is generally treated as a home extension rather than exempt development, expect to need a DA or CDC even where the original patio was exempt. A BASIX certificate is required once DA or CDC applies, and glazing type and area directly affect whether the thermal performance target is met, which can drive a requirement for double glazing or low-E glass. NCC habitable-room requirements for ventilation, glazing and possibly fire separation near a boundary apply once the space is enclosed living area. Licensed contractor over $5,000; HBCF insurance over $20,000, sunroom projects almost always exceed the HBCF threshold.",
		benefits: [
			"Converts an existing patio into genuine year-round space",
			"Floods the room with natural light, still part of the garden",
			"Adds usable floor area without a brick-and-tile extension",
			"Close up in winter, open up in summer",
			"Can be paired with heating and cooling for true four-season use"
		],
		priceFrom: null
	}
];
var serviceBySlug = (slug) => services.find((s) => s.slug === slug);
//#endregion
//#region src/components/ui/Container.jsx
var WIDTHS = {
	prose: "max-w-[42rem]",
	content: "max-w-[1310px]",
	wide: "max-w-[1600px]"
};
var Container = ({ as: Tag = "div", width = "content", className = "", children, ...rest }) => /* @__PURE__ */ jsx(Tag, {
	className: `mx-auto w-full px-5 sm:px-8 md:px-12 ${WIDTHS[width]} ${className}`,
	...rest,
	children
});
//#endregion
//#region src/components/ui/Section.jsx
var SPACING = {
	tight: "py-16 md:py-20",
	normal: "py-24 md:py-32",
	loose: "py-32 md:py-52"
};
var Section = ({ as: Tag = "section", spacing = "normal", width = "content", hairline = false, className = "", containerClassName = "", children, ...rest }) => /* @__PURE__ */ jsx(Tag, {
	className: `${SPACING[spacing]} ${hairline ? "hairline-t" : ""} ${className}`,
	...rest,
	children: /* @__PURE__ */ jsx(Container, {
		width,
		className: containerClassName,
		children
	})
});
//#endregion
//#region src/components/ui/Heading.jsx
var SIZES$1 = {
	display: "text-display",
	h1: "text-h1",
	h2: "text-h2",
	h3: "text-h3"
};
var Heading = ({ as: Tag = "h2", size = "h2", className = "", children, ...rest }) => /* @__PURE__ */ jsx(Tag, {
	className: `font-display text-ink ${SIZES$1[size]} ${className}`,
	...rest,
	children
});
//#endregion
//#region src/components/ui/Prose.jsx
var Prose = ({ size = "body", className = "", children, ...rest }) => /* @__PURE__ */ jsx("p", {
	className: `${size === "lede" ? "text-lede text-ink/80" : "text-body"} max-w-[65ch] ${className}`,
	...rest,
	children
});
//#endregion
//#region src/components/ui/Label.jsx
var Label = ({ as: Tag = "span", className = "", children, ...rest }) => /* @__PURE__ */ jsx(Tag, {
	className: `text-label font-mono uppercase tracking-[0.08em] text-muted ${className}`,
	...rest,
	children
});
//#endregion
//#region src/components/ui/Button.jsx
var VARIANTS = {
	primary: "bg-accent text-white hover:bg-accent-hover",
	outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
	ghost: "text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent",
	onDark: "border border-white/70 text-white hover:bg-white hover:text-ink"
};
var SIZES = {
	md: "px-6 py-3 text-body",
	lg: "px-8 py-4 text-body"
};
var Button = ({ as: Tag = "button", variant = "primary", size = "md", className = "", children, ...rest }) => /* @__PURE__ */ jsx(Tag, {
	className: `inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`,
	...rest,
	children
});
//#endregion
//#region src/components/ui/Figure.jsx
var RATIOS = {
	"4/5": "aspect-[4/5]",
	"1/1": "aspect-square",
	"3/2": "aspect-[3/2]",
	"3/4": "aspect-[3/4]",
	"16/9": "aspect-video",
	auto: ""
};
var Figure = ({ src, alt, ratio = "4/5", caption, treatment = "grade", fit = "cover", blend = false, className = "", ...rest }) => {
	const isContain = fit === "contain";
	return /* @__PURE__ */ jsxs("figure", {
		className: `relative ${className}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: `${RATIOS[ratio]} overflow-hidden ${isContain ? "" : "bg-surface"}`,
			children: /* @__PURE__ */ jsx("img", {
				src,
				alt,
				loading: "lazy",
				decoding: "async",
				className: [
					"h-full w-full",
					isContain ? "object-contain" : "object-cover",
					isContain ? "" : "transition-transform duration-[600ms] ease-out hover:scale-[1.04]",
					treatment === "texture" ? "photo-texture" : treatment === "grade" ? "photo-grade" : "",
					blend ? "mix-blend-multiply" : ""
				].filter(Boolean).join(" "),
				...rest
			})
		}), caption && /* @__PURE__ */ jsx("figcaption", {
			className: "mt-3 text-small text-muted",
			children: caption
		})]
	});
};
//#endregion
//#region src/components/ui/ServiceRow.jsx
var ServiceRow = ({ index, title, description, href = "#" }) => /* @__PURE__ */ jsxs("a", {
	href,
	className: "group hairline-t flex items-baseline gap-5 py-8 transition-colors duration-200 md:gap-10 md:py-10",
	children: [
		/* @__PURE__ */ jsx("span", {
			className: "text-label font-mono text-muted tabular-nums",
			children: String(index).padStart(2, "0")
		}),
		/* @__PURE__ */ jsxs("span", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsx(Heading, {
				as: "h3",
				size: "h3",
				className: "transition-colors group-hover:text-accent",
				children: title
			}), description && /* @__PURE__ */ jsx("span", {
				className: "mt-2 block text-body text-muted",
				children: description
			})]
		}),
		/* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			className: "text-ink transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent",
			children: "→"
		})
	]
});
//#endregion
//#region src/components/Navbar.jsx
var NAV_LINKS = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var ROUTES_WITH_DARK_HERO$1 = /* @__PURE__ */ new Set(["/"]);
var NAV_LINK_BASE = "font-sans text-small underline decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:decoration-accent";
var navLinkClasses = (solid) => `${NAV_LINK_BASE} ${solid ? "text-ink" : "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"}`;
var HOVER_INTENT_MS = 150;
/**
* Services megamenu.
*
* The panel is ALWAYS rendered in the DOM (visibility toggled with CSS),
* never conditionally mounted — otherwise the 7 service links would be
* absent from the prerendered HTML, which is the entire point of putting
* them here (hub-and-spoke internal linking, see docs/08-SEO-STRATEGY.md).
*/
var ServicesMenu = ({ scrolled }) => {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef(null);
	const panelRef = useRef(null);
	const openTimer = useRef(null);
	const closeTimer = useRef(null);
	const menuId = useId();
	const { pathname } = useLocation();
	const overDarkHero = ROUTES_WITH_DARK_HERO$1.has(pathname);
	const solid = scrolled || !overDarkHero;
	const [previousPath, setPreviousPath] = useState(pathname);
	const clearTimers = () => {
		clearTimeout(openTimer.current);
		clearTimeout(closeTimer.current);
	};
	useEffect(() => clearTimers, []);
	if (previousPath !== pathname) {
		setPreviousPath(pathname);
		if (open) setOpen(false);
	}
	useEffect(() => {
		if (!open) return void 0;
		const onPointerDown = (event) => {
			if (buttonRef.current?.contains(event.target) || panelRef.current?.contains(event.target)) return;
			setOpen(false);
		};
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, [open]);
	const scheduleOpen = () => {
		clearTimers();
		openTimer.current = setTimeout(() => setOpen(true), HOVER_INTENT_MS);
	};
	const scheduleClose = () => {
		clearTimers();
		closeTimer.current = setTimeout(() => setOpen(false), HOVER_INTENT_MS);
	};
	const toggleOpen = () => {
		clearTimers();
		setOpen((value) => !value);
	};
	const closeAndRefocus = () => {
		setOpen(false);
		buttonRef.current?.focus();
	};
	const focusFirstItem = () => {
		panelRef.current?.querySelector("a")?.focus();
	};
	const onBlur = (event) => {
		const next = event.relatedTarget;
		if (next && event.currentTarget.contains(next)) return;
		setOpen(false);
	};
	const onKeyDown = (event) => {
		if (event.key === "Escape") {
			event.preventDefault();
			closeAndRefocus();
			return;
		}
		if (![
			"ArrowDown",
			"ArrowUp",
			"ArrowLeft",
			"ArrowRight",
			"Home",
			"End"
		].includes(event.key)) return;
		if (!open) {
			if (event.key === "ArrowDown") {
				event.preventDefault();
				clearTimers();
				setOpen(true);
				requestAnimationFrame(focusFirstItem);
			}
			return;
		}
		const items = panelRef.current ? Array.from(panelRef.current.querySelectorAll("a")) : [];
		if (!items.length) return;
		const currentIndex = items.indexOf(document.activeElement);
		const focusAt = (index) => items[(index + items.length) % items.length]?.focus();
		switch (event.key) {
			case "ArrowDown":
			case "ArrowRight":
				event.preventDefault();
				focusAt(currentIndex === -1 ? 0 : currentIndex + 1);
				break;
			case "ArrowUp":
			case "ArrowLeft":
				event.preventDefault();
				focusAt(currentIndex === -1 ? items.length - 1 : currentIndex - 1);
				break;
			case "Home":
				event.preventDefault();
				focusAt(0);
				break;
			case "End":
				event.preventDefault();
				focusAt(items.length - 1);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		onMouseEnter: scheduleOpen,
		onMouseLeave: scheduleClose,
		onKeyDown,
		onBlur,
		children: [/* @__PURE__ */ jsxs("button", {
			ref: buttonRef,
			type: "button",
			"aria-expanded": open,
			"aria-controls": menuId,
			onClick: toggleOpen,
			className: `inline-flex items-center gap-1.5 ${navLinkClasses(solid)}`,
			children: ["Services", /* @__PURE__ */ jsx("svg", {
				"aria-hidden": "true",
				viewBox: "0 0 12 8",
				className: `h-[6px] w-[9px] fill-none stroke-current transition-transform duration-200 ${open ? "rotate-180" : ""}`,
				children: /* @__PURE__ */ jsx("path", {
					d: "M1 1l5 5 5-5",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			id: menuId,
			ref: panelRef,
			"aria-hidden": !open,
			className: `hairline-t absolute inset-x-0 top-full z-10 bg-paper transition-[opacity,visibility] duration-150 ${open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`,
			children: [
				/* @__PURE__ */ jsx(Container, {
					className: "grid grid-cols-2 gap-x-10 gap-y-8 py-10 md:grid-cols-3",
					children: services.map((service, index) => /* @__PURE__ */ jsxs(Link, {
						to: `/services/${service.slug}`,
						tabIndex: open ? 0 : -1,
						className: "group block",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-label font-mono tabular-nums text-muted",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mt-2 block font-display text-lede text-ink transition-colors duration-200 group-hover:text-accent",
								children: service.navLabel
							}),
							/* @__PURE__ */ jsx(Label, {
								className: "mt-1 block text-muted/80",
								children: service.tagline
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 max-w-[32ch] text-small text-muted",
								children: service.summary
							})
						]
					}, service.slug))
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "scroll-progress absolute inset-x-0 bottom-0 h-[2px] bg-accent"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hairline-t",
					children: /* @__PURE__ */ jsx(Container, {
						className: "py-6",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							tabIndex: open ? 0 : -1,
							className: "inline-flex items-center gap-2 font-sans text-small font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent",
							children: ["View all services", /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})
					})
				})
			]
		})]
	});
};
var Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const toggleRef = useRef(null);
	const wasOpenRef = useRef(false);
	const menuId = useId();
	const { pathname } = useLocation();
	const overDarkHero = ROUTES_WITH_DARK_HERO$1.has(pathname);
	const solid = scrolled || !overDarkHero;
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		if (!open) return void 0;
		const onKeyDown = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);
	useEffect(() => {
		if (!open && wasOpenRef.current) toggleRef.current?.focus();
		wasOpenRef.current = open;
	}, [open]);
	const closeMenu = () => setOpen(false);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 z-50 overflow-hidden transition-[top,background-color] duration-300 ${solid ? "top-0 hairline-b bg-paper" : "top-0 bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs(Container, {
			className: "flex items-center justify-between py-4 md:py-5",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "Xpatios home",
					children: /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("img", {
							src: logo_mark_default,
							alt: "",
							"aria-hidden": "true",
							width: 690,
							height: 700,
							className: `h-9 w-auto transition-[filter] duration-300 md:h-10 ${solid ? "" : "brightness-0 invert"}`
						}), /* @__PURE__ */ jsx("span", {
							className: `font-display text-h3 leading-none transition-colors duration-300 ${solid ? "text-ink" : "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"}`,
							children: "Xpatios"
						})]
					})
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden items-center gap-8 sm:flex md:gap-10",
					children: NAV_LINKS.map((item) => item.label === "Services" ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ServicesMenu, { scrolled: solid }) }, item.label) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: navLinkClasses(solid),
						children: item.label
					}) }, item.label))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden sm:block",
					children: /* @__PURE__ */ jsx(Button, {
						as: Link,
						to: "/quote",
						children: "Get a Free Quote"
					})
				}),
				!open && /* @__PURE__ */ jsxs("button", {
					ref: toggleRef,
					type: "button",
					"aria-expanded": open,
					"aria-controls": menuId,
					"aria-label": "Open menu",
					onClick: () => setOpen(true),
					className: "flex h-11 w-11 flex-col items-center justify-center gap-1.5 sm:hidden",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: `block h-px w-6 ${solid ? "bg-ink" : "bg-white"}`
					}), /* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: `block h-px w-6 ${solid ? "bg-ink" : "bg-white"}`
					})]
				})
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			id: menuId,
			className: "fixed inset-0 z-50 flex flex-col bg-ink",
			style: { minHeight: "100lvh" },
			children: [
				/* @__PURE__ */ jsxs(Container, {
					className: "flex items-center justify-between py-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-h3 text-paper",
						children: "Xpatios"
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-label": "Close menu",
						onClick: closeMenu,
						className: "relative flex h-11 w-11 items-center justify-center",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "absolute h-px w-6 rotate-45 bg-paper"
						}), /* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "absolute h-px w-6 -rotate-45 bg-paper"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Mobile",
					className: "flex flex-1 flex-col justify-center px-5 sm:px-8 md:px-12",
					children: NAV_LINKS.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						onClick: closeMenu,
						className: "border-t border-white/10 py-4 font-display text-h2 text-paper first:border-t-0",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-5 pb-10 sm:px-8 md:px-12",
					children: /* @__PURE__ */ jsx(Button, {
						as: Link,
						to: "/quote",
						onClick: closeMenu,
						className: "w-full",
						children: "Get a Free Quote"
					})
				})
			]
		})]
	});
};
//#endregion
//#region src/assets/xpGallery/xp1.jpeg
var xp1_exports = /* @__PURE__ */ __exportAll({ default: () => xp1_default });
var xp1_default = "/assets/xp1-DAKlgPsd.jpeg";
//#endregion
//#region src/assets/xpGallery/xp10.jpeg
var xp10_exports = /* @__PURE__ */ __exportAll({ default: () => xp10_default });
var xp10_default = "/assets/xp10-y2wRt5j5.jpeg";
//#endregion
//#region src/assets/xpGallery/xp2.jpeg
var xp2_exports = /* @__PURE__ */ __exportAll({ default: () => xp2_default });
var xp2_default = "/assets/xp2-P1-2_xSW.jpeg";
//#endregion
//#region src/assets/xpGallery/xp3.jpeg
var xp3_exports = /* @__PURE__ */ __exportAll({ default: () => xp3_default });
var xp3_default = "/assets/xp3-BO5xyT8Z.jpeg";
//#endregion
//#region src/assets/xpGallery/xp4.jpeg
var xp4_exports = /* @__PURE__ */ __exportAll({ default: () => xp4_default });
var xp4_default = "/assets/xp4-Dayuz3e6.jpeg";
//#endregion
//#region src/assets/xpGallery/xp5.jpeg
var xp5_exports = /* @__PURE__ */ __exportAll({ default: () => xp5_default });
var xp5_default = "/assets/xp5-CPLHFrNj.jpeg";
//#endregion
//#region src/assets/xpGallery/xp6.jpeg
var xp6_exports = /* @__PURE__ */ __exportAll({ default: () => xp6_default });
var xp6_default = "/assets/xp6--Ol8iI_c.jpeg";
//#endregion
//#region src/assets/xpGallery/xp7.jpeg
var xp7_exports = /* @__PURE__ */ __exportAll({ default: () => xp7_default });
var xp7_default = "/assets/xp7-DahGbKub.jpeg";
//#endregion
//#region src/assets/xpGallery/xp8.jpeg
var xp8_exports = /* @__PURE__ */ __exportAll({ default: () => xp8_default });
var xp8_default = "/assets/xp8-GUZoRXlS.jpeg";
//#endregion
//#region src/assets/xpGallery/xp9.jpeg
var xp9_exports = /* @__PURE__ */ __exportAll({ default: () => xp9_default });
var xp9_default = "/assets/xp9-ORYwNpkv.jpeg";
//#endregion
//#region src/components/Hero.jsx
var imageModules = /* #__PURE__ */ Object.assign({
	"../assets/xpGallery/xp1.jpeg": xp1_exports,
	"../assets/xpGallery/xp10.jpeg": xp10_exports,
	"../assets/xpGallery/xp2.jpeg": xp2_exports,
	"../assets/xpGallery/xp3.jpeg": xp3_exports,
	"../assets/xpGallery/xp4.jpeg": xp4_exports,
	"../assets/xpGallery/xp5.jpeg": xp5_exports,
	"../assets/xpGallery/xp6.jpeg": xp6_exports,
	"../assets/xpGallery/xp7.jpeg": xp7_exports,
	"../assets/xpGallery/xp8.jpeg": xp8_exports,
	"../assets/xpGallery/xp9.jpeg": xp9_exports
});
var slides = Object.keys(imageModules).sort((a, b) => {
	const n = (s) => Number(s.match(/xp(\d+)\.jpeg$/)?.[1] ?? 0);
	return n(a) - n(b);
}).map((key) => imageModules[key].default);
var Hero = () => {
	const [currentIndex, setIndex] = useState(0);
	const prevSlide = () => {
		setIndex((i) => (i - 1 + slides.length) % slides.length);
	};
	const nextSlide = () => {
		setIndex((i) => (i + 1) % slides.length);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "full-bleed relative h-[90lvh] overflow-hidden bg-ink",
		children: [
			slides.map((src, index) => /* @__PURE__ */ jsx("img", {
				src,
				alt: "",
				"aria-hidden": index !== currentIndex,
				fetchPriority: index === 0 ? "high" : void 0,
				loading: index === 0 ? "eager" : "lazy",
				decoding: index === 0 ? "sync" : "async",
				className: `photo-grade parallax-hero absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`
			}, src)),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-x-0 bottom-0 px-5 pb-16 sm:px-8 md:px-12 md:pb-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto w-full max-w-[1600px]",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "max-w-3xl font-display text-display text-white",
							children: "Sydney’s outdoor living specialists"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-md text-lede text-white/85",
							children: "Patios, carports, decking and Colorbond metal roofing, engineer-led and built to last, across Sydney."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "primary",
								size: "lg",
								children: "Get a Free Quote"
							}), /* @__PURE__ */ jsx(Button, {
								variant: "onDark",
								size: "lg",
								children: "View Our Work"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Previous slide",
				onClick: prevSlide,
				className: "absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white sm:left-5",
				children: /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "text-2xl leading-none",
					children: "‹"
				})
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Next slide",
				onClick: nextSlide,
				className: "absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white sm:right-5",
				children: /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "text-2xl leading-none",
					children: "›"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				"aria-hidden": "true",
				className: "absolute bottom-6 right-5 hidden items-center gap-3 text-white/70 sm:flex md:right-12",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-label font-mono uppercase tracking-[0.08em] [writing-mode:vertical-rl]",
					children: "Scroll"
				}), /* @__PURE__ */ jsx("span", { className: "h-10 w-px bg-white/50" })]
			})
		]
	});
};
//#endregion
//#region src/constants/index.js
var features = [
	{
		id: "feature-1",
		icon: Star_default,
		title: "Expert Civil Engineering",
		content: "Led by a seasoned civil engineer, our team brings expertise to every project, ensuring precision and excellence."
	},
	{
		id: "feature-2",
		icon: Shield_default,
		title: "Dedicated Team",
		content: "A dedicated team of professionals, providing personalised attention to meet your construction needs."
	},
	{
		id: "feature-3",
		icon: Send_default,
		title: "Quality Construction",
		content: "We go the extra mile, investing in top-tier materials and craftsmanship to create structures that are not only strong but also aesthetically pleasing and durable."
	}
];
var GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Xpatios+Bankstown+NSW";
var GOOGLE_RATING = { average: 5 };
var feedback = [
	{
		id: "feedback-1",
		content: "Very efficient and professional! Job well done. Highly recommended",
		name: "Richard Zeaiter",
		source: "Google",
		rating: 5,
		img: people01_default
	},
	{
		id: "feedback-2",
		content: "I am extremely pleased with the team at Xpatios as they were incredibly hardworking and completed the my outdoor insulated patio to a very high standard. From start to finish I was amazed at how experienced and professional they were and the pricing was very reasonable. I would recommend them if your wishing to do your Patios!",
		name: "Aster Araya",
		source: "Google",
		rating: 5,
		img: people02_default
	},
	{
		id: "feedback-3",
		content: "The team of Xpatios were very professional, and conducted themselves in a very timely manner. They completed the job the way they promised. Their price is very fare and affordable. I highly recommend them. Thanks to Mr Tanvir and his team.",
		name: "Me'o Ekhlass",
		source: "Google",
		rating: 5,
		img: people03_default
	},
	{
		id: "feedback-4",
		content: "I couldn't be happier with the pergola Hasan from Xpatios built for us. From start to finish, he showed exceptional professionalism and genuine attention to detail. Hasan listened carefully to all of my requirements and delivered exactly what I had envisioned. The quality of workmanship is outstanding, and it's clear he takes great pride in his work. The end result is a beautiful, well-finished pergola that has completely transformed our space. Highly recommended for anyone looking for reliability and excellent service.",
		name: "Maz R",
		source: "Google",
		rating: 5
	},
	{
		id: "feedback-5",
		content: "They finished everything in just 3 days which was impressive. They even cleaned up my old pergola properly, which they didn't have to do. Also had an issue because my electrician messed something up, but they came back later with their own electrician and fixed it without charging me anything extra. Really solid service. I'll definitely be calling them again.",
		name: "M Tamal",
		source: "Google",
		rating: 5
	},
	{
		id: "feedback-6",
		content: "The boys came in and built an awesome 25m squared pergola in less than 2 days. I am beyond happy with the outcome and the price was very fair.",
		name: "Andy Taleb",
		source: "Google",
		rating: 5
	},
	{
		id: "feedback-7",
		content: "Xpatios did a great job with the design and build of our new Carport. Hasan and the team did a great job and I would definitely recommend their services.",
		name: "Wayne",
		source: "Google",
		rating: 5
	},
	{
		id: "feedback-8",
		content: "My neighbour spent around $10k on theirs, and honestly these guys did an even better job for just $7k. Price was very fair and the quality of work speaks for itself.",
		name: "atwell court",
		source: "Google",
		rating: 5
	},
	{
		id: "feedback-9",
		content: "Best in the business. Thoroughly professional and the quality of work is amazing.",
		name: "Raonaq Saroz",
		source: "Google",
		rating: 5
	}
];
var stats = [
	{
		id: "stats-1",
		title: "Happy Clients",
		value: 150,
		suffix: "+"
	},
	{
		id: "stats-2",
		title: "Projects Completed",
		value: 200,
		suffix: "+"
	},
	{
		id: "stats-3",
		title: "Years Experience",
		value: 10,
		suffix: "+"
	}
];
//#endregion
//#region src/hooks/useCountUp.js
/**
* Counts from 0 up to `target` the first time the element scrolls into view.
*
* Two constraints shape this:
*  - The page is pre-rendered, so the initial state must be the FINAL value.
*    If it started at 0, that 0 would be baked into the static HTML and both
*    crawlers and no-JS visitors would read "0 Happy Clients".
*  - `prefers-reduced-motion` must skip the animation entirely, not just
*    shorten it.
*/
function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
	const [display, setDisplay] = useState(target);
	const ref = useRef(null);
	const hasRun = useRef(false);
	useEffect(() => {
		const el = ref.current;
		if (!el || hasRun.current) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting || hasRun.current) return;
			hasRun.current = true;
			observer.disconnect();
			const start = performance.now();
			const tick = (now) => {
				const t = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - t, 3);
				setDisplay(Number((target * eased).toFixed(decimals)));
				if (t < 1) frame = requestAnimationFrame(tick);
			};
			setDisplay(0);
			frame = requestAnimationFrame(tick);
		}, { threshold: .4 });
		observer.observe(el);
		return () => {
			observer.disconnect();
			if (frame) cancelAnimationFrame(frame);
		};
	}, [
		target,
		duration,
		decimals
	]);
	return [ref, display];
}
//#endregion
//#region src/components/Stats.jsx
var Stat = ({ value, suffix, title }) => {
	const [ref, display] = useCountUp(value);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex-1 px-3 py-6 text-center sm:px-8 sm:py-0",
		children: [/* @__PURE__ */ jsx("p", {
			ref,
			"aria-label": `${value}${suffix ?? ""} ${title}`,
			className: "font-display text-h1 text-ink tabular-nums",
			children: /* @__PURE__ */ jsxs("span", {
				"aria-hidden": "true",
				children: [Math.round(display).toLocaleString("en-AU"), suffix]
			})
		}), /* @__PURE__ */ jsx(Label, {
			as: "p",
			className: "mt-3",
			children: title
		})]
	});
};
var Stats = () => /* @__PURE__ */ jsx(Section, {
	spacing: "tight",
	hairline: true,
	children: /* @__PURE__ */ jsx("div", {
		className: "reveal-stagger mx-auto flex w-full max-w-4xl flex-row divide-x divide-hairline",
		children: stats.map((stat) => /* @__PURE__ */ jsx(Stat, { ...stat }, stat.id))
	})
});
//#endregion
//#region src/components/Business.jsx
var FeatureRow = ({ icon, title, content, index }) => /* @__PURE__ */ jsxs("div", {
	className: `flex items-start gap-5 py-8 md:gap-8 md:py-10 ${index === 0 ? "" : "hairline-t"}`,
	children: [/* @__PURE__ */ jsxs("span", {
		className: "flex shrink-0 items-center gap-4",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-label font-mono text-muted tabular-nums",
			children: String(index + 1).padStart(2, "0")
		}), /* @__PURE__ */ jsx("span", {
			className: "flex h-11 w-11 items-center justify-center rounded-full bg-surface",
			children: /* @__PURE__ */ jsx("img", {
				src: icon,
				alt: "",
				"aria-hidden": "true",
				className: "h-5 w-5 invert"
			})
		})]
	}), /* @__PURE__ */ jsxs("span", {
		className: "flex-1",
		children: [/* @__PURE__ */ jsx(Heading, {
			as: "h3",
			size: "h3",
			children: title
		}), /* @__PURE__ */ jsx("span", {
			className: "mt-2 block text-body text-muted",
			children: content
		})]
	})]
});
var Business = () => /* @__PURE__ */ jsx(Section, {
	hairline: true,
	className: "reveal",
	children: /* @__PURE__ */ jsxs("div", {
		className: "grid gap-12 md:grid-cols-12 md:gap-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "md:col-span-4",
			children: [
				/* @__PURE__ */ jsx(Label, { children: "What We Do" }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "Build Your Dreams, We'll Handle the Construction."
				}),
				/* @__PURE__ */ jsx(Prose, {
					size: "lede",
					className: "mt-6",
					children: "With the right design and a skilled team, you can transform an ordinary space into an outdoor oasis, crafting pergolas and patios that bring comfort and elegance to your home, one project at a time."
				}),
				/* @__PURE__ */ jsx(Button, {
					as: "a",
					href: "/#quote",
					className: "mt-10",
					children: "Get a Free Quote"
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "reveal-stagger md:col-span-7 md:col-start-6",
			children: features.map((feature, index) => /* @__PURE__ */ jsx(FeatureRow, {
				...feature,
				index
			}, feature.id))
		})]
	})
});
//#endregion
//#region src/components/RedesignPatio.jsx
var RedesignPatio = () => /* @__PURE__ */ jsx(Section, {
	hairline: true,
	className: "reveal",
	children: /* @__PURE__ */ jsxs("div", {
		className: "grid items-center gap-10 md:grid-cols-12 md:gap-x-16",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "md:order-1 md:col-span-4",
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Our Range" }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "Pergola Styles for Every Sydney Home"
				}),
				/* @__PURE__ */ jsx(Prose, {
					size: "lede",
					className: "mt-6",
					children: "Flat, gable, dome and insulated-panel roofs, attached or freestanding. Each suits a different roofline, budget and amount of shade, and we'll talk you through which fits your place before you commit to anything."
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "md:order-2 md:col-span-7 md:col-start-6",
			children: /* @__PURE__ */ jsx(Figure, {
				className: "reveal-media",
				src: patioDesigns_default,
				alt: "A selection of Xpatios pergola and patio roofing designs",
				ratio: "3/2",
				fit: "contain",
				treatment: "none",
				blend: true
			})
		})]
	})
});
//#endregion
//#region src/components/MegaPartner.jsx
var MegaPartner = () => /* @__PURE__ */ jsx(Section, {
	hairline: true,
	className: "reveal",
	children: /* @__PURE__ */ jsxs("div", {
		className: "grid items-center gap-10 md:grid-cols-12 md:gap-x-16",
		children: [/* @__PURE__ */ jsx("div", {
			className: "md:order-1 md:col-span-5",
			children: /* @__PURE__ */ jsx(Figure, {
				className: "reveal-media",
				src: stratcoPartner_default,
				alt: "Stratco building materials, Xpatios' official supplier",
				ratio: "3/4",
				fit: "cover",
				treatment: "none"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "md:order-2 md:col-span-6 md:col-start-7",
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Our Supplier" }),
				/* @__PURE__ */ jsxs(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: [
						"Xpatios Welcomes",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-accent underline decoration-accent decoration-2 underline-offset-[6px]",
							children: "Stratco"
						}),
						" ",
						"as Our Official Supplier"
					]
				}),
				/* @__PURE__ */ jsx(Prose, {
					size: "lede",
					className: "mt-6",
					children: "Exciting news! Xpatios proudly partners with Stratco, a powerhouse with 70 years of excellence in building and home improvement. Together, we fuse innovation and quality, redefining outdoor living. From Adelaide roots to global prominence, Stratco's journey aligns seamlessly with ours. This collaboration marks a union of expertise, offering premium pergolas and home solutions. Welcome to the future of outdoor sophistication: Xpatios and Stratco, elevating your living experience."
				})
			]
		})]
	})
});
//#endregion
//#region src/components/CTA.jsx
var FIELDS = [
	{
		name: "name",
		label: "Name",
		type: "text",
		autoComplete: "name"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		autoComplete: "email"
	},
	{
		name: "phoneNumber",
		label: "Phone number",
		type: "tel",
		autoComplete: "tel"
	},
	{
		name: "address",
		label: "Project address",
		type: "text",
		autoComplete: "street-address"
	}
];
var inputClasses = "w-full border border-hairline bg-paper px-4 py-3 text-body text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";
var CTA = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		address: "",
		description: ""
	});
	const [status, setStatus] = useState("idle");
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (status === "submitting") return;
		setStatus("submitting");
		emailjs.send("service_fgb2d2k", "template_w12v8t7", {
			to_name: "Tanvir HN",
			from_name: formData.name,
			user_email: formData.email,
			phone_number: formData.phoneNumber,
			user_address: formData.address,
			user_description: formData.description
		}, "Rl35Y5E3j58NqP-5d").then(() => {
			setStatus("success");
			setFormData({
				name: "",
				email: "",
				phoneNumber: "",
				address: "",
				description: ""
			});
		}).catch((error) => {
			console.error("Error sending email:", error);
			setStatus("error");
		});
	};
	return /* @__PURE__ */ jsx(Section, {
		as: "section",
		id: "quote",
		hairline: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 md:grid-cols-2 md:gap-20",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				children: "Get a free quote"
			}), /* @__PURE__ */ jsx(Prose, {
				className: "mt-5",
				children: "Your dream project begins with a simple, free quote request. Tell us a little about the job and we’ll be in touch."
			})] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleFormSubmit,
				noValidate: true,
				className: "flex flex-col gap-6",
				children: [
					FIELDS.map((field) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx(Label, {
							as: "label",
							htmlFor: `quote-${field.name}`,
							children: field.label
						}), /* @__PURE__ */ jsx("input", {
							id: `quote-${field.name}`,
							type: field.type,
							name: field.name,
							autoComplete: field.autoComplete,
							value: formData[field.name],
							onChange: handleInputChange,
							required: true,
							className: inputClasses
						})]
					}, field.name)),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx(Label, {
							as: "label",
							htmlFor: "quote-description",
							children: "Project details"
						}), /* @__PURE__ */ jsx("textarea", {
							id: "quote-description",
							name: "description",
							rows: 5,
							value: formData.description,
							onChange: handleInputChange,
							required: true,
							className: inputClasses
						})]
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "submit",
						variant: "primary",
						disabled: status === "submitting",
						className: "mt-2 disabled:cursor-not-allowed disabled:opacity-60",
						children: status === "submitting" ? "Sending…" : "Send quote request"
					}),
					/* @__PURE__ */ jsxs("p", {
						"aria-live": "polite",
						className: "text-small text-muted",
						children: [status === "success" && "Thanks, we’ve received your request and will be in touch shortly.", status === "error" && "Something went wrong sending your request. Please try again or call us directly."]
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/constants/site.js
var site = {
	name: "Xpatios",
	legalName: "Xpatios Pty Ltd",
	tradingName: "Xpatios and Metal Roofing",
	phone: "0433 911 689",
	phoneHref: "tel:+61433911689",
	licence: "TODO-LICENCE",
	abn: "TODO-ABN",
	yearsExperience: 10,
	email: "info@xpatios.com.au",
	address: {
		street: "166 Chapel Rd",
		suburb: "Bankstown",
		state: "NSW",
		postcode: "2200",
		country: "AU"
	},
	serviceArea: "Greater Sydney",
	url: "https://xpatios.com.au",
	social: {
		facebook: "https://www.facebook.com/profile.php?id=100083071642027",
		instagram: "https://www.instagram.com/xpatios_pty_ltd/"
	},
	hours: {
		days: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"
		],
		opens: "09:00",
		closes: "22:00"
	}
};
var formattedAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;
/**
* Any `site` value still carrying a TODO marker must never render. Publishing
* an unverified licence number or ABN on a trades site is a NSW Fair Trading
* and ACL exposure, not a cosmetic bug.
*
* Lives here rather than in a component so every consumer shares one guard.
*/
var isPlaceholder = (value) => typeof value === "string" && value.trim().toUpperCase().startsWith("TODO");
//#endregion
//#region src/components/Footer.jsx
var formatHour$1 = (value) => {
	const [hourStr, minute] = value.split(":");
	const hour = Number(hourStr);
	const period = hour >= 12 ? "pm" : "am";
	const hour12 = (hour + 11) % 12 + 1;
	return minute === "00" ? `${hour12}${period}` : `${hour12}:${minute}${period}`;
};
var hoursLine = `${site.hours.days[0]}–${site.hours.days[site.hours.days.length - 1]}, ${formatHour$1(site.hours.opens)}–${formatHour$1(site.hours.closes)}`;
var QUICK_LINKS = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Contact",
		to: "/contact"
	},
	{
		label: "Get a Free Quote",
		to: "/quote"
	}
];
var SOCIAL_LINKS = [{
	name: "Facebook",
	href: site.social.facebook,
	icon: facebook_default
}, {
	name: "Instagram",
	href: site.social.instagram,
	icon: instagram_default
}];
var FOOTER_LINK_CLASSES = "text-small text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline";
var Footer = () => /* @__PURE__ */ jsxs(Section, {
	as: "footer",
	spacing: "loose",
	hairline: true,
	className: "bg-ink text-paper",
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-12 lg:flex-row lg:justify-between",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4 lg:max-w-xs",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "w-fit rounded-sm border border-paper/15 bg-paper p-2",
					children: /* @__PURE__ */ jsx("img", {
						src: logo_default,
						alt: "Xpatios",
						className: "h-10 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-small text-paper/70",
					children: "Creating dreams with beams."
				}),
				/* @__PURE__ */ jsxs("address", {
					className: "not-italic text-small text-paper/70",
					children: [
						site.legalName,
						/* @__PURE__ */ jsx("br", {}),
						formattedAddress
					]
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "flex flex-col gap-1.5 text-small text-paper/70",
					children: [
						!isPlaceholder(site.phone) && !isPlaceholder(site.phoneHref) && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: site.phoneHref,
							className: "transition-colors hover:text-paper",
							children: site.phone
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${site.email}`,
							className: "transition-colors hover:text-paper",
							children: site.email
						}) }),
						!isPlaceholder(site.licence) && /* @__PURE__ */ jsxs("li", { children: ["Lic. ", site.licence] }),
						!isPlaceholder(site.abn) && /* @__PURE__ */ jsxs("li", { children: ["ABN ", site.abn] })
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-10 divide-y divide-paper/10 sm:flex-row sm:gap-16 sm:divide-y-0 sm:divide-x",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-paper/70",
						children: "Services"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "flex flex-col gap-3",
						children: [services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: `/services/${service.slug}`,
							className: FOOTER_LINK_CLASSES,
							children: service.navLabel
						}) }, service.slug)), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "text-small font-medium text-paper underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
							children: "View all services →"
						}) })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-paper/70",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "flex flex-col gap-3",
						children: QUICK_LINKS.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: link.to,
							className: FOOTER_LINK_CLASSES,
							children: link.label
						}) }, link.to))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0",
					children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-label font-mono uppercase tracking-[0.08em] text-paper/70",
							children: "Hours"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-small text-paper/80",
							children: hoursLine
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-small text-paper/60",
							children: ["Servicing ", site.serviceArea]
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "mt-16 flex flex-col items-center gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:justify-between",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "text-small text-paper/60",
			children: [
				"Copyright © ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				site.legalName,
				". All Rights Reserved."
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-row items-center",
			children: SOCIAL_LINKS.map((social) => /* @__PURE__ */ jsx("a", {
				href: social.href,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": `Xpatios on ${social.name}`,
				className: "flex min-h-11 min-w-11 items-center justify-center opacity-80 transition-opacity hover:opacity-100",
				children: /* @__PURE__ */ jsx("img", {
					src: social.icon,
					alt: "",
					className: "h-[21px] w-[21px] object-contain"
				})
			}, social.name))
		})]
	})]
});
//#endregion
//#region src/components/FeedBackCard.jsx
var Stars = ({ rating = 5 }) => /* @__PURE__ */ jsx("span", {
	className: "flex gap-0.5",
	"aria-hidden": "true",
	children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 20 20",
		className: `h-4 w-4 ${i < rating ? "fill-accent" : "fill-hairline"}`,
		children: /* @__PURE__ */ jsx("path", { d: "M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" })
	}, i))
});
var FeedbackCard = ({ content, name, rating = 5, source }) => /* @__PURE__ */ jsxs("figure", {
	className: "flex w-[86vw] shrink-0 snap-start flex-col justify-between gap-8 border border-hairline bg-paper p-8 sm:w-[30rem] md:p-10",
	children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Stars, { rating }), /* @__PURE__ */ jsx("blockquote", {
		className: "mt-6 font-display text-lede text-ink",
		children: /* @__PURE__ */ jsx("p", {
			className: "line-clamp-[10]",
			children: content
		})
	})] }), /* @__PURE__ */ jsxs("figcaption", {
		className: "mt-8 flex items-baseline justify-between gap-4",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-small font-medium text-ink",
			children: name
		}), source && /* @__PURE__ */ jsxs("span", {
			className: "text-label font-mono uppercase tracking-[0.08em] text-muted",
			children: ["via ", source]
		})]
	})]
});
//#endregion
//#region src/components/Testimonials.jsx
var Testimonials = () => {
	const trackRef = useRef(null);
	const scrollBy = (dir) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.querySelector("figure");
		track.scrollBy({
			left: (card?.offsetWidth ?? 400) * dir + 24 * dir,
			behavior: "smooth"
		});
	};
	const handlers = useSwipeable({
		onSwipedLeft: () => scrollBy(1),
		onSwipedRight: () => scrollBy(-1),
		preventScrollOnSwipe: false,
		trackMouse: false
	});
	return /* @__PURE__ */ jsxs(Section, {
		hairline: true,
		className: "reveal",
		id: "reviews",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Reviews" }), /* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "What Sydney homeowners say"
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ jsxs("a", {
						href: GOOGLE_REVIEWS_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-small text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
						children: [GOOGLE_RATING.average.toFixed(1), " on Google"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden gap-2 sm:flex",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => scrollBy(-1),
							"aria-label": "Previous reviews",
							className: "flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors hover:border-accent hover:text-accent",
							children: "←"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => scrollBy(1),
							"aria-label": "Next reviews",
							className: "flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors hover:border-accent hover:text-accent",
							children: "→"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Prose, {
				className: "mt-5",
				children: "Every review below is a real Google review left by an Xpatios customer."
			}),
			/* @__PURE__ */ jsx("div", {
				...handlers,
				ref: trackRef,
				tabIndex: 0,
				role: "group",
				"aria-label": "Customer reviews, scrollable",
				className: "reveal-stagger mt-10 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: feedback.map((card) => /* @__PURE__ */ jsx(FeedbackCard, { ...card }, card.id))
			})
		]
	});
};
//#endregion
//#region src/root.jsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default,
	links: () => links,
	meta: () => meta$9
});
var TITLE$6 = "Patios, Carports & Metal Roofing Sydney | Xpatios";
var DESCRIPTION$6 = "Patios, carports, decking, fencing and Colorbond metal roofing built across Sydney. Engineer-led, Stratco-backed workmanship. Get your free quote today.";
var URL = "https://xpatios.com.au/";
var OG_IMAGE$1 = "https://xpatios.com.au/og-image.jpg";
var OG_IMAGE_ALT$1 = "Freestanding Colorbond patio with decking and downlights, built by Xpatios in Sydney";
var meta$9 = () => [
	{ title: TITLE$6 },
	{
		name: "description",
		content: DESCRIPTION$6
	},
	{
		property: "og:type",
		content: "website"
	},
	{
		property: "og:site_name",
		content: "Xpatios and Metal Roofing"
	},
	{
		property: "og:locale",
		content: "en_AU"
	},
	{
		property: "og:url",
		content: URL
	},
	{
		property: "og:title",
		content: TITLE$6
	},
	{
		property: "og:description",
		content: DESCRIPTION$6
	},
	{
		property: "og:image",
		content: OG_IMAGE$1
	},
	{
		property: "og:image:width",
		content: "1200"
	},
	{
		property: "og:image:height",
		content: "630"
	},
	{
		property: "og:image:alt",
		content: OG_IMAGE_ALT$1
	},
	{
		name: "twitter:card",
		content: "summary_large_image"
	},
	{
		name: "twitter:title",
		content: TITLE$6
	},
	{
		name: "twitter:description",
		content: DESCRIPTION$6
	},
	{
		name: "twitter:image",
		content: OG_IMAGE$1
	},
	{
		name: "twitter:image:alt",
		content: OG_IMAGE_ALT$1
	}
];
var links = () => [
	{
		rel: "icon",
		type: "image/jpeg",
		href: "/xpatios.jpg"
	},
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en-AU",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "bg-paper text-body",
			children: [
				children,
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
var ROUTES_WITH_DARK_HERO = /* @__PURE__ */ new Set(["/"]);
var root_default = UNSAFE_withComponentProps(function Root() {
	const { pathname } = useLocation();
	const overDarkHero = ROUTES_WITH_DARK_HERO.has(pathname);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
		className: overDarkHero ? void 0 : "pt-20 md:pt-24",
		children: /* @__PURE__ */ jsx(Outlet, {})
	})] });
});
//#endregion
//#region src/pages/pageMeta.js
var OG_IMAGE = `${site.url}/og-image.jpg`;
var OG_IMAGE_ALT = "Freestanding Colorbond patio with decking and downlights, built by Xpatios in Sydney";
/**
* @param {object} args
* @param {string} args.title - Full <title>, already including the site suffix if wanted.
* @param {string} args.description
* @param {string} [args.path] - Route path beginning with "/", e.g. "/about".
* @param {boolean} [args.noindex]
*/
function pageMeta({ title, description, path = "/", noindex = false }) {
	const url = `${site.url}${path}`;
	const tags = [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			tagName: "link",
			rel: "canonical",
			href: url
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:site_name",
			content: site.tradingName
		},
		{
			property: "og:locale",
			content: "en_AU"
		},
		{
			property: "og:url",
			content: url
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:image",
			content: OG_IMAGE
		},
		{
			property: "og:image:width",
			content: "1200"
		},
		{
			property: "og:image:height",
			content: "630"
		},
		{
			property: "og:image:alt",
			content: OG_IMAGE_ALT
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: OG_IMAGE
		},
		{
			name: "twitter:image:alt",
			content: OG_IMAGE_ALT
		}
	];
	if (noindex) tags.push({
		name: "robots",
		content: "noindex"
	});
	return tags;
}
//#endregion
//#region src/pages/Home.jsx
var Home_exports = /* @__PURE__ */ __exportAll({
	default: () => Home_default,
	meta: () => meta$8
});
var meta$8 = () => pageMeta({
	title: "Patios, Carports & Metal Roofing Sydney | Xpatios",
	description: "Patios, carports, decking, fencing and Colorbond metal roofing built across Sydney. Engineer-led, Stratco-backed workmanship. Get your free quote today.",
	path: "/"
});
var Home = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsx(Hero, {}),
	/* @__PURE__ */ jsx(Stats, {}),
	/* @__PURE__ */ jsx(Business, {}),
	/* @__PURE__ */ jsx(RedesignPatio, {}),
	/* @__PURE__ */ jsx(MegaPartner, {}),
	/* @__PURE__ */ jsx(Testimonials, {}),
	/* @__PURE__ */ jsx(CTA, {}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Home_default = UNSAFE_withComponentProps(Home);
//#endregion
//#region src/pages/About.jsx
var About_exports = /* @__PURE__ */ __exportAll({
	default: () => About_default,
	meta: () => meta$7
});
var TITLE$5 = "About Xpatios | Civil-Engineer-Led Patio & Roofing Builders Sydney";
var DESCRIPTION$5 = "Xpatios is a small, civil-engineer-led team building patios, carports, decking and Colorbond roofing across Greater Sydney, every job built by our own crew.";
var meta$7 = () => pageMeta({
	title: TITLE$5,
	description: DESCRIPTION$5,
	path: "/about"
});
var About = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsxs(Section, {
		spacing: "tight",
		as: "div",
		children: [
			/* @__PURE__ */ jsx(Label, { children: "About Xpatios" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				className: "mt-4 max-w-[22ch]",
				children: "Creating dreams with beams, engineered properly"
			}),
			/* @__PURE__ */ jsxs(Prose, {
				size: "lede",
				className: "mt-6",
				children: [
					"Xpatios and Metal Roofing builds patios, pergolas, carports, decking, fencing and Colorbond roofing across ",
					site.serviceArea,
					". We’re small on purpose, a dedicated team led by a civil engineer, not a sales floor that hands your job to whoever’s free."
				]
			})
		]
	}),
	/* @__PURE__ */ jsxs(Section, {
		hairline: true,
		children: [
			/* @__PURE__ */ jsx(Label, { children: "What actually makes us different" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				className: "mt-4",
				children: "Civil-engineer-led, not sales-led"
			}),
			/* @__PURE__ */ jsx(Prose, {
				className: "mt-6",
				children: "Most outdoor building companies in Sydney are run by salespeople who subcontract the actual construction out, you meet one face for the quote and a different crew for the build. Xpatios is the opposite: every project is scoped and overseen by a civil engineer, and built by the same small team from first measure to final inspection."
			}),
			/* @__PURE__ */ jsx("div", { children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", {
				className: "hairline-t flex items-baseline gap-5 py-8 md:gap-10 md:py-10",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-label font-mono text-muted tabular-nums",
					children: String(index + 1).padStart(2, "0")
				}), /* @__PURE__ */ jsxs("span", {
					className: "flex-1",
					children: [/* @__PURE__ */ jsx(Heading, {
						as: "h3",
						size: "h3",
						children: feature.title
					}), /* @__PURE__ */ jsx("span", {
						className: "mt-2 block text-body text-muted",
						children: feature.content
					})]
				})]
			}, feature.id)) })
		]
	}),
	/* @__PURE__ */ jsxs(Section, {
		hairline: true,
		children: [
			/* @__PURE__ */ jsx(Label, { children: "The details" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				className: "mt-4",
				children: "Licensed, local, and easy to reach"
			}),
			/* @__PURE__ */ jsxs("dl", {
				className: "mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-muted",
						children: "Phone"
					}), /* @__PURE__ */ jsx("dd", {
						className: "mt-2 text-body text-ink",
						children: /* @__PURE__ */ jsx("a", {
							href: site.phoneHref,
							className: "hover:text-accent",
							children: site.phone
						})
					})] }),
					!isPlaceholder(site.licence) && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-muted",
						children: "Licence"
					}), /* @__PURE__ */ jsx("dd", {
						className: "mt-2 text-body text-ink",
						children: site.licence
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-muted",
						children: "Servicing"
					}), /* @__PURE__ */ jsx("dd", {
						className: "mt-2 text-body text-ink",
						children: site.serviceArea
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
						className: "text-label font-mono uppercase tracking-[0.08em] text-muted",
						children: "Based at"
					}), /* @__PURE__ */ jsx("dd", {
						className: "mt-2 text-body text-ink",
						children: formattedAddress
					})] })
				]
			})
		]
	}),
	/* @__PURE__ */ jsx(Section, {
		hairline: true,
		spacing: "loose",
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				className: "text-paper",
				children: "Ready to talk about your project?"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 max-w-[50ch] text-body text-paper/70",
				children: "Get a free, no-obligation quote from the team that actually builds your job."
			})] }), /* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/quote",
				size: "lg",
				className: "shrink-0",
				children: "Get a free quote"
			})]
		})
	}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var About_default = UNSAFE_withComponentProps(About);
//#endregion
//#region src/pages/Services.jsx
var Services_exports = /* @__PURE__ */ __exportAll({
	default: () => Services_default,
	meta: () => meta$6
});
var TITLE$4 = "Patio, Roofing & Outdoor Building Services Sydney | Xpatios";
var DESCRIPTION$4 = "Metal roofing, guttering, patios & pergolas, carports, decking, fencing and sunrooms, engineer-led outdoor building across Greater Sydney. Free quotes.";
var meta$6 = () => pageMeta({
	title: TITLE$4,
	description: DESCRIPTION$4,
	path: "/services"
});
var Services = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsxs(Section, {
		spacing: "tight",
		as: "div",
		children: [
			/* @__PURE__ */ jsx(Label, { children: "What we build" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				className: "mt-4 max-w-[24ch]",
				children: "Outdoor building & roofing services across Sydney"
			}),
			/* @__PURE__ */ jsx(Prose, {
				size: "lede",
				className: "mt-6",
				children: "Seven service lines, one civil-engineer-led team. Every job, from a single Colorbond re-roof to a full enclosed sunroom, is measured, quoted and built by the same small crew, not handed off to subcontractors."
			})
		]
	}),
	/* @__PURE__ */ jsx(Section, {
		hairline: true,
		children: /* @__PURE__ */ jsx("div", { children: services.map((service, index) => /* @__PURE__ */ jsx(ServiceRow, {
			index: index + 1,
			title: service.name,
			description: service.summary,
			href: `/services/${service.slug}`
		}, service.slug)) })
	}),
	/* @__PURE__ */ jsx(Section, {
		hairline: true,
		spacing: "loose",
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				className: "text-paper",
				children: "Not sure which service you need?"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 max-w-[50ch] text-body text-paper/70",
				children: "Tell us what you’re trying to achieve and we’ll recommend the right approach, no obligation."
			})] }), /* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/quote",
				size: "lg",
				className: "shrink-0",
				children: "Get a free quote"
			})]
		})
	}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Services_default = UNSAFE_withComponentProps(Services);
//#endregion
//#region src/components/ServicePageTemplate.jsx
var PROCESS_STEPS = [
	{
		title: "Consult",
		description: "A free on-site visit to understand the brief, the block and what council will expect."
	},
	{
		title: "Quote",
		description: "A clear, itemised quote, no vague allowances, no surprise variations later."
	},
	{
		title: "Council",
		description: "We handle exempt development, CDC or DA paperwork so the build is fully compliant."
	},
	{
		title: "Build",
		description: "Our own dedicated crew builds the job, not a rotating cast of subcontractors."
	},
	{
		title: "Inspect",
		description: "A final walkthrough against the quote before we call the job done."
	}
];
/**
* Renders any one of the seven services in `src/constants/services.js`.
* Section order follows docs/06-INFORMATION-ARCHITECTURE.md §3: breadcrumb,
* H1, intro, types, benefits, council approval, process, FAQ, related, CTA.
* `types`, `faqs` and `compliance` all come straight off the service
* record — nothing here is per-slug content, so an 8th service needs zero
* changes to this file.
*
* Deliberately omits: pricing (service.priceFrom is null sitewide — see
* the TODO in services.js), hero photography and testimonials (no
* service-tagged image or review data exists yet), and any FAQPage /
* AggregateRating schema (owned by a separate workstream; see IA doc §8).
*/
var ServicePageTemplate = ({ service }) => {
	const currentIndex = services.findIndex((s) => s.slug === service.slug);
	const related = Array.from({ length: Math.min(3, services.length - 1) }, (_, i) => services[(currentIndex + i + 1) % services.length]);
	const faqs = service.faqs ?? [];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("nav", {
			"aria-label": "Breadcrumb",
			className: "pt-8 md:pt-10",
			children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("ol", {
				className: "flex flex-wrap items-center gap-2 text-small text-muted",
				children: [
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-ink hover:underline",
						children: "Home"
					}) }),
					/* @__PURE__ */ jsx("li", {
						"aria-hidden": "true",
						children: "/"
					}),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/services",
						className: "hover:text-ink hover:underline",
						children: "Services"
					}) }),
					/* @__PURE__ */ jsx("li", {
						"aria-hidden": "true",
						children: "/"
					}),
					/* @__PURE__ */ jsx("li", {
						"aria-current": "page",
						className: "text-ink",
						children: service.name
					})
				]
			}) })
		}),
		/* @__PURE__ */ jsxs(Section, {
			spacing: "tight",
			as: "div",
			children: [
				/* @__PURE__ */ jsx(Label, { children: service.tagline }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h1",
					size: "h1",
					className: "mt-4 max-w-[20ch]",
					children: service.h1
				}),
				/* @__PURE__ */ jsx(Prose, {
					size: "lede",
					className: "mt-6",
					children: service.intro ?? service.summary
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ jsx(Button, {
						as: "a",
						href: "/quote",
						children: "Get a free quote"
					}), /* @__PURE__ */ jsx(Button, {
						as: "a",
						href: "/contact",
						variant: "outline",
						children: "Talk to us"
					})]
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Options" }),
				/* @__PURE__ */ jsxs(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: ["Types of ", service.name]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: service.types.map((type) => /* @__PURE__ */ jsxs("div", {
						className: "bg-paper p-6 md:p-8",
						children: [/* @__PURE__ */ jsx(Heading, {
							as: "h3",
							size: "h3",
							children: type.name
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-body text-muted",
							children: type.description
						})]
					}, type.name))
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Why it’s worth doing" }),
				/* @__PURE__ */ jsxs(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: ["Why choose ", service.name.toLowerCase()]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2",
					children: service.benefits.map((benefit) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "mt-1 text-accent",
							children: "✓"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-body text-ink/80",
							children: benefit
						})]
					}, benefit))
				})
			]
		}),
		service.compliance && /* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Regulatory" }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "Council approval in NSW"
				}),
				/* @__PURE__ */ jsx(Prose, {
					className: "mt-6 text-ink/80",
					children: service.compliance
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-[65ch] text-small text-muted",
					children: "General guidance only, requirements vary by council and by property. We confirm what applies to your address before quoting."
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "How it works" }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "Our process"
				}),
				/* @__PURE__ */ jsx("ol", {
					className: "mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5",
					children: PROCESS_STEPS.map((step, i) => /* @__PURE__ */ jsxs("li", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-label font-mono text-muted tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ jsx(Heading, {
							as: "h3",
							size: "h3",
							className: "mt-3",
							children: step.title
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-2 block text-body text-muted",
							children: step.description
						})
					] }, step.title))
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Questions" }),
				/* @__PURE__ */ jsxs(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: [service.name, " FAQs"]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hairline-t mt-10 divide-y divide-hairline",
					children: faqs.map((faq) => /* @__PURE__ */ jsxs("details", {
						className: "group py-6",
						children: [/* @__PURE__ */ jsxs("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-6 font-sans text-body font-medium text-ink marker:content-none",
							children: [faq.q, /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								className: "shrink-0 text-h3 leading-none text-muted transition-transform duration-200 group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ jsx(Prose, {
							className: "mt-4 text-ink/80",
							children: faq.a
						})]
					}, faq.q))
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, {
			hairline: true,
			children: [
				/* @__PURE__ */ jsx(Label, { children: "Keep exploring" }),
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h2",
					className: "mt-4",
					children: "Related services"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4",
					children: related.map((relatedService, i) => /* @__PURE__ */ jsx(ServiceRow, {
						index: i + 1,
						title: relatedService.name,
						description: relatedService.tagline,
						href: `/services/${relatedService.slug}`
					}, relatedService.slug))
				})
			]
		}),
		/* @__PURE__ */ jsx(Section, {
			hairline: true,
			spacing: "loose",
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Heading, {
					as: "h2",
					size: "h2",
					className: "text-paper",
					children: [
						"Ready to start your ",
						service.name.toLowerCase(),
						" project?"
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-[50ch] text-body text-paper/70",
					children: "Tell us about your project and we’ll come back with a free, no-obligation quote."
				})] }), /* @__PURE__ */ jsx(Button, {
					as: "a",
					href: "/quote",
					size: "lg",
					className: "shrink-0",
					children: "Get a free quote"
				})]
			})
		})
	] });
};
//#endregion
//#region src/pages/ServiceDetail.jsx
var ServiceDetail_exports = /* @__PURE__ */ __exportAll({
	default: () => ServiceDetail_default,
	meta: () => meta$5
});
var meta$5 = ({ params }) => {
	const service = serviceBySlug(params.slug);
	if (!service) return pageMeta({
		title: "Service Not Found | Xpatios",
		description: "That service page does not exist.",
		path: `/services/${params.slug ?? ""}`,
		noindex: true
	});
	return pageMeta({
		title: service.title,
		description: service.metaDescription,
		path: `/services/${service.slug}`
	});
};
var ServiceDetail = ({ params }) => {
	const service = serviceBySlug(params.slug);
	if (!service) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Section, {
		spacing: "loose",
		children: [
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				children: "Service not found"
			}),
			/* @__PURE__ */ jsx(Prose, {
				size: "lede",
				className: "mt-6",
				children: "We couldn’t find a service at that address. It may have been renamed or moved, take a look at the full list instead."
			}),
			/* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/services",
				className: "mt-8",
				children: "View all services"
			})
		]
	}), /* @__PURE__ */ jsx(Footer, {})] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ServicePageTemplate, { service }), /* @__PURE__ */ jsx(Footer, {})] });
};
var ServiceDetail_default = UNSAFE_withComponentProps(ServiceDetail);
//#endregion
//#region src/components/Gallery.jsx
var PATTERN = [
	{ ratio: "4/5" },
	{ ratio: "4/5" },
	{
		ratio: "3/2",
		span: "sm:col-span-2"
	},
	{ ratio: "4/5" },
	{ ratio: "1/1" },
	{ ratio: "4/5" }
];
function GridGallery({ images }) {
	const [currentIndex, setCurrentIndex] = useState(null);
	const triggerRef = useRef(null);
	const openModal = (index, triggerEl) => {
		triggerRef.current = triggerEl;
		setCurrentIndex(index);
	};
	const closeModal = useCallback(() => {
		setCurrentIndex(null);
		triggerRef.current?.focus();
	}, []);
	const goToPrevious = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	}, [images.length]);
	const goToNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	}, [images.length]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4",
		children: images.map((imageUrl, index) => {
			const config = PATTERN[index % PATTERN.length];
			return /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: (e) => openModal(index, e.currentTarget),
				className: `block w-full text-left ${config.span ?? ""}`,
				children: /* @__PURE__ */ jsx(Figure, {
					src: imageUrl,
					alt: `Xpatios project photo ${index + 1} of ${images.length}`,
					ratio: config.ratio
				})
			}, imageUrl);
		})
	}), currentIndex !== null && /* @__PURE__ */ jsx(Lightbox, {
		images,
		currentIndex,
		onClose: closeModal,
		onPrevious: goToPrevious,
		onNext: goToNext
	})] });
}
function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }) {
	const dialogRef = useRef(null);
	const currentImage = images[currentIndex];
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, []);
	useEffect(() => {
		dialogRef.current?.focus();
	}, []);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				onClose();
				return;
			}
			if (e.key === "ArrowLeft") {
				onPrevious();
				return;
			}
			if (e.key === "ArrowRight") {
				onNext();
				return;
			}
			if (e.key === "Tab") {
				const node = dialogRef.current;
				if (!node) return;
				const focusable = node.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [
		onClose,
		onPrevious,
		onNext
	]);
	const handlers = useSwipeable({
		onSwipedLeft: onNext,
		onSwipedRight: onPrevious,
		preventScrollOnSwipe: true,
		trackMouse: true
	});
	return /* @__PURE__ */ jsxs("div", {
		...handlers,
		ref: dialogRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Photo ${currentIndex + 1} of ${images.length}`,
		tabIndex: -1,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 outline-none",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close",
				className: "absolute right-2 top-2 flex min-h-11 min-w-11 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:right-4 sm:top-4",
				children: /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "text-2xl leading-none",
					children: "×"
				})
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onPrevious,
				"aria-label": "Previous photo",
				className: "absolute left-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:left-4",
				children: /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "text-2xl leading-none",
					children: "←"
				})
			}),
			/* @__PURE__ */ jsx("img", {
				src: currentImage,
				alt: `Xpatios project photo ${currentIndex + 1} of ${images.length}`,
				className: "max-h-[85vh] max-w-full object-contain"
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onNext,
				"aria-label": "Next photo",
				className: "absolute right-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:right-4",
				children: /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "text-2xl leading-none",
					children: "→"
				})
			})
		]
	});
}
//#endregion
//#region src/components/PortfolioGallery.jsx
var BUCKET_NAME = "xpatios-website-assets";
var FOLDER_NAME = "gallery-images";
var API_KEY = void 0;
var PortfolioGallery = () => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(`https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o?prefix=${FOLDER_NAME}&key=${API_KEY}`);
				if (!response.ok) throw new Error("Failed to fetch images from Google Cloud Storage.");
				const imageUrls = (await response.json()).items.filter((item) => item.name.match(/\.(jpg|jpeg|png|gif)$/i)).map((item) => `https://storage.googleapis.com/${BUCKET_NAME}/${item.name}`);
				setImages(imageUrls);
			} catch (error) {
				console.error("Error fetching images:", error);
			}
		};
		fetchImages();
	}, []);
	return /* @__PURE__ */ jsx(Section, {
		as: "section",
		id: "gallery",
		width: "wide",
		spacing: "tight",
		children: images.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "text-body",
			children: "Loading our latest projects…"
		}) : /* @__PURE__ */ jsx(GridGallery, { images })
	});
};
//#endregion
//#region src/pages/Gallery.jsx
var Gallery_exports = /* @__PURE__ */ __exportAll({
	default: () => Gallery_default,
	meta: () => meta$4
});
var meta$4 = () => pageMeta({
	title: "Project Gallery | Patios, Decking & Roofing in Sydney | Xpatios",
	description: "Photographs of completed Xpatios projects across Sydney, patios, pergolas, carports, decking, fencing and Colorbond metal roofing.",
	path: "/gallery"
});
var Gallery = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsx("div", {
		className: "pb-8 md:pb-10",
		children: /* @__PURE__ */ jsxs(Container, { children: [/* @__PURE__ */ jsx(Heading, {
			as: "h1",
			size: "h1",
			children: "Our work"
		}), /* @__PURE__ */ jsx(Prose, {
			className: "mt-5",
			children: "A working record of the patios, pergolas and roofing jobs we’ve completed across Sydney."
		})] })
	}),
	/* @__PURE__ */ jsx(PortfolioGallery, {}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Gallery_default = UNSAFE_withComponentProps(Gallery);
//#endregion
//#region src/pages/Projects.jsx
var Projects_exports = /* @__PURE__ */ __exportAll({
	default: () => Projects_default,
	meta: () => meta$3
});
var TITLE$3 = "Recent Projects | Xpatios Sydney Patios, Carports & Roofing";
var DESCRIPTION$3 = "Completed Sydney patio, carport, decking and roofing projects from Xpatios, case studies by suburb, service and approval pathway.";
var meta$3 = () => pageMeta({
	title: TITLE$3,
	description: DESCRIPTION$3,
	path: "/projects"
});
/**
* No project data exists yet. `PROJECTS` is deliberately typed as an empty
* array and rendered through the same `.map()` a populated list would use,
* so wiring in real entries later is a data change, not a page rewrite.
*
* Suggested shape for each entry (see docs/09-PROJECTS-CONTENT-ENGINE.md):
*   {
*     slug: 'insulated-patio-castle-hill',
*     title: 'Insulated Cooldek patio — Castle Hill',
*     serviceSlug: 'patios-pergolas-sydney', // ref into services.js
*     suburb: 'Castle Hill',
*     council: { path: 'exempt' | 'cdc' | 'da' },
*     materials: ['Colorbond Cooldek — Surfmist'],
*     sizeM2: 32,
*     completedAt: '2026-03',
*     heroImage: '/assets/projects/...',
*     beforeImage: '/assets/projects/...',
*     afterImage: '/assets/projects/...',
*     clientQuote: { text: '...', name: 'First name, suburb' },
*   }
*
* One entry is meant to auto-populate several surfaces (this index, the
* matching service page's "recent projects" module, the gallery, and
* eventually a suburb page) — see the content-engine doc for the full
* picture. None of that wiring exists yet; this page is the shell it plugs
* into.
*/
var PROJECTS = [];
var Projects = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsxs(Section, {
		spacing: "tight",
		as: "div",
		children: [
			/* @__PURE__ */ jsx(Label, { children: "Our work" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				className: "mt-4 max-w-[22ch]",
				children: "Recent Sydney projects"
			}),
			/* @__PURE__ */ jsx(Prose, {
				size: "lede",
				className: "mt-6",
				children: "Case studies from completed jobs across Greater Sydney, the service, the suburb, the council pathway, and what it looked like before and after. We’re building this archive out project by project."
			})
		]
	}),
	/* @__PURE__ */ jsx(Section, {
		hairline: true,
		children: PROJECTS.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "hairline-t py-16 text-center",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					as: "h2",
					size: "h3",
					children: "Case studies are being added"
				}),
				/* @__PURE__ */ jsx(Prose, {
					className: "mx-auto mt-4",
					children: "We’re documenting completed jobs as case studies , service, suburb, materials and council approval pathway for each. In the meantime, browse recent work in the gallery or see what we build by service."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ jsx(Button, {
						as: Link,
						to: "/gallery",
						children: "View the gallery"
					}), /* @__PURE__ */ jsx(Button, {
						as: Link,
						to: "/services",
						variant: "outline",
						children: "Browse services"
					})]
				})
			]
		}) : /* @__PURE__ */ jsx("div", {
			className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
			children: PROJECTS.map((project) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h3",
				children: project.title
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-small text-muted",
				children: project.suburb
			})] }, project.slug))
		})
	}),
	/* @__PURE__ */ jsxs(Section, {
		hairline: true,
		children: [
			/* @__PURE__ */ jsx(Label, { children: "Every service, every suburb" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h2",
				size: "h2",
				className: "mt-4",
				children: "Explore by service"
			}),
			/* @__PURE__ */ jsx(Prose, {
				className: "mt-6",
				children: "While the project archive builds up, each service page carries its own detail, types, benefits and the NSW council approval pathway."
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-8 flex flex-wrap gap-x-8 gap-y-3",
				children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: `/services/${service.slug}`,
					className: "text-body text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent",
					children: service.name
				}) }, service.slug))
			})
		]
	}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Projects_default = UNSAFE_withComponentProps(Projects);
//#endregion
//#region src/pages/Contact.jsx
var Contact_exports = /* @__PURE__ */ __exportAll({
	default: () => Contact_default,
	meta: () => meta$2
});
var TITLE$2 = "Contact Xpatios | Sydney Patio, Carport & Roofing Builders";
var DESCRIPTION$2 = "Call or email Xpatios for a free quote on patios, carports, decking, fencing or Colorbond roofing anywhere across Greater Sydney.";
var meta$2 = () => pageMeta({
	title: TITLE$2,
	description: DESCRIPTION$2,
	path: "/contact"
});
var dayRange = (days) => {
	if (!days || days.length === 0) return null;
	return days.length > 1 ? `${days[0]}–${days[days.length - 1]}` : days[0];
};
var formatHour = (time) => {
	const [hourStr, minuteStr] = time.split(":");
	const hour = Number(hourStr);
	const period = hour >= 12 ? "pm" : "am";
	const displayHour = (hour + 11) % 12 + 1;
	return minuteStr === "00" ? `${displayHour}${period}` : `${displayHour}:${minuteStr}${period}`;
};
var Contact = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsxs(Section, {
		spacing: "tight",
		as: "div",
		children: [
			/* @__PURE__ */ jsx(Label, { children: "Get in touch" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				className: "mt-4 max-w-[20ch]",
				children: "Contact Xpatios"
			}),
			/* @__PURE__ */ jsxs(Prose, {
				size: "lede",
				className: "mt-6",
				children: [
					"Call, email or send through a free quote request, we cover",
					" ",
					site.serviceArea,
					" and get back to every enquiry personally."
				]
			})
		]
	}),
	/* @__PURE__ */ jsx(Section, {
		hairline: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 md:grid-cols-2 md:gap-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-10",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Call us" }), /* @__PURE__ */ jsx("p", {
						className: "mt-3",
						children: /* @__PURE__ */ jsx("a", {
							href: site.phoneHref,
							className: "text-h3 font-display text-ink hover:text-accent",
							children: site.phone
						})
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Email" }), /* @__PURE__ */ jsx("p", {
						className: "mt-3",
						children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${site.email}`,
							className: "text-body text-ink hover:text-accent",
							children: site.email
						})
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Address" }), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-body text-ink",
						children: formattedAddress
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Service area" }), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-body text-ink",
						children: site.serviceArea
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Hours" }), /* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-body text-ink",
						children: [
							dayRange(site.hours.days),
							", ",
							formatHour(site.hours.opens),
							"–",
							formatHour(site.hours.closes)
						]
					})] }),
					!isPlaceholder(site.licence) && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "Licence" }), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-body text-ink",
						children: site.licence
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Prose, {
				className: "mb-6",
				children: "Want a firm quote rather than a general enquiry? The full quote form takes about a minute and gets you a faster response."
			}), /* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/quote",
				size: "lg",
				children: "Get a free quote"
			})] })]
		})
	}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Contact_default = UNSAFE_withComponentProps(Contact);
//#endregion
//#region src/pages/Quote.jsx
var Quote_exports = /* @__PURE__ */ __exportAll({
	default: () => Quote_default,
	meta: () => meta$1
});
var TITLE$1 = "Get a Free Quote | Xpatios Sydney Patios, Carports & Roofing";
var DESCRIPTION$1 = "Request a free, no-obligation quote from Xpatios for patios, carports, decking, fencing or Colorbond roofing anywhere across Greater Sydney.";
var meta$1 = () => pageMeta({
	title: TITLE$1,
	description: DESCRIPTION$1,
	path: "/quote"
});
var Quote = () => /* @__PURE__ */ jsxs(Fragment, { children: [
	/* @__PURE__ */ jsxs(Section, {
		spacing: "tight",
		as: "div",
		children: [
			/* @__PURE__ */ jsx(Label, { children: "Free quote" }),
			/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				size: "h1",
				className: "mt-4 max-w-[22ch]",
				children: "Request your free quote"
			}),
			/* @__PURE__ */ jsxs(Prose, {
				size: "lede",
				className: "mt-6",
				children: [
					"Tell us about your project and we’ll come back with a clear, no-obligation quote. Prefer to talk it through first? Call",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: site.phoneHref,
						className: "text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent",
						children: site.phone
					}),
					" ",
					"directly."
				]
			})
		]
	}),
	/* @__PURE__ */ jsx(CTA, {}),
	/* @__PURE__ */ jsx(Footer, {})
] });
var Quote_default = UNSAFE_withComponentProps(Quote);
//#endregion
//#region src/pages/ThankYou.jsx
var ThankYou_exports = /* @__PURE__ */ __exportAll({
	default: () => ThankYou_default,
	meta: () => meta
});
var TITLE = "Thanks for Your Enquiry | Xpatios";
var DESCRIPTION = "Your quote request has been received, Xpatios will be in touch shortly.";
var meta = () => pageMeta({
	title: TITLE,
	description: DESCRIPTION,
	path: "/thank-you",
	noindex: true
});
var ThankYou = () => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Section, {
	spacing: "loose",
	as: "div",
	children: [
		/* @__PURE__ */ jsx(Label, { children: "Request received" }),
		/* @__PURE__ */ jsx(Heading, {
			as: "h1",
			size: "h1",
			className: "mt-4 max-w-[20ch]",
			children: "Thanks, we’ve got your request"
		}),
		/* @__PURE__ */ jsxs(Prose, {
			size: "lede",
			className: "mt-6",
			children: [
				"A member of the Xpatios team will be in touch shortly to talk through your project. If it’s urgent, call us directly on",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: site.phoneHref,
					className: "text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent",
					children: site.phone
				}),
				"."
			]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mt-8 flex flex-wrap gap-4",
			children: [/* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/",
				children: "Back to home"
			}), /* @__PURE__ */ jsx(Button, {
				as: Link,
				to: "/gallery",
				variant: "outline",
				children: "See our work"
			})]
		})
	]
}), /* @__PURE__ */ jsx(Footer, {})] });
var ThankYou_default = UNSAFE_withComponentProps(ThankYou);
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-KwsKc1P-.js",
		"imports": ["/assets/jsx-runtime-C5DS7pgi.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-BZo1WYPI.js",
			"imports": ["/assets/jsx-runtime-C5DS7pgi.js", "/assets/components-8IU8pWu5.js"],
			"css": ["/assets/root-rzwu_Pnx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Home": {
			"id": "pages/Home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Home-CsVn6J7S.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/About": {
			"id": "pages/About",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/About-fmfQu29w.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Services": {
			"id": "pages/Services",
			"parentId": "root",
			"path": "services",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Services-C4Iok7QW.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/ServiceDetail": {
			"id": "pages/ServiceDetail",
			"parentId": "root",
			"path": "services/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ServiceDetail-Csq4Zd1X.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Gallery": {
			"id": "pages/Gallery",
			"parentId": "root",
			"path": "gallery",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Gallery-By9_CF7P.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Projects": {
			"id": "pages/Projects",
			"parentId": "root",
			"path": "projects",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Projects-DrR6XAUZ.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Contact": {
			"id": "pages/Contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Contact-Oi61lOTV.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Quote": {
			"id": "pages/Quote",
			"parentId": "root",
			"path": "quote",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Quote-BCr3KZHq.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/ThankYou": {
			"id": "pages/ThankYou",
			"parentId": "root",
			"path": "thank-you",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ThankYou-DMwWrUKu.js",
			"imports": [
				"/assets/jsx-runtime-C5DS7pgi.js",
				"/assets/components-8IU8pWu5.js",
				"/assets/pageMeta-Csrj__pk.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-3899fd98.js",
	"version": "3899fd98",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = false;
var isSpaMode = false;
var prerender = [
	"/",
	"/about",
	"/services",
	"/gallery",
	"/projects",
	"/contact",
	"/quote",
	"/thank-you",
	"/services/metal-roofing-sydney",
	"/services/guttering-sydney",
	"/services/patios-pergolas-sydney",
	"/services/carports-sydney",
	"/services/decking-sydney",
	"/services/fencing-gates-sydney",
	"/services/sunrooms-sydney"
];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_web_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"pages/Home": {
		id: "pages/Home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: Home_exports
	},
	"pages/About": {
		id: "pages/About",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: About_exports
	},
	"pages/Services": {
		id: "pages/Services",
		parentId: "root",
		path: "services",
		index: void 0,
		caseSensitive: void 0,
		module: Services_exports
	},
	"pages/ServiceDetail": {
		id: "pages/ServiceDetail",
		parentId: "root",
		path: "services/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: ServiceDetail_exports
	},
	"pages/Gallery": {
		id: "pages/Gallery",
		parentId: "root",
		path: "gallery",
		index: void 0,
		caseSensitive: void 0,
		module: Gallery_exports
	},
	"pages/Projects": {
		id: "pages/Projects",
		parentId: "root",
		path: "projects",
		index: void 0,
		caseSensitive: void 0,
		module: Projects_exports
	},
	"pages/Contact": {
		id: "pages/Contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: Contact_exports
	},
	"pages/Quote": {
		id: "pages/Quote",
		parentId: "root",
		path: "quote",
		index: void 0,
		caseSensitive: void 0,
		module: Quote_exports
	},
	"pages/ThankYou": {
		id: "pages/ThankYou",
		parentId: "root",
		path: "thank-you",
		index: void 0,
		caseSensitive: void 0,
		module: ThankYou_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
