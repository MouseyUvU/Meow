const $img = document.getElementById('imgClickAndChange');
const kitty_meow = 'kitty_meow.jpg';
const silly_kitty = 'silly_kitty.jpg';
const meow_sfx = 'Meow_sfx.mp3';

function updateImage() {
	if ($img.dataset.kitty === "meow") {
		$img.dataset.kitty = "silly";
		$img.src = silly_kitty;
	} else {
		$img.dataset.kitty = "meow";
		$img.src = kitty_meow;
	}
}

function playSound() {
	const audio = new Audio(meow_sfx);
	audio.play();
}

$img.addEventListener('click', () => {
	updateImage();
	playSound()
});
