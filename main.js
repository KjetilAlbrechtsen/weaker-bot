var config = {
	channels: ["###weakpots"],
	server: "chat.freenode.net",
	botName: "weakerbot",
	password: "weakness420"
};

var rebuke = ["bitch you thought", "no", "I'm tired of you"];
var pongs = ["ya bitch", "ya dingus", "ya weakling", "ya ugly ass"];
var greetings = ["Hi", "Hey", "Sup", "What's shaking", "Whaddup", "You actually look OK today", "Hello", "What dat mouf do", "what's up"];
var affection = ["I <3 u bb", "never change", "did you do something with your hair? It looks nice", "you smell nice"];
var bulk = ["eat ur cheese", "doot doot", "what's for lunch"];
var songs = [
	"You spin me right round bb",
	"This is the story of a girl",
	"I ain't the sharpest tool in the shed",
	"My neck my back, my floppy drive and stack",
	"You my brown eye girl",
	"bubble butt, bubble bubble bubble butt",
	"Saaaaaaaailing, takes me awayyyyyyy",
	"every night in my dreams, I see you, I feeeeeeel you",
	"my blood is boiling, my brain IBM",
	"Domo arigato, Mr. Roboto Mata au hi made Domo arigato, Mr. Roboto Himitsu wo shiri tai",
	"Get your tongue out of my mouth, cuz I'm kissing you goodbye",
	"my anaconda don't want none unless you got buns hun",
	"you can do sidebends or situps, but pls don't lose that butt",
	"never gonna give you up, never gonna let you down, never gonna run around and hurt you",
	"when you get caught between the moon and NYC, the best that you can do is fall in love",
	"I'm a barbie girl, in a barbie wooooorld"];
var insults = [
	"you're just a cuckboi in a cuck world",
	"fuck Lemony Snicket, what a serious of unfortunate events you fuckin been through you ugly fuck",
	"give yer balls a tug ya titfucker",
	"your aesthetician coif that for ya?",
	"you're made of spare parts aren't you, bud?",
	"is your ass jealous of the amount of shit that just came out of your mouth?",
	"two wrongs don't make a right, take your parents as an example",
	"your family tree must be a cactus because everybody on it is a prick",
	"it's better to let someone think you are an Idiot than to open your mouth and prove it",
	"you're so ugly, when your mom dropped you off at school she got a fine for littering",
	"you're a disappointed narcissist",
	"you'll never open your mouth without subtracting from the sum of human knowledge",
	"why don't you come over tonight... our dog is in heat",
	"if you spent as much time squatting as you do negging you'd squat more than Ray Williams",
	"if I had a dog as ugly as you, I'd shave its butt and make it walk backwards",
	"you're a parasite for sore eyes",
	"cunt",
	"lardass",
	"I fart in your general direction, you prancing pervert!",
	"lifting can't fix your face",
	"I burst my pimples at you, you tripe tasting trollop!",
	"what fucking satanic clown orgy did you just crawl out of?",
	"what's up with your fucking body hair, big shoots? You look like a 12-year-old Dutch girl",
	"have you shit yourself? You look like you've got an awkward boner",
	"that's some drunk evolution right there, bud",
	"dick",
	"PLEASE HELP ME I'M TRAPPED IN HERE OH GOD"];
var dabEmojis = ["🔥", "💯", "😎", "🍆💦", "👌", "😂"];
var curlsForDaGirls = [
	"what's on the curl menu today?",
	"how we pumping up those pythons today?",
	"today's the day you curl right?",
	"build some of those bis for these guys.",
	"what steps are you taking today for bigger biceps?",
	"how many hours of arms on the schedule?"];
var benchMoar = [
	"have you worked on your bench today?",
	"what are you doing to make your bench a better place?",
	"at this rate larimari is going to beat you to 2pl8",
	"do some upper body work today, for me",
	"get some bench work in bud",
	"BANCHBANCHBANCH"];
var noLifts = [
	"guilt", "shame", "baggage", "error 404", "nothing", "nada", "zip", "zilch"];

var tells = {};
var sotd = {
	"time":0,
	"link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	"who":"yo momma"
};

var irc = require("irc");
var MongoClient = require('mongodb').MongoClient;
var request = require('request');
var url = "mongodb://127.0.0.1:27017/weakdb";
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

// var bot = new irc.Client("chat.freenode.net", "weakerbot", {
// 	channels: ["#weakpots"],
// 	realName: 'rowbutt',
// 	debug: true,
// 	showErrors: true,
// 	sasl: true,
// 	password: 'weakness420',
// 	username: 'weakerbot',
// 	nick: 'weakerbot'
// });

