const car = 20;
const raceLimit = 5;
const temp = [];
let race = [];
let counter = 0;
for (let i = 0; i <= car; i++) {
	const randomNum = Math.floor(Math.random() * car + i);
	if (race.length == raceLimit) {
		counter += 1;
		race.sort(function (a, b) {
			return a - b;
		});
		temp.push(race[0]);
		race = [];
	}
	race.push(randomNum);
}
temp.sort(function (a, b) {
	return a - b;
});
console.log(temp);
temp.pop();
console.log({ counter, temp });
