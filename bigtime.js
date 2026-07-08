const showdebug = false;
const autoRefresh = document.getElementById("autoRefresh");
let intervalID = null;

const slides = [
  "./imagesex/Gallery/Birds/pexels-photo-2629372.jpg",
  "./imagesex/Gallery/Birds/pexels-photo-638738.jpg",
  "./imagesex/Gallery/Birds/pexels-photo-705314.jpg",
  "./imagesex/Gallery/Birds/pexels-photo-788655.jpg",
  "./imagesex/Gallery/Birds/pexels-photo-792416.webp",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-108322.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-1156507.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-1324947.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-145378.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-154430.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-155002.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-2393767.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-2662434.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-325260.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-355564.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-357316.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-3647326.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-414181.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-416179.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-459070.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-736520.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-905248.jpg",
  "./imagesex/Gallery/Birds/Puffballs/pexels-photo-928340.jpg",
  "./imagesex/Gallery/Birds/Puffballs/robin-2197691_1280.jpg",
  "./imagesex/Gallery/Birds/Puffballs/robin-3287974_1280.jpg",
  "./imagesex/Gallery/Birds/Puffballs/robin-3803081_1280.webp",
  "./imagesex/Gallery/Birds/Puffballs/robin-3909627_1280.jpg",
  "./imagesex/Gallery/Birds/Puffballs/robin-5871330_1280.webp",
  "./imagesex/Gallery/Birds/Puffballs/robin-727192_1280.webp",
]

let index = 0;
onResize();
function onResize() {
  if (showdebug) {
    let outer = window.outerWidth + "/" + window.outerHeight;
    //let screen = screen.width + "/" + screen.height;
    let doc = document.body.clientWidth + "/" + document.body.clientHeight;
    //console.log("Resizing ...", doc);
    document.getElementById("debug").innerHTML = doc;
  }
}

showClock();
var myVar = setInterval(showClock, 1000);
function showClock() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    document.getElementById("date").innerHTML = d.toDateString();
}

function showSlide() {
  //console.log("Slide", slides[index]);
  document.body.style.backgroundImage = `url('${slides[index]}')`;
  document.body.style.backgroundSize = `cover`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundAttachment = `fixed`;
  document.body.style.backgroundPosition = `center`;
  //document.body.style.backgroundColor = `transparent`;
  if (index < slides.length-1) {
    index += 1;
  } else {
    index = 0;
  }
}

function getSlide() {
  document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?random')";
  document.body.style.backgroundSize = `cover`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundAttachment = `fixed`;
  document.body.style.backgroundPosition = `center`;
  //console.log(document.body.style.backgroundImage);
}

async function fetchSlide() {
  const res = await fetch(`https://picsum.photos/1920/1080?random`);
  if (res.ok) {
    document.body.style.backgroundImage = `url(${res.url})`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundAttachment = `fixed`;
    document.body.style.backgroundPosition = `center`;
    //console.log(`url(${res.url})`);
  }
}

autoRefresh.addEventListener("change", e => {
  if (autoRefresh.checked) {
    intervalID = setInterval(fetchSlide, 60000);
  } else {
    clearInterval(intervalID);
  }
});

fetchSlide();
if (autoRefresh.checked) {
  intervalID = setInterval(fetchSlide, 60000);
}