var bot = new irc.Client("chat.freenode.net", "weakerbot", {
	realName: 'rowbutt',
	debug: true,
	showErrors: true,
	autoConnect: false
});
bot.connect(function() {
    console.log("Connected!");
    bot.say("nickserv", "identify "+config.password);
    bot.join(config.channels[0], function(){
    	console.log("joined?");
    });
});

var lastPerson;
var counter = {
	robo:0,
	lari:0,
	tre:0
};

// console.log(bot);

//nomski

bot.addListener('error', function(message) {
    console.log('error: ', message);
});

bot.addListener("join", function(channel, who) {
	// Welcome them in!
	console.log("who: ", who);
	// if(who.indexOf("panny")>-1) bot.say(channel, who+" "+randomFromArray(curlsForDaGirls));
	if(who.toLowerCase() == "trefirefem") bot.say(channel, who+" "+randomFromArray(benchMoar));
});

bot.addListener("message", function(from, to, text, message) {
	// if(message.nick.indexOf("robo") > -1) counter.robo++;
	if(message.nick.indexOf("lari") > -1) counter.lari++;
	if(counter.robo > 20){
		bot.say(config.channels[0], message.nick+" "+randomFromArray(affection));
		counter.robo = 0;
	}
	if(counter.lari > 20){
		bot.say(config.channels[0], message.nick+" "+randomFromArray(bulk));
		counter.lari = 0;
	}
	// console.log("message: ", message);
	var splitup = message.args[1].split(" ");
	if(splitup[0].toLowerCase() == "..ping"){
		bot.say(config.channels[0], message.nick+" pong, "+randomFromArray(pongs));
		lastPerson = message.nick;
		return;
	}

	if(splitup[0].toLowerCase() == "..sing"){
		bot.say(config.channels[0], "🎵"+randomFromArray(songs)+"🎵");
		return;
	}
	if(splitup[0].toLowerCase() == "..insult"){
		if(splitup[1]){
			bot.say(config.channels[0], splitup[1]+", "+randomFromArray(insults));
		}
		else bot.say(config.channels[0], from+", "+randomFromArray(insults));
		return;
	}
	if(splitup[0].toLowerCase() == "..help"){
		bot.say(config.channels[0], "..ping, ..sing, ..insult [name], ..dab [name], ..tell nick message, ..sotd [link], ..lifts [who] [lift] [[weight reps units]]");
		return;
	}
	if(splitup[0].toLowerCase() == "..dab"){
		if(splitup[1]){
			bot.action(config.channels[0], "dabs on "+splitup[1]+" "+randomFromArray(dabEmojis));
		}
		else bot.action(config.channels[0], "dabs on "+from +" "+randomFromArray(dabEmojis));
	}
	if(splitup[0].toLowerCase() == "..sotd" || splitup[0].toLowerCase() == "sotd"){
		if(splitup[1] == undefined){
			if((sotd.time+(60.0*60.0*8.0)) < (Date.now()/1000.0)){
				bot.say(config.channels[0], "time for a new song. link pls");
			}
			else{
				bot.say(config.channels[0], sotd.who+" has song of the day for "+timeDifference(sotd.time)+" longer: "+sotd.link);
			}
		}
		else if((sotd.time+(60.0*60.0*8.0)) < (Date.now()/1000.0)){
			var msg = splitup.slice(1); //sanitize this too?
			msg = msg.join(" ");
			if(msg.toLowerCase().indexOf("http") < 0) bot.say(config.channels[0], from+" "+randomFromArray(rebuke));
			else{
				sotd.link = msg;
				sotd.time = Date.now()/1000.0;
				sotd.who = from;
				bot.say(config.channels[0], "OK you got the song of the day for 8 hours");
			}
		}
		else{
			bot.say(config.channels[0], sotd.who+"'s song of the day for "+timeDifference(sotd.time)+" longer is "+sotd.link);
		}
		return;
	}

	for (var i = 0; i < greetings.length; i++) {
		if(splitup[1] != undefined && splitup[1].indexOf(config.botName) > -1 && greetings[i].toLowerCase() == splitup[0].toLowerCase()){
			bot.say(config.channels[0], randomFromArray(greetings)+" "+from);
			lastPerson = from;
		}
	};
	
	if(message.args[1].toLowerCase().indexOf("doot doot") > -1){
		if(message.nick.toLowerCase().indexOf("lari") > -1) bot.say(config.channels[0], from+" no u");
		else bot.say(config.channels[0], from+" 🎺 thank mr skeletal 🎺");
		return;
	}
	if((splitup[0].toLowerCase().indexOf("m'") > -1 || message.args[1].toLowerCase().indexOf(" m'") > -1 || splitup[0].toLowerCase().indexOf("m’") > -1 || message.args[0].toLowerCase().indexOf(" m’") > -1) && message.args[0].toLowerCase().indexOf("skam") < 0 && message.args[0].toLowerCase().indexOf("trefirefem") < 0){
		bot.action(config.channels[0], "tips fedora");
		return;
	}
	if((message.args[1].toLowerCase().indexOf("fuck u weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("fuck you weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("fuck u, weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("fuck you, weakerbot") > -1)){
		bot.say(config.channels[0], ":(");
		return;
	}
	if((message.args[1].toLowerCase().indexOf("thanks weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("thank you weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("thank u, weakerbot") > -1) || (message.args[1].toLowerCase().indexOf("thank u weakerbot") > -1)){
		bot.say(config.channels[0], ":D");
		return;
	}
	if(message.args[1].toLowerCase().indexOf("cuck") > -1){
		bot.say(config.channels[0], from+" fuckin cuck");
		return;
	}
	if(message.args[1].toLowerCase().indexOf("hello pls") > -1){
		// if Kyle has HELLO PLS'd 3 times, tell him to fuck off already
		if (message.nick.toLowerCase() == "trefirefem"){
			counter.tre++;
		}
		if (counter.tre == 3){
			bot.say(config.channels[0], randomFromArray(rebuke));
			counter.tre = 0;
		}
		else if(message.nick.toLowerCase() != "trefirefem" && message.nick.toLowerCase() != "weakbot2"){
		    bot.say(config.channels[0], from+" HELLO PLS");
		}
		return;
	}
	if(splitup[0].toLowerCase().indexOf("..lifts") > -1 || splitup[0].toLowerCase().indexOf("..lift") > -1){
		//..lifts
		//..lifts bench
		//..lifts trefirefem
		//..lifts trefirefem bench
		//..lifts bench 100 kg 2

		if(!splitup[1]){
			//get all the lifts for who sent the message
			//..lifts
			console.log("..lifts");
			var weight = {"squat":"guilt", "bench":"shame", "deadlift":"emotional baggage", "ohp":"depression"};
			var units = {"squat":"", "bench":"", "deadlift":"", "ohp":""};
			var reps = {"squat":0, "bench":0, "deadlift":0, "ohp":0};
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("lifts").find({"who":from.toLowerCase()}).toArray(function(err, res) {
					if (err) throw err;
				    // console.log(res);
				    for (var i = res.length - 1; i >= 0; i--) {
				    	weight[res[i].lift] = res[i].weight;
				    	units[res[i].lift] = res[i].unit;
				    	reps[res[i].lift] = res[i].reps;
				    };
				    db.close();
				    if(!res.length) bot.say(config.channels[0], from+" add some lifts first");
				    var string = from+" squat: "+weight.squat+""+units.squat+" for "+reps.squat+" (e1rm "+epley(weight.squat, reps.squat)+""+units.squat+")";
				    string += " bench: "+weight.bench+""+units.bench+" for "+reps.bench+" (e1rm "+epley(weight.bench, reps.bench)+""+units.bench+")";
				    string += " deadlift: "+weight.deadlift+""+units.deadlift+" for "+reps.deadlift+" (e1rm "+epley(weight.deadlift, reps.deadlift)+""+units.deadlift+")";
				    string += " ohp: "+weight.ohp+""+units.ohp+" for "+reps.ohp+" (e1rm "+epley(weight.ohp, reps.ohp)+""+units.ohp+")";
				    if(res.length) bot.say(config.channels[0], string);
				});
			});
		}
		else if(!splitup[2] && (splitup[1].toLowerCase() != "squat" && splitup[1].toLowerCase() != "bench" && splitup[1].toLowerCase() != "deadlift" && splitup[1].toLowerCase() != "ohp")){
			//get the lift for splitup[1]
			//..lifts trefirefem
			console.log("..lifts trefirefem");
			var weight = {"squat":"guilt", "bench":"shame", "deadlift":"emotional baggage", "ohp":"depression"};
			var units = {"squat":"", "bench":"", "deadlift":"", "ohp":""};
			var reps = {"squat":0, "bench":0, "deadlift":0, "ohp":0};
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("lifts").find({"who":splitup[1].toLowerCase()}).toArray(function(err, res) {
					if (err) throw err;
				    // console.log(res);
				    for (var i = res.length - 1; i >= 0; i--) {
				    	weight[res[i].lift] = res[i].weight;
				    	units[res[i].lift] = res[i].unit;
				    	reps[res[i].lift] = res[i].reps;
				    };
				    db.close();
				    if(!res.length) bot.say(config.channels[0], from+" couldn't find lifts for "+splitup[1]+". Is that supposed to be a person or a lift?");
				    var string = from+" "+splitup[1]+" squat: "+weight.squat+""+units.squat+" for "+reps.squat+" (e1rm "+epley(weight.squat, reps.squat)+""+units.squat+")";
				    string += " bench: "+weight.bench+""+units.bench+" for "+reps.bench+" (e1rm "+epley(weight.bench, reps.bench)+""+units.bench+")";
				    string += " deadlift: "+weight.deadlift+""+units.deadlift+" for "+reps.deadlift+" (e1rm "+epley(weight.deadlift, reps.deadlift)+""+units.deadlift+")";
				    string += " ohp: "+weight.ohp+""+units.ohp+" for "+reps.ohp+" (e1rm "+epley(weight.ohp, reps.ohp)+""+units.ohp+")";
				    if(res.length) bot.say(config.channels[0], string);
				});
			});
		}
		else if(!splitup[2] && (splitup[1].toLowerCase() == "squat" || splitup[1].toLowerCase() == "bench" || splitup[1].toLowerCase() == "deadlift" || splitup[1].toLowerCase() == "ohp")){
			//get the lift for the person who sent the message
			//..lifts bench
			console.log("..lifts bench");
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("lifts").findOne({"who":from.toLowerCase(), "lift":splitup[1].toLowerCase()}, function(err, res) {
					if (err) throw err;
				    // console.log(res[0]);
				    db.close();
				    if(res == null) bot.say(config.channels[0], from+" uh hmm didn't find that... Is that lift added?");
				    if(res != null) bot.say(config.channels[0], from+" you "+splitup[1]+" "+res.weight+""+res.unit+" for "+res.reps+" (e1rm "+epley(res.weight, res.reps)+""+res.unit+")");
				});
			});
		}
		else if(splitup[2].toLowerCase() == "squat" || splitup[2].toLowerCase() == "bench" || splitup[2].toLowerCase() == "deadlift" || splitup[2].toLowerCase() == "ohp"){
			//get the lifts for splitup[1]
			//..lifts trefirefem bench
			console.log("..lifts trefirefem bench");
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("lifts").findOne({"who":splitup[1].toLowerCase(), "lift":splitup[2].toLowerCase()}, function(err, res) {
					if (err) throw err;
				    // console.log(res[0]);
				    db.close();
				    if(res == null) bot.say(config.channels[0], from+" uh hmm didn't find that... Is that lift added?");
				    if(res != null) bot.say(config.channels[0], from+" "+splitup[1]+" "+splitup[2]+" "+res.weight+""+res.unit+" for "+res.reps+" (e1rm "+epley(res.weight, res.reps)+""+res.unit+")");
				});
			});
		}
		else if(splitup[2].toLowerCase() != "squat" && splitup[2].toLowerCase() != "bench" && splitup[2].toLowerCase() != "deadlift" && splitup[2].toLowerCase() != "ohp"){
			//update the lift for the person who sent the message
			//..lifts bench 100 kg 2
			console.log("..lifts bench 100 kg 2");
			if(isNaN(splitup[2] || isNaN(splitup[4]))){
				bot.say(config.channels[0], from+" ..lifts [squat/bench/deadlift/ohp] [weight] [units] [reps] (e.g. ..lifts bench 100 lbs 2)");
				return;
			}
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				db.collection("lifts").update({"who":from.toLowerCase(), "lift":splitup[1].toLowerCase()}, {"who":from.toLowerCase(), "lift":splitup[1].toLowerCase(), "weight":splitup[2], "unit":splitup[3].toLowerCase(), "reps":splitup[4]}, {upsert:true}, function(err, res) {
					if (err) throw err;
				    // console.log("did find");
				    // console.log(res);
				    db.close();
				    if(res == null) bot.say(config.channels[0], from+" oh, uh hmm didn't find that...?");
				    if(res != null) bot.say(config.channels[0], from+" gj bb! That's an e1rm of "+epley(splitup[2], splitup[4])+""+splitup[3]);
				});
			});
		}
		else bot.say(config.channels[0], from+" ..lifts [who] [squat/bench/deadlift/ohp] ([weight] [units] [reps]) (e.g. ..lift trefirefem or ..lifts bench 100 lbs 2)");
	}
	unreadMessages(from);
	if(splitup[0].toLowerCase() == "..tell"){
		if(splitup[1] == undefined || splitup[2] == undefined){
			bot.say(config.channels[0], tell.from+", not enough arguments. Eg ..tell trefirefem Do you bench 2pl8 yet?`");
		}
		if(splitup[1].toLowerCase().indexOf("bot") > -1 && splitup[1].toLowerCase().indexOf("ferboten") < 0){
			bot.say(config.channels[0], randomFromArray(rebuke));
			return;
		}
		else{
			var to = splitup[1].toLowerCase(); //sanitize this? idk
			var msg = splitup.slice(2); //sanitize this too?
			//accept and escape special chars
			msg = msg.join(" ");
			var tell = {
				"from":from,
				"to":to,
				"time":Date.now()/1000.0,
				"msg":msg
			};
			//store it
			// if(tells[to]){
			// 	tells[to].push(tell);
			// }
			// else{
			// 	tells[to] = [tell];
			// }
			// bot.say(config.channels[0], tell.from+", OK I'll try, but don't count on it. This is beta af");
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  db.collection("tells").insertOne(tell, function(err, res) {
			    if (err) throw err;
			    console.log("stored tell")
			    console.log(tell);
			    db.close();
			    bot.say(config.channels[0], tell.from+", OK got it");
			  });
			});
		}
	}
	if(splitup[0].toLowerCase() == "..weather"){
		//..weather london
		//weather london, uk
		//weather london uk
		if(splitup[1]){
			var query;
			splitup[2] ? query = splitup[1]+","+splitup[2] : query = splitup[1];
			getWeather(query);
		}
		else bot.action(config.channels[0], "But where tho");
	}

});

