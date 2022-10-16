function make_album(name, title, tracks)
{
    const album =
    {
    artistName: name,
    artistTitle: title,
    };

    console.log(album.artistName);
    console.log(album.artistTitle);

    if (tracks){
    const albumTracks =Object.create(make_album);
    albumTracks.tracks=function(tracksInput)
    {return tracksInput};
    console.log(albumTracks.tracks(tracks));
    }
}

make_album("a","b",1);
make_album("c","d",2);
make_album("e","f");



