// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow
// 2018/11/26 Added to relick's github, changes tracked there
// github.com/relick/touhou-song-sorter

// *****************************************************************************
"use strict";
export const str_CenterT = 'Tie!';
export const str_CenterB = 'Undo last choice';

export const str_ImgPath = 'images/';
export const str_YouPath = 'https://www.youtube.com/embed/';
export const str_YouLink = 'https://www.youtube.com/watch?v=';
export const str_SpotEmbed = 'https://open.spotify.com/embed/track/'

// Up to which position should images be shown for?
export var int_ResultRank = 3;

// Maximum number of result rows before being broken off into another table.
var maxRows = 42;

// Letty waz here
const deepFreeze = obj => {
	Object.keys(obj).forEach(prop => {
		if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
	}); return Object.freeze(obj);
};

// * Game and album titles
// name: used during the sort and in the final result table
// abbrev: abbreviated form (also used during the sort and in the final result table)
// selectionName: used in the initial option table for selecting which titles to sort over
export const TITLE = deepFreeze({
	// BONUS: { name: "Bonus CDs + Other Tracks", image: "daisakusen.png", shortName: "Bonus CDs + Other Tracks", abbrev: "BONUS", },
	// Single 1
	ATK: {name: "Aozora ni Tsuite Kangaeru", image: "", shortName: "Single 1 - Main Song (Yagi Toa Center)", abbrev: "ATK"},
	TobaKami: {name: "Tobanakatta Kamihikouki", image: "", shortName: "Single 1 - Coupling Song (Yagi Toa Center)", abbrev: "TobaKami"},
	Parachute: {name: "Seifuku no Parachute", image: "", shortName: "Single 1 - Unit Song (Yagi Toa Center)", abbrev: "Parachute"},
	OSTonbo: {name: "Omoide Shirikiri Tonbo", image: "", shortName: "Single 1 - Unit Song (Akita Rian Center)", abbrev: "OSTonbo"},
	SukiNari: {name: "Suki ni Narinasai", image: "", shortName: "Single 1 - Unit Song (Nishimori Aya Center)", abbrev: "SukiNari"},
	// Single 2
	SotsuMade: {name: "Sotsugyou Made", image: "", shortName: "Single 2 - Main Song (Yagi Toa Center)", abbrev: "SotsuMade"},
	KimiUta: {name: "Kimi no Tame no Uta", image: "", shortName: "Single 2 - Coupling Song - Kumogumi (Akita Rian Center)", abbrev: "KimiUta"},
	KasuKibou: {name: "Kasukana Kibou", image: "", shortName: "Single 2 - Coupling Song (Hayasaki Suzuki Center)", abbrev: "KasuKibou"},
	KuraTetsu: {name: "Kurayami no Tetsugakusha", image: "", shortName: "Single 2 - Coupling Song (Yagi Toa Center)", abbrev: "KuraTetsu"},
	Masshirose: {name: "Masshiro ni Nurinaose!", image: "", shortName: "Single 2 - Coupling Song (Yoshimoto Cocona Center)", abbrev: "Masshirose"},
	// Single 3
	Supekoi: {name: "Spare no Nai Koi", image: "", shortName: "Single 3 - Main Song (Yagi Toa Center)", abbrev: "Supekoi"},
	Tomoyo: {name: "Tomo yo Koko de Sayonara da", image: "", shortName: "Single 3 - Coupling Song - Fairy Tail ED (Yagi Toa Center)", abbrev: "Tomoyo"},
	NamidaNaga: {name: "Namida wo Nagasou", image: "", shortName: "Single 3 - Coupling Song - Kumogumi (Sugiura Eren Center)", abbrev: "NamidaNaga"},
	KuchiAe: {name: "Shoukouguchi De Aetara", image: "", shortName: "Single 3 - Unit Song (PoriSuu Duo)", abbrev: "KuchiAe"},
	BokuTotte: {name: "Boku ni Totte wa", image: "", shortName: "Single 3 - Coupling Song (XXX Center)", abbrev: "BokuTotte"},
	AnoHi: {name: "Ano hi Bokutachi wa Naiteita", image: "", shortName: "Single 3 - Coupling Song (XXX Center)", abbrev: "AnoHi"},
});

export const getTitleData = function (songTitleDataObj) {
	// We'll have to handle individual song overrides either way (mostly going to be coming from old saved data)

	const titleData = TITLE[songTitleDataObj.title];

	if (!songTitleDataObj.extra) {
		return {
			name: titleData.name,
			image: songTitleDataObj.image || titleData.image,
			shortName: songTitleDataObj.shortName || titleData.shortName,
			abbrev: songTitleDataObj.abbrev || titleData.abbrev,
		};
	}
}

export const CATEGORY = deepFreeze({
	Single1: { name: "1st Single - Aozora ni Tsuite Kangaeru", titles: ["ATK", "TobaKami", "Parachute", "OSTonbo", "SukiNari"], },
	Single2: { name: "2nd Single - Sotsugyou Made", titles: ["SotsuMade", "KimiUta", "KasuKibou", "KuraTetsu", "Masshirose"], },
	Single3: { name: "3rd Single - Spare no Nai Koi", titles: ["Supekoi", "Tomoyo", "NamidaNaga", "KuchiAe", "BokuTotte", "AnoHi"], },
	// Other: { name: "Other", titles: ["BONUS"], },
});

// Number of columns in the selection list.
var int_Colspan = 3;