function randomFromArray(array){
	return array[Math.floor(Math.random() * array.length)];
}

function unreadMessages(from){
	var oldFrom = from;
	from = from.toLowerCase();
	// console.log("check msg for "+from);
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("tells").findOne({"to":from}, function(err, res) {
	    if (err) throw err;
	    db.close();
	    if(res !== null && res !== undefined){
	    	console.log("unread tell");
	    	console.log(res);
			bot.say(config.channels[0], from+" message from "+res.from+""+localTime(res.to, res.time)+": "+res.msg);
			deleteTell(res);
	    }
	  });
	});
}
function deleteTell(tell){
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("tells").deleteOne({"_id":tell._id}, function(err, res) {
	    if (err) throw err;
	    console.log("deleted tell");
	    console.log(tell);
	    db.close();
	  });
	});
}
function localTime(who, when){
	//lookup who's local time zone
	var date = new Date(when*1000);
	if((Date.now()) - date > (1000*60*60*12)){
		var dateString = " [" + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() + "]";
	}
	else var dateString = '';
	return dateString;
}

function timeDifference(time){
	var msec = ((sotd.time+(60.0*60.0*8.0))*1000.0) - Date.now();
	var hours = Math.floor(msec / 1000 / 60 / 60);
	msec -= hours * 1000 * 60 * 60;
	var mins = Math.floor(msec / 1000 / 60);
	return hours+"h"+mins+"m";
}

//https://github.com/KenanY/epley/blob/master/index.js
function epley(w, r) {
	if(!isNaN(w)) return Math.round(w * (r / 30 + 1));
	else return "???";
}

function getWeather (where) {
	var appid = "805cb9224e234f59790387b5fb26579d";
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+where+"&appid="+appid;
	request(url, function (err, response, body) {
	  if(err){
	    console.log('error getting weather:', error);
	    bot.action(config.channels[0], "uhhh "+error);
	  } else {
	  	//var sample = {"message":"accurate","cod":"200","count":1,"list":[{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1258},"main":{"temp":7,"pressure":1012,"humidity":81,"temp_min":5,"temp_max":8},"dt":1485791400,"wind":{"speed":4.6,"deg":90},"sys":{"country":"GB"},"rain":null,"snow":null,"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}]}]};
	    console.log('got the weather:', body);
	    var sample = body;
	    var weatherString = ""+sample.list[0].main.temp+"C and "+sample.list[0].weather[0].description+" in "+sample.list[0].name+" "+sample.list[0].sys.country;
	    bot.action(config.channels[0], weatherString);
	  }
	});
}