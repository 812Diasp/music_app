let container=document.querySelector(`.main-section`)
let songNode=document.querySelector(`.songs`)



// tracks[i][j].src;
let tracks = [ [{song:`Pale Ale`,src:`music/mixkit-cat.mp3`},{song:`Green Chair`,src:`music/mixkit-green-chair.mp3`},{song:`Panopticum`,src:`music/mixkit-cbpd.mp3`}],
    [{song:`HOODAK MP3`,src:`music/hoodak.mp3`,duration:`3:37`}],
    [{song:`Godzilla`,src:`music/eminem-feat-juice-wrld-godzilla.mp3`},{song:`Conversations`,src:`music/juiceworld-conversations.mp3`}],
    [{song:`BETTER NOW`,src:`music/better-now postmalone.mp3`}]

]

let info = [{title:`Lofi Panda, Vol. 1 `,
    year:2023,
    img:`assets/albums/panda-lofi.png`,
    artist:`lofi panda`,
    description:`Музыка для вашего расслабления`},
    {title:`HOODAK MP3`,
        year:2023,
        img:`assets/albums/hoodak.jpg`,
        artist:`Big Baby Tape`,
        additionalArtist:`Aarne`,
        description:`Новый взгляд на хит прошлых лет от Big Baby Tape и саундпродюсера Aarne`},
    {title:`Лучшие треки Juice WRLD`,
        year:2022,
        img:`assets/albums/juice_wrld.jpg`,
        artist:`Juice WRLD`,
        additionalArtist:`eminem`,
        description:`Сборник лучших треков`},

    {title:`Better Now`,
        year:2022,
        img:`assets/albums/better-now.jpg`,
        artist:`Post Malone`,
        description:`Легендарный сингл Post Malone`}
]

function LoadMainInfoAlbum(){
    document.title=info[is].title;
    let imgNode=document.querySelector(`.album-img`)
    let headText=document.querySelector(`.head-text`)
    let textMain = document.querySelector(`.text-main`)
    if (info[is].hasOwnProperty(`additionalArtist`)){
        textMain.innerHTML=info[is].year+" "+ info[is].artist+` ft. `+info[is].additionalArtist
    }else{
        textMain.innerHTML=info[is].year+" "+info[is].artist
    }

    headText.innerHTML=info[is].title
    imgNode.src = info[is].img
}
function RenderTracks(){
    for (let i = is; i <= is; i++) {
        let albumTracks = tracks[i];
        for (let j = 0; j < albumTracks.length; j++) {

            songNode.innerHTML+=`
     <div class="song-elem" id="${j}">
         <audio class="audio" src="${tracks[i][j].src}"></audio>
         
         <h5 class="playbtn"> <i class="fa-solid fa-play"></i> </h5>
         <h5 class="songName"> ${tracks[i][j].song}</h5>
         
         <h5 class="artist">${album[is].artist}</h5>
         
            <div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="10" aria-valuemax="100"></div>
</div><h5 class="timeTrack">00:00</h5>     
        </div>`
        }
    }
}
function audioClick(){
    let songContainer = document.querySelector(`.songs`)
    songContainer.addEventListener(`click`,function (evt){
        if(evt.target.parentNode.className!=="song-elem") return false;


        let idOfSong = evt.target.parentNode.id;
        for (let i = idOfSong; i <= idOfSong; i++) {

            togglePlay(idOfSong)
        }
    })
}

let album = info;
if (container!=null){
    for (let i = 0; i < info.length; i++) {
        container.innerHTML+=`
    <div class="album-card">
      <a href="album.html?i=${i}">
        <img class="album-img" src="${album[i].img}" alt=""></a>
      <div class="card-text">
        <h3 class="head-text">${album[i].title}</h3>
        <h3 class="presentation-artist">${album[i].artist}</h3>
        <p class="text-main">${album[i].description}</p>
      </div>
    </div>`
    }
}






    let search = new URLSearchParams(window.location.search);
    let is = search.get(`i`);



if (songNode!=null){

    // иформация об альюоме
    LoadMainInfoAlbum()
    // заполнение треков
    RenderTracks()
    // проигрывание музыки


    let playNodes = document.querySelectorAll(`.playbtn`)
    let isPlaying = false;
    let timeNodes = document.querySelectorAll(`.timeTrack`)



    let audios = document.querySelectorAll("audio");
    let progressBars= document.querySelectorAll(`.progress-bar`)
    function togglePlay(id) {

        let audio = audios[id]
        let timeNode = timeNodes[id]
        let progressBar = progressBars[id]



        if (isPlaying) {
            //пауза
            playNodes[id].innerHTML=`<i class="fa-solid fa-play"></i>`
            isPlaying = false;
            // Поставить на паузу
            audio.pause();


        } else {
            //играет
            playNodes[id].innerHTML=`<i class="fa-solid fa-pause"></i>`
            isPlaying = true;


                audio.play();

            let progresLen =0
            updateProgress()

        }
        function updateProgress(progresLen) {
            // Нарисовать актуальное время



            timeNode.innerHTML = getTime(audio.currentTime);

            progressBar.style.width = 100 / audio.duration * audio.currentTime + "%";

            function reqstAnimFrame(){

                if (isPlaying) {
                    requestAnimationFrame(updateProgress);
                }
            }
            setTimeout(reqstAnimFrame, 1000);
            // Нужно ли вызвать её ещё раз?


        }
        function getTime(time) {
            let currentSecs =  Math.floor(time)
            let minutes = Math.floor(currentSecs / 60)
            let seconds = Math.floor(currentSecs % 60)

            if (time!==timeNode.innerHTML){
                timeNode.innerHTML = timeNode.innerHTML = time;
            }

            if (minutes<10){
                minutes = `0`+minutes;
            }
            if (seconds<10){
                seconds = `0`+seconds;
            }



            return `${minutes}:${seconds}`
        }
    }


    audioClick()





}











