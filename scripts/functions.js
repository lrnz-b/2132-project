function blinkPopup() {
	let blinkDelay = 500;
	
	if ($(`.start-button-text`).css(`color`) == `rgb(255, 255, 255)`) {
		$(`.start-button-text`).css({
			"color": "rgb(0, 0, 0)"
		});
	}
	else if ($(`.start-button-text`).css(`color`) == `rgb(0, 0, 0)`) {
		$(`.start-button-text`).css({
			"color": "rgb(255, 255, 255)"
		});
	}
	setTimeout(blinkPopup, blinkDelay); 
}

function generateRandomQuestion() {
	let randomIndex = Math.random() * 5;
	return getHint(randomIndex);
}

function getHint(index) {
	let questionsJSON = JSON.parse(questions);
	let hints = questionsJSON.map(q => q.hint);
	if (0 <= index <= 4) {
		return hints.at(index);
	}
}

function extractAnswer(inputHint) {
	let questionsJSON = JSON.parse(questions);
	for (let x of questionsJSON) {
		if (x.hint === inputHint) {
			return x.answer;
		}
	}
}

function genHintFieldDOM(answerString) {
	let answerFieldDOM = ``;
	answerFieldDOM += `
		<ul id="answer-field-ul">
	`;

	for (let x of answerString) {
		if (x === " ") {
			answerFieldDOM += `
				<li>
					<span>&nbsp</span>
				</li>
			`;
		}
		else {
			answerFieldDOM += `
				<li class="none-space-char">
					<span>${x}</span>
				</li>
			`;
		}

	}

	answerFieldDOM += `
		</ul>
	`;

	return answerFieldDOM;
} 

let startFrame = 7;
let endFrame = 21;
function animateHangmanEnd() {
	if (startFrame < endFrame) {
		startFrame++;
		$manImgWrapper.find(`img`).attr(`src`, `images/hang${startFrame}.png`);
		$manImgWrapper.find(`img`).attr(`alt`, `hang${startFrame}.png`);
		setTimeout(animateHangmanEnd, 30);
	}
}