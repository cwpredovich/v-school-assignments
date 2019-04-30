// I want this version of my RPG to have music and sound effects. It MIGHT also include a narrator with a computer voice actually talking out loud to the player!
 //      pathway to the game:
 //
 //      cd dev/assignments/projects/rpg
 //
 //
 //


   /////////////////////
  /// Node Modules ////
 /////////////////////

 var readyUp = require('readline-sync');
 var sound = require('play-sound')(opts = {})
 // var say = require('say');
 
 


   //////////////////
  /// Variables ////
 //////////////////
 
 var gameBanner = `  #####  #        #####     ######                       
 #     # #       #     #    #     # #    # #    # #    # 
 #       #       #          #     # #    # ##   # #   #  
  #####  #       #          ######  #    # # #  # ####   
       # #       #          #       #    # #  # # #  #   
 #     # #       #     #    #       #    # #   ## #   #  
  #####  #######  #####     #        ####  #    # #    # 
 `
 
 var punkSkeleton = `
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0kdollllodk0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo;''',:ccc:;,'.';oONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx,.'lx0NWWMMMMMWX0xc,.,o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:.,xXWMMMMMMMMMMMWWMMNOc..oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc ;KMWMMMMMMMMMMMMWWMMMMW0;.;0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.'OMMMMMMMMMMMMMMMMMMMMMMMXl.;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl :NMMMMMMMMMMMMMMMMMMMMMMMMK, oWMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc cNMMMMMMMMMMMMMMMMMMMMMMMMN: .oKWMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo ;XMMMMMMMMMMMMMMMMMMMMMMMMO'.:,'dNMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO..xWMMMMMMMMMMMMMMMMMMMMMMXc cN0' cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.'OWMMMMMMMMMMMMMMMMMMMMNl.;KMWc  cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo..lddooodxOKNWMMWWMMMMWd.,0MMNc  .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMWd..;ccc:;;,,;:lkKWMMMM0''0WMM0'   cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKo;l0MMMMMMMMK;.co::lxkkkxdc;,,:xKWWo.dMMWNl    :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd;,,.lWMMWKodd;:o,    .lkkkkkkkdc,,lO:,0MWNd.    cWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0dlll;;k0x,;XMNd;,..oNd      ,xkkkkkkkkxo;'.'0WXo.    .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNXXWN00KNMMMMMMMMMMMMMMMMMXo.  ...dKOd,.co:;O0,.kWk.    ;x0Kkoccloxkkko'.lk;      cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl;;;;'.'';lxkOO0000000OOOOk:    .::;;;;,::..kWX: .oOklccoONWW0;    .,lxkl.        ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'.lk: .dkxd:,,,,,;;;;;;,,,'''.... ,k00OOOkxo;:c;.   :XW0l'.;0WX:       :d'.;.     ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l.'k0d' oK;cNWNNNNNNNNNNNNNNNNNX0kl.'kXWWWWNKOdc'..   lWO'    lWNl       cd':kd'  .cXWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMNk:.'oKW0:. lKo:kXXXXXNNNNWWNNNNNNNNX0o.,kXWNXKOl;'':o,  '0MOld: .xWMXd,...,dXNOxdc..:kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo,.;xXWNKkl, .co::,....''',;:ccldxkkOOO:.:k0Oo:;'':xOkc.  .xNNNWOlkNN0xl::lx0XNXd;;lxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxc'.;oOKkl;'',;,,;:;,;coxkkxxdolc:,.....';;..oxc'..,o0NW0d' :: 'loKKKNKOOx:..,...';;,dXWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMWXOdl;..;oO0x:'.;lx0XNNNWMWWMMMMMMMMMMMMM0,        :xd:..'ckXWKko.'OOd;..:,;l,;:,':dd,  .oKXNX0OOXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMNkc..':lxKNKl'.:xKWWMMMMMMMMMMMMMMMMMMMMMMNc        'dxOOd;'.'okxdd:.oNW0xk:,c'.;ccdkd,.:' .::cc:..OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMWKd;. 'kNMMMXd'.lKWWMMMMMMMMMMMMMMMMMMMMMMMMMk.       .odONW0xdo..;loxd'.dNWWWXNMX0Kkdl:'.cko. :OKKo'oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMWMMMWMWNkc,'.  oWMWN0;.:0WMMMMMMMMMMMMMMMMMMMMMMMMMMMWl       .lxONWKd:,'':oxxxo...;lxO0kdl:'.  .:oxOk; 'xOc.oNMMWNX0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMW0o;,;;:l, .o00d'.oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,      'ok0NXk;..,cdxdddxl.'c'..',. ...  .oxxx0Ko. ';'.;ddc;;'.dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMNx;,:lccoxoo:.....'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.    .;dOXWNOdc..',,....'. .;..okx; ,oc..oxxxxKNO,.:xxc..:oxk;,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMWd.:dlcdOdckk:lx, .xWMMMMMMWMMMMMMMMMMMMMMMMMMMMMMMX; ...,lkKWWWWKd;.  ..',,,'. .'.:kkc.,;..;dxlodkXW0:.,dxd,.dNWd'xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMWM0'.,cxOdcdKk;dKc:x,;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl 'oddk0NMMMN0:...,,;cllccllc' .lkc..:;,lx0Ko,:xOxd:.'dxxd:';:.cNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMd  .od:dXNx:xXo.,Kk':KMMMMMMMMMMMMMMMMMMMMMMMMMMMWd..lxxx0WMMWXd' .;;'.;l:..clllc' ',...'cdOXWNO;......':dxxxxdl;.'dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMWc    .lNKlc0No;:.lNO,;0MMMMMMMMMMMMMMMMMMMMMMMMMNd. :ddxxk0WWKo. ,c,.'cc'  .cllll,  .':lxOKWMMWKc.   .cxxxdlc;,'.. .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMX:   'c:;,oXNo,xNd':l'.lWMMMWWMMMMMMMMMMMMMMMMMMWx. ;ddloxxxOOl. ,c. .,,.   ,lllll; .:xxxxOO000K0l.'ollol:,;;::.    lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMWX:  ;KM0;':c;;kWWWx.'xo,lKWMWWMMMMMMMMMMMMMMMMMMMK; ,dxc;oocdo. ,:.  ..    .;lllll:. ';,........'..;xl;..,xKX0x,  .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMWNc 'OWK:c0O;'OWWMMWO:cdd,,OWMMMMMMMMMMMMMMMMMMMMMMO. ,dd''l;.. 'c.         .:lc:llc.        ..'',,,;'    ,0MWKkc .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMWk;:l:c';KWx;kWWWMMMMNOolloKMMMMMMMMMMMMMMMMMMMMMWO;.. 'ol..c' .c'          .cl,'clc.    .':lodxxd:.       ,KMXOo..xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMXl:kNO, .;cc:kWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl..:o;..lc.  .:,           .cc..coc.  .;oxxdoddc.    .'cx; lNWKk; ;KWWXK0OO0KNWMMMMMMMMMMMMMMMMMMMMMMMM
 MMMMMWk;c0Ol,.;Kk';0WMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;  .;:l;..cc..;;            .l; .cll'  .''..':dl. .':d0NMMO'.OMXOo. ,:,.......';lONMMMMMMMMMMMMMMMMMMMMM
 MMMMWx.;lloc':OxcdNMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.      .. .'.':.            'c. .:oo;.    .;lo;,ckKNMMWMMMNc lWW0x;  .,,;;,,;:;'..:0WMMMMMMMMMMMMMMMMMMM
 MMMMW0dxkKK;.cldKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWM0'           .:.             ,:. .:lo;. .',;,'..xWMMMWX0koc;. ,KMN0d' .,...  'lllc. ,OMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMNkdkXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWNo          .:,              ;;. .:ll:.    ..''c0KOdl;..      '0MWXOo.      .clccl:. oWMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWNN0,        .;:.              ,'  .;llc. .,;,..,:,..           cXKkoldd,    'cc,.;lc. lWMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKkoc;,''.        .;.              .,.  .,lll' .'.                  .xKdc'..;:. .;c,. .:o:..xMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl,..';codxxxxxdol:,'.                '.   'lll;                      .c:';lo:.   .;.   ;ll, .OMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'.'cdOKXXKKKK0KKKKXXXKOxoc,.           .     ....                         lNMWK;.;.     'llc. ;XMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo..:k0K0OOkkkkkkkkkkkkkkOO0KKKOxl,.                                          lNMMXool.    .cc:;. oWMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,.;kK0OkkOOOkkkkkkkkkkOOOOkkkkkO0KKOdc..            .,:ldxOOOOxl,.          ''.dWWKkx,    .:;.,; .kMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'.l0OOOkkkkOOOkkOkkkkkkkkkkkOkkdocccdOKOkxc.    .;lxOXWWNKOxolc::;.     .':dON0,,KWKk:    .,' .:, '0MMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:.cOOOOkkkkkOOkkkkkkkOkkkOkdl:,..... .'cxkO0Ox:. .oKWNOocccclodddol:.  'dONWMMMNc.kWKd.    ..  'c' :NMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk..xOkkOkkkkkkkkkkkkOOOOko;'....,;:;::'. ':okk0K0d;..:ccdkKNNXKOkdolc;. oMMMMMMMWc.xN0l.       .:l. lWMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo ,kOkkOkkkkkkkkkkxocccl:. ';:llllc..;c:.  .okkkO0KOl..;kXXX0Oxolllol, .OMMMMMMMWc.xNO;        'lc. dMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd 'xOkkkkkkkkkkkkd'..,'.  'llloxOx:.  .cc.  .oOOkkO0K0d;.':cclllol:,'.'kWWMMMMMMN:.ONk'       .:lc..kMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO. :kkkkOOkkkOOkl..lKWNd. 'x0XNWW0c.   ,l;.. ;kkkkOkkO0KOl.    .,c,.,dXMMMMMMMMMK;'0Nx.       ,:::..OMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd..;ooc:,'.,:l;..dNMWWk. .oXMMMMXd;.  ,l:,. 'xOkkOkkOkk0K0d,    'lkNMMMMMMMMMMMk.:XXd.      .:.,:..OMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXk;  ....',,.   ,kNWXkc'.  'kX0kxdolc,',c;'. ,kOkkOOOkkOkkO00x:. ;kXMMMMMMMMMMMWl.oNKx'     .;. ':..OMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;  .',:clc;:, .lKXkc,,:dx:  'llllllc:;'..  .,dOkkkkkkkkkkkkkkOKOl'.,dKWMMMMN0xoc' '::c.     ',  ,;..OMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc .:lllloo,. .:kOdlcokOxc,... .,;,'.....,:looxOOkkkkkkOOkkkkkkOkOK0x;..cxxoc::ll:''....     .,.  ';..OMMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK; 'oxxk0Kx, ,ON0Okkxl,'.,:lddc'...';codkOkkkkkkkkkkkkkkkkkkkkkOOkkO0Kkc.  .l0Xx:;c:;;,;'    ..   '; .kWMMMMMMMMMMMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX; .kNWMWW0c..d0xl,.  ;dkkOOOOkkxdxkOOkkOOkkkkkkkkkkkkkkkkkkOOkkkkkkkOO00d,..:;,cc;::':c.    .    ..  ;llcllodxOKWMMMMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo .lXMWNXOd:....,;. .lOkkkOOOkkOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOkkOOkO00c..cl;;l:'cc.                        .,lONMMMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK; .oOxdollll:,;;'.  ,ldkkkkOkkOOOkkkkkkOkkkkkkkkkkkkkkkkkkkOOkkkkkOkkOxlc,.;;'cd;.lc.                  ..',;;:::,.;0WMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0; .,cllc:,'....';oo;..':oxOkkkOkkkkkkkkkkkkkkkkkkkkkkkkkkkkOkkOOkOxl:;co:...;l,,o:.             .,coxO0XNWWNNXXKk,'OMMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo' ......,cdkKNWMMWKxc'..,cdkOOOkkkkkkkkkkkkkkkkkkkkkkkkOkkOkkOkl;;ll:;:od;..,l;          .'cdOXWWX0kdlc:clloodx: lWMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkdlox0XWMMMMMMMWWMMWNOo;..':oxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOkc,c:;:ldl;;:c,.. .::.   .:d0NWKkoc;,;:cc::oxOKNWXl'xWMMMM
 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxc'..,cdkOkkkkkkkOOOkkkkkkkkkkkOkkOx;'..co;,,,;'..';cdO0Oo'..oOkl;,,,,,cdkO0KXXNNKkl:cOWMMMMM`;
 
 var player = {
     name: '',
     health: 100,
     primaryAttack: 'punch',
     secondaryAttack: 'hit with skateboard',
     fightsWon: 0,
     isAlive: true,
     inventory: [' skateboard', ' backpack'],
     printInventory: function () {
         console.log(`\n    Name: ${this.name}\n    Health: ${this.health}\n    # of Fights Won: ${this.fightsWon}\n    Inventory: ${this.inventory}.`);
     },
     attackDmg: function () {
         return Math.floor(Math.random() * 40 + 1)
     }
 }
 
 
 var gameOptions = ['Skate', 'Check Stash'];
 
 var ohCrapOptions = ['Fight', 'Try to run'];
 
