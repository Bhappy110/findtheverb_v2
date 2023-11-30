var input = document.getElementById("txt1");
var info = document.getElementById("alert-text");
var button = document.getElementById("submit");

input.addEventListener("input", function(){
	var inputLength = input.value.length;

	if ( inputLength > 0 ){
		info.innerHTML = "Click Submit Button";
		info.style.color = "#9cff83";
	}else {
		info.innerHTML = "*enter verb 1 to the column";
		info.style.color = "#ff8383"; 
	}
})
function check_verb() { 
// function untuk animasi card output
var card = document.getElementById("card");
var inputLength = input.value.length;
	if (inputLength > 0){
		card.style.height = "100px";
		card.style.transition = "1s";
	}else {
		card.style.height = "1px";
		card.style.transition = "1s";
	}

var a = document.getElementById("txt1").value.toLowerCase();  
var p_kontainer = document.getElementById("verb3");
var q_kontainer = document.getElementById("verb2");
var card = document.getElementById("card");
// data verb
switch (a) 
 { 
    case'abash':
	p_kontainer.innerHTML="abashed";
	q_kontainer.innerHTML="abashed";
	break;
	case'abate':
	p_kontainer.innerHTML="abated";
	q_kontainer.innerHTML="abated";
	break;
	case'abase':
    p_kontainer.innerHTML="abased";
	q_kontainer.innerHTML="abased"; 
    break;
	case'abbreviate':
	p_kontainer.innerHTML="abbreviated";
	q_kontainer.innerHTML="abbreviated";
	break;
	case'abduct':
	p_kontainer.innerHTML="abducted";
	q_kontainer.innerHTML="abducted";
	break;
	case'abhor':
	p_kontainer.innerHTML="abhorred";
	q_kontainer.innerHTML="abhorred";
	break;
	case'abolish':
	p_kontainer.innerHTML="abolished";
	q_kontainer.innerHTMl="abolished";
	break;
	case'abridge':
	p_kontainer.innerHTML="abridged";
	q_kontainer.innerHTML="abridged";
	break;
	case'absorb':
	p_kontainer.innerHTML="absorbed";
	q_kontainer.innerHTML="absorbed";
	break;
	case'abuse':
	p_kontainer.innerHTML="abused";
	q_kontainer.innerHTML="abused";
	break;
	case'accelerate':
	p_kontainer.innerHTML="accelerated";
	q_kontainer.innerHTML="accelerated";
	break;
	case'accept':
	p_kontainer.innerHTML="accepted";
	q_kontainer.innerHTML="accepted";
	break;
	case'accomodate':
	p_kontainer.innerHTML="accomodated";
	q_kontainer.innerHTML="accomodated";
	break;
	case'accompany':
	p_kontainer.innerHTML="accompanied";
	q_kontainer.innerHTML="accompanied";
	break;
	case'accomplish':
	p_kontainer.innerHTML="accomplished";
	q_kontainer.innerHTML="accomplish";
	break;
	case'adjust':
	p_kontainer.innerHTML="adjusted";
	q_kontainer.innerHTML="adjusted";
	break;
	case'admire':
	p_kontainer.innerHTML="admired";
	q_kontainer.innerHTMl="admired";
	break;
	case'admit':
	p_kontainer.innerHTML="admited";
	q_kontainer.innerHTML="admited";
	break;
	case'adopt':
	p_kontainer.innerHTML="adopted";
	q_kontainer.innerHTMl="adopted";
	break;
	case'advertise':
	p_kontainer.innerHTML="advertised";
	q_kontainer.innerHTML="advertised";
	break;
	case'advise':
	p_kontainer.innerHTML="advised";
	q_kontainer.innnrHTML="advised";
	break;
	case'agitate':
	p_kontainer.innerHTML="agitated";
	q_kontainet.innerHTML="agitate";
	break;
	case'allota':
	p_kontainer.innerHTML="allotated";
	q_kontainer.innerHTML="allotated";
	break;
	case'altera':
	p_kontainer.innerHTML="altered";
	q_kontainer.innerHTML="altered";
	break;
	case'amplify':
	p_kontainer.innerHTML="amplified";
	q_kontainer.innerHTML="amplified";
	break;
	case'analyze':
	p_kontainer.innerHTML="analyzed";
	q_kontainer.innerHTML="analyzed";
	break;
	case'answer':
	p_kontainer.innerHTML="answered";
	q_kontainer.innerHTML="answered";
	break;
	case'apologize':
	p_kontainer.innerHTML="apologized";
	q_kontainer.innerHTML="apologized";
	break;
	case'appear':
	p_kontainer.innerHTML="appeared";
	q_kontainer.innerHTML="appeared";
	break;
	case'apply':
	p_kontainer.innerHTML="applied";
	q_kontainer.innerHTML="applied";
	break;
	case'arrange':
	p_kontainer.innerHTML="arranged";
	q_kontainer.innerHTML="arranged";
	break;
	case'ask':
	p_kontainer.innerHTML="asked";
	q_kontainer.innerHTML="asked";
	break;
	case'avoid':
	p_kontainer.innerHTML="avoided";
	q_kontainer.innerHTML="avoided";
	break;
	case'ban':
	p_kontainer.innerHTML="banned";
	q_kontainer.innerHTML="banned";
	break;
	case'bandage':
	p_kontainer.innerHTML="bandaged";
	q_kontainer.innerHTML="bandaged";
	break;
	case'banish':
	p_kontainer.innerHTML="banished";
	q_kontainer.innerHTML="banished";
	break;
	case'beg':
	p_kontainer.innerHTML="begged";
	q_kontainer.innerHTML="begged";
	break;
	case'belive':
	p_kontainer.innerHTML="belived";
	q_kontainer.innerHTML="belived";
	break;
	case'betray':
	p_kontainer.innerHTML="betrayed";
	q_kontainer.innerHTML="betrayed";
	break;
	case'blame':
	p_kontainer.innerHTML="blamed";
	q_kontainer.innerHTML="blamed";
	break;
	case'blast':
	p_kontainer.innerHTML="blasted";
	q_kontainer.innerHTML="blasted";
	break;
	case'block':
	p_kontainer.innerHTML="blocked";
	q_kontainer.innerHTML="blocked";
	break;
	case'boycott':
	p_kontainer.innerHTML="boycotted";
	q_kontainer.innerHTML="boycotted";
	break;
	case'calculate':
	p_kontainer.innerHTML="calculated";
	q_kontainer.innerHTML="calculated";
	break;
	case'call':
	p_kontainer.innerHTML="called";
	q_kontainer.innerHTML="called";
	break;
	case'capture':
	p_kontainer.innerHTML="captured";
	q_kontainer.innerHTML="captured";
	break;
	case'carriy':
	p_kontainer.innerHTML="carried";
	q_kontainer.innerHTML="carried";
	break;
	case'celebrate':
	p_kontainer.innerHTML="celebrated";
	q_kontainer.innerHTML="celebrated";
	break;
	case'change':
	p_kontainer.innerHTML="changed";
	q_kontainer.innerHTML="changed";
	break;
	case'charter':
	p_kontainer.innerHTML="chartered";
	q_kontainer.innerHTML="chartered";
	break;
	case'chat':
	p_kontainer.innerHTML="chatted";
	q_kontainer.innerHTML="chatted";
	break;
	case'cheat':
	p_kontainer.innerHTML="cheated";
	q_kontainer.innerHTML="cheated";
	break;
	case'check':
	p_kontainer.innerHTML="checked";
	q_kontainer.innerHTML="checked";
	break;
	case'chew':
	p_kontainer.innerHTML="chewed";
	q_kontainer.innerHTML="chewed";
	break;
	case'circulate':
	p_kontainer.innerHTML="circulated";
	q_kontainer.innerHTML="circulated";
	break;
	case'claim':
	p_kontainer.innerHTML="claimed";
	q_kontainer.innerHTML="claimed";
	break;
	case'classify':
	p_kontainer.innerHTML="calssified";
	q_kontainer.innerHTML="classified";
	break;
	case'climb':
	p_kontainer.innerHTML="calimbed";
	q_kontainer.innerHTML="climbed";
	break;
	case'close':
	p_kontainer.innerHTML="closed";
	q_kontainer.innerHTML="closed";
	break;
	case'compile':
	p_kontainer.innerHTML="compiled";
	q_kontainer.innerHTML="compiled";
	break;
	case'conceal':
	p_kontainer.innerHTML="concealed";
	break;
	case'conduct':
	p_kontainer.innerHTML="conucted";
	q_kontainer.innerHTML="conducted";
	break;
	case'comfirm':
	p_kontainer.innerHTML="comfirmed";
	q_kontainer.innerHTML="comfirmed";
	break;
	case'connect':
	p_kontainer.innerHTML="connected";
	q_kontainer.innerHTML="connect";
	break;
	case'cook':
	p_kontainer.innerHTML="cooked";
	q_kontainer.innerHTML="cooked";
	break;
	case'copy':
	p_kontainer.innerHTML="copied";
	q_kontainer.innerHTML="copied";
	break;
	case'count':
	p_kontainer.innerHTML="counted";
	q_kontainer.innerHTML="counted";
	break;
	case'criticize':
	p_kontainer.innerHTML="criticized";
	q_kontainer.innerHTML="criticized";
	break;
	case'cry':
	p_kontainer.innerHTML="cried";
	q_kontainer.innerHTML="cried";
	break;
	case'damage':
	p_kontainer.innerHTML="damaged";
	q_kontainer.innerHTML="damaged";
	break;
	case'dance':
	p_kontainer.innerHTML="danced";
	q_kontainer.innerHTML="danced";
	break;
	case'debate':
	p_kontainer.innerHTML="debated";
	q_kontainer.innerHTML="debated"
	break;
	case'decay':
	p_kontainer.innerHTML="decayed";
	q_kontainer.innerHTML="decayed";
	break;
	case'declare':
	p_kontainer.innerHTML="declared";
	q_kontainer.innerHTML="declared";
	break;
	case'decorate':
	p_kontainer.innerHTML="decorated";
	q_kontainer.innerHTML="decorated";
	break;
	case'defend':
	p_kontainer.innerHTML="defended";
	q_kontainer.innerHTML="defended";
	break;
	case'defer':
	p_kontainer.innerHTML="deferred";
	q_kontainer.innerHTML="deferred";
	break;
	case'delete':
	p_kontainer.innerHTML="deleted";
	q_kontainer.innerHTML="deleted";
	break;
	case'deliver':
	p_kontainer.innerHTML="delivered";
	q_kontainer.innerHTML="delivered";
	break;
	case'deposit':
	p_kontainer.innerHTML="deposited";
	q_kontainer.innerHTML="deposited"
	break;
	case'describe':
	p_kontainer.innerHTML="described";
	q_kontainer.innerHTML="described";
	break;
	case'design':
	p_kontainer.innerHTML="designed";
	q_kontainer.innerHTML="designed";
	break;
	case'destroy':
	p_kontainer.innerHTML="destroyed";
	q_kontainer.innerHTML="destroyed";
	break;
	case'detonate':
	p_kontainer.innerHTML="detonated";
	q_kontainer.innerHTML="detonated";
	break;
	case'develop':
	p_kontainer.innerHTML="developed";
	q_kontainer.innerHTML="developed";
	break;
	case'dictate':
	p_kontainer.innerHTML="dictated";
	q_kontainer.innerHTML="dictated";
	break;
	case'digest':
	p_kontainer.innerHTML="digested";
	q_kontainer.innerHTML="digested";
	break;
	case'direct':
	p_kontainer.innerHTML="directed";
	q_kontainer.innerHTML="directed";
	break;
	case'discuss':
	p_kontainer.innerHTML="discussed";
	q_kontainer.innerHTML="discussed";
	break;
	case'disturb':
	p_kontainer.innerHTML="disturbed";
	q_kontainer.innerHTML="disturbed";
	break;
	case'divide':
	p_kontainer.innerHTML="divided";
	q_kontainer.innerHTML="divided";
	break;
	case'dry':
	p_kontainer.innerHTML="dried";
	q_kontainer.innerHTML="dried";
	break;
	case'duplicate':
	p_kontainer.innerHTML="duplicated";
	q_kontainer.innerHTML="duplicated";
	break;
	case'earn':
	p_kontainer.innerHTML="earned";
	q_kontainer.innerHTML="earned";
	break;
	case'empty':
	p_kontainer.innerHTML="emptied";
	q_kontainer.innerHTML="empited";
	break;
	case'enjoy':
	p_kontainer.innerHTML="enjoyed";
	q_kontainer.innerHTML="enjoyed";
	break;
	case'erase':
	p_kontainer.innerHTML="erased";
	q_kontainer.innerHTML="erased";
	break;
	case'escape':
	p_kontainer.innerHTML="escaped";
	q_kontainer.innerHTML="escaped";
	break;
	case'estimate':
	p_kontainer.innerHTML="estimated";
	q_kontainer.innerHTML="estimated";
	break;
	case'evaluate':
	p_kontainer.innerHTML="evaluated";
	q_kontainer.innerHTML="evaluated";
	break;
	case'examine':
	p_kontainer.innerHTML="examined";
	q_kontainer.innerHTML="examined";
	break;
	case'expand':
	p_kontainer.innerHTML="expanded";
	q_kontainer.innerHTML="expanded";
	break;
	case'explain':
	p_kontainer.innerHTML="explained";
	q_kontainer.innerHTML="explained";
	break;
	case'export':
	p_kontainer.innerHTML="exported";
	q_kontainer.innerHTML="exported";
	break;
	case'face':
	p_kontainer.innerHTML="faced";
	q_kontainer.innerHTML="faced";
	break;
	case'filter':
	p_kontainer.innerHTML="filtered";
	q_kontainer.innerHTML="filtered";
	break;
	case'fix':
	p_kontainer.innerHTML="fixed";
	q_kontainer.innerHTML="fixed";
	break;
	case'fold':
	p_kontainer.innerHTML="folded";
	q_kontainer.innerHTML="folded";
	break;
	case'formulate':
	p_kontainer.innerHTML="formulated";
	q_kontainer.innerHTML="formulated";
	break;
	case'free':
	p_kontainer.innerHTML="freed";
	q_kontainer.innerHTML="freed";
	break;
	case'frolic':
	p_kontainer.innerHTML="froliced";
	q_kontainer.innerHTML="froliced";
	break;
	case'fry':
	p_kontainer.innerHTML="fried";
	q_kontainer.innerHTML="fried";
	break;
	case'gaze':
	p_kontainer.innerHTML="gazed";
	q_kontainer.innerHTML="gazed";
	break;
	case'glow':
	p_kontainer.innerHTML="glowed";
	q_kontainer.innerHTML="glowed";
	break;
	case'grumble':
	p_kontainer.innerHTML="grumbled";
	q_kontainer.innerHTML="grumbled";
	break;
	case'guide':
	p_kontainer.innerHTML="guided";
	q_kontainer.innerHTML="guided";
	break;
	case'handle':
	p_kontainer.innerHTML="handled";
	q_kontainer.innerHTML="handled";
	break;
	case'haze':
	p_kontainer.innerHTML="hazed";
	q_kontainer.innerHTML="hazed";
	break;
	case'help':
	p_kontainer.innerHTML="helped";
	q_kontainer.innerHTML="helped";
	break;
	case'hestitate':
	p_kontainer.innerHTML="hestitated";
	q_kontainer.innerHTML="hestitated";
	break;
	case'hijact':
	p_kontainer.innerHTML="hijacted";
	q_kontainer.innerHTML="hijacted";
	break;
	case'ignore':
	p_kontainer.innerHTML="ignored";
	q_kontainer.innerHTML="ignored";
	break;
	case'imagine':
	p_kontainer.innerHTML="imagined";
	q_kontainer.innerHTML="imagined";
	break;
	case'import':
	p_kontainer.innerHTML="imported";
	q_kontainer.innerHTML="imported";
	break;
	case'improve':
	p_kontainer.innerHTML="improved";
	q_kontainer.innerHTML="improved";
	break;
	case'insist':
	p_kontainer.innerHTML="insisted";
	q_kontainer.innerHTML="insisted";
	break;
	case'instruct':
	p_kontainer.innerHTML="instructed";
	q_kontainer.innerHTML="instructed";
	break;
	case'invent':
	p_kontainer.innerHTML="invented";
	q_kontainer.innerHTML="invented";
	break;
	case'jog':
	p_kontainer.innerHTML="jogged";
	q_kontainer.innerHTML="jogged";
	break;
	case'jumble':
	p_kontainer.innerHTML="jumbled";
	q_kontainer.innerHTML="jumbled";
	break;
	case'jump':
	p_kontainer.innerHTML="jumped";
	q_kontainer.innerHTML="jumped";
	break;
	case'kick':
	p_kontainer.innerHTML="kicked";
	q_kontainer.innerHTML="kicked";
	break;
	case'kidnap':
	p_kontainer.innerHTML="kidnapped";
	q_kontainer.innerHTML="kidnapped";
	break;
	case'kill':
	p_kontainer.innerHTML="killed";
	q_kontainer.innerHTML="killed";
	break;
	case'kiss':
	p_kontainer.innerHTML="kissed";
	q_kontainer.innerHTML="kissed";
	break;
	case'knock':
	p_kontainer.innerHTML="knocked";
	q_kontainer.innerHTML="knocked";
	break;
	case'label':
	p_kontainer.innerHTML="labelled";
	q_kontainer.innerHTML="labelled";
	break;
	case'land':
	p_kontainer.innerHTML="landed";
	q_kontainer.innerHTML="landed";
	break;
	case'launch':
	p_kontainer.innerHTML="launched";
	q_kontainer.innerHTML="launched";
	break;
	case'legalize':
	p_kontainer.innerHTML="legalized";
	q_kontainer.innerHTML="legalized";
	break;
	case'lessen':
	p_kontainer.innerHTML="lessened";
	q_kontainer.innerHTML="lessened";
	break;
	case'lift':
	p_kontainer.innerHTML="lifted";
	q_kontainer.innerHTML="lifted";
	break;
	case'limit':
	p_kontainer.innerHTML="limited";
	q_kontainer.innerHTML="limited";
	break;
	case'listen':
	p_kontainer.innerHTML="listened";
	q_kontainer.innerHTML="listened";
	break;
	case'localize':
	p_kontainer.innerHTML="localized";
	q_kontainer.innerHTML="localized";
	break;
	case'look':
	p_kontainer.innerHTML="looked";
	q_kontainer.innerHTML="looked";
	break;
	case'mail':
	p_kontainer.innerHTML="mailed";
	q_kontainer.innerHTML="mailed";
	break;
	case'maintain':
	p_kontainer.innerHTML="maintained";
	q_kontainer.innerHTML="maintained";
	break;
	case'manage':
	p_kontainer.innerHTML="managed";
	q_kontainer.innerHTML="managed";
	break;
	case"memorize":
	p_kontainer.innerHTML="memorized";
	q_kontainer.innerHTML="memorized";
	break;
	case'mimic':
	p_kontainer.innerHTML="mimicked";
	q_kontainer.innerHTML="mimicked";
	break;
	case'mix':
	p_kontainer.innerHTML="mixed";
	q_kontainer.innerHTML="mixed";
	break;
	case'nap':
	p_kontainer.innerHTML="napped";
	q_kontainer.innerHTML="napped";
	break;
	case'neglect':
	p_kontainer.innerHTML="neglect";
	q_kontainer.innerHTML="neglect";
	break;
	case'notify':
	p_kontainer.innerHTML="notified";
	q_kontainer.innerHTML="notified";
	break;
	case'number':
	p_kontainer.innerHTML="numbered";
	q_kontainer.innerHTML="numbered";
	break;
	case'obey':
	p_kontainer.innerHTML="obeyed";
	q_kontainer.innerHTML="obeyed";
	break;
	case'observe':
	p_kontainer.innerHTML="observed";
	q_kontainer.innerHTML="observed";
	break;
	case'occur':
	p_kontainer.innerHTML="occurred";
	q_kontainer.innerHTML="occurred";
	break;
	case'offend':
	p_kontainer.innerHTML="offended";
	q_kontainer.innerHTML="offended";
	break;
	case'offer':
	p_kontainer.innerHTML="offered";
	q_kontainer.innerHTML="offered";
	break;
	case'open':
	p_kontainer.innerHTML="opened";
	q_kontainer.innerHTML="opened";
	break;
	case'operate':
	p_kontainer.innerHTML="operated";
	q_kontainer.innerHTML="operated";
	break;
	case'orbit':
	p_kontainer.innerHTML="orbited";
	q_kontainer.innerHTML="orbited";
	break;
	case'pacify':
	p_kontainer.innerHTML="pacified";
	q_kontainer.innerHTML="pacified";
	break;
	case'paint':
	p_kontainer.innerHTML="painted";
	q_kontainer.innerHTML="painted";
	break;
	case'panic':
	p_kontainer.innerHTML="panicked";
	q_kontainer.innerHTML="panicked";
	break;
	case'passed':
	p_kontainer.innerHTML="passeded";
	q_kontainer.innerHTML="passeded";
	break;
	case'peep':
	p_kontainer.innerHTML="peeped";
	q_kontainer.innerHTML="peeped";
	break;
	case'perform':
	p_kontainer.innerHTML="performed";
	q_kontainer.innerHTML="performed";
	break;
	case'phone':
	p_kontainer.innerHTML="phoned";
	q_kontainer.innerHTML="phoned";
	break;
	case'photocopy':
	p_kontainer.innerHTML="photocopied";
	q_kontainer.innerHTML="photocopied";
	break;
	case'picnic':
	p_kontainer.innerHTML="picnicked";
	q_kontainer.innerHTML="picnicked";
	break;
	case'play':
	p_kontainer.innerHTML="played";
	q_kontainer.innerHTML="played";
	break;
	case'postpone':
	p_kontainer.innerHTML="postponed";
	q_kontainer.innerHTML="postponed";
	break;
	case'prepare':
	p_kontainer.innerHTML="prepared";
	q_kontainer.innerHTML="prepared";
	break;
	case'present':
	p_kontainer.innerHTML="presented";
	q_kontainer.innerHTML="presented";
	break;
	case'print':
	p_kontainer.innerHTML="printed";
	q_kontainer.innerHTML="printed";
	break;
	case'process':
	p_kontainer.innerHTML="processed";
	q_kontainer.innerHTML="processed";
	break;
	case'propel':
	p_kontainer.innerHTML="propeled";
	q_kontainer.innerHTML="propeled";
	break;
	case'provide':
	p_kontainer.innerHTML="provided";
	q_kontainer.innerHTML="provided";
	break;
	case'pull':
	p_kontainer.innerHTML="pulled";
	q_kontainer.innerHTML="pulled";
	break;
	case'push':
	p_kontainer.innerHTML="pushed";
	q_kontainer.innerHTML="pushed";
	break;
	case'quake':
	p_kontainer.innerHTML="quaked";
	q_kontainer.innerHTML="quaked";
	break;
	case'qualify':
	p_kontainer.innerHTML="qualfied";
	q_kontainer.innerHTML="qualified";
	break;
	case'quarell':
	p_kontainer.innerHTML="quarelled";
	q_kontainer.innerHTML="quarelled";
	break;
	case'question':
	p_kontainer.innerHTML="questioned";
	q_kontainer.innerHTML="questioned";
	break;
	case'quicken':
	p_kontainer.innerHTML="quickened";
	q_kontainer.innerHTML="quickened";
	break;
	case'quiz':
	p_kontainer.innerHTML="quizzed";
	q_kontainer.innerHTML="quizzed";
	break;
	case'quote':
	p_kontainer.innerHTML="quoted";
	q_kontainer.innerHTML="quoted";
	break;
	case'raid':
	p_kontainer.innerHTML="raided";
	q_kontainer.innerHTML="raided";
	break;
	case'rebel':
	p_kontainer.innerHTML="rebeled";
	q_kontainer.innerHTML="rebeled";
	break;
	case'refresh':
	p_kontainer.innerHTML="refreshed";
	q_kontainer.innerHTML="refreshed";
	break;
	case'repair':
	p_kontainer.innerHTML="repaired";
	q_kontainer.innerHTML="repaired";
	break;
	case'reply':
	p_kontainer.innerHTML="replied";
	q_kontainer.innerHTML="replied";
	break;
	case'report':
	p_kontainer.innerHTML="reported";
	q_kontainer.innerHTML="reported";
	break;
	case'review':
	p_kontainer.innerHTML="reviewed";
	q_kontainer.innerHTML="reviewed";
	break;
	case'rob':
	p_kontainer.innerHTML="robbed";
	q_kontainer.innerHTML="robbed";
	break;
	case'sabotage':
	p_kontainer.innerHTML="sabotaged";
	q_kontainer.innerHTML="sabotaged";
	break;
	case'sail':
	p_kontainer.innerHTML="sailed";
	q_kontainer.innerHTML="sailed";
	break;
	case'satisfy':
	p_kontainer.innerHTML="satisfied";
	q_kontainer.innerHTML="satisfied";
	break;
	case'settle':
	p_kontainer.innerHTML="settled";
	q_kontainer.innerHTML="settled";
	break;
	case'ship':
	p_kontainer.innerHTML="shiped";
	q_kontainer.innerHTML="shiped";
	break;
	case'smoke':
	p_kontainer.innerHTML="smoked";
	q_kontainer.innerHTML="smoked";
	break;
	case'spay':
	p_kontainer.innerHTML="spayed";
	q_kontainer.innerHTML="spayed";
	break;
	case'stabilize':
	p_kontainer.innerHTML="stabilized";
	q_kontainer.innerHTML="stabilized";
	break;
	case'stop':
	p_kontainer.innerHTML="stopped";
	q_kontainer.innerHTML="stoped";
	break;
	case'supply':
	p_kontainer.innerHTML="supplied";
	q_kontainer.innerHTML="supplied";
	break;
	case'tackle':
	p_kontainer.innerHTML="tackled";
	q_kontainer.innerHTML="tackled";
	break;
	case'talk':
	p_kontainer.innerHTML="talked";
	q_kontainer.innerHTML="talked";
	break;
	case'telephone':
	p_kontainer.innerHTML="telephoned";
	q_kontainer.innerHTML="telephoned";
	break;
	case'televise':
	p_kontainer.innerHTML="televised";
	q_kontainer.innerHTML="televised";
	break;
	case'thicken':
	p_kontainer.innerHTML="thicken";
	q_kontainer.innerHTML="thicken";
	break;
	case'thin':
	p_kontainer.innerHTML="thinned";
	q_kontainer.innerHTML="thinned";
	break;
	case'tie':
	p_kontainer.innerHTML="tied";
	q_kontainer.innerHTML="tied";
	break;
	case'train':
	p_kontainer.innerHTML="trained";
	q_kontainer.innerHTML="trained";
	break;
	case'travel':
	p_kontainer.innerHTML="traveled";
	q_kontainer.innerHTML="traveled";
	break;
	case'type':
	p_kontainer.innerHTML="typed";
	q_kontainer.innerHTML="typed";
	break;
	case'underline':
	p_kontainer.innerHTML="underlined";
	q_kontainer.innerHTML="underlined";
	break;
	case'update':
	p_kontainer.innerHTML="updated";
	q_kontainer.innerHTML="updated";
	break;
	case'urge':
	p_kontainer.innerHTML="urged";
	q_kontainer.innerHTML="urged";
	break;
	case'urinate':
	p_kontainer.innerHTML="urinated";
	q_kontainer.innerHTML="urinated";
	break;
	case'use':
	p_kontainer.innerHTML="used";
	q_kontainer.innerHTML="used";
	break;
	case'vend':
	p_kontainer.innerHTML="vended";
	q_kontainer.innerHTML="vended";
	break;
	case'ventilate':
	p_kontainer.innerHTML="ventilated";
	q_kontainer.innerHTML="ventilated";
	break;
	case'veto':
	p_kontainer.innerHTML="vetoed";
	q_kontainer.innerHTML="vetoed";
	break;
	case'vie':
	p_kontainer.innerHTML="vied";
	q_kontainer.innerHTML="vied";
	break;
	case'visit':
	p_kontainer.innerHTML="visited";
	q_kontainer.innerHTML="visited";
	break;
	case'vote':
	p_kontainer.innerHTML="voted";
	q_kontainer.innerHTML="voted";
	break;
	case'wait':
	p_kontainer.innerHTML="waited";
	q_kontainer.innerHTML="waited";
	break;
	case'walk':
	p_kontainer.innerHTML="walked";
	q_kontainer.innerHTML="walked";
	break;
	case'wash':
	p_kontainer.innerHTML="washed";
	q_kontainer.innerHTML="washed";
	break;
	case'watch':
	p_kontainer.innerHTML="watched";
	q_kontainer.innerHTML="watched";
	break;
	case'whip':
	p_kontainer.innerHTML="whipped";
	q_kontainer.innerHTML="whipped";
	break;
	case'whisper':
	p_kontainer.innerHTML="whispered";
	q_kontainer.innerHTML="whispered";
	break;
	case'whistle':
	p_kontainer.innerHTML="whistled";
	q_kontainer.innerHTML="whisteled";
	break;
	case'wory':
	p_kontainer.innerHTML="worried";
	q_kontainer.innerHTML="worried";
	break;
	case'worry':
	p_kontainer.innerHTML="worried";
	q_kontainer.innerHTML="worried";
	break;
	case'X-ray':
	p_kontainer.innerHTML="Xrayed";
	q_kontainer.innerHTML="Xrayed";
	break;
	case'yawn':
	p_kontainer.innerHTML="yawned";
	q_kontainer.innerHTML="yawned";
	break;
	case'yell':
	p_kontainer.innerHTML="yelled";
	q_kontainer.innerHTML="yelled";
	break;
	case'yield':
	p_kontainer.innerHTML="yielded";
	q_kontainer.innerHTML="yielded";
	break;
	case'zigzag':
	p_kontainer.innerHTML="zigzagged";
	q_kontainer.innerHTML="zigzagged";
	break;
	case'zip':
	p_kontainer.innerHTML="zipped";
	q_kontainer.innerHTML="zipped";
	break;
	case'zipper':
	p_kontainer.innerHTML="zippered";
	q_kontainer.innerHTML="zeppered";
	break;
	case'zoom':
	p_kontainer.innerHTML="zoomed";
	q_kontainer.innerHTML="zoomed";
	break;
	case'abide':
    p_kontainer.innerHTML="abode"; 
	q_kontainer.innerHTML="abode";
	break; 
    case 'awake': 
    p_kontainer.innerHTML="awoke"; 
	q_kontainer.innerHTML="awoke";
    break; 
	case 'bear ': 
	p_kontainer.innerHTML="borne";
	q_kontainer.innerHTML="bore"; 
	break; 
	case'beat':
	p_kontainer.innerHTML="beaten";
	q_kontainer.innerHTML="beat";
	break;
	case 'become': 
	p_kontainer.innerHTML="become";
	q_kontainer.innerHTML="became";
	break;
    case 'begin':
	p_kontainer.innerHTML="begun";
	q_kontainer.innerHTML="began"; 
	break; 
    case 'bend': 
	p_kontainer.innerHTML="bent"; 
	q_kontainer.innerHTML="bent";
	break; 
	case 'bet': 
		p_kontainer.innerHTML="bet";
		q_kontainer.innerHTML="bet"; 
		break;
	case 'bite': 
		p_kontainer.innerHTML="bitten";
		q_kontainer.innerHTML="bit";
		break;    
	case 'bleed': 
		p_kontainer.innerHTML="bled";
		q_kontainer.innerHTML="bled";
		break;
	case 'blow': 
		p_kontainer.innerHTML="blown";
		q_kontainer.innerHTML="blew"
		break;
	case 'break': 
		p_kontainer.innerHTML="broken"; 
		q_kontainer.innerHTML="broke";
		break;
	case 'bring': 
		p_kontainer.innerHTML="brought";
		q_kontainer.innerHTML="brought"; 
		break;
	case 'build': 
		p_kontainer.innerHTML="built";
		q_kontainer.innerHTML="built"; 
		break;
	case 'burn': 
		p_kontainer.innerHTML="burnt, burned";
		q_kontainer.innerHTML="burnt, burned";
		break;
	case 'burst': 
		p_kontainer.innerHTML="burst";
		q_kontainer.innerHTML="burst" 
		break;
	case 'buy': 
		p_kontainer.innerHTML="bought";
		q_kontainer.innerHTML="bought"; 
		break;
	case 'cast': 
		p_kontainer.innerHTML="cast"; 
		q_kontainer.innerHTML="cast";
		break;
	case 'catch': 
		p_kontainer.innerHTML="caught";
		q_kontainer.innerHTML="caught"; 
		break;
	case 'choose': 
		p_kontainer.innerHTML="chosen";
		q_kontainer.innerHTML="chose"; 
		break;
	case 'cling': 
		p_kontainer.innerHTML="clung";
		q_kontainer.innerHMTL="clung"; 
		break;
	case 'come': 
		p_kontainer.innerHTML="come";
		q_kontainer.innerHTML="came"; 
		break;
	case 'cost': 
		p_kontainer.innerHTML="cost"; 
		q_kontainer.innerHTML="cost";
		break;
	case'creep':
		p_kontainer.innerHTML="crept";
		q_kontainer.innerHTML="crept"
		break;
	case 'cut': 
		p_kontainer.innerHTML="cut"; 
		q_kontainer.innerHTML="cut";
		break;
	case 'deal': 
		p_kontainer.innerHTML="dealt";
		q_kontainer.innerHTML="dealt" 
		break;
	case 'dig': 
		p_kontainer.innerHTML="dug"; 
		q_kontainer.innerHTML="dug";
		break;
	case 'do': 
		p_kontainer.innerHTML="done";
		q_kontainer.innerHTML="did"; 
		break;
	case 'draw': 
		p_kontainer.innerHTML="drawn";
		q_kontainer.innerHTML="drew";
		break;
	case 'dream': 
		p_kontainer.innerHTML="dreamt";
		q_kontainer.innerHTML="dreamt"; 
		break;
	case 'drink': 
		p_kontainer.innerHTML="drunk";
		q_kontainer.innerHTML="drunk"; 
		break;
	case 'drive': 
		p_kontainer.innerHTML="driven";
		q_kontainer.innerHTML="drove" 
		break;
	case 'dwell': 
		p_kontainer.innerHTML="dwellt";
		q_kontainer.innerHTML="dwallt"; 
		break;
	case 'eat': 
		p_kontainer.innerHTML="eaten"; 
		q_kontainer.innerHTML="ate";
		break;
	case 'fall': 
		p_kontainer.innerHTML="fallen";
		q_kontainer.innerHTML="fell"; 
		break;
	case 'feed': 
		p_kontainer.innerHTML="fed";
		q_kontainer.innerHTML="fed"; 
		break;
	case 'feel': 
		p_kontainer.innerHTML="felt";
		q_kontainer.innerHTML="felt"; 
		break;
	case 'fight': 
		p_kontainer.innerHTML="fought";
		q_kontainer.innerHTML="fought"; 
		break;
	case 'find': 
		p_kontainer.innerHTML="found";
		q_kontainer.innerHTML="found"; 
		break;
	case 'flee': 
		p_kontainer.innerHTML="fled";
		q_kontainer.innerHTML="fled"; 
		break;
	case'fling':
		p_kontainer.innerHTML="flung";
		q_kontainer.innerHTML="flung";
		break;
	case 'fly': 
		p_kontainer.innerHTML="flown";
		q_kontainer.innerHTML="flew"; 
		break;
	case 'forbid': 
		p_kontainer.innerHTML="forbidden";
		q_kontainer.innerHTML="forbade"; 
		break;
	case 'forget': 
		p_kontainer.innerHTML="forgotten";
		q_kontainer.innerHTML="forgot"; 
		break;
	case 'forgive': 
		p_kontainer.innerHTML="forgiven";
		q_kontainer.innerHTML="forgave"; 
		break;
	case 'forsake': 
		p_kontainer.innerHTML="forsaken"; 
		q_kontainer.innerHTML="forsook";
		break;
	case 'freeze': 
		p_kontainer.innerHTML="frozen";
		q_kontainer.innerHTML="froze"; 
		break;
	case 'get': 
		p_kontainer.innerHTML="got"; 
		q_kontainer.innerHTML="got";
		break;
	case 'give': 
		p_kontainer.innerHTML="given"; 
		q_kontainer.innerHTML="gave";
		break;
	case 'go': 
		p_kontainer.innerHTML="gone";
		q_kontainer.innerHTML="went"; 
		break;
	case 'grind': 
		p_kontainer.innerHTML="ground";
		q_kontainer.innerHTML="grew"; 
		break;
	case 'grow': 
		p_kontainer.innerHTML="grown";
		q_kontainer.innerHTML="grew"; 
		break;
	case 'hang': 
		p_kontainer.innerHTML="hung";
		q_kontainer.innerHTML="hung"; 
		break;
	case 'have': 
		p_kontainer.innerHTML="had"; 
		break;
	case 'hear': 
		p_kontainer.innerHTML="heard"; 
		q_kontainer.innerHTML="had";
		break;
	case 'hide': 
		p_kontainer.innerHTML="hidden";
		q_kontainer.innerHTML="hid" 
		break;
	case 'hit': 
		p_kontainer.innerHTML="hit";
		q_kontainer.innerHTML="hit"; 
		break;
	case 'hold': 
		p_kontainer.innerHTML="held"; 
		break;
	case 'hurt': 
		p_kontainer.innerHTML="hurt";
		q_kontainer.innerHTML="hurt"; 
		break;
	case 'keep': 
		p_kontainer.innerHTML="kept";
		q_kontainer.innerHTML="kept"; 
		break;
	case 'kneel': 
		p_kontainer.innerHTML="knelt";
		q_kontainer.innerHTML="knelt"; 
		break;
	case 'know': 
		p_kontainer.innerHTML="known";
		q_kontainer.innerHTML="knew"; 
		break;
	case 'lay': 
		p_kontainer.innerHTML="laid";
		q_kontainer.innerHTML="laid"; 
		break;
	case 'lead': 
		p_kontainer.innerHTML="led"; 
		q_kontainer.innerHTML="led";
		break;
	case 'lean': 
		p_kontainer.innerHTML="leant";
		q_kontainer.innerHTML="leant"; 
		break;
	case 'leave': 
		p_kontainer.innerHTML="left"; 
		q_kontainer.innerHTML="left";
		break;
	case 'lend': 
		p_kontainer.innerHTML="lent";
		q_kontainer.innerHTML="lent"; 
		break;
	case 'let': 
		p_kontainer.innerHTML="let"; 
		q_kontainer.innerHTML="let";
		break;
	case 'lie': 
		p_kontainer.innerHTML="lain";
		q_kontainer.innerHTML="lay"; 
		break;
	case 'light': 
		p_kontainer.innerHTML="lit";
		q_kontainer.innerHTML="lit"; 
		break;
	case 'lose': 
		p_kontainer.innerHTML="lost";
		q_kontainer.innerHTML="lost"; 
		break;
	case 'make': 
		p_kontainer.innerHTML="made";
		q_kontainer.innerHTML="made"; 
		break;
	case 'mean': 
		p_kontainer.innerHTML="meant";
		q_kontainer.innerHTML="meant"; 
		break;
	case 'meet': 
		p_kontainer.innerHTML="met";
		q_kontainer.innerHTML="met"; 
		break;
	case 'pay': 
		p_kontainer.innerHTML="paid";
		q_kontainer.innerHTML="paid"; 
		break;
	case 'put': 
		p_kontainer.innerHTML="put";
		q_kontainer.innerHTML="put" 
		break;
	case 'read': 
		p_kontainer.innerHTML="read";
		q_kontainer.innerHTML="read"; 
		break;
	case 'ride': 
		p_kontainer.innerHTML="ridden";
		q_kontainer.innerHTML="ridden"; 
		break;
	case 'ring': 
		p_kontainer.innerHTML="rung";
		q_kontainer.innerHTML="rang"; 
		break;
	case 'rise': 
		p_kontainer.innerHTML="risen";
		q_kontainer.innerHTML="rose"; 
		break;
	case 'run': 
		p_kontainer.innerHTML="run";
		q_kontainer.innerHTML="run"; 
		break;
	case 'say': 
		p_kontainer.innerHTML="said";
		q_kontainer.innerHTML="said"; 
		break;
	case 'see': 
		p_kontainer.innerHTML="seen";
		q_kontainer.innerHTML="saw"; 
		break;
	case'seek':
		p_kontainer.innerHTML="sought";
		q_kontainer.innerHTML="sought";
		break;
	case'sell':
		p_kontainer.innerHTML="sold";
		q_kontainer.innerHTML="sold";
		break;
	case'send':
		p_kontainer.innerHTML="sent";
		q_kontainer.innerHTML="sent";
		break;
	case'set':
		p_kontainer.innerHTML="set";
		q_kontainer.innerHTML="set";
		break;	
	case 'sew': 
		p_kontainer.innerHTML="sewed";
		q_kontainer.innerHTML="sewed"; 
		break;
	case 'shake': 
		p_kontainer.innerHTML="shaken";
		q_kontainer.innerHTML="shook"; 
		break;
	case 'shed': 
		p_kontainer.innerHTML="shed";
		q_kontainer.innerHTML="shed"; 
		break;
	case 'shine': 
		p_kontainer.innerHTML="shone";
		q_kontainer.innerHTML="shone"; 
		break;
	case 'shoot': 
		p_kontainer.innerHTML="shot";
		q_kontainer.innerHTML="shot"; 
		break;
	case 'show': 
		p_kontainer.innerHTML="shown";
		q_kontainer.innerHTML="showed"; 
		break;
	case 'shrink': 
		p_kontainer.innerHTML="shrunk";
		q_kontainer.innerHTML="shrank"; 
		break;
	case 'shut': 
		p_kontainer.innerHTML="shut";
		q_kontainer.innerHTML="shut"; 
		break;
	case 'sing': 
		p_kontainer.innerHTML="sung";
		q_kontainer.innerHTML="sang"; 
		break;
	case 'sink': 
		p_kontainer.innerHTML="sunk";
		q_kontainer.innerHTML="sank"; 
		break;
	case 'sit': 
		p_kontainer.innerHTML="sat";
		q_kontainer.innerHTML="sat"; 
		break;
	case 'slay': 
		p_kontainer.innerHTML="slain";
		q_kontainer.innerHTML="slew"; 
		break;
	case 'sleep': 
		p_kontainer.innerHTML="slept";
		q_kontainer.innerHTML="slept"; 
		break;
	case 'slide': 
		p_kontainer.innerHTML="slid";
		q_kontainer.innerHTML="slid"; 
		break;
	case 'smell': 
		p_kontainer.innerHTML="smelt";
		q_kontainer.innerHTML="smelt"; 
		break;
	case 'speak': 
		p_kontainer.innerHTML="spoken";
		q_kontainer.innerHTML="spoke"; 
		break;
	case 'spend': 
		p_kontainer.innerHTML="spent";
		q_kontainer.innerHTML="spent"; 
		break;
	case 'spin': 
		p_kontainer.innerHTML="spun";
		q_kontainer.innerHTML="span"; 
		break;
	case 'split': 
		p_kontainer.innerHTML="split";
		q_kontainer.innerHTML="split" 
		break;
	case 'spread': 
		p_kontainer.innerHTML="spread";
		q_kontainer.innerHTML="spread"; 
		break;
	case 'spring': 
		p_kontainer.innerHTML="sprung";
		q_kontainer.innerHTML="sprang"; 
		break;
	case 'stand': 
		p_kontainer.innerHTML="stood";
		q_kontainer.innerHTML="stood"; 
		break;
	case 'steal': 
		p_kontainer.innerHTML="stolen";
		q_kontainer.innerHTML="stole"; 
		break;
	case 'stick': 
		p_kontainer.innerHTML="stuck";
		q_kontainer.innerHTML="stuck"; 
		break;
	case 'sting': 
		p_kontainer.innerHTML="stung";
		q_kontainer.innerHTML="stung"; 
		break;
	case 'stink': 
		p_kontainer.innerHTML="stunk";
		q_kontainer.innerHTML="stank"; 
		break;
	case 'strike': 
		p_kontainer.innerHTML="struck";
		q_kontainer.innerHTML="struck"; 
		break;
	case 'strive': 
		p_kontainer.innerHTML="striven";
		q_kontainer.innerHTML="strove"; 
		break;
	case 'swear': 
		p_kontainer.innerHTML="sworn";
		q_kontainer.innerHTML="swore"; 
		break;
	case 'sweep': 
		p_kontainer.innerHTML="swept";
		q_kontainer.innerHTML="swept"; 
		break;
	case 'swim': 
		p_kontainer.innerHTML="swum";
		q_kontainer.innerHTML="swam"; 
		break;
	case 'swing': 
		p_kontainer.innerHTML="swung";
		q_kontainer.innerHTML="swung"; 
		break;
	case 'take': 
		p_kontainer.innerHTML="taken";
		q_kontainer.innerHTML="took"; 
		break;
	case 'teach': 
		p_kontainer.innerHTML="taught";
		q_kontainer.innerHTML="taught"; 
		break;
	case 'tear': 
		p_kontainer.innerHTML="torn";
		q_kontainer.innerHTML="tore"; 
		break;
	case 'tell': 
		p_kontainer.innerHTML="told";
		q_kontainer.innerHTML="told"; 
		break;
	case 'think': 
		p_kontainer.innerHTML="thought";
		q_kontainer.innerHTML="thought"; 
		break;
	case 'throw': 
		p_kontainer.innerHTML="thrown";
		q_kontainer.innerHTML="threw"; 
		break;
	case 'tread': 
		p_kontainer.innerHTML="trodden";
		q_kontainer.innerHTML="trood"; 
		break;
	case 'understand': 
		p_kontainer.innerHTML="understood"; 
		q_kontainer="understood";
		break;
	case 'wake': 
		p_kontainer.innerHTML="woken";
		q_kontainer.innerHTML="woke"; 
		break;
	case 'wear': 
		p_kontainer.innerHTML="worn";
		q_kontainer.innerHTML="wore"; 
		break;
	case 'weave': 
		p_kontainer.innerHTML="woven";
		q_kontainer.innerHTML="wove"; 
		break;
	case 'weep': 
		p_kontainer.innerHTML="wept";
		q_kontainer.innerHTML="wept"; 
		break;
	case 'win': 
		p_kontainer.innerHTML="won";
		q_kontainer="won"; 
		break;
	case 'wind': 
		p_kontainer.innerHTML="wound";
		q_kontainer.innerHTML="wound";
		break;
	case 'withdraw': 
		p_kontainer.innerHTML="withdrawn";
		q_kontainer.innerHTML="withdrew"; 
		break;
	case 'wring': 
		p_kontainer.innerHTML="wrung";
		q_kontainer.innerHTML="wrung"; 
		break;
	case 'write': 
		p_kontainer.innerHTML="written";
		q_kontainer.innerHTML="written"; 
		break;
	default:
		p_kontainer.innerHTML = "none";
		q_kontainer.innerHTML = "none";
		alert("cannot find verb");
		card.style.height = "1px"
		card.style.transition = "1s"; 
		break;
	} 
	}
