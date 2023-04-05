class Session {
	constructor() {
		this.hint = generateRandomQuestion();
		this.answer = extractAnswer(this.hint);
		this.wrongGuessCount = 0;
		this.tryLimit = 6;
		this.gameover = false;
		this.win = false;
	}

	wrongGuess() {
		this.wrongGuessCount++;
	}

	getHint() {
		return this.hint;
	}

	getAnswer() {
		return this.answer;
	}

	getWrongGuessCount() {
		return this.wrongGuessCount;
	}

	getTryLimit() {
		return this.tryLimit;
	}

	setGameover(gameover) {
		this.gameover = gameover;
	}

	getGameover() {
		return this.gameover;
	}

	getTrimmedAnswer() {
		let trimmedAnswer = ``;

		for (let x of this.answer) {
			if (x !== " ") {
				trimmedAnswer += x;
			}
		}

		return trimmedAnswer;
	}
}