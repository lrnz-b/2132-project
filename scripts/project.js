/** 
 * Start popup
 */

$popupBox.append(`
	<div id="welcome-text">
		<p>Welcome To Hangman!</p>
	</div>
`);

$popupBox.append(`
	<div class="start-button-wrapper">
		<p class="start-button-text">Start</p>
	</div>
`);

blinkPopup();




/**
 * Close popup
 */

$(`.start-button-text`).on(`click`, function() {
	$startPopupWrapper.css({
		"display": "none"
	});

	$mainWrapper.css({
		"opacity": "1"
	});
});




/**
 * Start game
 */

let session = new Session();




/** 
 * Hangman image section
 */

$manImgWrapper.append(`
	<div>
		<img src="images/hang${session.getWrongGuessCount()}.PNG" 
			 alt="hang${session.getWrongGuessCount()}.PNG"
	</div>
`);




/** 
 * Hint fields section
 */
$hintWrapper.append(`
	<div>
		<p id="hint-text">${session.getHint()}</p>
	</div>
`);




/**
 * Guess field section
 */

$guessFieldWrapper.append(`
	<div id="guess-field-wrap">
		${genHintFieldDOM(session.getAnswer())}
	</div>
`);




/**
 *  Keyboard section - row 1
 */
let rowOneText = ``;
rowOneText += `<ul>`;

for (let x = 0; x < 13; x++) {
	rowOneText += `
		<li>${alphabet[x]}</li>
	`;
}

rowOneText += `</ul>`;
$kbrow1.append(rowOneText);




/**
 *  Keyboard section - row 2
 */

let rowTwoText = ``;
rowTwoText += `<ul>`;

for (let x = 13; x < 26; x++) {
	rowTwoText += `
		<li>${alphabet[x]}</li>
	`;
}

rowTwoText += `</ul>`;
$kbrow2.append(rowTwoText);




/**
 * Keyboard listener
 */
let animationHandler;
let correctGuessCount = 0;

$(`#keyboard-wrapper`).find("li").on(`click`, function(e) {
	if (!session.getGameover()) {
		let keyPressed = $(this);
		let correctGuess = false;
		
		$(`.none-space-char span`).each(function() {
			if ($(this).text().toLowerCase() === keyPressed.html()) {
				correctGuess = true;

				$(this).css("opacity", "1");

				keyPressed.css({
					"opacity": "0.1"
				});	

				if ($(this).css("color") == `rgb(255, 255, 255)`) {
					$(this).css({
						"color": "black"
					});	
	
					correctGuessCount++;
				}
			}
		});
		
		if (correctGuess == false && keyPressed.css(`opacity`) == 1) {
			keyPressed.css({
				"opacity": "0.1"
			});

			session.wrongGuess();
			$manImgWrapper.find(`img`).attr(`src`, `images/hang${session.getWrongGuessCount()}.PNG`);
			$manImgWrapper.find(`img`).attr(`alt`, `hang${session.getWrongGuessCount()}.PNG`);
		} 

		if (correctGuessCount == session.getTrimmedAnswer().length) {
			session.setGameover(true);
			
			let gameoverDelay = 1000;
			setTimeout(function(){
				$startPopupWrapper.css({"display": "flex"});
				$mainWrapper.css({"opacity": "0.1"});
			}, gameoverDelay);

			$(`#keyboard-wrapper li`).each(function() {
				$(this).css({"opacity": "0.1"});	
			});

			$(`#welcome-text`).text(`You guessed RIGHT!`);

			$(`.start-button-text`).text(`Play Again?`);
			$(`.start-button-text`).on(`click`, function() {
				resetGame();
			});
		}

		if (session.getWrongGuessCount() === session.getTryLimit()) {
			session.setGameover(true);

			$(`#keyboard-wrapper li`).each(function() {
				$(this).css({"opacity": "0.1"});	
			});

			let delayBeforeAnimation = 1000;
			setTimeout(function() {
				animationHandler = requestAnimationFrame(animateHangmanEnd);
			}, delayBeforeAnimation);


			let gameoverDelay = 2000;
			setTimeout(function(){
				$startPopupWrapper.css({"display": "flex"});
				$mainWrapper.css({"opacity": "0.1"});
			}, gameoverDelay);


			$(`#welcome-text`).text(`You KILLED him!`);

			$(`.start-button-text`).text(`Play Again?`);
			$(`.start-button-text`).on(`click`, function() {
				resetGame();
			});
		}
	}
});



function resetGame() {
	session = new Session();
	correctGuessCount = 0;
	startFrame = 7;

	$(`#hint-text`).text(session.getHint());
	$(`#guess-field-wrap`).html(genHintFieldDOM(session.getAnswer()));

	$(`#keyboard-wrapper li`).each(function() {
		$(this).css({"opacity": "1"});	
	});

	$manImgWrapper.find(`img`).attr(`src`, `images/hang${session.getWrongGuessCount()}.PNG`);
	$manImgWrapper.find(`img`).attr(`alt`, `hang${session.getWrongGuessCount()}.PNG`);
}


















