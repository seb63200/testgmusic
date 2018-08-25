const playMusic = require('playmusic');

module.export = function(){

    var credentials = gladys.paramUser.getValues(['GMUSIC_USER', 'GMUSIC_PASS']);

    return playMusic.init({email: credentials[0], password: credentials[1]});

};
