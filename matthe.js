// Sorununz olursa Matthe#0001 ulaşınız.

const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")//Matthe#1000
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)//Youtube Matthe
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {
  
  if(message.content === '.tag') {
    message.channel.send(`\`${ayarlar.tag}\``)//Youtube Matthe
  }
  })

client.on("ready", () => {
    console.log(chalk.redBright(`tm`))
})

//
client.on('guildMemberAdd', async (member) => {
  /////////////////////////
     //Kanal Tanımı
     ////////////////////////////////////////
    let viruskanal = client.channels.cache.get("855084357651398676")
  ////////////////////////////////////////
  //Güvenlik TanımlarıS
  ////////////////////////////////////////
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
  
  /////////////////////// /////////////////
  //Embed
  ////////////////////////////////////////
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
     <a:uzaygem:837999865224233001> Aramıza Hoşgeldin **${virususer.username}** !
  
     <a:uzaygem:837999865224233001> Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
  
     <a:uzaygem:837999865224233001> <@&855043582192386069> Rolundekiler Senle En Kısa Zamanda İlgilenicek
  
     <a:uzaygem:837999865224233001> İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.

     <a:uzaygem:837999865224233001> Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
     <a:uzaygem:837999865224233001> Hesabın Güvenlik Durumu: **${viruj}**
  
     <a:uzaygem:837999865224233001> Kurallari Okumayi Unutma
    
    `)
    .setColor("#00ff1f")
    //.setImage("https://cdn.discordapp.com/attachments/706505340417736736/794296050121965568/ezgif-6-9ab9144abf46.gif")
    .setImage("http://31.media.tumblr.com/e590bf132ffb534c883b8c6199586991/tumblr_no3maux9dT1tchrkco1_500.gif")
    .setTitle("Aramıza Yeni Birisi Katıldı !")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter("Botlar Gezegeni")
    ////////////////////////////////////////
    //Kanala Gönderme
    ////////////////////////////////////////
    viruskanal.send(`<@&855043582192386069> <@${member.id}>`, hgembed) ;
  })



client.login(process.env.TOKEN)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
//Youtube Matthe


