const $img = document.getElementById('imgClickAndChange');
const kitty_meow = 'kitty_meow.jpg';
const silly_kitty = 'silly_kitty.jpg';
const meow_sfx = 'Meow_sfx.mp3';

function changeImage() {
    console.log($img.dataset.kitty)
    if ($img.dataset.kitty == "meow"){
        $img.dataset.kitty = "silly";
        $img.src = silly_kitty;
    } else {
        $img.dataset.kitty = "meow";
        $img.src = kitty_meow;
    }
}

let Meow_sfx = new Audio();
Meow_sfx.src = meow_sfx
    const el = document.createElement('audio')
    
$img.addEventListener('click', changeImage() () => {
  const el = document.createElement('audio');
  el.src = 'Meow_sfx.mp3';
  document.body.append(el);
  el.play();
});
