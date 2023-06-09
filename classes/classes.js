class Player {
	static description = 'New Player in Game';
	#score = 0;
	numLives = 10;
	constructor(first, last) {
		console.log('in the constructor');
		this.first = first;
		this.last = last;
	}
	get fullName() {
		return `${this.first} ${this.last}`;
	}
	get score() {
		return this.#score;
	}
	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive');
		}
		this.#score = newScore;
	}
	updateScore() {
		this.#score++;
	}
	taunt() {
		console.log('I am the best!');
	}
	loseLife() {
		this.numLives--;
	}
}

const Player1 = new Player('jesus', 'bonchero');
console.log(Player1.fullName);
Player1.taunt();
console.log(Player1.numLives);
Player1.loseLife();
console.log(Player1.numLives);
console.log(Player1.score);
Player1.score = 10;
console.log(Player1.score);

class AdminPlayer extends Player {
	isAdmin = true;
	constructor(first, last, powers) {
		super(first, last);
		this.powers = powers;
	}
}

const AdminPlayer1 = new AdminPlayer('Boss', 'bonchero', [
	'fly',
	'invisibility',
]);
console.log(AdminPlayer1.fullName);
console.log(AdminPlayer1.powers);
