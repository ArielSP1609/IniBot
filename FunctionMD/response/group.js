  const { getBuffer } = require('../function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/cbe00aa8289da5c41346d.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcome👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `*Halo @${num.split("@")[0]} Member Baru Di ${metadata.subject}* *Patuhi Rules Di Group Ini*`, 
         location: { 
          jpegThumbnail: await getBuffer(ppuser) 
         }, 
         buttons: button, 
         footer: 'Ariel SP', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} Keluar Dari Group ${metadata.subject}*\nMungkin Dia Sedang Menculik Waifu Makanya Keluar Group`, 
           location: { jpegThumbnail: await getBuffer(ppuser) 
          }, 
           buttons: button, 
           footer: 'Ariel SP', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