//  var loot = [];
 
 
   ////////////////////
  //    Enemy     ////
 /// Constructor ////
////////////////////
 
 function Enemy (type, spelling, health, strength, battleCry, primaryAttack, secondaryAttack, demise, gloat, loot, healthGive) {
     this.type = type;
     this.spelling = spelling;
     this.health = health;
     this.strength = strength;
     this.battleCry = battleCry;
     this.primaryAttack = primaryAttack;
     this.secondaryAttack = secondaryAttack;
     this.demise = demise;
     this.gloat = gloat;
     this.loot = loot;
     this.healthGive = healthGive;
     this.attackDmg = function () {
         return Math.floor(Math.random() * this.strength + 1)
     }
 }
 
    /////////////////
   /// Functions ///
  /////////////////
 
 function skate(){
    //  console.clear();
     var battleChance = Math.floor(Math.random() * 100 + 1)
     if (battleChance <= 33) {
         sound.play("new-challenger.mp3");
         console.log(`\n \n \nDang, ${player.name}! You're in trouble now!`)
         fight();
     } else if (battleChance > 33) {
         console.log(`\n\nCool. You're still skating...`)
     }
 }
 
 function playerAttackType () {
     var typeOdds = Math.floor(Math.random() * 2 + 1);
     var attackType;
     if (typeOdds === 1) {
         attackType = player.primaryAttack;
         return attackType;
     } else {
         attackType = player.secondaryAttack;
         return attackType;
     }
 }
 
 function enemyAttackType (enemy) {
     var typeOdds = Math.floor(Math.random() * 2);
     var badAttackType;
     if (typeOdds === 1) {
         badAttackType = enemy.primaryAttack;
         return badAttackType;
     } else {
         badAttackType = enemy.secondaryAttack;
         return badAttackType;
     }
 }
 
 function fight(){
     var enemy = genRandomEnemy();
     if (enemy.type === "Mackenzie") {
         enemy.type = enemy.spelling[Math.floor(Math.random() * enemy.spelling.length)];
     }
     console.log(`${enemy.type} showed up trying to get you!!! \n ${enemy.type}: "${enemy.battleCry}"`);
     var cannotEscape = true;
     while (player.health > 0 && enemy.health > 0 && cannotEscape){
         var ohCrapChoice = readyUp.keyInSelect(ohCrapOptions, "Fight or try to run?? ")
         if (ohCrapChoice === 0){
            sound.play('grunting.mp3', function(err){
                if (err) throw err
                });
             var playerAttack = player.attackDmg();
             var attackType = playerAttackType();
             console.log(`\n\nYou used your attack, ${attackType}, and took ${playerAttack} health from the ${enemy.type}. `)
             enemy.health -= playerAttack;
             var enemyAttack = enemy.attackDmg();
             var badAttackType = enemyAttackType(enemy);
             console.log(`\nThe ${enemy.type} used their attack, ${badAttackType}, and took ${enemyAttack} health from you.`);
             player.health -= enemyAttack;
             if (player.health < 0) {
                 console.log(`${enemy.type}: "${enemy.gloat}"`)
             } else if (enemy.health < 0) {
                 if (enemy.strength = 30) {
                     console.log(`\nSick! You defeated ${enemy.type} and found new loot:  ${enemy.type}'s${enemy.loot}. By defeating your enemy, you also regained ${enemy.healthGive} health!`);
                     player.inventory.push(` ${enemy.type}'s${enemy.loot}`)
                     player.fightsWon++;
                     player.health += enemy.healthGive;
                     console.log(`${enemy.type}: "${enemy.demise}"`);
                 } else {
                 console.log(`\nSick! You defeated ${enemy.type} and found new loot:  ${enemy.loot}. By defeating your enemy, you also regained ${enemy.healthGive} health!`);
                 player.fightsWon++;
                 player.inventory.push(enemy.loot);
                 player.health += enemy.healthGive;
                 console.log(`${enemy.type}: "${enemy.demise}"`);
                 }
             }
         } else if (ohCrapChoice === 1){
             if (Math.random() > 0.5){
                 cannotEscape = false;
                 sound.play('run-away');
                 console.log(`\nYou managed to get away! Live to skate another day...`)
             } else {
                 cannotEscape = true;
                 console.log(`\nYou can't get away right now!`)
             }
         }
     }
 }
 
 function genRandomEnemy(){
     var enemyPick = Math.floor(Math.random() * 4);
     var currentEnemy;
     switch (enemyPick) {
         case 0:
             currentEnemy = new Enemy('Lunatic Bum', '', 40, 15, 'spare change?', 'shouts curse words at you', 'stabs you with dirty needle', "(Ranting and speaking nonsense) I'm dying but I don't care. I'll come back as a shopping cart and haunt you forever!", "HA HA HA HA HAAA! (Ranting and speaking nonsense) I told you Oprah is the President and she sent you to kill me, but you can't kill me because I'm a pretty butterfly!", " dirty t-shirt and tuberculosis", 10);
             break;
         case 1:
             currentEnemy = new Enemy('Missionaries', '', 45, 35, 'Hi! Have you heard of the LDS church?', 'sings choir songs to you', 'shows up late to dinner at your house', "You beat us this time, but we'll just leave you for the next set of Elders who serve here", "Gotcha! Ready to get baptized?", " pass along cards", 50);
             break;
         case 2:
             currentEnemy = new Enemy('Mackenzie',['MkKenzie', 'Kinzeee', 'Muhckenzey', 'Maken-Z', 'Maquensie'], 50, 30, 'Wanna get married??', 'flirts with your roommates', 'invites you to meet her parents', 'but our Tinder profiles had so much in common! :(', "Hold on, let me take a selfie!", ` best friend's phone number`, 45);
             break;
         default:
             currentEnemy = new Enemy('Bad Driver', '', 50, 35, "Get out of the way! I'm late to the Utah Jazz game!", "Runs red light, pulls a double u-turn, and nearly runs you over", "Merges across 4 lanes of traffic to make a right turn... DIRECTLY INTO YOU!", "Well, at least I have insurance...", "Hah! Punk kid shouldn't have been on the street anyway!", " car keys for a Subaru outback", 30);
     }
     return currentEnemy;
 }
 
 
 
 
 
       ///////////////////
      /// Game Intro ////
     ///////////////////
 

 
 
                 /* ***************  MUSIC TIME! *************** */
 
 
 console.log(`\n-=-=-=-=-=-= SLC PUNK! =-=-=-=-=-=-`);
 sound.play("capcom-intro.mp3");
 console.log(`\nPress Return to Start Game`)
 console.log(punkSkeleton);
 
 var storyline = readyUp.question("\nPress Return to Start Game");
 console.clear();
 console.log(gameBanner);

