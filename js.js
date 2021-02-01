class album {

    songs = new Array();
    constructor(title, year, songs){
        this.title = title;
        this.year = year;
        this.songs = songs;
    }

    setSongs(array){
        this.songs = array;
    }

    addSong(song){
        this.songs.push(song);
    }
}

class song{
    constructor(title, artist, duration, genre){
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
    }
}

var laSanta = new song("La Santa", "Bad Bunny", 3.15, "Reggaeton");
var laDificil = new song("La Dificil", "Bad Bunny", 3.15, "Reggaeton");
var safgaera = new song("Safaera", "Bad Bunny", 3.15, "Reggaeton");
var unaVez = new song("Una Vez", "Bad Bunny", 3.15, "Reggaeton");
var otra = new song("25/8", "Bad Bunny", 3.15, "Reggaeton");

var array = new Array();
var album1 = new album("yhlqmdlg", 2020, array);
album1.addSong(laSanta);
album1.addSong(laDificil);
album1.addSong(safgaera);
album1.addSong(unaVez);
album1.addSong(otra);

function mostrarAlbum(album){
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapperAlbum");
    let albumTitle = document.createElement("h1");
    let albumSongs = document.createElement("ul");

    album.songs.forEach(song => {

        let songWrapper = document.createElement("li");
        let songTitle = document.createElement('h3');
        let songArtist = document.createElement('h5');

        let songTitleText = document.createTextNode(`Titulo: ${song.title}`);
        let songArtistText = document.createTextNode(`Artista: ${song.artist}`);

        songTitle.appendChild(songTitleText);
        songArtist.appendChild(songArtistText);

        songWrapper.appendChild(songTitle);
        songWrapper.appendChild(songArtist);

        albumSongs.appendChild(songWrapper);
    });

    let albumTitleText = document.createTextNode(`${album.title}`)
    albumTitle.appendChild(albumTitleText);

    wrapper.appendChild(albumTitle);
    wrapper.appendChild(albumSongs);

    document.getElementById('album').appendChild(wrapper);
}
mostrarAlbum(this.album1);

function addSong(){
    let songName =  prompt("Porfavor ingresa el nombre de la cancion");
    let songDuration =  prompt("Porfavor ingresa la duracion de la cancion");
    let songGenre =  prompt("Porfavor ingresa el genero de la cancion");
    let artistName = "Bad ";
    let newSong = new song(songName, artistName, songDuration, songGenre);
    this.album1.addSong(newSong);
    console.log(album1.songs[5])
    mostrarAlbum(album1);
}




