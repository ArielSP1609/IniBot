 const { color } = require('../function.js')
 const fs = require('fs')

 module.exports = {
 monayawal: 1000,
 limitawal: 15,
 info: {
   owner: ["628xxx@s.whatsapp.net","628xxx@s.whatsapp.net"], //Yang Awal Nomor Bot Yang Kedua Nomor Lu
   arielspkece: ["628xxx"], //Nomor Lu
   ownerName: "Nama Lu", //Nama Lu
   wmAriel: "628xxx", //Nomor Lu
   instagramLu: "https://instagram.com/aespibotz", //Youtube Lu
   botName: "Nama Botz", //Nama Bot Lu
   duituntukowner: "https://saweria.co/arielsp", //Saweria Lu
   version: "^2.0.0"
   },
 rpg: {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
   },
 textpro: {
      blackpink: "https://textpro.me/create-blackpink-logo-style-online-1001.html",
       lightglow: "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",      
        glass: "https://textpro.me/green-glass-text-effect-910.html",
        hoorror_blood: "https://textpro.me/horror-blood-text-effect-online-883.html",
        sand: "https://textpro.me/sand-engraved-3d-text-effect-989.html",
        magma: "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        sketch: "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
        batman: "https://textpro.me/make-a-batman-logo-online-free-1066.html",
        demon: "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        ice: "https://textpro.me/ice-cold-text-effect-862.html",
        sci_fi: "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
        sea_metal: "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
        skeleton: "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html",
        transformer: "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
       warning: "https://textpro.me/road-warning-text-effect-878.html",
      denim: "https://textpro.me/denim-text-effect-online-919.html", 
      neon: "https://textpro.me/neon-text-effect-online-963.html",
      arielpetir: "https://textpro.me/online-thunder-text-effect-generator-1031.html",
      waterpiperariel: "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html",
      bussines3d: "https://textpro.me/3d-business-sign-text-effect-1078.html",
      stoneariel3d: "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
      neon3dariel: "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
      impresiveariel: "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
      neondevil3dariel: "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
      underwater3d: "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html",
      bears3dariel: "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
      fireworkbucin: "https://textpro.me/firework-sparkle-text-effect-930.html",
      metaldarkariel: "https://textpro.me/metal-dark-gold-text-effect-984.html",
      halloweenariel: "https://textpro.me/halloween-fire-text-effect-940.html",
      captainamerikabyariel: "https://textpro.me/captain-america-text-effect-905.html",
      spacetext: "https://textpro.me/create-space-text-effects-online-free-1042.html",
      plastic3d: "https://textpro.me/plastic-bag-drug-text-effect-867.html",
      dropwater3d: "https://textpro.me/dropwater-text-effect-872.html",
      arielpetir2: "https://textpro.me/create-thunder-text-effect-online-881.html",
      avengerslogo3d: "https://textpro.me/create-3d-avengers-logo-online-974.html",
      specialrainbow3d: "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",
      brokenglass: "https://textpro.me/broken-glass-text-effect-free-online-1023.html",
      wonderfulgravity3d: "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
      futuristicneon3d: "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
      skytext3d: "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
      robotr2: "https://textpro.me/robot-r2-d2-text-effect-903.html",
      natal3d: "https://textpro.me/chrismast-gift-text-effect-869.html",
      matrixstyle: "https://textpro.me/matrix-style-text-effect-online-884.html",
      }
 }
  
  const ArielSP = require.resolve(__filename)
  fs.watchFile(ArielSP, () => {
  fs.unwatchFile(ArielSP)
  console.log(color(`New! >`, 'yellow'), color(`${__filename}`, 'orange'))
  delete require.cache[ArielSP]
  require(ArielSP)
  } )
