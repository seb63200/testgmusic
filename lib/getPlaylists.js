const playMusic = require('playmusic');

module.export = function getPlaylists(){

    return playMusic.getPlayLists();
    
};
