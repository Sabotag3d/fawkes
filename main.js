/* Fawkes is a creation of theylive, de nada */
var Bot = require('ttapi'),
    repl = require('repl'),
    tweet = require('twit'),
    twt = require('./lib/tweet'),
    $ = require('jquery'),
    v = require('./config'),
    q = require('./lib/q'), 
    reg = require('./lib/user'),
    mod = require('./lib/mod'),
    chat = require('./lib/chat'),
    pm = require('./lib/pm'),
    signal = require('./lib/signal'),
    change = require('./lib/change'),
    song = require('./lib/song'),
    votes = require('./lib/votes'),
    dj = require('./lib/dj'),
    snag = require('./lib/snag'),
    end = require('./lib/end'),
    escort = require('./lib/escort'),
    auth = 'xxxxxxxxxxxxxxxxx',
	userid = 'xxxxxxxxxxxxxxxxx',
	 //roomid = 'xxxxxxxxxxxxxxxxxxxx'//room 1
    roomid = 'xxxxxxxxxxxxxxxxxxxx'//room 2
    //roomid = 'xxxxxxxxxxxxxxxxxxxx'//room 3
var fawkes = new Bot(auth, userid, roomid);
repl = repl.start('> ').context.fawkes = fawkes;
fawkes.on('roomChanged', function (data){change.get(dj, fawkes, v, data);});
fawkes.on('registered', function (data){reg.register(signal, q, fawkes, v, data);});
fawkes.on('deregistered', function (data){reg.deregister(v, data);});
fawkes.on('newsong', function (data){song.get(twt, fawkes, v, data);});
fawkes.on('snagged', function (data){snag.get(v, data);});
fawkes.on('endsong', function (data){end.get(fawkes, v, data);});
fawkes.on('update_votes', function (data){votes.get(fawkes, v, data);});
fawkes.on('add_dj', function (data){dj.get(fawkes, q, v, data);});
fawkes.on('rem_dj', function (data){dj.give(signal, fawkes, v, data);});
fawkes.on('escort', function (data){escort.get(v, data);});
fawkes.on('pmmed', function (data){pm.cmds(signal, q, mod, tweet, $, fawkes, v, data);});
fawkes.on('speak', function (data){chat.cmds(twt, signal, q, mod, tweet, $, fawkes, v, data);});