var themeMusic = sound.play('rpg-soundtrack.mp3', function(err){
    if (err && !err.killed) throw err
})
 
 
 console.log(`INTRO:  It's Summer 1985. You just finished your junior year of high school in Oakland, CA when your parents decide to pick up and move everyone to Utah. Why Utah??!! \n Back in the Bay Area your homies were down to skate, the girls were fine, you could get anywhere on BART, and Sundays were chill days not church days. \n Utah is going to be a very different beast...\n \n`)
 
 
 /// Player Name ///
 player.name = readyUp.question("New city, new name. What will people call you here? ")
 
 /// Ready Check ///
 if (readyUp.keyInYN(`\n${player.name}, Are you ready? `)) {
     console.log("\n \nCruising through SLC...");
     } else {
     player.health = 0;
     }
 
 
 
    /////////////////
   /// Game Loop ///
  /////////////////
 
 while (player.health > 0) {
     var choice = readyUp.keyInSelect(gameOptions, "What do you want to do?\n" )
     switch (choice) {
         case 0:
             skate()
             break;
         case 1:
             player.printInventory()
             break;
         default:
             player.health = 0;
         }
     }
 console.clear();
 themeMusic.kill();
 sound.play("game-over.mp3");

// GAME OVER SCREEN //

 console.log(`\n    Man, what a drag. You died. At least you managed to win ${player.fightsWon} fight(s)... Better luck next time.`)
 console.log(`\n\n    All game characters based on real people. However no bums, bad drivers, missionaries, or Macgenxie's were actually hurt in the making of this game.\n\n`)

 