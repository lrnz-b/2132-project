const $startPopupBg = $(`#start-popup-bg`);
const $startPopupWrapper = $(`#start-popup-wrapper`);
const $popupBox = $(`#popup-box`);

const $mainWrapper = $(`#main-wrapper`);
const $manImgWrapper = $(`#hangman-img-wrapper`);

const $hintWrapper = $(`#hint-wrapper`);
const $guessFieldWrapper = $(`#guess-field-wrapper`);
const $kbrow1 = $(`#kb-row1`);
const $kbrow2 = $(`#kb-row2`);

const questions = `
	[
		{
			"hint": "City in Lower Mainland BC",
			"answer": "Vancouver"
		},

		{
			"hint": "Post-secondary school in BC",
			"answer": "Douglas College"
		},

		{
			"hint": "Console Platform",
			"answer": "Nintendo Switch"
		},

		{
			"hint": "Chocolate brand",
			"answer": "Kitkat"
		},

		{
			"hint": "A subatomic particle",
			"answer": "Neutrino"
		}
	]
`;

const alphabet = [
	'a','b','c','d','e',
	'f','g','h','i','j',
	'k','l','m','n','o',
	'p','q','r','s','t',
	'u','v','w','x','y',
	'z'
];