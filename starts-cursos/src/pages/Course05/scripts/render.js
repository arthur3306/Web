
const categoria01 = data[4];

function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }
  

const video = document.getElementById('videos');
 
const content = categoria01.videos.map((video) => {
    const videoId = getYouTubeId(video.url);

        return `
            <li>
              <h3>${video.titulo} <br>⇓</h3>
              <iframe width="900" height="400" class="video" src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>> </iframe>
            </li>
        `;
    
}).join(' ')

video.innerHTML = content;

