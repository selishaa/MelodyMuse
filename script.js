console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Back to December", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "All Too Well", filepath:"song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Lover", filepath:"song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "August", filepath:"song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "The Way I Loved You", filepath:"song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Style", filepath:"song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Delicate", filepath:"song/7.mp3", coverPath: "covers/7.jpg"},
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

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
   
    //Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    MyProgressBar.value = progress;
  });

  MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =  MyProgressBar.value*audioElement.duration/100;

  })
  