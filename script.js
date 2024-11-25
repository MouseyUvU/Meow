const $button = document.querySelector("button");
const $img = document.getElementById('imgClickAndChange');

const kitty_image_sources = ["kitty_meow.jpg", "silly_kitty.jpg", "lily_gato.jpg"]
const meow_sfx = 'Meow_sfx.mp3';

let current_image_index = 0;

function updateImage() {
	current_image_index = (current_image_index + 1) % kitty_image_sources.length;
	$img.src = kitty_image_sources[current_image_index];
}

function playSound() {
	const audio = new Audio(meow_sfx);
	audio.play();
}

$button.addEventListener('click', () => {
	updateImage();
	playSound()
});