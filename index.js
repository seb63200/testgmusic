module.exports = function(sails) {
    
    var init = require('./lib/init.js');
    var getPlaylists = require('./lib/getPlaylists.js');
    
    return {
        init,
        getPlaylists
    };
};