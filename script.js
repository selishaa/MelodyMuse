console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
]

// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');

        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');

    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
    }
    

})

//Listen to Events {}
audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate'); 
//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log('progress');
} )