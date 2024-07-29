const $img = document.getElementById('imgClickAndChange');
const kitty_meow = 'http://localhost:5500/meow/kitty_meow.jpg';
const silly_kitty = 'http://localhost:5500/meow/silly_kitty.jpg';
const meow_sfx = 'http://localhost:5500/meow/Meow_sfx.mp3';

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
  el.src = 'http://localhost:5500/meow/Meow_sfx.mp3';
  document.body.append(el);
  el.play();
});
