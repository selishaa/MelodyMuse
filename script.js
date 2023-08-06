console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Back to December", filepath: "song/1.mp3", coverPath: "covers/1.png" },
    { songName: "All Too Well", filepath: "song/2.mp3", coverPath: "covers/2.png" },
    { songName: "Lover", filepath: "song/3.mp3", coverPath: "covers/3.png" },
    { songName: "August", filepath: "song/4.mp3", coverPath: "covers/4.png" },
    { songName: "The Way I Loved You", filepath: "song/5.mp3", coverPath: "covers/5.png" },
    { songName: "Style", filepath: "song/6.mp3", coverPath: "covers/6.png" },
    { songName: "Delicate", filepath: "song/7.mp3", coverPath: "covers/7.png" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');

        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');

        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }


})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    MyProgressBar.value = progress;
});

MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = MyProgressBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

  }
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');


    })
})
