enum Choice {
	None,
	Rock,
	Paper,
	Scissors,
}

function _gameWon(playerChoice: Choice, opponentChoice: Choice): number {
	if (playerChoice === Choice.Rock && opponentChoice === Choice.Scissors) {
		return 1;
	} else if (
		playerChoice === Choice.Scissors &&
		opponentChoice === Choice.Rock
	) {
		return -1;
	}

	if (playerChoice === Choice.Paper && opponentChoice === Choice.Rock) {
		return 1;
	} else if (playerChoice === Choice.Rock && opponentChoice === Choice.Paper) {
		return -1;
	}

	if (playerChoice === Choice.Scissors && opponentChoice === Choice.Paper) {
		return 1;
	} else if (
		playerChoice === Choice.Paper &&
		opponentChoice === Choice.Scissors
	) {
		return -1;
	}

	return 0;
}

function _getRandomChoice(): Choice {
	return Math.floor(Math.random() * 3 + 1);
}

export { _gameWon, _getRandomChoice, Choice };
