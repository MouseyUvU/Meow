const $img = document.getElementById('imgClickAndChange');
const kitty_meow = 'https://mouseyuvu.github.io/meow/kitty_meow.jpg';
const silly_kitty = 'https://mouseyuvu.github.io/meow/silly_kitty.jpg';
const meow_sfx = 'https://mouseyuvu.github.io/meow/Meow_sfx.mp3';

function changeImage() {
    console.log($img.src)
    if ($img.src == kitty_meow){
        $img.src = silly_kitty;
    } else {
        $img.src = kitty_meow;
    }
}
    let Meow_sfx = new Audio();
    Meow_sfx.src = meow_sfx
    const el = document.createElement('audio')
    
$img.addEventListener('click', () => {
  const el = document.createElement('audio');
  el.src = 'https://mouseyuvu.github.io/meow/Meow_sfx.mp3';
  document.body.append(el);
  el.play();
});
