// persentase tunjangan
// 1 - 5 = 5%
// 6 - 10 = 7%
// 11 - 15 = 10%

const tunjangan = (anak, gaji) => {
	let tunjangan = 0;
	let counter = 0;
	if (Array.isArray(anak) && anak.length > 0) {
		if (anak.length == 1) {
			return 0.1 * gaji;
		}
		anak.sort(function (a, b) {
			return b - a; //sort descending
		});
		anak.forEach((umur) => {
			if (counter < 2) {
				// maksimal 2 anak
				if (umur >= 1 && umur <= 5) {
					tunjangan += 0.05;
					counter++;
				}
				if (umur >= 6 && umur <= 10) {
					tunjangan += 0.07;
					counter++;
				}
				if (umur >= 11 && umur <= 15) {
					tunjangan += 0.1;
					counter++;
				}
			}
		});
		return tunjangan * gaji;
	} else {
		return 0;
	}
};

console.log(tunjangan([10, 15], 3500000));
console.log(tunjangan([], 2700000));
console.log(tunjangan([3, 5, 13, 14], 5000000));
console.log(tunjangan([6], 4000000));
