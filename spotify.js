console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/Kalaastar -  Yo Yo Honey Singh_192(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
// Assuming songItems is an array of HTML elements
let songItems = document.querySelectorAll(".SongItem");

let songs = [
    { songName: "Kalaastar -  Yo Yo Honey Singh", filePath: "/Kalaastar -  Yo Yo Honey Singh_192(PagalWorld.com.se).mp3", coverPath: "/covers/cover1.jpg" },
    { songName: "Animal-Ranbir-Kapoor Entry-Bgm", filePath: "/Animal-Ranbir-Kapoor-Entry-Bgm-Ringtone-Download.mp3", coverPath: "/covers/cover2.jpg" },
    { songName: "Bolo Har Har Har - Shivaay ", filePath: "/Bolo Har Har Har - Shivaay - 320Kbps.mp3", coverPath: "/covers/cover3.png" },
    { songName: "Jai Shri Ram", filePath: "/Jai Shri Ram_192(PagalWorld.com.se).mp3", coverPath: "/covers/cover4.jpg" },
    { songName: "Beast-Bgm", filePath: "/Song.mp3", coverPath: "/covers/cover5.png" },
    { songName: "Shape of You", filePath: "/Ed-Sheeran-Shape-of-You.mp33", coverPath: "/covers/cover6.png" },
];

songItems.forEach((element, i) => {
    let imgElement = element.querySelector("img");
    let songNameElement = element.querySelector(".songName");

    if (imgElement) {
        imgElement.src = songs[i].coverPath;
    }

    if (songNameElement) {
        songNameElement.innerText = songs[i].songName;
    }
});
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
    })
})