// * Music information
// [Index: Meaning]
// 0: Track name
export const TRACK_NAME = 0;
// 1: Set of titles that this track appears in
export const TRACK_TITLES = 1;
// 2: Object specifying the title to draw data from, and any overrides
export const TRACK_TITLE_DATA = 2;
// 3: Youtube video ID
export const TRACK_YOUTUBE_ID = 3;
// 4: Description of track
export const TRACK_DESCRIPTION = 4;
// 5: If the *exact* same track appears in a later game then it should use [1] to specify rather than setting as arrangement.
const TRACK_IS_ARRANGEMENT = 5;
	const ORIGINAL_TRACK = 0;
	const ARRANGED_TRACK = 1;
// 6: Track type, Album tracks should all be marked as OTHER_THEME.
const TRACK_TYPE = 6;
	const STAGE_THEME = 0;
	const BOSS_THEME = 1;
	const STAGE_AND_BOSS_THEME = 2;
	const OTHER_THEME = 3;

// Old song data format, for transitioning old save data
// 2: Image filename
const LEGACY_TRACK_IMAGE = 2;
// 4: Title (game/album) name
const LEGACY_TRACK_TITLE_NAME = 4;
// 5: Title (game/album) abbreviation
const LEGACY_TRACK_TITLE_ABBREV = 5;

export var ary_SongData = [
	["Aozora ni Tsuite Kangaeru",	new Set([TITLE.ATK]), 		{ title: "ATK", }, 			"SPOTIFY|2moU0NTJBUW3XHLAtO3omm", 	"青空について考える", 		ORIGINAL_TRACK, OTHER_THEME],
	["Tobanakatta Kamihikouki",		new Set([TITLE.TobaKami]), 	{ title: "TobaKami", }, 	"SPOTIFY|3b92FP3dQXisUkIPi69hEf", 	"飛ばなかった紙飛行機", 	ORIGINAL_TRACK, OTHER_THEME],
	["Seifuku no Parachute",		new Set([TITLE.Parachute]),	{ title: "Parachute", }, 	"SPOTIFY|6vJhvJKyCe0KhJ6z6vrPch", 	"制服のパラシュート", 		ORIGINAL_TRACK, OTHER_THEME],
	["Omoide Shirikiri Tonbo",		new Set([TITLE.OSTonbo]), 	{ title: "OSTonbo", }, 		"SPOTIFY|3yWAVhFgEjAeWCNZfDAvuG", 	"思い出尻切れとんぼ", 		ORIGINAL_TRACK, OTHER_THEME],
	["Suki ni Narinasai",			new Set([TITLE.SukiNari]), 	{ title: "SukiNari", },		"SPOTIFY|4QNyMAdJ6ju3stk7Gh5Hkk", 	"好きになりなさい", 		ORIGINAL_TRACK, OTHER_THEME],
	
	["Sotsugyou Made",				new Set([TITLE.SotsuMade]), 	{ title: "SotsuMade", }, 	"SPOTIFY|5rW6I6pPynjT4iJae5ksxO", 	"卒業まで",				ORIGINAL_TRACK, OTHER_THEME],
	["Kimi no Tame no Uta",			new Set([TITLE.KimiUta]), 		{ title: "KimiUta", }, 		"SPOTIFY|1ZI2LpcZgQAtsMRIu5BYuM", 	"君のための歌",			ORIGINAL_TRACK, OTHER_THEME],
	["Kasukana Kibou",				new Set([TITLE.KasuKibou]), 	{ title: "KasuKibou", }, 	"SPOTIFY|586EJmQepFT0D9mmy2V8fV", 	"微かな希望",			ORIGINAL_TRACK, OTHER_THEME],
	["Kurayami no Tetsugakusha",	new Set([TITLE.KuraTetsu]), 	{ title: "KuraTetsu", }, 	"SPOTIFY|4d7rkYB3IiySUTQZKdwtRS", 	"暗闇の哲学者",			ORIGINAL_TRACK, OTHER_THEME],
	["Masshiro ni Nurinaose!",		new Set([TITLE.Masshirose]), 	{ title: "Masshirose", }, 	"SPOTIFY|74x9XkvjBg8EWAbcpiKJTW", 	"真っ白に塗り直せ！",	ORIGINAL_TRACK, OTHER_THEME],
	
	["Spare no Nai Koi",				new Set([TITLE.Supekoi]), 	{ title: "Supekoi", }, 		"SPOTIFY|1DxnwXTcbP8rXMqUTiux2c", 	"スペアのない恋", 		ORIGINAL_TRACK, OTHER_THEME],
	["Tomo yo Koko de Sayonara da",		new Set([TITLE.Tomoyo]), 	{ title: "Tomoyo", }, 		"SPOTIFY|1CweEn8KXJdIEXrmMWt9MW", 	"友よ ここでサヨナラだ", 		ORIGINAL_TRACK, OTHER_THEME],
	["Namida wo Nagaresou",				new Set([TITLE.NamidaNaga]), 	{ title: "NamidaNaga", }, 	"SPOTIFY|5S2U3NVuogRz0s9YNZYCfd", 	"青空について考える", 		ORIGINAL_TRACK, OTHER_THEME],
	["Shoukouguchi De Aetara",			new Set([TITLE.KuchiAe]), 		{ title: "KuchiAe", }, 		"SPOTIFY|65gaxcpaazlZTjfNAHbbql", 	"青空について考える", 		ORIGINAL_TRACK, OTHER_THEME],
	["Boku ni Totte wa",				new Set([TITLE.BokuTotte]), 	{ title: "BokuTotte", }, 	"SPOTIFY|2EgtUuPhcd6YkPCAVVmAUY", 	"青空について考える", 		ORIGINAL_TRACK, OTHER_THEME],
	["Ano hi Bokutachi wa Naiteita",	new Set([TITLE.AnoHi]), 		{ title: "AnoHi", }, 		"SPOTIFY|316xGwM6rXGKYULrEMlPJP", 	"青空について考える", 		ORIGINAL_TRACK, OTHER_THEME],
];
