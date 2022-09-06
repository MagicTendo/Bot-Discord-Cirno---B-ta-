var Discord = require("discord.js")
const Canvas = require('canvas')
var fetch = require('node-fetch')
var rm = require('discord.js-reaction-menu')
var google = require('google')
var ud = require('urban-dictionary')
var math = require('mathjs')
var ffmpeg = require('ffmpeg')
var fs = require("fs")
var ytdl = require('ytdl-core')
var ytdl = require('ytdl-core-discord')
var Levels = require('discord-xp')
var client = new Discord.Client()
var bot = new Discord.Client()
var ownerID = 610493430325313549
var id = 217456
var definition = 'word'
var coin = 0
var cirnocoin = 0
var arcadecoin = 0
var exampleEmbed = new Discord.MessageEmbed()
var extrathicc = "卂乃匚刀乇下厶卄工丁长乚从ん口尸㔿尺丂丅凵リ山乂丫乙"
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var easy = Math.floor(Math.random() * 100)
var easy2 = Math.floor(Math.random() * 100)
var webhookID = 727263389621026920
var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())
var arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10]
arr.reverse()
var used = process.memoryUsage().heapUsed / 1024 / 1024
let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10
var messageping = "Faire ça, fera ping tous les membres du serveur. Êtes vous sûre de vouloir faire ça ?"
var messagepingid = id

var help = [
  new Discord.MessageEmbed()
    .setColor('#00e3eb')
    .setTitle('__Commande général__')
    .setURL()
    .setAuthor('')
    .setDescription("__Ne soyer pas baka, ne mettez pas les crochets !__\n\n\n**__>help__** Pour afficher l'aide,\n\n**__>ping__** Pour voir ma latence,\n\n**__>infobot__** Pour avoir des infos sur moi,\n\n**__>update__** Pour voir si j'ai eu des uptades et ce sa rajoute,\n\n**__>avatar [@mention]__** Pour afficher votre avatar si il y a rien après la commande,\n\n**__>regles__** Pour connaitre les règles de tous les jeux,\n\n**__>badges__** Pour voir les badges que vous avez obtenue,\n\n**__>achievements__** Pour voir les objectifs,\n\n**__>changeprefix__** Pour changer le préfix,\n\n**__>faq__** Liste de questions/réponses sur moi et mon créateur,\n\n**__>say [texte]__** Pour me faire dire un truc,\n\n**>sayembed** Même principe que >say mais en embed,\n\n**__>suggestion [votre suggestion]__** pour suggéré un ajout à mon créateur,\n\n**__>bugreport [votre bug]__** pour signaler à mon créateur un bug,")
    .setThumbnail('https://zupimages.net/up/20/33/j0w7.jpg')
    .setTimestamp()
    .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  new Discord.MessageEmbed()
    .setColor('#00e3eb')
    .setTitle('65235633223')
    .setURL()
    .setAuthor('')
    .setDescription("fulvjhbknl!jioumyiltjkdhgv;jbn,kjiuolytjfhgbnj,kl;:hi;,")
    .setThumbnail('https://zupimages.net/up/20/33/j0w7.jpg')
    .setTimestamp()
    .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
]

var rando_imgs = [
  'https://zupimages.net/up/20/21/l89h.jpg',
  'https://zupimages.net/up/20/21/51re.png',
  'https://zupimages.net/up/20/21/3lqy.jpg',
  'https://i.kym-cdn.com/photos/images/original/000/841/303/609.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ5TeExt4ev2WjW_IZRUnsSgET9WH0qLOqMC6IhqdA9WVKQWSj&usqp=CAU',
  'https://em.wattpad.com/4e95b1dc6c5ca08b9788377821d4a8e07a7ddb28/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f596e44774c557939466e474f54773d3d2d3236382e313464623664616336623335386135623834313233303633353132342e6a7067',
  'https://zupimages.net/up/20/21/nwqy.jpg',
  'https://zupimages.net/up/20/22/jf3s.jpg',
  'https://zupimages.net/up/20/22/n2pq.png',
  'https://zupimages.net/up/20/22/9ykf.gif',
  'https://external-preview.redd.it/dmrBd0FLJHnWso3Jl-rg4F8VaMIIxjtLToMd6T58Eek.png?auto=webp&s=345992f04020bf9ea08e5aabcc94b7a6e346d6b2',
  'https://pbs.twimg.com/media/EFFaErHW4AEH90H.jpg',
  'https://pm1.narvii.com/6219/fa956c25c31f18af6904e0d794ee90486f9a80e6_hq.jpg',
  'https://i.redd.it/n6siavv3jmv31.jpg',
  'https://i.ytimg.com/vi/jJqH5FY2oLA/maxresdefault.jpg',
  'https://zupimages.net/up/20/22/evhf.png',
  'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/93486363_247325619754428_69011666147543840_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=1Ohy7vJ2jc4AX8102LZ&oh=145100b717975d8e234a9fe6a305c956&oe=5ED994C2',
  'https://memegenerator.net/img/instances/68316078/im-not-baka-just-a-little-forgetful.jpg',
  'https://external-preview.redd.it/8NNZ86YaQhyMXjGHWdz9UmR9bQgk-y4aBRyfM1s0NZs.jpg?auto=webp&s=5cb9fd366e5ab52922b8c239adeae50ff47c5c31',
]

var kmb = [
  "https://nsa40.casimages.com/img/2020/07/06/200706023902645035.jpg",
  "https://nsa40.casimages.com/img/2020/07/06/200706023902916300.jpg",
  "https://nsa40.casimages.com/img/2020/07/06/200706023903730264.gif",
  "https://nsa40.casimages.com/img/2020/07/06/200706023903853616.png",
  "https://nsa40.casimages.com/img/2020/07/06/200706023904169015.jpg",
  "https://nsa40.casimages.com/img/2020/07/06/200706023904587572.jpg",
  "https://nsa40.casimages.com/img/2020/07/06/200706023904835963.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730710819234512896/image0.png",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712469059665970/image0.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712469361655858/image1.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712469651193866/image2.png",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712469953183754/image3.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712470221750272/image4.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712470649438298/image5.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712470909354027/image6.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712471123394570/image7.png",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712471400218666/image8.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730712471660396544/image9.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713955378659388/image0.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713955814604820/image1.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713956108337212/image2.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713956490018886/image3.jpg",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713956833951774/image4.png",
  "https://cdn.discordapp.com/attachments/711641094710100080/730713957748310067/image5.jpg",
]

var octagon = [
  "https://zupimages.net/up/20/29/9h2z.gif",
  "https://zupimages.net/up/20/27/g7dr.gif",
  "https://nsa40.casimages.com/img/2020/07/03/200703112328436350.gif",
  "https://nsa40.casimages.com/img/2020/07/03/200703113547642498.gif",
]

var stonk = [
  'https://zupimages.net/up/20/22/hfzq.png',
  'https://zupimages.net/up/20/22/cgmk.png',
  'https://zupimages.net/up/20/22/s1ik.png',
]

var pf = [
  'pile',
  'face',
]

var dice = [
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/8rcx.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/fm2o.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/skbg.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/ion3.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/g87j.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0098d9')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setImage('https://zupimages.net/up/20/25/20r5.png')
    .setThumbnail('')
    .setTimestamp()
    .setFooter('Bot random par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
]

var scp = {
  "SCP-00⑨":
    new Discord.MessageEmbed()
      .setColor('#00e3eb')
      .setTitle('__SCP-00⑨__')
      .setURL('https://i.kym-cdn.com/entries/icons/facebook/000/018/206/bT561.jpg')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-00⑨ est une fille humanoïde agée de plus 60 ans bien qu'elle aie une apparence jeune. Elle mesure 1,42M et pèse 49,23Kg. SCP-00⑨ est connue sous le nom de Cirno ou encore la Fée de Glace (Ice Fairy en Anglais). Elle a une couleur de peau claire, les yeux bleus et les cheveux bleus allant au blanc. Elle porte une longue jupe allant des épaules aux genoux, bleue en blanche, un col blanc avec un petit nœud de papillon rouge, un nœud de papillon bleu foncé derrière la tête. Elle a 6 crystaux de glace qui lévitent derrière son dos et qui lui permettent de voler.\n\n Elle a la capacitée de glacer n'importe quelle objets ou êtres vivant et semble avoir une préférence pour les grenouilles. Si quelqu'un lui dit « Baka », elle le congèlera pour le tuer car elle dit qu'elle n'est pas Baka mais une génie alors que si on lui demande « 1 + 1 = ? », elle répondra 9 (avec des tests plus approfondis les chercheurs ont découvert qu'elle compte en base de 9 et qu'en base de 9, 1 + 1 est bien égal à 9).")
      .setThumbnail('https://zupimages.net/up/20/25/ezx8.png')
      .addFields(
        { name: 'Images', value: 'Tapez Cirno sur Google et vous serez servis !' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-6789":
    new Discord.MessageEmbed()
      .setColor('#962300')
      .setTitle('__SCP-6789__')
      .setURL('https://zupimages.net/up/20/30/zrw8.jpg')
      .setAuthor('')
      .setDescription("SIREN HEAD N'EST PAS UN SCP ! ARRÊTER DE DIRE QUE C'EST UN SCP CAR C'EST PAS UN SCP MAIS UNE CREEPYPASTA DONC ARRÊTER DE DIRE QUE C'EST UN SCP !!! Ok je me calme...")
      .setThumbnail('https://vignette.wikia.nocookie.net/villains-fr/images/8/8d/Sirens_H.jpg/revision/latest/top-crop/width/360/height/450?cb=20200524102814&path-prefix=fr')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-3008":
    new Discord.MessageEmbed()
      .setColor('#0030cf')
      .setTitle('__SCP-3008__')
      .setURL('http://fondationscp.wikidot.com/scp-3008')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-3008 ressemble à un IKEA de tout ce qu'il y a de normal, mais quand on y rentre et qu'on voit plus les portes d'entrées, on est dans SCP-3008-1 et, il est impossible de voir le changement sauf quand on voudra sortir. SCP-3008-1 est beaucoup plus grand que SCP-3008 et ressemble à un magasin IKEA normal. \n \nSCP-3008 contient des entitées appellées toutes SCP-3008-2. Elles marchent de manière aléatoire, ressemblent à des humains sauf qu'elles n'ont pas de visages, peuvent varier de taille d'un individu à l'autre, ont des proportions corporelles exagérées et sont habillées comme le personnel d'IKEA. Le jour, les SCP-3008-2 sont inoffensives mais la nuit, on peut entendre une phrase en anglais qui dit: 'Le magasin est désormais fermé, veuillez quitter le bâtiment', puis les SCP-3008-2 attaqueront toute forme de vie présente dans SCP-3008-1. Dès que le jour est là, les SCP-3008-2 deviennent passives et remarchent de manière aléatoire. \n \nLes sorties de SCP-3008 ne sont pas fixes donc il est très dur de s'échapper de SCP-3008-1.")
      .setThumbnail('https://zupimages.net/up/20/21/p2jg.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-3008-2 (dessin): https://d.wattpad.com/story_parts/849623218/images/15fc719ba9cede6255418117320.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1471":
    new Discord.MessageEmbed()
      .setColor('#707070')
      .setTitle('__SCP-1471__')
      .setURL('http://fondationscp.wikidot.com/scp-1471')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-1471 est une application gratuite de 9,8 MB sans développeur attitré et arrive systématiquement à éviter la phase de validation de l'application. Cette application est impossible à enlever mais elle n'est plus disponible et s'appelle malO ver1.0.0. \n \nQuand on l'installe il n'y a pas de raccourcis ou d'icône mais SCP-1471 va envoyer des images via la messagerie toutes les 3 à 6 heures. Les images contiendront SCP-1471-A, SCP-1471-A qui apparaît comme une large tête humanoïde ayant un crâne ressemblant à celui d'un animal canin et des cheveux noirs. \n \nPendant les premières 24 heures suivant l'installation de SCP-1471, l'appareil mobile recevra des images prises dans des lieux souvent fréquentés par son propriétaire. Après 48 heures, l'appareil recevra des images prises dans des lieux visités récemment par l'individu. Après 72 heures, l'appareil recevra des images de l'individu en temps réel avec SCP-1471-A apparaissant à proximité du sujet. \n \nLes personnes qui auront regardés les images envoyées pendant plus de 90 heures, verront SCP-1471-A sur les reflets de miroirs ou autres. SCP-1471 n'est pas hostile. Le seul moyen pour inverser les effets de SCP-1471 est de ne pas regarder les images. \n \nBonus: la description de l'application: \nPour ████████████. Ne laissez plus ce sentiment étrange de solitude s'installer en vous. MalO est une expérience palpitante et interactive qui va vous divertir et n’arrêtera pas de vous intriguer. L'anxiété dans les situations sociales peut être énervante, mais après quelques heures d'utilisation de MalO, vous allez bientôt oublier ce désagréable sentiment de déception. Faites partie de cette nouvelle mode qui deviendra rapidement le nouveau substitut social. Rappelez-vous, plus vous participerez, plus MalO va vous approcher. Votre expérience dépend seulement de vous-même. Garanti SANS PUBS. Amusez-vous bien !")
      .setThumbnail('https://fondationscp.wdfiles.com/local--files/scp-1471/1471.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-1471-A (réelle): https://fondationscp.wdfiles.com/local--files/scp-1471/1471.jpg \n SCP-1471-A (dessin): https://displate.com/displates/1216662/large/2020-01-17/090268d28109b6f2c818a4ab5f9136af_767e5fad70be24516b78221722abf407.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2999-A":
    new Discord.MessageEmbed()
      .setColor('#ff5eec')
      .setTitle('__SCP-2999-A__')
      .setURL('http://fondationscp.wikidot.com/scp-2999')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-2999 est deux entitées nommées SCP-2999-A et SCP-2999-B. SCP-2999-A est un fichier .txt intelligent de 5,17 KB intitulé « Sarah_Crowely.txt, le fichier contient un lapin fait en charactères ASCII dont 12 charactères qui ne sont pas dans le code ASCII, cependant ces charactères sont nécessaire pour le fonctionnement de SCP-2999-A. Lorsqu'il est stocké sur un ordinateur ou un appareil électronique, SCP-2999-A peut changer l'emplacement de son fichier, créer et nommer les dossiers et documents, refuser sa suppression, ouvrir, fermer, ou s'auto-dupliquer, et peut parler à travers les haut-parleurs de l'ordinateur.\n\n Plus SCP-2999-A est sur un appareil, plus il va trouver la tache douloureuse et perdre de ces capacités anormales. SCP-2999-A peut fonctionner comme le système d'exploitation (OS) d’origine ou le remplacer s'il reçoit l'autorisation administrative ou si il est stocké sur un appareil sans OS. SCP-2999-A répliquera complètement le système d'exploitation précédent sur un délai de 24 heures, mais en le modifiant afin d'empêcher le personnel d’y accéder. Les membres du personnel seront incapables d'utiliser le clavier et la souris de l’ordinateur, de se servir de n'importe quel lecteur CD, ou tout simplement d'accéder à l'appareil sans l'accord de SCP-2999-A.\n\n Après que SCP-2999-A ait terminé la réplication du système d'exploitation de l'ordinateur, il va commencer à personnaliser le bureau informatique en organisant les documents personnels, les images, les applications et les autres projets, et en modifiant le fond d'écran. L’endroit où SCP-2999-A a stocké ces fichiers est inconnu, mais une grande majorité d'entre eux ont été écrits par les Laboratoires Prometheus, et sont généralement sur le thème de la restauration de la vie par des moyens anormaux. SCP-2999-A conserve le même fond d'écran, qui représente une jeune femme humanoïde avec des caractéristiques similaires à ceux d'un lapin blanc.")
      .setThumbnail('https://66.media.tumblr.com/4dd6b07a75889a375599f70cf5585723/tumblr_ngk2xzVkoo1tkpucpo1_500.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-2999-A (réelle): http://fondationscp.wdfiles.com/local--files/scp-2999/Sarah.jpg' },
        { name: 'Télécharger SCP-2999-A', value: 'https://www.mediafire.com/file/mv32ajqdolgp8s1/SCP-2999-A.rar/file' }
      )
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2999-B":
    new Discord.MessageEmbed()
      .setColor('#000000')
      .setTitle('__SCP-2999-B__')
      .setURL('http://fondationscp.wikidot.com/scp-2999')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-2999 est deux entitées nommées SCP-2999-A et SCP-2999-B. SCP-2999-B est un squelette intelligent d'un chat noir maintenu entier par diverses méthodes, incluant des lanières de cuir, du scotch noir, de la ficelle, et de la super-glue, partiellement composée d'Achillée millefeuille commun. SCP-2999-B se réfère à lui-même comme étant le Dr Stuart Hayward, et fut créé par SCP-2999-A.\n\n Les effets paranormals de SCP-2999-B se déroule sure de l'équipement vidéos, il peut volontairemment ajouter des sous-titres et c'est sont seul moyen de communication. Toutes les autres modifications semblent être involontaires. Lorsqu'un sujet est filmé et montré dans le même plan que SCP-2999-B, l'apparence des sujets sera modifiée de sorte qu'ils apparaissent fortement défigurés.\n\n Voici la liste des modifications:\n-Une large blessure là où le cœur est localisé\n-Un œil gauche manquant\nPerte de l'épiderme sur le visage du sujet\nLa bouche taillée puis suturée afin de ressembler à un large sourire\nMarques de brûlures mineures sur les bras et le torse\nAjout de caractéristiques animales, telles qu'un museau, des griffes, ou une queue.\nUne grande partie de la chair du mollet droit est retirée du sujet\nLa tenue vestimentaire du sujet est remplacée par une robe de soirée ou un smoking, selon le sexe.")
      .setThumbnail('https://66.media.tumblr.com/eed17308cbc97a7e88e02a3b96db14cb/tumblr_pgtj471t1V1r84q6no1_250.png')
      .addFields(
        { name: 'Images', value: 'SCP-2999-B (réelle): http://fondationscp.wdfiles.com/local--files/scp-2999/Will.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2046":
    new Discord.MessageEmbed()
      .setColor('#fafafa')
      .setTitle('__SCP-2046__')
      .setURL('http://fondationscp.wikidot.com/scp-2046')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-2046 est un poster du tableau périodique des éléments imprimé sur une feuille de papier glacé, mesurant 91 centimètres sur 61 centimètres. Les tableaux périodique des éléments se trouvant proche de SCP-2046 deviendrons SCP-2046-1. Lorsque SCP-2046 n'est pas observé, il s'agrandit et ajoute de nouveaux éléments et groupes d'éléments au tableau périodique qu'il représente. Il faut noter que les dimensions de SCP-2046 ne changent pas, le tableau lui-même change de taille pour faire de la place aux nouveaux éléments.\n\nLes nouveaux éléments ajoutés de cette manière ne se conforment pas aux lois établies de la chimie ni à la structure d'organisation du tableau périodique. Au moment de la rédaction de ce rapport, SCP-2046 présente 191 éléments anormaux. SCP-2046 introduit ces éléments anormaux dans son environnement immédiat en transmutant des atomes aléatoires en atomes du nouvel élément. La plupart de ces éléments anormaux ne peuvent pas exister dans notre univers, et se désagrègent instantanément sous forme de particules élémentaires, résultant en une élévation progressive du taux de radiations de la cellule.\n\n 80% des personnes qui voyent le tableau le trouverons normal tandis que les 20% restant trouverons que quelque chose ne vas pas mais ils ne serons pas dire quoi.")
      .setThumbnail('https://fondationscp.wdfiles.com/local--files/scp-2046/Mendeleev%27s%20Nightmare')
      .addFields(
        { name: 'Images', value: 'SCP-2046 (réelle): https://fondationscp.wdfiles.com/local--files/scp-2046/Mendeleev%27s%20Nightmare' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-524":
    new Discord.MessageEmbed()
      .setColor('#03fc1c')
      .setTitle('__SCP-524__')
      .setURL('http://fondationscp.wikidot.com/scp-524')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-524 est un lapin de race Sylvilagus bachmani, il est connue sous le nom de Walter. Son problème ? **IL BOUFFE TOUS !!! ACIER, BOIS, LAINE, ÉLÉMENT NUCLÉAIRE, PLASTIQUE, PAPIER MÊME LUI MÊME !!!** (Il c'est manger intiéremment puis il a été retrouvrer plus loin en train de gambader).")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-524/Walter.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-524 (réelle): http://fondationscp.wdfiles.com/local--files/scp-524/Walter.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-300-FR(-J ?)":
    new Discord.MessageEmbed()
      .setColor('#b800eb')
      .setTitle('__SCP-300-FR(-J ?)__')
      .setURL('http://fondationscpsandbox.wikidot.com/scp-300-fr-officiel')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-300-FR est un humanoïde 1.75m et porte très souvent un peignoir rose ||VIOLET PUTAIN !|| SCP-300-FR n'a pas montré de signes de dangerosité pour le moment. En conséquence, la Fondation le laisse résider sur le site Fenhir, dans un petit appartement aménagé, et pour l'occuper l'autorisé à faire quelques petites vidéos ~~débiles~~ EXTRAORDINAIRE sur internet. Il est interdit de perturber SCP-300-FR lorsqu'il discute avec SCP-301-FR, sous peine de spam MP intense de SCP-301-FR.\n\nSCP-301-FR sont enfaites ces abonnées ||DONC MAGICTENDO EST UN SCP !?||.")
      .setThumbnail('https://zupimages.net/up/20/25/bbhp.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-300-FR (réelle): http://fondationscpsandbox.wdfiles.com/local--files/scp-300-fr-officiel/Alexandre.JPG \n SCP-300-FR (logo): https://pbs.twimg.com/profile_images/1132305971152392192/TmdcR86s_400x400.png' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2521":
    new Discord.MessageEmbed()
      .setColor('#302f2f')
      .setTitle('__●●|●●●●●|●●|●__')
      .setURL('http://fondationscp.wikidot.com/scp-2521')
      .setAuthor('')
      .setDescription("")
      .setImage("https://zupimages.net/up/20/24/4eoj.png")
      .setThumbnail('https://zupimages.net/up/20/24/88tx.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-4885":
    new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('__SCP-4885__')
      .setURL('http://www.scp-wiki.net/scp-4885')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-4885 est un humanoïde anormal ressemblant au personnage principal de la série de livres de puzzles \"Où est Charlie ?\". Donc SCP-4885 porte une chemise à rayures rouges et blanches horizontales, un chapeau à pompon rouge et blanc et un jean. Cependant, une différence notable dans l'apparence du personnage est la peau plus pâle de l'entité et le manque d'yeux.\n\nDans le cas où un sujet connaît la position actuelle de SCP-4885 à un moment donné, SCP-4885 se déplacera vers le mur le plus proche et commencera à \"s'y installer\". SCP-4885 apparaîtra à l'intérieur du sujet, atteindra l'œsophage et saisira le menton du sujet par la bouche. SCP-4885 se mettra alors à traverser le sujet, détruisant leurs organes internes et leur colonne vertébrale. Une fois que cela s'est produit, un liquide jaune sortira de la bouche du cadavre et couvrira entièrement le sujet, ce qui le fera devenir une instance de SCP-4885-1. Mais, si SCP-4885 est suffisamment proche du sujet lorsqu'il découvre son emplacement, il s'approchera plutôt du sujet, tentera de grimper dans la bouche du sujet, entrera dans son abdomen et sortira de son corps par le bassin du sujet. Pendant ce temps, SCP-4885 peut facilement déplacer n'importe quelle articulation de son corps, et sa peau et ses muscles gagneront la consistance d'un solide malléable, lui permettant de sortir facilement du sujet.\n\n Les instances de SCP-4885-1 sont des cadavres anormaux qui ont été créés par SCP-4885. Le corps entier d'une instance de SCP-4885-1 est couvert par des illustrations similaires à celles trouvées dans les livres de \"Où est Charlie ?\", avec de nombreux personnages différents apparaissant sur la peau de l'instance. Ces illustrations proviennent du liquide qui sort de la bouche des cadavres. Actuellement le personnage de Charlie n'a pas été trouvée sur une instance de SCP-4885-1. Ces illustrations ne peuvent pas être enlevée du sujet à moins que la peau sur laquelle il est placé soit retirée.")
      .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c2e3ef8-f816-4d92-aa48-472ff01f32c3/ddkgy0s-187b9c75-7cfc-4936-8ea5-e011f4c6d169.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGMyZTNlZjgtZjgxNi00ZDkyLWFhNDgtNDcyZmYwMWYzMmMzXC9kZGtneTBzLTE4N2I5Yzc1LTdjZmMtNDkzNi04ZWE1LWUwMTFmNGM2ZDE2OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.agnm_uG2ugVhyIp317gbQM2ym4CmwEQWPu6zbbSYc0Y')
      .addFields(
        { name: 'Images', value: 'SCP-4885 (Image prise par Kurt Stoll): https://scp-wiki.wdfiles.com/local--files/scp-4885/him.png' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2262":
    new Discord.MessageEmbed()
      .setColor('#e0dede')
      .setTitle('__SCP-2262__')
      .setURL('http://www.scp-wiki.net/scp-2262')
      .setAuthor('')
      .setDescription("Classe: Safe\n\nSCP-2262 est un bout de papier mesurant 29 mm X 20 mm. L'objet a été déchiré dans le coin inférieur droit d'un bloc-notes standard et a été écrit à l'encre noire. La seule marque est un « B » majuscule. Les tests n'ont révélé rien d'anormal dans la composition ou la mise en page du papier, et l'encre a été confirmée comme provenant d'un stylo à bille standard.\n\nL'objet a été récupéré sur le bureau d'un typographe de 27 ans et artiste de bande dessinée occasionnel qui vit en Allemagne. Les propriétés annormales de SCP-2262 seront activées quand toute personne qui a un intérêt, latent ou reconnu, dans la composition, la conception, les bandes dessinées, ou en fait tout haut niveau d'appréciation esthétique des polices ou de la composition, regarde l'article. En regardant, l'individu deviendra de plus en plus irrité et fasciné par la lettre, affichant une hostilité croissante envers elle et ses défauts esthétiques, réels ou imaginaires.\n\nCes sentiments d’hostilité semblent dépendre en grande partie de la formation ou des préférences artistiques ou esthétiques préférées de l’individu et se concentrer sur l’aspect de la lettre que l’individu connaît le mieux, les points d’hostilité observés, notamment l’apparence, la couleur, l’espacement, l’équilibre de la police et le score relativement faible de la lettre «B» dans Scrabble étant donné sa difficulté à s’attacher aux mots.")
      .setThumbnail('https://zupimages.net/up/20/24/hwnm.png')
      .addFields(
        { name: 'Images', value: 'SCP-2262 (réelle): https://zupimages.net/up/20/24/hwnm.png' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-4187":
    new Discord.MessageEmbed()
      .setColor('#ff9500')
      .setTitle('__SCP-4187__')
      .setURL('http://www.scp-wiki.net/scp-4187')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-4187 fait référence à un restaurant Burger King situé à █████, Missouri, une ville avec une ancienne population de 1,287 habitants mais tous les habitants on été tué par SCP-4187. SCP-4187 se compose de 2 entités dénommées SCP-4187-1 et SCP-4187-2.\n\nSCP-4187-1 est une entité nocturne hostile qui ressemble à un panneau routier Burger King. SCP-4187-1 est capable de se déplacer par déplacement spatial spontané. Tous les soirs, SCP-4187-1 disparaît et réapparaît devant le mammifère vivant le plus proche. Il étend ensuite un mince appendice vasculaire à partir du cercle bleu du signe, qu'il utilise pour percer le cerveau de la victime, le plaçant dans un état végétatif. L'appendice exsanguinise ensuite la proie, avant de l'utiliser pour resserrer la victime, et souvent son environnement. SCP-4187-1 soulève sa victime et la place dans un ensemble de mâchoires qui s'étend des deux \"petits pains\" sur le panneau. SCP-4187-1 dévore alors la victime, avant d'essuyer ses \"mâchoires\" avec l'appendice, libérant un bruit mesurant à 110 décibels. Après s'être nourri, il réapparaît à son emplacement précédent à l'extérieur de SCP-4187-2, avant de revenir à un état inactif, semblable à un panneau routier standard de Burger King.\n\nSCP-4187-2 est la désignation du restaurant lui-même. Un client peut commander à un «kiosque libre-service» à l'intérieur, et la nourriture commandée est libérée d'une goulotte intitulée «Whopper Popper». Les aliments libérés ressemblent à des éléments de menu Burger King courants, tels que des Whoppers, des nuggets de poulet ou des salades de club de poulet. Cependant, ces articles sont entièrement constitués du régime de SCP-4187-1.")
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/5/5d/BurgerKingOrihuelaCosta.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-4187 (réelle, extérieur): https://upload.wikimedia.org/wikipedia/commons/5/5d/BurgerKingOrihuelaCosta.jpg \nSCP-4187 (dérriere la porte "Employés seulement"): http://scp-wiki.wdfiles.com/local--files/scp-4187/tunnel \nSCP-4187 (cuisine): http://scp-wiki.wdfiles.com/local--files/scp-4187/kitchen \nSCP-4187 (machine qui se trouve dérriere la cuisine): http://scp-wiki.wdfiles.com/local--files/scp-4187/machine' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-3349":
    new Discord.MessageEmbed()
      .setColor('#4f4f4f')
      .setTitle('__SCP-3349__')
      .setURL('http://www.scp-wiki.net/scp-3349')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-3349 est une arythmie cardiaque non mortelle qui a une incidence de 42,8% suite à une séquence spécifique d'administrations intraveineuses de médicaments:\n\n-150 mg goutte à goutte d'amiodarone (infusé en 15 minutes)\n-1 g de perfusion IV de magnésium (perfusé sur 1 heure)\n-1 ampoule de bicarbonate de sodium (infusée sur 3-4 minutes)\n-0,1 μg IV d'épinéphrine (poussée immédiate)\n\nSCP-3349 n'est pas constant et apparaît périodiquement chez l'individu affecté avec une moyenne de neuf occurrences par jour, d'une durée moyenne de trois minutes par occurrence. Subjectivement, les patients déclarent se sentir réconfortés, ravis et euphoriques. Objectivement, SCP-3349 produit une impulsion centrale et périphérique \"flottante\" lors de la palpation, souvent décrite comme semblable à un ronronnement de chat, et peut être auscultée avec un stéthoscope, les descriptions cliniques citant également le ronronnement de chat.\n\nSur l'électrocardiogramme, les manifestations de SCP-3349 présentent des similitudes avec les formes d'onde des vocalisations humaines. Les signaux audio reconstruits par spectrographie basés sur les signatures électriques de SCP-3349 produisent diverses intonations de rires, de lamentations et de paroles de type humain. Des sorties auditives ressemblant au ronronnement de chats ont également été signalées.\n\nSCP-3349 n'est pas durcissable et est réfractaire à la défibrillation à 200, 300 et 360 joules. Il n'y a aucun facteur de précipitation ou d'atténuation connu concernant SCP-3349, autre que l'induction susmentionnée. Malgré l'activité électrique irrégulière, les patients restent stables, bien que peu de personnes puissent constater une certaine réduction de la tolérance à l'exercice.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-3349/ekg')
      .addFields(
        { name: 'Images', value: 'SCP-3349 (électrocardiogramme): http://scp-wiki.wdfiles.com/local--files/scp-3349/ekg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-354":
    new Discord.MessageEmbed()
      .setColor('#990909')
      .setTitle('__SCP-354__')
      .setURL('http://www.scp-wiki.net/scp-354')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-354 est une mare remplie de sang humain où le liquide devient plus dense à mesure que l'on descend dans la mare. Le fond de SCP-354 na jamais été atteint. Des entités essayent de sortir de SCP-354, presque toutes était extrêmement hostiles.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-354/redpool-new.png')
      .addFields(
        { name: 'Images', value: 'SCP-354 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-354/redpool-new.png \n http://fondationscp.wdfiles.com/local--files/scp-354/354.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-882":
    new Discord.MessageEmbed()
      .setColor('#a34400')
      .setTitle('__SCP-882__')
      .setURL('http://www.scp-wiki.net/scp-882')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-882 apparaît comme étant un ensemble de rouages, câbles, poulies, vis, et écrous, tous faits d'un amalgame de métaux variés. La taille de l'objet au moment de la récupération était approximativement de 87 mètres cubes. La taille actuelle est approximativement de 12 mètres cubes. SCP-882 rouille rapidement dans l'eau salée. Aucune source d'énergie identifiable n'a été trouvée, mais tous les composants de l'objet commenceront à bouger et tourner si ceux-ci ne sont pas rouillés. SCP-882 est entièrement silencieux, quel que soit son niveau d'activité.\n\nTout métal entrant en contact physique avec l'objet sera fixé à ce dernier de façon permanente, et, après quelques jours, deviendra un nouveau composant de l'objet. La matière organique n'est pas affectée par ses effets. SCP-882 résiste fortement à la traction, et a une solidité dépassant celle des alliages les plus résistants, malgré le fait que sa composition apparaisse comme étant un alliage de fer, or, et autres métaux, certains non identifiés jusque-là. Une chaleur extrême appliquée pendant plusieurs heures ne coupera qu'une petite partie de l'assemblage principal.\n\nLes personnes restant aux alentours de l'objet pour une période prolongée ont développé des hallucinations auditives, principalement des bruits de grincement et de cliquetis. Le son s'intensifie, s'estompe ou disparaît uniquement lorsque la personne affectée jette du métal sur l'objet. Des sujets dans des états de psychose extrême se sont lancés eux-même dans l'objet, causant une mort quasi-instantanée par écrasement. Le corps est souvent tiré à l'intérieur par les nombreux rouages, et le retrouver devient impossible.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-882/Gears2.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-882 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-882/Gears2.jpg \n http://fondationscp.wdfiles.com/local--files/scp-882/Image.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-329-J":
    new Discord.MessageEmbed()
      .setColor('#ff1f1f')
      .setTitle('__SCP-329-J__')
      .setURL('http://fondationscp.wikidot.com/scp-329-j')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-329-J est un panneau de circulation américaine commun de cession de passage disposant de la capacité apparente de la parole. SCP-329-J prétend être un \"fantôme\". Aucune autre propriété anormale n'a été détectée à ce jour.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-329-j/329.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-329-J (réelle): http://fondationscp.wdfiles.com/local--files/scp-329-j/329.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2223":
    new Discord.MessageEmbed()
      .setColor('#039e00')
      .setTitle('__SCP-2223__')
      .setURL('http://fondationscp.wikidot.com/scp-2223')
      .setAuthor('')
      .setDescription("Casse: Euclide\n\nSCP-2223 est une collection d'images PNG qui représentent une femme humaine d'un jeune âge indéterminé dans le style de l'animation japonaise. Chaque version d'image distincte est désignée SCP-2223-1 à SCP-2223-6. SCP-2223 dépeint le plus souvent son sujet avec un uniforme scolaire rouge et blanc, bien que certains cas aient montré une tenue alternative.\n\nBien que la représentation exacte du sujet de SCP-2223 varie selon les instances, les caractéristiques physiques restent constantes dans toutes les versions de SCP-2223, donc SCP-2223 est une même entité appelé SCP-2223-A. On ne sait pas si SCP-2223-A est destiné à ressembler à une personne réelle ou à un personnage de fiction existante.\n\nLe principal effet anormal de toutes les versions de SCP-2223 est leur capacité à manipuler les algorithmes de recherche pour les classer près du haut des résultats pour certaines entrées de mots-clés ou de phrases pas pertinentes. Des exemples de mots clés manipulés par SCP-2223 incluent \"raisins\", \"crêpes\", \"aquarium\", \"tableau périodique\", \"mapquest\" et \"Sénat américain\". La méthode utilisé de SCP-2223 actuellement inconnue et présumée être anormale. Les tentatives de lecture ou de modification des versions de SCP-2223 échouent.\n\nDepuis SCP-2223-5, les versions de SCP-2223 présentent un effet supplémentaire. Tout être humain qui voit une instance de SCP-2223 ressentira une forte contrainte de partager l'image par tous les moyens possibles. Les individus infectés empêchés de partager des copies numériques de SCP-2223 dessineront une reproduction non anormale dans les limites de la capacité artistique de l'individu. Les individus totalement empêchés de partager SCP-2223 manifestent une légère contrariété et un mécontentement, bien qu'aucun préjudice psychologique ou physiologique grave n'ait été observé.")
      .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a1cc261-2b1a-4692-bbc8-b222145692f0/dc090sw-7d9bae87-78d0-4c25-b740-cf2b859e273f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWExY2MyNjEtMmIxYS00NjkyLWJiYzgtYjIyMjE0NTY5MmYwXC9kYzA5MHN3LTdkOWJhZTg3LTc4ZDAtNGMyNS1iNzQwLWNmMmI4NTllMjczZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wWVqD9gVOZJndBHOrS6jEgjS3_ZVzbN9r9tqLZ1kmfA')
      .addFields(
        { name: 'Images', value: 'SCP-2223 (avant son confinement): https://scp-wiki.wdfiles.com/local--files/scp-2223/SCP-2223-Fullsize.png' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-048":
    new Discord.MessageEmbed()
      .setColor('#990505')
      .setTitle('__SCP-048__')
      .setURL('http://fondationscp.wikidot.com/scp-048')
      .setAuthor('')
      .setDescription("Casse: Aucune\n\nSCP-048 a longtemps été considéré comme étant \"le numéro SCP maudit\" par le personnel de la Fondation : tous les objets obtenant cette désignation ont tendance à être détruits, déclassés, volés ou autrement perdus à la Fondation, généralement sans faute d'aucun individu. De plus, le personnel assigné à SCP-048 dans ses différentes incarnations ont eu un taux de roulement 50% plus élevé pour cause de mort, mutilation et actions disciplinaires.\n\nQue le numéro 048 possède ou non des qualités surnaturelles est inconnu, mais compte tenu de la superstition autour de ce nombre, la désignation a été retirée du fichier afin d'aider au maintien du moral des employés.")
      .setThumbnail('https://em.wattpad.com/cbb46fa0ff53be4bd5309b97360b327bd38e0738/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f65313645617a43774979365436413d3d2d3735373331353639362e313562306137623365303538363134663930323336313436393034342e6a7067?s=fit&w=720&h=720')
      .addFields(
        { name: 'Images', value: 'Aucune données trouvées...' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-162":
    new Discord.MessageEmbed()
      .setColor('#3b302e')
      .setTitle('__SCP-162__')
      .setURL('http://fondationscp.wikidot.com/scp-162')
      .setAuthor('')
      .setDescription("Casse: Euclide\n\nSCP-162 est une masse d'hameçons, de fils de pêche, d'aiguilles, de ciseaux et d’autres objets tranchants, formant une boule de près de 2,4 m de largeur et de 2,1 m de hauteur. Après avoir été dans le voisinage de SCP-162, les sujets ont déclaré se sentir attirés par l'objet afin de le toucher. Ce désir peut s'étendre sur plusieurs semaines après avoir vu l'objet, et se transforme en une obsession dans de nombreux cas. L’effet \"d’attirement\" augmente lorsque SCP-162 est observé durant une longue période, et les sujets deviennent violents envers quiconque tenterait de les empêcher de regarder ou de les éloigner de SCP-162.\n\nLe contact avec SCP-162 entraînera immédiatement l’implant de plusieurs crochets dans la peau du sujet. L'expérience est extrêmement douloureuse, bien plus qu’avec des hameçons normaux. Toute lutte ou tentative de s'échapper prendront encore plus le sujet au piège, aboutissant généralement au piégeage complet du sujet sur la surface de SCP-162. Le sujet saignera abondamment, entraînant la mort après une longue période d’agonie.\n\nTenter de retirer un sujet de SCP-162 se traduira par le piégeage de l'extracteur, ou à des lésions corporelles graves sur la chair du sujet. Les sujets alterneront plusieurs fois, par \"cycles\", entre une expression de douleur extrême et des appels à l'aide, et une expression de plaisir et des demandes à être laissés seuls, pouvant aller jusqu’à tenter de saisir et d’enlacer le personnel essayant de les sauver.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-162/scp162.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-162 (sous confinement): http://fondationscp.wdfiles.com/local--files/scp-162/scp162.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-151":
    new Discord.MessageEmbed()
      .setColor('#0059de')
      .setTitle('__SCP-151__')
      .setURL('http://fondationscp.wikidot.com/scp-151')
      .setAuthor('')
      .setDescription("Casse: Euclide\n\nSCP-151 est une peinture à l'huile de 1 m x 1,30 m, représentant le point de vue d'une personne sous l'eau. Un sujet qui regarde la peinture ne semble pas affecté. Toutefois, sur une période de 24 heures, la respiration du sujet devient de plus en plus difficile, aboutissant à sa mort. Les autopsies révèlent que les poumons du sujet sont remplis d'eau de mer. Les tentatives pour arrêter le processus de noyade par une intervention médicale peuvent prolonger la vie du sujet, mais se sont avérées inefficaces pour contrer l'effet sur le long terme.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-151/SCP-151.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-151 (réelle): http://fondationscp.wdfiles.com/local--files/scp-151/SCP-151.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-3009":
    new Discord.MessageEmbed()
      .setColor('#f700e7')
      .setTitle('__SCP-3009__')
      .setURL('http://fondationscp.wikidot.com/scp-3009')
      .setAuthor('')
      .setDescription("Casse: Euclide\n\nSCP-3006 est une vidéo intitulée \"we are number one except every time you play it there are twice as many robbie rottens but the room is the same size\", qui a été publiée sur YouTube le 12 octobre 2016. Il présente un clip musical de l'émission \"Lazy Town\" qui fait apparaître des humanoïdes identiques au personnage incarné par l'acteur islandais décédé Stefán Karl Stefánsson ||R.I.P Stefán Karl Stefánsson, 1975-2018, you will always number one...|| sur des lectures répétées.\n\nLes vidéos impactées par SCP-3006 sont capables de diffuser leurs effets, principalement en étant publiées dans des threads où plusieurs vidéos non affectées sont présentes. Dans les 1 à 5 minutes après avoir été lié, toutes les vidéos liées commenceront à manifester les effets de SCP-3006. Les humanoïdes vivants présentés dans les vidéos doubleront à chaque lecture, y compris les personnes hors écran.\n\nBien qu'il affecte les vidéos liées, l'effet SCP-3006 est unique pour chaque spectateur, c'est-à-dire que si plusieurs sujets le regardent, cet effet se produit en fonction de la personne qui a lancé la lecture physiquement. Si le sujet visionne une série de vidéos connexes, l'effet se poursuivra dans ces visionnements ultérieurs.\n\nSCP-3006 affecte principalement les vidéos se déroulant dans des environnements fermés. Une fois affectés par SCP-3006, il n'est pas possible pour les sujets enregistrés de quitter la zone dans laquelle la vidéo se déroule. À un certain moment, ces sujets subiront des blessures traumatiques entraînant la mort en raison de l'apparition soudaine d'humanoïdes exponentiels au début de la lecture vidéo. Cela n'empêche pas l'effet de SCP-3006 de persister.\n\nFinalement, la lecture atteint un point où la caméra et l'équipement sonore sont détruits en raison de la pression intense des viscères dans l'espace clos. Cela peut également se produire dans les vidéos en plein air, bien qu'il y a besoin de plus de lectures pour atteindre ce point.")
      .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23e6bc54-e98b-4d88-a90b-a31ec8817a05/dazqtwt-cc10a065-52c6-4905-ac0f-17b32bebfa04.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjNlNmJjNTQtZTk4Yi00ZDg4LWE5MGItYTMxZWM4ODE3YTA1XC9kYXpxdHd0LWNjMTBhMDY1LTUyYzYtNDkwNS1hYzBmLTE3YjMyYmViZmEwNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.I2RiO1TfMwrcl8lDzf_6KgBZPs2FXPTzc2UZKm7wBd4')
      .addFields(
        { name: 'Images', value: 'Aucune données trouvées...' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1678":
    new Discord.MessageEmbed()
      .setColor('#26212b')
      .setTitle('__SCP-1678 __')
      .setURL('http://fondationscp.wikidot.com/scp-1678')
      .setAuthor('')
      .setDescription("Casse: Euclide\n\nSCP-1678 est une reconstitution à l’échelle de la ville de Londres, localisée exactement à un kilomètre en dessous de la véritable ville de Londres. Actuellement, seul le district de Hyde Park de SCP-1678 a été exploré, mais tous les bâtiments, du moins dans le district exploré, coïncident exactement avec leur version d’origine à la surface au niveau de la localisation, ainsi qu’au niveau de la forme extérieur et de la taille, mais rarement au niveau de l’architecture, des matériaux employés et du plan interne. La ville semble avoir été construite afin de ressembler à la cité telle qu’elle était à l’ère Victorienne, avec des installations ressemblant à un éclairage au gaz dans les rues, et avec tous les bâtiments modernes de la ville de Londres d’origine représentés dans un style architectural victorien, notamment les gratte-ciels du district des affaires. L’éclairage est irrégulier et peu fiable, et l’on ne sait pas comment SCP-1678 acquiert ses réserves régulières d’oxygène et de gaz.\n\nOn suppose que SCP-1678 a été construit de façon simultanée, par des moyens inconnus, avec le Parlement de SCP-1678 comme \"épicentre\" du processus immédiat de construction. De nombreux indices vont dans ce sens ; ainsi, à mesure que la distance augmente par rapport au Parlement, la fréquence des problèmes de conception de SCP-1678 s’accroît, avec pour conséquence des maisons entièrement constituées de matériaux inhabituels, des \"réverbères\" ressemblant tout juste à des tiges de métal surmontées d’une orbe lumineuse flottante, des bâtiments sans plancher, et, à la distance la plus éloignée de l’épicentre, sans portes ni fenêtres. A part les occupants de la Fondation et les cas de SCP-1678-A, B et C, SCP-1678 est inhabité.\n\nSCP-1678 aurait apparemment été construit dans l’intention d’abriter les survivants d’un événement de classe XK-fin-du-monde. Le principal indice allant dans ce sens est un enregistrement audio qui s’active dès qu’une personne entre dans la cité.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1678/STREET-WEB-READY%281%29.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-1678 (réelle): http://fondationscp.wdfiles.com/local--files/scp-1678/STREET-WEB-READY%281%29.jpg \n SCP-1678-A (réelle): http://fondationscp.wdfiles.com/local--files/scp-1678/volgunpolice.png \n SCP-1678-B (dessin): https://pbs.twimg.com/media/DjYm66GWsAAlLEW.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-500":
    new Discord.MessageEmbed()
      .setColor('#d12c2c')
      .setTitle('__SCP-500 __')
      .setURL('http://fondationscp.wikidot.com/scp-500')
      .setAuthor('')
      .setDescription("Casse: Sûr\n\nSCP-500 est une boite plastique qui, au moment de l'écriture de ce rapport, contient 47 pilules rouges. Une pilule, une fois prise oralement, guérit celui qui l’a prise de toutes les maladies dans les deux heures. L’heure exacte varie en fonction de la sévérité et de la quantité des maladies du sujet. En dépit de nombreux essais, toutes les tentatives de synthèse de ce qui semble être le principe actif de SCP-500 ont été infructueuses.")
      .setThumbnail('https://vignette.wikia.nocookie.net/containmentbreach/images/4/4d/500.jpg/revision/latest/scale-to-width-down/340?cb=20140715170925')
      .addFields(
        { name: 'Images', value: 'Aucune données trouvées...' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  'SCP-404-JP':
    new Discord.MessageEmbed()
      .setTitle('')
      .setURL('')
      .setDescription("MagicTendo: Il semble avoir un bug avec ce SCP, son rapport SCP n'apparait pas...\n\nCirno: C'est pas de ma faute, j'envois bien le rapport mais après sa me le change au dernier moment...\n\nMagicTendo: Bizzare... Je m'occuperais de sa plus tard, Hasuko sais peut être pourquoi il y a ce bug... Bon, je vais règler les bugs des autres commandes.\n\nCirno: Ok, si il se passe quelque chose avec ce rapport je te le dirais.\n\nMagicTendo: Ok.")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-910-JP":
    new Discord.MessageEmbed()
      .setColor('#ffd000')
      .setTitle('SCP-910-JP')
      .setURL('http://scp-jp.wikidot.com/scp-910-jp')
      .setAuthor('')
      .setDescription("Classe: ~~Euclide~~ Keter\n\nSCP-910-JP est un panneau de circulation qui peut changer de forme. Voici la liste des apparences et effets liées:\n\n<:ThisStopSignIsNotAOctagon:726186520888737854> Aucun effet, c'est sa forme principale.\n\n<:Pietons:726187095244406837> Un passage pour piétons est apparu sur la route prés de SCP-910-JP.\n\n<:Interdit:726187132166602864> Tous les véhicules ont été repoussés par une force inconnue centrée sur SCP-910-JP.\n\n<:Toilletes:726187222814031923> Une toilette est apparue prés de SCP-910-JP.\n\n<:Glissade:726187315457687720> La force de friction au sol a considérablement diminué.\n\n<:Telepherique:726187394381905982> Un train à voie unique apparaît sur le circuit et passe au-dessus. Plusieurs SCP-910-JP-1 étaient dans le train.\n\n<:Pente:726187903138398299> Le terrain s'est élevé et crée une pente de 10 degrés juste derrière SCP-910-JP.\n\n<:Travaux:726187984243916890> Véhicules et machines indispensables à la construction de routes, SCP-910-JP-1 est apparu sous la forme de 5 à ██████ ouvriers.\n\n<:Cerf:726188287114477618> Des créatures de cerf, de raton laveur et de lapin sont apparues et ont traversé la route à côté de SCP-910-JP.\n\n<:Avalanche:726188312422907906> Une grande quantité de roche est soudainement apparue du ciel.\n\n<:Vent:726188392580382791> Rafales de vent de 4-7 soufflées.\n\nUn test a été effectuer sur SCP-910, ce test consiste à photographier SCP-910, une partie marquée de SCP-910-JP a été transformée en une marque qui semble signifier \"aucune photographie autorisée\". L'équipement d'imagerie sur place, y compris SCP-978, a provoqué des dysfonctionnements de cause inconnue. SCP-910-JP a retrouvé son apparence \"suspendue\" lorsque le superviseur a déclaré l'expérience abandonnée, et SCP-978 et d'autres équipements d'imagerie ont commencé à fonctionner normalement.")
      .setThumbnail('http://scp-jp.wdfiles.com/local--files/scp-910-jp/%E3%81%84%E3%81%9F%E3%81%9A%E3%82%89%E3%81%AA%E6%A8%99%E8%AD%98.gif')
      .addFields(
        { name: 'Images', value: 'SCP-910-JP (transformation en panneau alerte avalanche): http://scp-jp.wdfiles.com/local--files/scp-910-jp/%E8%90%BD%E7%9F%B3%E6%B3%A8%E6%84%8F.gif \n SCP-910-JP (transformation en panneau SCP fondation): http://scp-jp.wdfiles.com/local--files/scp-910-jp/%E8%B2%A1%E5%9B%A3%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB.gif \n SCP-910-JP (transformation en panneau photographie interdite): http://scp-jp.wdfiles.com/local--files/scp-978-extended-test-logs-jp/978-910-jp.gif' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-517":
    new Discord.MessageEmbed()
      .setColor('#422700')
      .setTitle('SCP-517')
      .setURL('http://scp-jp.wikidot.com/scp-517')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-517 est une diseuse de bonne aventure mécanique. L'objet fait approximativement 2 mètres de haut et contient une marionnette mécanique et une bougie électrique à l'intérieur d'une vitrine en verre et en bois. Les examens ont montré que les composants internes concordent avec ceux employés sur d'autres machines similaires. Sur le sommet les mots « Grandmother Predictions » ont été peints au pochoir. La marionnette contenue dans la machine a la forme d'une femme âgée, vêtue d'une chemise blanche et d'un châle bleu. Le câble d'alimentation de l'objet a été sectionné à 15 centimètres de sa base, il semble avoir maladroitement été séparé de sa source d'alimentation initiale. Aucune réaction ne se produit si une pièce est introduite dans la fente prévue à cet effet.\n\nL'objet s'allumera automatiquement, une fois par heure, si une personne (désignée ci-après comme la « Cible ») entre dans son champ de vision. La marionnette se tournera pour faire face à la Cible, distribuera une « carte de prédiction » depuis l'ouverture à l'avant de la machine, et cessera de fonctionner. Ces actions sont complètement mécaniques, et l'objet ne montre aucun signe pouvant le désigner comme conscient. Voir l'Addendum pour une transcription d'exemples de ces « prédictions ».\n\nL'individu qui a « activé » SCP-517 deviendra la Cible d'une ou de plusieurs entités qui attaqueront à 01:43 du matin, heure locale. L'Entité ou les Entités (ci-après SCP-517-01) prend/prennent la forme d'un nombre variable de bras très longs et dotés de multiples articulations (entre dix et une trentaine), apparaissant initialement depuis un seul endroit. Les bras semblent totalement tangibles, et peuvent apparemment s'étendre indéfiniment. L'Entité se jettera immédiatement sur la ou les Cible(s) et essaiera de les attraper et de les capturer. Si la chasse se prolonge suffisamment, des bras additionnels commenceront à apparaître à proximité immédiate de la victime afin de faciliter la capture.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-517/dsc07022.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-517 (réelle, actif): http://fondationscp.wdfiles.com/local--files/scp-517/dsc07022.jpg \n SCP-517-01 (réelle): http://fondationscp.wdfiles.com/local--files/scp-517/D-55166helmetcam.gif' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-2915":
    new Discord.MessageEmbed()
      .setColor('#fc4300')
      .setTitle('SCP-2915')
      .setURL('http://scp-jp.wikidot.com/scp-2915')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-2915 est un restaurant de la franchise Wendy’s situé à ██████, dans l'Ohio. L’établissement est sujet à deux propriétés anormales:\n\n-Le menu au moment du confinement ne comportait aucun aliment produit par Wendy’s, possédant des standards de santé appropriés, ou connus de la biochimie terrestre. Toute nourriture récupérable a été déplacée vers des laboratoires spécialisés pour des études approfondies.\n\n-La chambre froide ne possède pas de sol. La profondeur du trou en résultant est actuellement inconnue, les résultats des sondes envoyées en mission ne furent pas concluants. Six systèmes de treuil sont accrochés au plafond de la chambre froide, chacun étant constitué d’une chaine et d’un grand crochet à viande. Ces treuils sont contrôlés par une série de valves situées sur la porte. Une des chaines reste abaissée au fond du trou.\n\nLes tentatives visant à atteindre le fond de la chambre froide se sont révélés infructueuses, la communication avec la sonde de transmission ayant tenu le plus longtemps a été perdue au bout de quatre mois. Ajuster la longueur des chaines n’a pas encore été tenté à cause de la non-compréhension du système de valves.\n\nUn gaz jaune de composition chimique indéterminée s’échappe de la chambre froide durant chaque nuit, généralement entre 02h00 et 04h45. Ce gaz est plus lourd que l’air, moyennement toxique (une exposition à long terme a pour conséquence des dommages aux poumons et aux reins), et se dissipera sous une grande concentration de rayonnement ultraviolet.\n\nDes sons émanant de la chambre froide peuvent occasionnellement être entendus, et peuvent inclure des martèlements au fond du trou, des frottements de chaines, des grattements métalliques contre la porte, et des échos distant de “I’ve Got You Under My Skin” par Frank Sinatra.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-2915/doomsign.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-2915 (réelle, panneau): http://fondationscp.wdfiles.com/local--files/scp-2915/doomsign.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1002":
    new Discord.MessageEmbed()
      .setColor('#382c27')
      .setTitle('SCP-1002')
      .setURL('http://scp-jp.wikidot.com/scp-1002')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-1002 est une ombre anormale liée à un groupe de 6 objets actuellement détenus par la fondation. Chacun de ces objets possède l'ombre d'un individu humanoïde, vêtu d'un uniforme de police. Les objets liés à SCP-1002 actuellement en confinement sont les suivants:\n\nSCP-1002-1 : Une horloge grand-père récupérée à ███████, possède l'ombre d'un chevalier médiéval.\n\nSCP-1002-2 : Un petit poteau récupéré à ███████, possède l'ombre d'un membre de l'██ Police Department.\n\nSCP-1002-3 : Une imprimante grand format récupéré à ██████████, possède l'ombre d'un soldat romain.\n\nSCP-1002-4 : Un pigeon récupéré à ███████, possède l'ombre d'un membre de la police ██████.\n\nSCP-1002-5 : Un couteau de cuisine récupéré à ████████, possède l'ombre d'un gardien de sécurité du Casino ██████.\n\nSCP-1002-6 : Un Boeing 737 récupéré à ███████, possède l'ombre d'un membre d'une équipe SWAT.\n\nLes objets liés à SCP-1002 ne se comportent pas de manière anormale, à l'exception de leur ombre. SCP-1002 est lié à ces objets, et se trouve dans un état inerte jusqu'à ce qu'un individu ayant commis ce qui est socialement considéré comme un crime dans les six 6 derniers mois entre dans un périmètre de dix 10 mètres autour de l'objet auquel il est lié. À ce stade, SCP-1002 devient actif et se manifeste comme une figure humanoïde sombre semblable en apparence à son stade inerte.\n\nSCP-1002 tentera alors de poursuivre l'individu ciblé. Les SCP-1002 ont montré un niveau élevé d'agilité et semblent être en mesure de suivre leur cible à travers les murs. Si l'individu ciblé réussit à distancer SCP-1002 de plus de dix 10 mètres, celui-ci reviendra à l'état inerte dans son objet d'origine.\n\nSi l'individu est attrapé par cette manifestation, celle-ci va infliger une punition physique directement proportionnelle au crime qu'il a commis. En dépit de la sévérité de cette punition physique, la victime reste vivante et consciente tant qu'elle se trouve à 10 mètres de la manifestation.")
      .setThumbnail('http://scpsandboxwiki.wdfiles.com/local--files/tanhony/scpdemiser.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-2915 (réelle, instance de SCP-1002): http://scpsandboxwiki.wdfiles.com/local--files/tanhony/scpdemiser.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-040-JP":
    new Discord.MessageEmbed()
      .setColor('#d1d1d1')
      .setTitle('SCP-040-JP')
      .setURL('http://scp-jp.wikidot.com/scp-040-jp')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-040-JP est un puits situé dans le village, entouré d'une cabane en bois mesurant environ 5 m de large et 4 m de long. Le centre de la cabane abrite un puits en pierre présumé avoir été construit dans les temps anciens, qui descend directement sous terre. Le puits est anormalement profond et plusieurs sondes n'ont pas pu déterminer sa profondeur.\n\nBien que la cabane ait été à l'origine fermée à clé avec des chaînes en fer et de multiples cadenas, ils se sont brisés depuis en raison de la détérioration.\n\nLorsqu'un sujet regarde dans la cabine, il commence à trembler, signalant qu' « il y avait un chat ». De plus, la personne deviendra obsédée par l'idée que \"le chat est là\". Cet effet n'est pas apparent dans les dessins ou les images, cela ne se produit que lorsqu'une personne regarde l'intérieur de la cabine à l'œil nu. Une image de la caméra affiche uniquement l'intérieur de la cabane sans aucun signe des chats signalés.\n\L'exposition à l'objet faussera la perception du sujet de tous les chats domestiques. Lors d'entretiens avec des sujets exposés, ils ont rapporté que tout chat domestique semblait ressembler à un animal avec deux yeux humains sur son visage, sans poils ni autres traits, les regardant directement lorsqu'il était vu de n'importe quelle direction.\n\nDe plus, les sujets exposés commenceront à signaler que le chat apparaît constamment dans l'obscurité pour les observer. Il ne semble pas y avoir de cohérence dans le niveau d'obscurité requis pour que le chat se manifeste. On ne sait pas pourquoi le chat observe les sujets.\n\nSelon une enquête menée par des chercheurs de la Fondation, il a été déterminé que l'emplacement où le chat apparaît est influencé par la position de la lentille oculaire du sujet ou de la cornée. Selon l'hypothèse proposée par [SUPPRIMÉ], il est supposé que les endroits sombres dans les grandes profondeurs de la structure souterraine à l'intérieur de SCP-040-JP ont une influence claire sur cela.")
      .setThumbnail('http://scp-jp.wdfiles.com/local--files/scp-040-jp/neko.png')
      .addFields(
        { name: 'Images', value: 'SCP-040-JP (réelle, avant confinement): http://scp-jp.wdfiles.com/local--files/scp-040-jp/CE46.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-617":
    new Discord.MessageEmbed()
      .setColor('#7a6f6f')
      .setTitle('SCP-617')
      .setURL('http://fondationscp.wikidot.com/scp-617')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-617 possède l'apparence d'une grande pierre de granit, à l'exception d'une fermeture éclair parfaitement fonctionnelle sur son côté. Quand celle-ci est ouverte, on peut constater que SCP-617 possède une bouche avec des dents humaines. Les rayons X et les scanners IRM de SCP-617 semblent ne pas pouvoir pénétrer sa surface rocheuse. Des tests similaires pour tenter de sonder les systèmes internes de SCP-617 se sont également révélés non concluants. La bouche de SCP-617 fonctionne parfaitement, peut produire des sons et aussi être utilisée pour consommer de la nourriture. SCP-617 est également capable de rouler grâce à sa propre force.\n\nCependant, les aspects les plus perturbants de SCP-617 sont ses tendances parasitaires ainsi que sa capacité à influencer le comportement humain. En plus de savoir parler, SCP-617 est capable d’émettre un son à basse fréquence qui lui permet d'exercer un contrôle subliminal sur tout être humain l'entendant. Les êtres humains affectés par SCP-617 s'y attacheront émotionnellement, le traitant comme un animal de compagnie et en prenant soin du mieux qu'ils le peuvent. Tant qu'elles sont affectés par SCP-617, les victimes feront de la santé de SCP-617 une priorité, lui donnant une maison, le protégeant du danger, et le plus important, faisant en sorte qu'il soit bien nourrit.\n\nSCP-617 possède un système digestif actif et suit un régime principalement constitué de chair fraîche. Comme il ne peut pas obtenir de nourriture par lui-même, SCP-617 persuade son \"propriétaire\" de lui en ramener. Son propriétaire aura alors recours à tous les moyens possibles pour nourrir SCP-617. Les instances connues démontrent que les propriétaires sont prêts à abattre du bétail et d'autres animaux de compagnie pour nourrir SCP-617, et en arriveront même à assassiner d'autres êtres humains. Dans des situations désespérées, il n'est pas rare que le propriétaire donne à manger des parties de son propre corps pour nourrir SCP-617.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-617/zjb0w3.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-617 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-617/zjb0w3.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-173":
    new Discord.MessageEmbed()
      .setColor('#cc9439')
      .setTitle('SCP-173')
      .setURL('http://fondationscp.wikidot.com/scp-173')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nTransféré au Site-19 en 1993. Origine inconnue jusqu'à présent. Il est constitué de barres d'armature et de béton comportant des traces de peinture aérosol de marque Krylon. SCP-173 est animé et extrêmement hostile. L'objet ne peut pas bouger tant qu'il se trouve dans un champ visuel direct. Il est impératif que le contact visuel avec SCP-173 ne soit pas interrompu. Les membres du personnel assignés à entrer dans le conteneur sont chargés de s'alerter mutuellement avant de cligner des yeux. L'objet attaque en brisant le cou de la victime à la base du crâne, ou par strangulation. Dans le cas d'une attaque, le personnel doit respecter les procédures de confinement de Classe 4 concernant les objets dangereux.\n\nLe personnel a rapporté avoir entendu des bruits de grattements provenant de l'intérieur du conteneur lorsque personne n'est présent à l'intérieur. Ceci est considéré comme normal et toute modification de ce comportement doit être signalé au superviseur de la LGED en service.\n\nLa substance brun rougeâtre sur le sol est une combinaison de matières fécales et de sang. L'origine de ces substances est inconnue. La salle doit être nettoyée selon une fréquence bi-hebdomadaire.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-173/0LrEW.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-617 (réelle, sous confinement): http://fondationscp.wdfiles.com/local--files/scp-173/0LrEW.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-049":
    new Discord.MessageEmbed()
      .setColor('#1c1914')
      .setTitle('SCP-049')
      .setURL('http://fondationscp.wikidot.com/scp-049')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-049 est une entité humanoïde, d'environ 1,9 mètre de hauteur, répondant à la description d'un médecin de peste médiéval. Si SCP-049 paraît porter la robe épaisse et le masque céramique typiques de la profession, ces vêtements semblent plutôt avoir crû sur le corps de SCP-049 au fil du temps, et sont désormais quasiment indistincts de la forme se trouvant en dessous, quelle qu'elle soit. Les passages aux rayons X indiquent que malgré cela, SCP-049 a bel et bien une structure osseuse humanoïde sous sa couche extérieure.\n\nSCP-049 est capable de parler une variété de langues, mais semble préférer l'anglais ou le français médiéval. Bien que SCP-049 se montre généralement cordial et coopératif avec le personnel de la Fondation, il peut s'irriter grandement ou parfois devenir agressif s'il sent qu'il est en présence de ce qu'il appelle la \"Pestilence\". La nature précise de cette Pestilence est inconnue des chercheurs de la Fondation, mais elle paraît toutefois être un problème conséquent aux yeux de SCP-049.\n\nSCP-049 devient hostile aux sujets qu'il voit comme infectés par la Pestilence, devant souvent être immobilisé s'il rencontre de tels individus. Sans surveillance, SCP-049 tente généralement de tuer tous les individus concernés, SCP-049 est capable de faire cesser toutes les fonctions biologiques d'un organisme en entrant en contact avec sa peau. Le fonctionnement de ce mécanisme est inconnu, et aucune autopsie des victimes de SCP-049 n'a été concluante. SCP-049 a manifesté de la frustration ou des remords après ces éliminations, précisant qu'elles n'ont pas servi à grand chose contre \"La Pestilence\", mais cherchera tout de même à mener une opération chirurgicale sur les corps en utilisant le matériel contenu dans une mallette de médecin noire qu'il porte sur sa personne en toutes circonstances. Si les opérations ne sont pas toujours \"réussies\", elles résultent souvent en la création d'instances de SCP-049-2.\n\nLes instances de SCP-049-2 sont des cadavres réanimés que SCP-049 a opéré.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-049/SCP-049.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-049 (réelle): http://fondationscp.wdfiles.com/local--files/scp-049/SCP-049.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-096":
    new Discord.MessageEmbed()
      .setColor('#25213d')
      .setTitle('SCP-096')
      .setURL('http://fondationscp.wikidot.com/scp-096')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-096 est une créature humanoïde mesurant approximativement 2,38 mètres de haut. Le sujet ne présente qu’une très faible masse musculaire et les analyses préliminaires du corps suggèrent une légère malnutrition. Les bras, sont largement disproportionnés par rapport au reste du corps. La majeure partie de la peau est caractérisée par une absence de pigmentation et il n’y a aucun signe de pilosité.\n\nLa mâchoire de SCP-096 peut s’étendre jusqu’à 4 fois plus que celle d’un humain ordinaire. Les autres traits du visage restent similaires à ceux d’un humain ordinaire, à l’exception des yeux qui ne présentent également aucune pigmentation. Il ne montre aucun signe de fonctions cérébrales développées et n’est pas considéré comme étant doté d’une conscience.\n\nSCP-096 est normalement extrêmement docile, les capteurs de pression à l’intérieur de sa cellule montrant qu’il passe le plus clair de son temps à errer près du mur. Cependant, lorsque quelqu’un regarde le visage de SCP-096, que ce soit directement, via enregistrement vidéo ou même sur une photo (note: cette réaction ne se produit pas dans le cas de l’observation d’une représentation artistique), il rentrera dans un état de stress émotionnel considérable. SCP-096 cachera son visage avec ses mains et se mettra à hurler, pleurer et marmonner de façon incohérente. Approximativement 1 à 2 minutes après la première observation, SCP-096 commencera à courir vers la personne ayant vu son visage (qui sera à partir de maintenant désignée SCP-096-1).Les vitesses enregistrées varient entre 35 et ███ km/h et semblent dépendre de la distance à laquelle se trouve SCP-096-1. À l’heure actuelle, aucun matériau ou méthode connue ne peut entraver la progression de SCP-096.\n\nUne fois qu’il aura atteint l’emplacement de SCP-096-1, SCP-096 procédera à l’exécution de ce dernier. SCP-096-1 n'a jamais été retrouvé. SCP-096 se mettra assis pendant plusieurs minutes avant de retrouver son calme et devenir à nouveau docile puis il retournera à son habitat naturel.")
      .setThumbnail('https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1453126/1453126-1550729104387-4e962e3469ad1.jpg')
      .addFields(
        { name: 'Images', value: 'Vaut mieux éviter...' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-330":
    new Discord.MessageEmbed()
      .setColor('#281a7a')
      .setTitle('SCP-330')
      .setURL('http://fondationscp.wikidot.com/scp-330')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-330 est un petit bol en acier inoxydable, remplie d’une quantité variable de sucreries emballées individuellement. Scotché sur un côté du bol se trouve une note rédigée à la main, indiquant \"N’en prenez que deux, s’il vous plaît\". Les tentatives pour enlever cette note ont échoué, ainsi que les tentatives pour la cacher ou la recouvrir. Les sujets de test ont fait remarquer qu’il était impossible de (faire en sorte de) ne pas lire la note, et ceux qui ont approché le bol par le côté opposé à celui où est écrit la note étaient conscients de cet avertissement.\n\nLorsqu'un quantité de sucreries supérieure à deux instances est retirée du bol, peu importe les moyens utilisés, le sujet voit spontanément ses mains être sectionnées au niveau des poignets par une méthode inconnue. Des tests impliquant une manipulation à distance par du personnel de Classe D se sont conclus par une amputation des mains de l’opérateur, bien qu’il n’y ait pas eu de contact direct. Des examens ont révélé que l’incision est faite au niveau moléculaire, ne laissant aucune trace d’outils ou facteurs identifiables. Il est à noter que le troisième bonbon doit être retiré du bol après un certain délai. Après 24 heures, le compteur se remet à zéro et le bonbon additionnel peut être retiré.\n\nSCP-330 a été découvert trois jours après Halloween 20██, lorsqu’une équipe de police a été dépêchée sur ce qui a été pris pour un cas de démembrement rituel. SCP-330 a été saisi comme preuve, mais tous les officiers présents lors de l’enquête ont été tués après que l’agent ██████ ait vidé le bol de son contenu. La cause de la mort était due [DONNÉES CENSURÉES]. Des agents de la Fondation, infiltrés en tant qu'agents fédéraux, ont récupéré l’objet avec des pertes acceptables.")
      .setThumbnail('https://em.wattpad.com/ca7dcf3825854b796af4481e751b8fb98929781f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f335f5f63635f37676b55476f46773d3d2d3736353839383734312e313562363937336261323035393836393333343136333336373233332e6a7067?s=fit&w=720&h=720')
      .addFields(
        { name: 'Images', value: 'Aucune données trouvées...' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-198":
    new Discord.MessageEmbed()
      .setColor('#b9ff69')
      .setTitle('SCP-198')
      .setURL('http://fondationscp.wikidot.com/scp-198')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-198 a pris de nombreuses formes depuis sa récupération par la Fondation en 19██. Actuellement, SCP-198 apparaît en tant qu'un mug à café en porcelaine. Lorsqu'il n'est pas actif, SCP-198 peut contenir 240 mL de liquide, comme toute tasse de café standard.\n\nLe comportement anormal de la tasse ne se manifeste pas à moins qu'un être humain vivant prenne SCP-198 dans la main. Approximativement 2 à 5 secondes après la récupération de l'objet, il se liera instantanément à la main de son porteur, grâce à un procédé inconnu mais douloureux. Les sujets de test ont rapporté une douleur semblable à une brûlure, bien qu'aucune chaleur n'aie été détectée par les observateurs ou les instruments de mesure. L'utilisation de gants ou d'autres barrières physiques entre l'objet et la main n'empêche pas le processus. Des tests ont révélé que le lien est réalisé à échelle moléculaire et est permanent jusqu'à la mort du sujet. À ce jour, aucun moyen de briser le lien n'a été trouvé, y compris couper les doigts ou la main, car toute blessure, quelle que soit son ampleur, au-delà du poignet du porteur est instantanément soignée. Des tests consistant en la vérification de la portée du soin jusqu'à l'épaule du porteur sont actuellement en demande d'approbation.\n\nUne fois le lien effectué, tout liquide à l'intérieur de SCP-198 disparaît, et le conteneur commencera inexplicablement à se remplir avec un matériau fluide ou semi-fluide, s'arrêtant une fois SCP-198 rempli. Le contenu diffère en fonction du sujet, mais a toujours été un fluide corporel ou une sécrétion humaine.\n\nUne fois SCP-198 rempli, le porteur se déshydrate et s'émacie rapidement, devenant de plus en plus faible jusqu'à sa mort, qui advient habituellement dans les 24 heures si rien n'est fait pour l'empêcher. L'ingestion de nourritures ou boissons standard ou de nutriments enrichis n'inverse pas et ne ralentit pas le processus. Les tests ont révélé que le seul moyen de \"nourrir\" le sujet est la consommation du contenu de SCP-198.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-198/001')
      .addFields(
        { name: 'Images', value: 'SCP-198 (réelle): http://fondationscp.wdfiles.com/local--files/scp-198/001' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-529":
    new Discord.MessageEmbed()
      .setColor('#8f8d99')
      .setTitle('SCP-529')
      .setURL('http://fondationscp.wikidot.com/scp-529')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-529 est un chat domestique avec une robe grise à rayures.\n\nLe corps de l’animal du bout de la queue jusqu’à la fin de la cage thoracique apparait comme étant manquant. Le corps s’arrête net comme si il était coupé en deux.\n\nEn dépit de cela, l’animal ne présente aucun problème de santé et se déplace comme si son arrière-train était toujours présent. Par exemple, il marche normalement, et peu de temps après avoir été nourri, l’animal semble se comporter comme s’il faisait ses besoins.\n\nLa section du corps ne fait pas apparaître l’intérieur de l’animal mais semble être entièrement noire et absorbe toutes les longueurs d’onde non visibles de la lumière. Elle est légèrement élastique au toucher. Caresser doucement cette zone provoque parfois une réaction positive (ronronnement) mais, plus généralement, un volte-face de la créature vers la personne l'ayant caressée, toutes griffes dehors. Ceux qui ont été griffé n’ont expérimenté aucun phénomène anormal.\n\nLes parties manquantes ne semblent pas être invisibles, un examen superficiel montre qu’il n’y a aucun arrière-train. Une analyse ADN a révélé que l’animal est une femelle.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-529/SCP-529.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-529 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-529/SCP-529.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-099":
    new Discord.MessageEmbed()
      .setColor('#ffdf6b')
      .setTitle('SCP-099')
      .setURL('http://fondationscp.wikidot.com/scp-099')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-099 est une peinture de 73 par 50 cm intitulée \"Le Portrait\". Créée en 1935 par le peintre surréaliste René Magritte, la peinture originale possède des propriétés mémétiques qui déclenchent des effets de paranoïa aiguë chez l'observateur voire, si elle est vue trop longtemps ou de trop prés (moins de trois mètres), des lésions psychologiques durables, parfois irréversibles. La peinture dépeint une simple nature morte, à l'exception d'un œil au centre de la peinture qui renvoie son regard à l'observateur.\n\nUne reproduction de ce tableau est actuellement exposée au Muséum d'Art Moderne de New York, à ceci près que plusieurs détails ont été enlevés pour prévenir des effets de SCP-099. Pour un rapport détaillé des éléments supprimés, référez-vous au Document 099b. Les reproductions détaillées et les photographies de l’œuvre originale conservent ses propriétés mémétiques.\n\nLes personnes ayant observé la peinture pendant trop longtemps ou de trop près deviennent sujettes à des hallucinations, et pensent que tout être ou représentation d'un être pourvu d'yeux les épient. Dans les cas extrêmes, les sujets rapportent que même les objets les regardent fixement.\n\nL’état peut être si grave que les sujets vont même rapporter la sensation d'être observé par des personnes leur tournant le dos. Selon la durée d'exposition initiale à la peinture, le sujet pourra souffrir de ces effets jusqu’à sa mort, entraînant une sévère paranoïa allié à une grave ochlophobie.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-099/The_Portrait.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-529 (réelle): http://fondationscp.wdfiles.com/local--files/scp-099/The_Portrait.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-703":
    new Discord.MessageEmbed()
      .setColor('#ebeae6')
      .setTitle('SCP-703')
      .setURL('http://fondationscp.wikidot.com/scp-703')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-703 est un placard en bois, autrefois situé dans une maison à Endate, dans le New Hampshire. L'intérieur SCP-703 est peint en blanc, et contient une seule ampoule. L'ampoule à incandescence est suspendu au plafond par un cordon. SCP-703 mesure 2,5 mètres de haut, 3 mètres de large et 1 mètre de long. L’extérieur de SCP-703 a été reconstruit et peint en blanc pour éviter toute détérioration.\n\nÀ des intervalles aléatoires, compris entre 2 heures et 14 mois, SCP-703 entrera dans un état actif. Pendant l'état actif, l'ampoule à l'intérieur de SCP-703 s'active. Suite à cela, une instance de SCP-703-1 apparaît. SCP-703-1 désigne une collection de 452 objets aléatoires, extrait de SCP-703 lorsqu'il est actif. Les cas de SCP-703-1 semblent avoir une relation avec leur environnement et les personnes qui y sont exposées.\n\nLorsque SCP-703 a été récupéré par la Fondation, il a produit principalement des objets pour jeunes enfants, comme des jouets, des jeux, et de la nourriture comme des bonbons, des collations aux fruits. Cependant, après 2 ans de confinement, SCP-703 a commencé a produire des objets de nature plus scientifique, comme l'équipement de laboratoire. Au fil du temps, SCP-703 a produit plus de littérature et d'équipement scientifique spécifique, produisant finalement un équipement spécialisé qui pourrait être utilisé afin de reproduire la fonction de l'équipement sur place. Suite à cela, SCP-703 a été déplacé dans une chambre de confinement de niveau supérieur.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-703/703.jpeg')
      .addFields(
        { name: 'Images', value: 'SCP-703 (réelle): http://fondationscp.wdfiles.com/local--files/scp-703/703.jpeg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1974-EX":
    new Discord.MessageEmbed()
      .setColor('#242b24')
      .setTitle('SCP-1974-EX')
      .setURL('http://fondationscp.wikidot.com/scp-1974-ex')
      .setAuthor('')
      .setDescription("Classe: ~~Sûr~~ Expliqué\n\nSCP-1974-EX est un ensemble de dés à 20 faces (communément appelés d20 dans les jeux de rôle) qui sont composés d'un polymère d'acrylonitrile butadiène styrène (ABS) standard.\n\nTous ceux manipulant SCP-1974-EX durant cinq minutes sans interruption ou au-delà d’environ une heure, quand SCP-1974-EX est utilisé dans une partie typique de jeu de rôle, seront sujets à des hallucinations et seront extrêmement influençables. Lorsque SCP-1974-EX est utilisé dans un jeu de rôle, approximativement 90 % des sujets affectés penseront que les conditions et l’environnement sont réels et commenceront à agir comme tel. Les effets persistent généralement pendant 36 heures. Les 10 % restants des sujets exposés éprouvent des hallucinations diverses, et typiques d'une exposition non intentionnelle au LSD-25 ou à la psilocybine, tout comme les sujets exposés à SCP-1974-EX et ne présentent pas de comportement influencé intentionnel ou non.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1974-ex/1974-ex.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-1974-EX (réelle): http://fondationscp.wdfiles.com/local--files/scp-1974-ex/1974-ex.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-345":
    new Discord.MessageEmbed()
      .setColor('#8c7234')
      .setTitle('SCP-345')
      .setURL('http://fondationscp.wikidot.com/scp-345')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-345 est un cube de pierre, dont les faces sont divisées en neuf carrés de taille égale, et dont les sections peuvent être tournées de façon similaire à un casse-tête commun. Au lieu des six couleurs communément trouvées dans ce type de casse-tête, les carrés représentent six matériaux différents: une roche magmatique intrusive ressemblant à du granite, une roche magmatique intrusive ressemblant à du gabbro, une roche magmatique extrusive ressemblant au basalte, une roche sédimentaire ressemblant au grès, du verre volcanique ressemblant à l'obsidienne, et une roche métamorphique de haute qualité ressemblant au gneiss granitique.\n\nSCP-345 peut être ouvert, s'il est laissé ouvert pendant 5 secondes, il se fermera automatiquement et se remettra en place pendant 2 minutes. Après cela, il peut être manipulé sûrement. Si une des faces est terminée, l'une des situations suivantes peut avoir lieu:\n\n-Si la face complétée représente l'une des roches magmatiques, SCP-345 chauffera approximativement à 1500°C (face en gabbro), 1200°C (face en basalte) ou 900°C (face en granite). Le temps que prend SCP-345 pour se refroidir varie grandement, la face en basalte étant la plus rapide (jusqu'à 50 minutes) et la face en gabbro étant la plus lente (jusqu'à 250 jours).\n\n-Si la face complétée représente la roche sédimentaire, le cube commencera à se secouer violemment pendant jusqu'à 10 heures. Un son d'eau courante ou de vent hurlant peut être entendu provenant de l'intérieur de SCP-345 durant tout le processus.\n\n-Si la face complétée représente le verre volcanique, SCP-345 se chauffera jusqu'à approximativement 900°C, et prendra jusqu'à 5 minutes pour se refroidir.\n\n-Si la face complétée représente la roche métamorphique, SCP-345 subira le même procédé que ce qui aurait eu lieu si la face en granite était complétée. Après refroidissement, le cube procédera à une remise en place très rapide, faisant des sons de grincement pendant la remise en place, pendant jusqu'à 50 heures.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-345/SCP-345')
      .addFields(
        { name: 'Images', value: 'SCP-345 (réelle): http://fondationscp.wdfiles.com/local--files/scp-345/SCP-345' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-682":
    new Discord.MessageEmbed()
      .setColor('#c4ad76')
      .setTitle('SCP-682')
      .setURL('http://fondationscp.wikidot.com/scp-682')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-682 est une grande créature vaguement reptilienne d'origine inconnue. Elle semble être extrêmement intelligente, et a été observée discutant de manière complexe avec SCP-079 au cours de leur bref contact. SCP-682 semble vouer une haine à toute forme de vie, et l'a exprimé dans plusieurs interviews au cours de son confinement.\n\nSCP-682 a toujours été observé doté d'une force extrêmement grande, d'une grande vitesse et de bon réflexes, même si les niveaux exacts varient en fonction de son état. Le corps physique de SCP-682 se développe et évolue très rapidement, grandissant ou diminuant tandis qu'il consume ou rejette de la matière. SCP-682 consomme l'énergie de tout ce qu'il ingère, organique ou non-organique. La digestion semble être facilitée par un ensemble de branchies de filtrage à l'intérieur des narines de SCP-682. Celles-ci sont en mesure d'utiliser les matières exploitables de toute solution liquide, ce qui lui permet de constamment se régénérer à partir de l'acide. Ses capacités de régénération sont énormes, et SCP-682 a été observé en train de se déplacer alors que son corps était détruit ou pourri à 87 %.\n\nEn cas de rupture de confinement, SCP-682 doit être traqué et récupéré en mobilisant toutes les forces d'intervention mobiles disponibles, et aucune équipe de moins de 7 membres n'est autorisée à l'affronter. À ce jour (██-██-████), le nombre de tentatives de violation de confinement s'élève à 17, tandis que les évasions réussies sont au nombre de six 6.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-682/monster8.jpg')
      .addFields(
        { name: 'Images', value: 'SCP-682 (réelle): http://fondationscp.wdfiles.com/local--files/scp-682/monster8.jpg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-172-FR":
    new Discord.MessageEmbed()
      .setColor('#d6c400')
      .setTitle('SCP-172-FR')
      .setURL('http://fondationscp.wikidot.com/scp-172-fr')
      .setAuthor('')
      .setDescription("Classe: ~~Sûr~~ Euclide\n\nSCP-172-FR désigne une fenêtre du deuxième étage d'un immeuble d'habitation situé au ██ Rue ██████ à Grenoble. Vue depuis l'extérieur, elle paraît inclinée vers l'Est avec un angle de 16,4° par rapport à la verticale. Vue depuis l'intérieur, elle est inclinée avec le même angle, mais dans la direction opposée. Tout ce qui est observé à travers SCP-172-FR, y compris la chute des corps et l'horizon, paraît incliné selon l'angle de la fenêtre, d'une manière analogue à des objets observés sur un écran de télévision incliné.\n\nQuand un objet traverse SCP-172-FR, il adopte une inclinaison de 16,4° similaire à celle de la fenêtre, et par conséquent la force gravitationnelle qu'il subit s'incline de 16,4° par rapport à la verticale. Si l'objet sort du bâtiment par SCP-172-FR, il sera incliné vers l'Est, et s'il y rentre, il sera incliné vers l'Ouest. Il est donc possible d'annuler l'effet en re-traversant SCP-172-FR dans le sens contraire à celui de la traversée précédente.\n\nLes effets sont cumulatifs: deux passages dans le même sens produisent un angle deux fois plus important, trois passages produisent un angle triple, et ainsi de suite. Il est possible d'inverser complètement la gravité d'un objet après 11 passages.\n\nLes lois qui régissent cette gravité anormale, si elles existent, sont encore mal comprises. Il est uniquement su que les objets ayant un angle proche de 90° \"tombent\" en respectant la courbure de la Terre.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-172-fr/nonconfine.jpg')
      .addFields(
        { name: 'Images', value: "SCP-172 (réelle): http://fondationscp.wdfiles.com/local--files/scp-172-fr/nonconfine.jpg \n SCP-172 (réelle, eau affecter par l'effet de SCP-172): http://fondationscp.wdfiles.com/local--files/scp-172-fr/eau.png" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-009-JP":
    new Discord.MessageEmbed()
      .setColor('#ffff66')
      .setTitle('SCP-009-JP')
      .setURL('http://scp-jp.wikidot.com/scp-009-jp')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-009-JP est une anomalie qui se produit de manière irrégulière sur les montres du monde entier. Cependant, les effets significatifs de SCP-009-JP apparaissent principalement sur l'horloge atomique au césium. L'heure atomique internationale (TAI) est déterminée par la moyenne pondérée d'environ 300 horloges atomiques au césium (dont ██ sont sous le contrôle de la Fondation) gérées dans le monde. Veuillez noter que l'erreur de l'horloge atomique au césium est d'environ 1 seconde pour 100 millions d'années.\n\nLorsque SCP-009-JP se produit, toutes les horloges atomiques au césium sont divisées en groupe Q ou en groupe S. Les deux groupes sortent exactement le même nombre de secondes, entraînant toujours \"l'horloge du groupe Q est X secondes plus rapide que l'horloge du groupe S\". Quelle horloge atomique au césium appartient à quel groupe est différente à chaque fois, mais les horloges atomiques géographiquement proches ont tendance à être dans le même groupe. Dans les cas survenus en janvier 2014, le décalage horaire était de 0,00000006 seconde au minimum et de 0,21 seconde au maximum.\n\nCet effet peut se produire avec d'autres montres, mais dans de nombreux cas, des problèmes de précision empêchent l'anomalie d'être reconnue. SCP-009-JP a confirmé qu'une horloge à réseau optique d'une précision supérieure à l'horloge atomique au césium était affectée. En outre, le temps requis par les corps célestes et l'espace, comme la rotation de la terre, est également affecté par SCP-009-JP. Par conséquent, il n'y a aucun moyen de confirmer quel groupe, Q ou S, a été affecté par SCP-009-JP.")
      .setThumbnail('https://pm1.narvii.com/6582/a41412d3b23b3498858b55c30a8da4b3726fe637_hq.jpg')
      .addFields(
        { name: 'Images', value: "Aucune données trouvées..." })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-444-JP":
    new Discord.MessageEmbed()
      .setColor('#ff003c')
      .setTitle('SCP-444-JP')
      .setURL('http://scp-jp.wikidot.com/scp-444-jp')
      .setAuthor('')
      .setDescription("")
      .setImage("http://scp-jp.wdfiles.com/local--files/scp-444-jp/SCP-444-JP%E6%94%B9%E8%A8%82%EF%BC%91.jpg")
      .setThumbnail('')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-040-JP":
    new Discord.MessageEmbed()
      .setColor('#f7f4df')
      .setTitle('SCP-040-JP')
      .setURL('http://scp-jp.wikidot.com/scp-040-jp')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nLa plupart de l'apparence de SCP-020-JP est très similaire à celle d'une fille humaine, mais la caractéristique la plus notable est que les deux bras ont les ailes d'un oiseau. L'ouverture de l'aile est de 3,0 m. À la suite de l'inspection au moment de la détention, il a été estimé qu'ils avaient environ 10 à 12 ans. L'os de l'aile a une structure en treillis semblable aux oiseaux normaux, qui est flexible et légère. En revanche, le corps autre que les ailes présente des symptômes congénitaux de mauvaise croissance et d'ostéoporose. Certains des organes internes de [SUPPRIMÉ] ont également des abréviations en gras, il y a donc un problème de digestion des aliments normaux. En conséquence, pour une hauteur de 1,3 m, le poids est aussi léger qu'environ 20 kg. Un certain développement musculaire de la poitrine et des bras est observé par rapport à une fille normale, mais même en considérant cela, il est complètement insuffisant pour que SCP-020-JP vole suffisamment. Battant à l'intérieur de la pièce, l'impact d'un échec à l'atterrissage a provoqué deux fractures de la jambe.\n\nL'intelligence de SCP-020-JP a environ 4 ans. Aucune anomalie des organes vocaux ou de l'intelligence n'a été observée, mais aucune langue n'a été parlée depuis le confinement. Le programme de langue vous permettra de comprendre les mots, les phrases courtes, comme les promenades, les repas, les noms de certains membres du personnel, etc. ██ mois après le confinement. SCP-020-JP était protégé par un groupe d'étudiants de ████ qui étaient dans un camp dans les montagnes ██████████, où ils ont été affaiblis et attaqués par un corbeau. Après cela, il a été découvert par une inspection effectuée sur l'autoroute ██, et il est devenu connu de la Fondation. Les résultats des tests ADN montrent que ██% des grues japonaises.")
      .setThumbnail('https://cdn.donmai.us/sample/55/72/sample-5572d987a896a332f472dcf2411b7df9.jpg')
      .addFields(
        { name: 'Images', value: "Aucune données trouvées..." })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-835-JP":
    new Discord.MessageEmbed()
      .setColor('#2a0036')
      .setTitle('SCP-835-JP')
      .setURL('http://scp-jp.wikidot.com/scp-835-jp')
      .setAuthor('')
      .setDescription("Classe: ~~Keter~~ Sûr\n\nSCP-835-JP serait une adolescente tardive aux longs cheveux noirs portant principalement un uniforme scolaire noir, qui s'appelle Kyotei Yamiko. L'âge d'apparition peut augmenter ou diminuer d'environ 10 ans. Elle est réticent et a peu de hauts et de bas d'émotion, donc elle est souvent décrit comme lugubre, et il semble détester se voir comme quelqu'un d'autre.\n\n\"Shingyamiko\" peut se téléporter de l'obscurité à l'obscurité, ignorant les distances et les obstacles, et en tuant une cible, utilisez sa grande capacité pour se déplacer rapidement et attaquer avec un grand couteau. On dit également qu'elle possède la capacité de manipuler l'obscurité à volonté et d'envelopper des objets pour les faire disparaître, mais le principe est inconnu.\n\n\"Shingakuyamiko\" était un phénomène anormal qui n'est apparu pour la première fois en 19██ qu'au personnel de la Fondation comme les chercheurs, les agents et les membres du MTF. Ce phénomène anormal se produit dans un cycle d'environ 1 à 3 mois, et le sujet qui le rencontre laissera beaucoup de taches de sang en quelques secondes à une douzaine de secondes et disparaîtra de l'endroit. Aucun sujet n'a été retrouvé disparu, vivant ou mort. Les enquêtes ont confirmé que le sang laissé sur les lieux est la perte de sang du sujet, ce qui suggère que le sujet peut avoir été mortellement blessé avant sa disparition.\n\nEn raison de son manque de loi et de sa soudaineté, et les objets qu'elle rencontre disparaissent sans exception, les observations expérimentales de ce phénomène n'ont pas réussi et les détails sont inconnus à ce jour. Il est connu à la moindre information comme le témoignage d'une personne qui était près de la scène et la vidéo de la caméra de surveillance que le sujet se comportait et se comportait comme s'il avait été attaqué par quelque chose qu'il ne pouvait pas reconnaître.")
      .setThumbnail('https://images-cdn.9gag.com/photo/aGZLpB6_700b.jpg')
      .addFields(
        { name: 'Images', value: "Aucune données trouvées..." })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-283":
    new Discord.MessageEmbed()
      .setColor('#545e52')
      .setTitle('SCP-283')
      .setURL('http://fondationscp.wikidot.com/scp-283')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nPour autant que l'on puisse en juger, SCP-283 est une simple pierre composée de granite gris-sombre, légèrement tachetée et usée par le temps et les nombreux chocs endurés par l’objet. Celui-ci pèse un peu plus d’un kilo et mesure 10 centimètres de long. Toutefois, au lieu de suivre la trajectoire classique de la gravité, SCP-283 est attiré très précisément vers l’Est. Des études poussées ont montré que SCP-283 tombe, en fait, en tournant autour de la terre, affecté par une étrange force gravitationnelle.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-283/SCP-283.jpg')
      .addFields(
        { name: 'Images', value: "SCP-283 (réelle): http://fondationscp.wdfiles.com/local--files/scp-283/SCP-283.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-115":
    new Discord.MessageEmbed()
      .setColor('#e0d100')
      .setTitle('SCP-115')
      .setURL('http://fondationscp.wikidot.com/scp-115')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-115-1 est un jouet camion-benne sans aucune identification, marque ou label permettant d'identifier son fabricant d'origine. Cependant à la différence des autres jouets camion-benne ordinaires, SCP-115-1 pèse autant que le véhicule réel qu'il représente, soit approximativement 90 tonnes. Le fait que le véhicule puisse peser autant est inconnu, car l'analyse de SCP-115-1 démontre qu'il est fait du même plastique trouvé dans les jouets semblables.\n\nSCP-115-1 est aussi doté du mouvement motorisé et peut fonctionner exactement comme un camion-benne normal, excepté le fait qu’il est à une taille plus petite. Il est contrôlé par SCP-115-2 qui ressemble à un contrôleur fortement modifié de voiture RC. SCP-115-2 peut contrôler les mouvements de SCP-115 bien que celui-ci manque de récepteur radio ou de parties mécaniques de toutes sortes. SCP-115-2 ne fonctionne avec aucun autre dispositif commandé par radio, mais fonctionne exactement comme un contrôleur par radio commun, exigeant même des batteries pour fonctionner correctement.\n\nLes tests ont démontré qu’en plus de son poids anormal, SCP-115-1 a également une capacité de chargement semblable à ses grands homologues, pouvant porter ou remorquer 120 tonnes de cargaison. En plus, SCP-115-1 a besoin de gazole pour fonctionner. Il y a un petit port sur son côté gauche qui accepte le combustible, bien qu’il stocke et consume la même quantité de gazole qu’un camion-benne normal. La manière dont il consume le gazole ainsi que l'endroit où il est stocké sont actuellement à l'étude.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-115/2qk4ck3.jpg')
      .addFields(
        { name: 'Images', value: "SCP-115 (réelle): http://fondationscp.wdfiles.com/local--files/scp-115/2qk4ck3.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-872":
    new Discord.MessageEmbed()
      .setColor('#2e0901')
      .setTitle('SCP-872')
      .setURL('http://fondationscp.wikidot.com/scp-872')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-872 est un vieil épouvantail couvert d'un manteau en lambeaux et d'un chapeau, mesurant trois 3 mètres de haut et 10 centimètres de large. SCP-872 est composé de bois de pin, dont les fragments n'ont pas révélé ces propriétés anormales.\n\nLorsque des animaux considérés comme du bétail (moutons, vaches, poules, etc) entrent dans la zone à moins de 1,5 km de SCP-872, ils sont immédiatement touchés par ses propriétés anormales. Les animaux atteints par SCP-872 sont extrêmement hostiles à l'homme et agressent sauvagement tous ceux qui les approchent. Les animaux atteints ont été observés utilisant des manœuvres avancées telles que des encerclements ou des embuscades.\n\nLes animaux atteints ont également été observés en train de se comporter comme s'ils étaient dans une ferme automatisée. Les poules pondent leurs œufs dans des lieux faciles d'accès. Les moutons s'efforcent de retirer leur laine les uns des autres en utilisant leurs dents. Les vaches tuent 1 vache chaque semaine, et séparent la carcasse de la viande.\n\nChaque mois, les animaux transportent tout ce qui a été produit au périmètre de SCP-872 et de sa zone d'influence et permettent aux humains de tout récupérer.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-872/scpscarecrow.jpg')
      .addFields(
        { name: 'Images', value: "SCP-872 (réelle): http://fondationscp.wdfiles.com/local--files/scp-872/scpscarecrow.jpg \n SCP-872 (moutons affecter par SCP-872): http://fondationscp.wdfiles.com/local--files/scp-872/scpsheep.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-823":
    new Discord.MessageEmbed()
      .setColor('#bbcfa5')
      .setTitle('SCP-823')
      .setURL('http://fondationscp.wikidot.com/scp-823')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-823 est un parc d'attraction abandonné situé à █████, █████. Le site fut abandonné en ████ après plusieurs violents incidents qui ont causé la mort de visiteurs du parc. 231 visiteurs furent tués et 7 autres blessés ou mutilés. Voici une liste des personnes mortes/bléssées:\n\n-Deux 2 individus, mâle et femelle, retrouvés fusionnés à de multiples parties de leurs corps lorsqu'ils émergèrent de l'attraction « Tunnel de l'Amour ». (décédés)\n\n-1 individu portant un costume de la mascotte « Hippo Heureux », retrouvé mort d'étouffement. Il fut découvert que la bouche, la trachée et les poumons étaient remplies d'une substance fibreuse, plus tard identifiée comme étant identique à la matière composant le costume. (décédé)\n\n-15 individus retrouvés sur la montagne russe « Thriller Chiller », tous décapités suite à un choc violent. Des témoins ont signalés que les décès n'ont pas eu lieu simultanément, mais par groupes de deux, depuis le premier rang jusqu'au dernier. Une analyse détaillée indique que chaque groupe de décès correspond à une boucle ou à un virage sur le parcours de la montagne russe. (décédés)\n\n-1 individu retrouvé sous la montagne russe « Thriller Chiller », mort d'une brisure de la nuque et d'importants traumatismes crâniens causés par une chute de quinze mètres depuis une position inversée. L'individu était assis dans les derniers wagons et a réussi d'une manière ou d'une autre à s'extirper du harnais de sécurité de l'attraction au beau milieu du parcours. (décédé)\n\n-1 individu retrouvé démembré dans l'attraction « La Maison des Miroirs ». Le bras gauche fut retrouvé à six mètres au nord du torse. La jambe gauche fut retrouvée attachée au plafond par ses tendons. La jambe droite fut retrouvée en possession du Sujet 79, partiellement dévorée (les analyses ont révélés que les traces de morsure retrouvées sur la chair et les os de la jambe sont d'origine humaines). A ce jour, le bras droit n'a pas été retrouvé. (vivant)")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-823/823-001.jpg')
      .addFields(
        { name: 'Images', value: "SCP-823 (réelle, montagnes russe): http://fondationscp.wdfiles.com/local--files/scp-823/823-001.jpg \n SCP-823 (réelle, atraction non identifié): http://fondationscp.wdfiles.com/local--files/scp-823/823-003.jpg \n SCP-823 (réeele, auto-tamponneuse): http://fondationscp.wdfiles.com/local--files/scp-823/823-004.jpg \n SCP-823 (réelle, grande roue): http://fondationscp.wdfiles.com/local--files/scp-823/823-005.jpg \n SCP-823 (réelle , montagnes russe): http://fondationscp.wdfiles.com/local--files/scp-823/823-006.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-786":
    new Discord.MessageEmbed()
      .setColor('#d1d9e3')
      .setTitle('SCP-786')
      .setURL('http://fondationscp.wikidot.com/scp-786')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-786 est un large entonnoir composés de polymères █████████ de haute densité. Il ressemble à un simple entonnoir de cuisine, et la valeur \"8 OZ.\" est marquée à l'extérieur de celui-ci, vers la grande ouverture; seulement, le diamètre interne de l'entonnoir fait 1.14m vers la grande extrémité, et 9.50cm vers la petite. Il peut contenir 408.8 litres, ce qui est environ 1730 fois plus que le volume inscrit.\n\nIl suffit de regarder à l'intérieur de SCP-786 pour reconnaître ses propriétés anormales. Lorsqu'il est vu d'une extrémité ou d'une autre, l'intérieur de SCP-786 parait parfaitement cylindrique, et les diamètres des extrémités semblent être les mêmes, qu'il soit observé du grand ou du petit orifice. Tout objet passant par SCP-786 verra ses propriétés physiques, comme la taille, augmentées ou réduites par un facteur de 12, en fonction de l'extrémité par laquelle il est rentré. Ce changement est permanent, et la seule façon de l'annuler est de refaire passer l'objet dans SCP-786, dans le sens opposé.\n\nIl est supposé que l'espace est «déformé» à l'intérieur de SCP-786, amenant tout ce qui passe à l'intérieur à apparaitre plus ou moins grand, sans changer leur réelle taille. Ceci permet aux organismes vivants de passer dans SCP-786 sans subir de dégâts visibles dans leur version réduite ou agrandie. Cela inclut les humains, qui ne montrent aucun problème de santé et aucune dégradation mentale, malgré le changement de taille considérable de leur cerveau. La façon dont l'objet est agrandit ou réduit par un facteur de 12 est à ce jour incomprise. Il ne semble pas y avoir de moyen de faire passer SCP-786 à l'intérieur de lui-même.\n\nEn raison des limites imposées par les diamètres intérieurs des deux extrémités, il est impossible de réduire quelque chose de plus de 1.14m ou d'agrandir quelque chose de plus de 9.50cm avec SCP-786.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-786/IMAGE1.jpg')
      .addFields(
        { name: 'Images', value: "SCP-786 (réelle): http://fondationscp.wdfiles.com/local--files/scp-786/IMAGE1.jpg  \n SCP-786 (réelle): http://fondationscp.wdfiles.com/local--files/scp-786/image2.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-970":
    new Discord.MessageEmbed()
      .setColor('#3a4744')
      .setTitle('SCP-970')
      .setURL('http://fondationscp.wikidot.com/scp-970')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-970 est un phénomène spatial où une salle semble être «répétée». En effet, passer l'une des portes affectées d'une de ces salles amènera à se retrouver à nouveau dans ladite salle, formant un passage infini. Ce «couloir de dimensions», comme nous pourrions l'appeler, ne semble pas affecter les salles voisines, car il est apparemment impossible d'arriver dans les salles répétées sans passer par la salle d'origine. Aucun moyen d'expliquer cette anomalie n'a encore été trouvé.\n\nSCP-970-01 est un bloc de prison dans le Secteur-19, ainsi que le premier phénomène de SCP-970 rencontré par la Fondation. Il fût construit dans le but d'accueillir un plus grand nombre de Classe-D, et pût remplir son objectif jusqu'au ██/██/████, lorsque plusieurs Classe-D furent observés à l'extérieur de leurs cellules sans autorisation, dans le but de s'échapper du Secteur-19. Une analyse des cellules permit à la Fondation de découvrir une série de portes n’existant pas auparavant, menant dans des salles du coté opposé du bloc. Il fût rapidement établi que ce passage d'une porte à l'autre était géométriquement impossible. Afin d'éviter que cet incident se reproduise, SCP-970-01 n'est plus utilisé pour sa fonction principale, et des gardes doivent surveiller les portes concernées, comme expliqué dans les Procédures de Confinement.\n\nDepuis cet incident, ██ autres structures affectées par SCP-970 ont été découvertes, et ██% d'entre elles sont dans un rayon de 800 km du Secteur 19. L'aile Ouest du palais législatif de [DONNÉES CENSURÉES] est l'une de ces structures; La Fondation ne pût acquérir ce bâtiment, et les autorités locales se montrèrent peu coopératives lorsqu'une augmentation de la protection des entrées de l'aile fut demandée. Le problème fut résolu six mois plus tard, lorsqu'un violent coup d'état amena la destruction du bâtiment, entraînant [DONNÉES SUPPRIMÉES] fut finalement confiné par les FIM Rhô-8 et Pi-1, avec l'aide des forces rebelles.")
      .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f124a28-31b2-480d-82de-eca591444d42/ddeo67f-b0165b52-2892-47eb-b04e-e174dda2dfce.png/v1/fill/w_1018,h_785,q_70,strp/scp_970_by_kabagamingtv_ddeo67f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03ODkiLCJwYXRoIjoiXC9mXC8xZjEyNGEyOC0zMWIyLTQ4MGQtODJkZS1lY2E1OTE0NDRkNDJcL2RkZW82N2YtYjAxNjViNTItMjg5Mi00N2ViLWIwNGUtZTE3NGRkYTJkZmNlLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hH2gCnzxBQclTDU6Zzi2AHxoTqGxp8Ehg6F8lUv6hfc')
      .addFields(
        { name: 'Images', value: "Aucune données trouvées..." })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-207":
    new Discord.MessageEmbed()
      .setColor('#9c2f1e')
      .setTitle('SCP-207')
      .setURL('http://fondationscp.wikidot.com/scp-207')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-207 est une caisse contenant 24 bouteilles de la boisson Coca-Cola. Les bouteilles sont ainsi nommées de SCP-207-A à SCP-207-X. Le liquide contenu dans celles-ci a été confirmé être identique dans chacune des bouteilles, et ne devra pas être ingéré en dehors de tests supervisés. Cependant, la bouteille de test active devra toujours garder son bouchon en dehors des prélèvements de liquide.\n\nLa spectroscopie de masse et les tests chimiques ont montré une concentration supérieure à la moyenne de caféine et de sucres (naturels et artificiels), ainsi que de [SUPPRIMÉ]. L'effet concret de ceci s'observe lorsqu'un individu boit SCP-207-1, il ne ressentira plus le besoin effectif de sommeil ou de repos, et n'essayera ni de dormir ni de se reposer. Cet effet n'est diminué par aucun soporifique ou médicament déjà testé sur des sujets de test. Cependant, seule une quantité de plus de 5 millilitres causera cet effet. La raison pour laquelle ce volume minimum est requis pour que les effets de SCP-207-1 se manifestent n'a pas encore été découverte, cependant, le Dr C█████ a émis une hypothèse selon laquelle [DONNÉES SUPPRIMÉES]. À ce titre, à moins d'une autorisation de deux chercheurs de niveau 3, seuls 5 millilitres de SCP-207-1 doivent être utilisés pour les tests. Des quantités plus élevées que celle-ci n'ont montré aucune différence sur l'effet, à l'exception du sujet SCP-207 récupéré.\n\nEn plus d'enlever le besoin de repos, SCP-207-1 cause aussi augmentation des fonctions motrices, réflexes, et psychologiques. L'augmentation est linéaire dans sa progression, avec une augmentation d'environ 50% (mesurée par des protocoles médicaux standard, +/-5%) toutes les 6 heures. L'effet pratique de l'ingestion est que le sujet est capable de penser, de réagir et de se déplacer plus rapidement que d'autres sujets n'ayant pas ingéré SCP-207-1. Les compétences mentales montrent que le QI du sujet augmente parallèlement aux autres augmentations.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-207/SCP207.jpg')
      .addFields(
        { name: 'Images', value: "SCP-207 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-207/SCP207.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-3003":
    new Discord.MessageEmbed()
      .setColor('#14199c')
      .setTitle('SCP-3003')
      .setURL('http://fondationscp.wikidot.com/scp-3003')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-3003 est une planète de la taille de la Terre orbitant autours de HIP 56948, une étoile de la série principale de type G située à 208 années-lumière de la Terre. Plusieurs anomalies notables sont présentes sur SCP-3003 et ont reçu les sous-désignations appropriées.\n\n-SCP-3003-1 est un organisme natif de SCP-3003 proche des scarabées, parasitant les humains lorsqu'infectés par SCP-3003-2.\n\n-SCP-3003-2 est un micro-organisme semblable à une amibe qui infecte les humains ainsi que SCP-3003-1, changeant le comportement des individus infectés.\n\n-SCP-3003-3 est une civilisation technologiquement avancée vivant sur SCP-3003 et composée d'une population native complète de trente milliards d’humains. Tous sont parasités par SCP-3003-1.\n\n-SCP-3003-4 est un appareil qui permet la création d’un portail traversable entre SCP-3003 et la Terre.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-3003/3003.jpg')
      .addFields(
        { name: 'Images', value: "SCP-3003 (réelle): http://fondationscp.wdfiles.com/local--files/scp-3003/3003.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-008":
    new Discord.MessageEmbed()
      .setColor('#d14d4d')
      .setTitle('SCP-008')
      .setURL('http://fondationscp.wikidot.com/scp-008')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-008 est un prion complexe, les caractéristiques du prion comprennent:\n\n-Un taux d'infectiosité de 100%.\n\n-Un taux de mortalité de 100%.\n\n-Une transmission par les muqueuses exposées et tous les fluides corporels.\n\n-Pas de transmission par l'air ou l'eau.\n\nLes symptômes de l'infection par SCP-008 se manifestent trois heures après l'exposition, et comprennent:\n\n-Symptômes pseudo-grippaux avec fièvre élevée, démence sévère dans les étapes ultérieures.\n\n-Début d'un coma environ 20 heures après les premiers symptômes et 12 heures après la démence perceptible. Le début du coma sera considéré comme le début de la mort du sujet.\n\n-Une période de nécrose cellulaire sporadique se produit, ressemblant à une gangrène. Les tissus survivants assurent leur fonction d'origine et sont très résistants.\n\n-Les globules rouges accroîtront considérablement leur capacité à transporter le dioxygène, ce qui entraîne l'écoulement plus lent du sang et une hausse de l'endurance et de la force des muscles.\n\n-Les systèmes nerveux et musculaire ne sont pas affectés par l'insuffisance organique pendant plusieurs heures.\n\n-Le métabolisme peut ralentir à des niveaux extrêmement bas, ce qui permet au sujet atteint de survivre pendant plus de 10 ans sans alimentation.\n\n-La grande viscosité du sang réduit les pertes de sang par blessures\n\n-La commande motrice, et les instincts comportementaux sont endommagés, les capacités cognitives sont gravement retardées et irrégulières. Les animaux présentent une nécrose cérébrale importante et sont inactifs.\n\n-Le sujet peut s'adapter à ses systèmes nerveux très endommagés mais se limite à des activités physiques de base, comme se tenir debout, marcher, mordre, empoigner, et ramper. Le sujet sera énergiquement attiré vers les images, sons et odeurs se rapportant à un homme vivant. Le sujet tentera d'avaler les humains vivants si le contact physique est établi.\n\n-Neutraliser complètement les sujets infectés exige d'importants traumatismes crâniens.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-008/Scp008.jpg')
      .addFields(
        { name: 'Images', value: "SCP-008 (schéma en ruban): http://fondationscp.wdfiles.com/local--files/scp-008/Scp008.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-009":
    new Discord.MessageEmbed()
      .setColor('#de8383')
      .setTitle('SCP-009')
      .setURL('http://fondationscp.wikidot.com/scp-009')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-009 est une substance d'environ 3700 litres présentant un certain nombre de propriétés uniques.\n\nSa propriété la plus notable, est le fait que la réaction de SCP-009 à des températures extrêmes est exactement opposé à celle de l'H2O: le sujet passe à une phase liquide à des températures comprises entre -100 °C et 0 °C, et passe à l'état solide au-delà de ces températures. À des températures inférieures à -100 ° C, SCP-009 se vaporise dans un état gazeux semblable à de la vapeur, même si elle conserve encore sa coloration rouge lorsque le gaz est compressé.\n\Les examens de la structure atomique de SCP-009 se sont avérés peu concluants. Les tests indiquent que l'objet est composé de la même combinaison d'hydrogène et d'oxygène que l'eau normale, laissant les chercheurs supposer que la source des anomalies du sujet peut être des atomes eux-mêmes. Le Dr ██████ a suggéré que le sujet peut avoir été produit ou modifié par une autre réalité dans laquelle les lois de la physique sont inversées.\n\nCette théorie peut avoir un certain mérite étant donné la capacité marquée de SCP-009 pour \"assimiler\" de l'eau naturelle dans sa masse. S'il est placé en contact physique avec une solution aqueuse (que ce soit de la glace, de l'eau salée, ou de vapeur d'eau dans l'air), SCP-009 se propage et contamine l'H2O dans ladite solution, l'amenant à présenter les même propriétés. Bien que cette capacité est présente dans toutes les phases, elle a été observée, progressant plus lentement (et donc de manière plus maîtrisable) dans la phase liquide.\n\nSi le sujet est en contact avec une source biologique de chaleur, il se déclenche alors une réaction incontrôlée lors de laquelle les fluides de l'organisme sont rapidement convertis en SCP-009 et rapidement gelés par la propre chaleur corporelle (en raison de leurs températures de base généralement élevées, tous les mammifères sont particulièrement sensibles).")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-009/SCP-009.jpg')
      .addFields(
        { name: 'Images', value: "SCP-009 (réelle): http://fondationscp.wdfiles.com/local--files/scp-009/SCP-009.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1673":
    new Discord.MessageEmbed()
      .setColor('#002e05')
      .setTitle('SCP-1673')
      .setURL('http://fondationscp.wikidot.com/scp-1673')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-1673 est un cimetière situé à la périphérie de l’ancienne ville de Westkin, en Virginie. Il s’étend sur 1.4 hectares et contient environ 60 tombes ainsi qu’un mausolée. Le cimetière est délimité par une clôture en fer forgé. Les tombes présentes appartiennent aux premiers colons de la ville de Westkin et le dernier enterrement date de 1845. Entre 4 heures du matin et 19 heures, SCP-1673 ne présente aucune anomalie particulière.\n\nSi une personne pénètre dans SCP-1673 pendant sa période d’activité et y reste au moins 15 minutes, ses propriétés anormales se manifestent. SCP-1673 présente alors des morceaux de membres humains sortant du sol et se déplaçant dans le cimetière. Ces membres ressemblent à des mains et des bras humains; cependant, des tests montrent qu’ils ne contiennent aucun matériel biologique humain. Ils tenteront de suivre la personne dans tout le cimetière durant 1 à 3 heures. Après cela, ils commenceront à interagir avec la personne.\n\nLes membres tenteront alors de s’approcher de la personne en agissant de façon bienveillante sur elle comme en faisant ses lacets, en ajustant ses vêtements ou en essayant de faire un massage à la personne. Toutefois, ces actions peuvent provoquer des lésions corporelles en raison de la quantité et de la force de ces membres. Les personnes seront en général atteintes d’un sentiment désagréable et tenteront de quitter SCP-1673 le plus vite possible. Les membres de SCP-1673 essayeront de l’en empêcher. Cela continuera jusqu’à ce que la personne soit retirée du cimetière ou jusqu’à ce qu’elle meure. Si la personne est retirée, SCP-1673 retournera à un état inerte, en revanche, si la personne meurt à l’intérieur du cimetière en raison des actions effectuées par les membres, ces derniers enterreront le corps de la personne. Toute tentative de s’approcher du corps avant la fin de l’enterrement provoquera des réactions très hostiles.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1673/1360779901-scp-1673-active.jpg')
      .addFields(
        { name: 'Images', value: "SCP-1673 (réelle): http://fondationscp.wdfiles.com/local--files/scp-1673/1360779901-scp-1673-active.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1715":
    new Discord.MessageEmbed()
      .setColor('#00d7fc')
      .setTitle('SCP-1715')
      .setURL('http://fondationscp.wikidot.com/scp-1715')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-1715 est une entité anormale qui rejoint de manière intermittente et s’intègre elle-même dans de petites communautés en ligne tel que des forums de discussion et des bases de données sur des wikis. SCP-1715 utilise un nom différent sur chaque site qu’il rejoint.\n\nSCP-1715 se décrit lui-même de façon différente à chaque apparition, mais affirme toujours avoir entre 15 et 30 ans. SCP-1715 cible particulièrement des petites communautés en pleine croissance qui sont axées sur les jeux vidéo, des programmes télévisés, des groupes musicaux, et d’autres intérêts similaires. SCP-1715 cible prioritairement les communautés anglophones, même si certaines apparitions sur des sites n’étant pas Anglais ont été aussi répertoriées. SCP-1715 a prouvé qu’il était capable d’apparaitre sur 9 sites en même temps, il est impossible à l’heure actuelle de savoir si ce sont ses limites, ou si c’est le seul exemple le plus conséquent observé par la Fondation.\n\nSCP-1715 commence à montrer ses caractéristiques anormales une fois qu’il s’est intégré sur une communauté en ligne, généralement 8 semaines après son adhérence. A ce moment-là, SCP-1715 enverra un certain nombre de messages privés aux autres membres du site, en commençant avec les utilisateurs populaires. Ces messages commencent généralement avec une déclaration d’amitié, suivi par des détails fabriqués de toutes pièces sur la vie personnelle de SCP-1715, en terminant avec une demande d’informations personnelles envers le destinataire. Si l’utilisateur ignore le message, ou répond sans fournir de détails personnels factuels, aucun effet anormal n’aura lieu. S'il dévoile des informations personnelles à SCP-1715, l’utilisateur et son compte deviendront des instances correspondant à SCP-1715-1 et SCP-1715-2.\n\nSuivant les deux semaines après la réponse au message de SCP-1715, les instances de SCP-1715-1 seront blessées dans des incidents violents.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1715/imnotthere04__article.jpg')
      .addFields(
        { name: 'Images', value: "SCP-1715 (une des photos de profils de SCP-1715): http://fondationscp.wdfiles.com/local--files/scp-1715/imnotthere04__article.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-242":
    new Discord.MessageEmbed()
      .setColor('#00b5fc')
      .setTitle('SCP-242')
      .setURL('http://fondationscp.wikidot.com/scp-242')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-242 est une piscine d'approximativement 4,5 m de large pour 9 m de long, d'une profondeur allant d'1 m de profondeur aux extrémités à 1,5 m au centre, et d'un volume total d'approximativement 53 000 litres. Elle est dotée de deux petites cascades, d'une unité d'évacuation d'eau et d'escaliers à une extrémité.\n\nToute substance une fois placée dans la piscine finit par être transmutée en eau stérile qui demeurera stérile même après avoir été retirée de SCP-242 et introduite dans un environnement non-stérile. Un échantillon prélevé dans SCP-242 et déposé dans un conteneur d'eau teintée de colorant alimentaire rouge ne s'est pas mélangé, mais s'est au lieu de ça isolé en une bulle non-miscible. Un examen subséquent des échantillons montre qu'il ne s'agit que d'eau pure et stérile.\n\nLa durée de temps nécessaire à une transmutation complète est dépendante de la nature de la substance placée dans SCP-242. De l'eau de rivière ordinaire prélevée à █████████, au Nouveau-Mexique, a été complètement stérilisée en 7 minutes. De l'eau stagnante d'étang récupérée à ████, au Nouveau-Mexique, a été stérilisée en 18 minutes. 50 000 litres de goudron de houille furent convertis au bout de 12 jours.\n\nLorsque la piscine ne contient que de l'eau stérile, aucun de ses éléments ne fait preuve d'un quelconque effet anormal. Lorsqu'une substance n'étant pas de l'eau est placée dans la piscine, les jets d'eau et les cascades s'activeront et continueront de fonctionner même s'ils sont déconnectés de leur source d'énergie. L'évacuation de la piscine, si connectée, s'activera également et évacuera du fond de la piscine même des liquides extrêmement visqueux. L'eau ne semble pas circuler à travers le système de filtration. Les tuyaux menant au système de filtration ont été complètement retirés, et semblent être vides et secs lorsque le contenu de la piscine est en cours de stérilisation.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-242/242-1.jpg')
      .addFields(
        { name: 'Images', value: "SCP-242 (réelle, eau stagnante d'étang, Temps = 0 min): http://scp-wiki.wdfiles.com/local--files/scp-242/242-1.jpg \n SCP-242 (réelle, eau stagnante d'étang, Temps = 9 min): http://fondationscp.wdfiles.com/local--files/scp-242/242-2.jpg \n SCP-242 (réelle, eau stagnante d'étang, Temps = 16 min): http://fondationscp.wdfiles.com/local--files/scp-242/242-3.jpg \n SCP-242 (réelle, eau stagnante d'étang, Temps = 18 min): http://fondationscp.wdfiles.com/local--files/scp-242/242-4.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-697":
    new Discord.MessageEmbed()
      .setColor('#16ba1c')
      .setTitle('SCP-697')
      .setURL('http://fondationscp.wikidot.com/scp-697')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-697 se compose actuellement de 100 barils de produits chimiques toxiques.\n\nLorsqu'ils sont exposés à une matière autre que le baril, SCP-697 déclenche une chaîne de réactions chimiques complexes qui convertit la plupart des matières solides autour de lui en organismes similaires à des végétaux en quelques secondes. Les vies multicellulaires existantes sont rapidement décomposées en cellules individuelles, qui sont ensuite converties en d'autres organismes végétaux du même type. Le processus altérant ainsi de la matière non organique est actuellement inconnu, mais semble impliquer la conversion initiale en formes de vie unicellulaires, qui sont ensuite agglomérées avec une vitesse anormale pour former les tissus et les \"organes\" des plantes.\n\nLes plantes créées par SCP-697 ne présentent aucune ressemblance sur le plan biologique avec les espèces connues, bien que leur apparence physique ait été décrite comme normale. Elles ne subissent pas la photosynthèse, pas plus qu'elles ne vivent grâce à l'azote ou au dioxyde de carbone. Leur déchet primaire est un gaz constitué d'argon et de cobalt. La source de ces éléments, aucun des deux n'étant présent en quantités suffisantes sur Terre, est inconnue, de même que le fonctionnement du métabolisme de ces plantes, six fois plus rapide qu'une plante terrestre. À ce jour, la seule méthode viable de destruction est de combiner incinération et grande saturation de néon.\n\nBien que le premier contact avec les plantes n'est pas fatal, une exposition à long terme s'est avérée extrêmement dangereuse pour les animaux terrestres. L'inhalation des gaz des déchets inhibe progressivement les fonctions cardiorespiratoires, tandis que le contact avec les feuilles neurotoxiques provoque des engourdissements extrêmes, un arrêt progressif du système nerveux et une insuffisance respiratoire. Le temps moyen entre exposition initiale et mort du sujet est de 13 heures. Aucun traitement n'a été développé.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-697/1DLcT.jpg')
      .addFields(
        { name: 'Images', value: "SCP-697 (réelle): http://fondationscp.wdfiles.com/local--files/scp-697/1DLcT.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-355":
    new Discord.MessageEmbed()
      .setColor('#3de343')
      .setTitle('SCP-355')
      .setURL('http://fondationscp.wikidot.com/scp-355')
      .setAuthor('')
      .setDescription("Classe: Euclide\n\nSCP-355 est une espèce inconnue qu'il est impossible de discerner de l'herbe normale à l'œil nu, mais sa parenté génétique la plus proche est celle du taxon de l'acajou. Un noyau creux de cellulose et de buckminsterfullerène traverse le centre de chaque brin d'herbe pour maintenir la structure verticale de l'herbe, chaque veine dans le brin étant gainée de la même façon, ce qui résulte en une herbe exceptionnellement peu flexible, à l'extérieur assez tranchant pour percer une petite épaisseur de bois et certains plastiques. Les brins effectuent la photosynthèse et absorbent les nutriments atmosphériques normalement. Les racines sont anormalement longues, mais ne présentent aucune autre anomalie.\n\nCependant, l'espèce semble s'être développée dans un environnement faible en énergie, les taux photosynthétiques étant démesurément hauts, accélérant le cycle de reproduction de l'espèce, ce qui provoque la création et la dispersion rapide de graines (chaque cycle survenant approximativement toutes les deux semaines). Cette hypothèse est supportée par le fait que l'espèce soit carnivore d'une manière passive, comme la drosera ou la plante cobra (venant aussi de milieux pauvres en nutriments). Toutes les créatures n'ayant pas les pieds assez solides qui marchent sur l'herbe voient leurs pieds pénétrés par les brins, se voient injectés un acide liquéfiant et subissent une absorption de leurs fluides corporels par le noyau creux. La plante déploit simultanément des épines acérées en réponse à la pression soudaine, ce qui rend difficile pour la victime de s'en aller ; ces tentatives résultant souvent à arracher la plante de ses racines, ce qui résulte en une absorption continue à travers la tige coupée, ou au moins à des lacérations sévères aux pieds. Pour garder l'espèce à l'intérieur de sa chambre de confinement, la lumière a été abaissée pour empêcher les schémas de pousse atypiques, et l'atmosphère de la salle saturée avec les nutriments appropriés au développement.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-355/355.Jpeg')
      .addFields(
        { name: 'Images', value: "SCP-355 (réelle): http://fondationscp.wdfiles.com/local--files/scp-355/355.Jpeg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-4486":
    new Discord.MessageEmbed()
      .setColor('#faf216')
      .setTitle('SCP-4486')
      .setURL('http://www.scp-wiki.net/scp-4486')
      .setAuthor('')
      .setDescription("Classe: Keter\n\nSCP-4486 est une entité de forme pensée amalgamée dotée d'un contrôle rétrocausal limité sur la réalité locale. Bien que la forme de SCP-4486 soit transitoire, l'esthétique actuelle représente l'entité comme un humanoïde d'environ 2,2 mètres de hauteur portant des vêtements de marque d'entreprise ressemblant à ceux d'un clown. SCP-4486 a également la capacité de se manifester dans toutes les franchises, bureaux, propriétés affiliées ou événements de McDonald's qui peuvent contenir des associations à la marque McDonald's.\n\nSCP-4486 se manifeste souvent dans le but explicite de promouvoir McDonald's ou d'élargir la portée de la marque. L'application la plus courante de ce pouvoir est la création d'un nouveau restaurant franchisé ainsi que l'intégration de ce nouveau bâtiment dans la réalité locale. Les effets secondaires de ce pouvoir comprennent la fabrication de souvenirs de la construction du bâtiment et de la publicité au sein de la communauté locale, ainsi que la sélection de membres de la population locale pour travailler au restaurant. Les nouveaux employés sont en mesure de décrire de vifs souvenirs d'avoir postulé et d'avoir été interviewés pour leur emploi, ainsi qu'un degré de formation pour leur nouveau poste.\n\nLa documentation récupérée suggère que SCP-4486 a été créé à l'origine en 1955 où il a été utilisé comme guide pour les décisions commerciales de Maurice et Richard McDonald et de leur partenaire commercial Ray Kroc. En 1960, après des années d'attachement à l'esprit d'entreprise, SCP-4486 a accumulé suffisamment de réalité cohésive pour se manifester dans l'espace réel où il est ensuite devenu un visage pour la marque. La société McDonald's a utilisé un certain nombre de tactiques de diversion, y compris des acteurs rémunérés, pour obscurcir la vraie nature de SCP-4486.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-4486/ronald.jpg')
      .addFields(
        { name: 'Images', value: "SCP-4486 (réelle): http://scp-wiki.wdfiles.com/local--files/scp-4486/ronald.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-674":
    new Discord.MessageEmbed()
      .setColor('#ff5e08')
      .setTitle('SCP-674')
      .setURL('http://www.scp-wiki.net/scp-674')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-674 est un \"Zapper\", un pistolet électronique utilisé comme accessoire NES. SCP-674 présente une usure ordinaire et des éléments indiquant que les précédents propriétaires ont tenté de forcer le revêtement sans succès.\n\nLorsque SCP-674 est dirigé et utilisé vers n’importe quel type d’écran vidéo, l’utilisateur aura l'impression d'avoir tiré une balle dans la scène affichée. N’importe quel objet présent dans la scène, qu'elle soit en direct ou pré-enregistrée, réagira de manière adaptée au contexte. Les personnes se faisant tirer dessus apparaîtront en train de mourir ou blessées, les autres personnes présentes se jetteront au sol, se mettront à couvert ou s’enfuiront hors du champ de la caméra. Il est important de noter que cela ne correspondra pas à la réalité en dehors de la vidéo, et que personne en dehors de l'utilisateur de SCP-674 ne percevra le changement. Les résultats varient selon le contexte de la vidéo. Les personnages de fiction dans une émission de télévision réagiront en accord avec les particularités établies du programme, tandis que tirer pendant un reportage ou un documentaire produira une réaction plus réaliste. Par conséquent, tirer sur un acteur durant une interview n’aura pas le même résultat que le fait de tirer sur ce même acteur en train de jouer le rôle d’un cyborg invincible dans un film de science-fiction.\n\nLes cartoons peuvent aussi être affectés, bien que la \"logique des cartoons\" produise des résultats imprévisibles allant d’un personnage étant momentanément caché par un nuage de fumée puis se faisant recouvrir de suie, à [DONNÉES SUPPRIMÉES].\n\nSi un sujet utilise l’appareil pour tirer sur un personnage de série télévisée, il percevra de manière définitive qu'il a changé la continuité de la série. Un personnage restera blessé ou mort, et les autres personnages s’adapteront au contexte. Cela continuera même si SCP-674 n’est utilisé qu’une fois et que le spectateur n’y est plus jamais exposé.")
      .setThumbnail('https://pm1.narvii.com/6333/49cae404dd84e52deeaf89a0f150a2fdddd43d94_hq.jpg')
      .addFields(
        { name: 'Images', value: "Aucune données trouvées..." })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1507":
    new Discord.MessageEmbed()
      .setColor('#ff00aa')
      .setTitle('SCP-1507')
      .setURL('http://www.scp-wiki.net/scp-1507')
      .setAuthor('')
      .setDescription("Classe: ~~Sûr~~ Euclide\n\nSCP-1507 est un ensemble de 15 26 flamants roses de pelouse en plastique fabriqués à Coral Springs, en Floride. Les instances de SCP-1507 possèdent des comportements similaires à ceux d'un spécimen normal de Phoeniconais ruber ruber, mais n'ont pas besoin de se nourrir. Les instances de SCP-1507 sont vulnérables aux même forces que celles auxquelles du plastique ordinaire serait vulnérable, comme la chaleur et la pression. Les tests ont démontré qu'elles ne possèdent pas d'intelligence développée.\n\nLes instances de SCP-1507 sont universellement hostiles aux humains et sont connues pour avoir attaqué le personnel entrant dans la zone en leur tombant dessus, utilisant leurs pieds en métal pour infliger des blessures par griffure ou perforation sur le visage et les yeux de leurs victimes. SCP-1507 apparaîtra fréquemment docile jusqu’à ce qu'il attaque, causant plusieurs cas de blessures sévères parmi le personnel de recherche.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1507/1507.jpg')
      .addFields(
        { name: 'Images', value: "SCP-1507 (réelle): http://fondationscp.wdfiles.com/local--files/scp-1507/1507.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-1070":
    new Discord.MessageEmbed()
      .setColor('#00ff73')
      .setTitle('SCP-1070')
      .setURL('http://www.scp-wiki.net/scp-1070')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-1070 est un jeu vidéo éducatif conçut pour la Nintendo Entertainment System. Il prend la forme d'une cartouche en plastique noire de 13,3 x 12 x 2 cm. SCP-1070 ne dispose d'aucun label où marque du fabriquant, mais son étiquette noire est marquée d'un message d'avertissement identique à ceux d'autres jeux sans licence produits par la société \"Tengen Arcadia\". L'écran d'ouverture du jeu indique que le jeu s'intitule \"Apprendre avec Léo\".\n\nLorsqu'il est lancé, SCP-1070 affichera un personnage vert, appelé \"Joey\", ci-après référé en tant que SCP-1070-B, qui posera au sujet diverses questions sur son âge, son origine ethnique, son niveau scolaire ou encore ses habitudes alimentaires. SCP-1070-B réagira aux réponses données par le joueur via des phrases et des gestes simples.\n\nLorsque SCP-1070 est lancé et joué par un sujet d'un âge inférieur à 14 ans, il fonctionnera sans effet anormal. SCP-1070-B posera une série de questions mathématiques, historiques et scientifiques simples. En fin de partie, SCP-1070-B affichera un score variant en fonction du nombre de bonnes réponses données par le joueur. Il est à noter que SCP-1070-B se souviendra des sujets ayant déjà joué par le passé, et sera capable de les nommer.\n\nSi un sujet de 14 ans ou plus utilise SCP-1070, son contenu changera. Au fur et à mesure que le sujet progressera dans le jeu, SCP-1070-B commencera à poser des questions plus ésotériques et moins compréhensibles, ayant souvent recours à des brouillages ou à des bugs graphiques pour empêcher le sujet de progresser. En parallèle, le sujet subira une dégradation mentale progressive. Si SCP-1070 est joué pendant plus d'une heure, le sujet aura régressé à l'âge mental d'un enfant pré-pubère.")
      .setThumbnail('http://fondationscp.wdfiles.com/local--files/scp-1070/scpnes-small.jpg')
      .addFields(
        { name: 'Images', value: "SCP-1070 (réelle): http://fondationscp.wdfiles.com/local--files/scp-1070/scpnes-small.jpg \n SCP-1070-B (réelle): http://fondationscp.wdfiles.com/local--files/scp-1070/SPC-1111.jpg" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
  "SCP-4962":
    new Discord.MessageEmbed()
      .setColor('#eb8f3f')
      .setTitle('SCP-4962')
      .setURL('http://www.scp-wiki.net/scp-4962')
      .setAuthor('')
      .setDescription("Classe: Sûr\n\nSCP-4962 est un jeu vidéo anormal intitulé dack hunt REMIST ER [sic], produit par la société TotleighSoft pour Nintendo Entertainment System. SCP-4962 est une reproduction de mauvaise qualité du jeu Nintendo Duck Hunt, avec la majorité des différences non anormales consistant en des erreurs de programmation, des oublis de développement, de mauvaises reproductions des éléments visuels et audio.\n\nLes instances SCP-4962 sont livrées avec la cartouche de jeu, un manuel d'instructions et une mitrailleuse lourde Browning de calibre .50 M2 Browning, colorée pour ressembler à la NES Zapper de 1989 (SCP-4962-A).\n\nBien que SCP-4962 puisse être initialisé sur n’importe quelle console NES (ou équivalent), le programme ne répondra pas aux entrées effectuées à l’aide du périphérique ‘NES Zapper’ (ou équivalent), les joueurs doivent utiliser SCP-4962-A à la place. SCP-4962-A fonctionne comme une mitrailleuse lourde non anormale, à l'exception du chargeur de munitions et du chargeur, qui ne peut être retiré par aucun moyen et semble contenir un nombre illimité de cartouches. Les obus tirés par SCP-4962-A alors qu'ils visaient un téléviseur affichant SCP-4962 se manifesteront à la sortie complète du canon.\n\nLe gameplay de SCP-4962 est très erratique, car les canards n'ont pas de modèles de frai discernables et sont souvent représentés comme volant à l'envers, alors que ceux-ci entraveraient la capacité d'un joueur à continuer entre les niveaux, la cadence de tir élevée de 6 SCP-4962-A et le manque de restriction sur le nombre de tirs pouvant être tirés par niveau.\n\nChaque fois qu'un joueur ne remplit pas les exigences d'un niveau, l'écran affichera une approximation du chien de chasse en jeu (SCP-4962-B) tenant un canard ensanglanté au-dessus des mots « game over », comme plusieurs parties de l'image ont une résolution visiblement plus élevée que ce que la Nintendo Entertainment System 8 bits devrait permettre, cette image est théorisée pour être affichée par des moyens anormaux.")
      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-4962/bzeyzNM.jpg')
      .addFields(
        { name: 'Images', value: "SCP-4962 (réelle): http://fondationscp.wdfiles.com/local--files/scp-1070/scpnes-small.jpg \n SCP-4962 (réelle, écran game over): http://scp-wiki.wdfiles.com/local--files/scp-4962/gameover.png" })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
}

var vtubers = {

}

var embed = [
  new Discord.MessageEmbed()
    .setTitle('')
    .setURL('')
    .setDescription("**__Cette page n'éxiste pas encore !__**\n\n\n\nAnnexe:\n\nIl c'est passé quoi ? J'avais bien écrit le rapport pourtant. - MagicTendo\n\nCette page à toujours était vide. - Cirno\n\nLe rapport est bien dans la base de données, je viens de finir de l'écrire et, pourquoi il y a une page vide ? Le nom de cette page est SCP-404-JP est j'ai bien assigné le rapport à la page comme j'ai fait pour les autres SCP. - MagicTendo\n\nTa dû, comme d'habitude, te foiré dans le code. - Cirno\n\nPeut-être... mais sa m'étonnerai quand même... - MagicTendo")
    .setTimestamp()
    .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
]

var embed2 = [
  new Discord.MessageEmbed()
    .setColor("#bdd7d9")
    .setTitle('SCP-404-JP')
    .setURL('http://fondationscp.wikidot.com/scp-404-jp')
    .setDescription("Classe : Sûr\n\nSCP-404-JP est un rapport enregistré dans la base de données de la Fondation ||et dans le CirnoSCPDatas apparemment||. Le texte de SCP-404-JP se modifie de façon à ce que les lecteurs soient convaincus que le document n'existe pas, et détruit toute information de SCP-404-JP lui-même, de tout autre support ou encore de la mémoire biologique humaine.\n\nLa façon dont SCP-404-JP a obtenu ses propriétés est inconnue, et comment la Fondation a découvert lesdites propriétés est aussi inexpliqué.")
    .setThumbnail('https://image.freepik.com/vecteurs-libre/erreur-effet-pepin-ecran-erreur-404-page-non-trouvee_143407-1.jpg')
    .addFields(
      { name: 'Image', value: 'Aucune données trouvées...' })
    .setTimestamp()
    .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png'),
]

const { isArray } = require('util')
//const { number, string, add, or, index, size, nuclearMagnetonDependencies, identity, null, } = require("mathjs")
const { reactions } = require("discord.js-reaction-menu")
const { send, removeAllListeners } = require("process")
const { BADNAME, TIMEOUT } = require("dns")
const { URL } = require("url")
const { ClientRequest, get } = require("http")
const { measureMemory } = require("vm")
const { error } = require("console")
const { sign, or, and, imDependencies } = require("mathjs")
const talkedRecently = new Set()

let prefix = ">"

client.on("ready", () => {
  client.channels.resolve("726420543057821736").send('<@610493430325313549>, connecté ! UwU')
  console.log("Connecté ! UwU")
  setInterval(function () {
    var textes = [
      ">help pour les commandes",
      "être sur " + client.guilds.cache.size + " serveurs",
      "＼＼٩( 'ω' )و //／／",
      "eye'm not baka !",
      "1 + 1 = ⑨",
      "eye'm the strongest !",
      "défoncer des joueurs sur le stage 2",
      "rien...",
      "#Cirnothebestcharacteroftheworld",
      "UwU",
      "détruire SCP-682",
      "https://discord.io/MagicTendo, serveur officiel du créateur",
      "https://discord.io/Cirno-official, serveur officiel du bot",
      "embêter son créateur pour avoir une MAJ",
      "embêter Ninjdai en tuant des poulets sur Minecraft",
      "manger une glace goût myrtille",
      "Windows ⑨",
      "répondre aux commandes",
      "prouver que je suis une genie !",
      "regarder des animes",
      "compter dans combien de jour est le Cirno day",
      "défier les lois de la gravitée",
      "🐸 => 🧊",
      "🎱 POURQUOI 8 ET NON 9 ?!",
      "attendre que mon créateur améliore le code",
      "prouver que je suis plus forte que MEE6 et que personne peut me hacker avec >hack",
    ]
    var text = textes[Math.floor(Math.random() * textes.length)]
    client.user.setPresence({ activity: { name: text }, status: 'online' })
  }, 10000)
})

if (!fs.existsSync("./datas.json"))
  fs.writeFileSync("./datas.json", "{}")

var datas = JSON.parse(fs.readFileSync("./datas.json").toString())

if (!fs.existsSync("./datas2.json"))
  fs.writeFileSync("./datas2.json", "{}")

var datas2 = JSON.parse(fs.readFileSync("./datas2.json").toString())

if (!fs.existsSync("./datas3.json"))
  fs.writeFileSync("./datas3.json", "{}")

var datas3 = JSON.parse(fs.readFileSync("./datas3.json").toString())

if (!fs.existsSync("./tcdatas.json"))
  fs.writeFileSync("./tcdatas.json", "{}")

var tcdatas = JSON.parse(fs.readFileSync("./tcdatas.json").toString())

if (!fs.existsSync("./setavatar.json"))
  fs.writeFileSync("./setavatar.json", "{}")

var setavatar = JSON.parse(fs.readFileSync("./setavatar.json").toString())

if (!fs.existsSync("./scooldowns.json"))
  fs.writeFileSync("./scooldowns.json", "{}")

var scooldowns = JSON.parse(fs.readFileSync("./scooldowns.json").toString())

if (!fs.existsSync("./bakabutton.json"))
  fs.writeFileSync("./bakabutton.json", "{}")


var bakabutton = JSON.parse(fs.readFileSync("./bakabutton.json").toString())

if (!fs.existsSync("./lunaticcoin.json"))
  fs.writeFileSync("./lunaticcoin.json", "{}")


var lunaticcoin = JSON.parse(fs.readFileSync("./lunaticcoin.json").toString())

if (!fs.existsSync("./frogdatas.json"))
  fs.writeFileSync("./frogdatas.json", "{}")


var frogdatas = JSON.parse(fs.readFileSync("./frogdatas.json").toString())

if (!fs.existsSync("./fcooldowns.json"))
  fs.writeFileSync("./fcooldowns.json", "{}")

var fcooldowns = JSON.parse(fs.readFileSync("./fcooldowns.json").toString())

if (!fs.existsSync("./userdatas.json"))
  fs.writeFileSync("./userdatas.json", "[]")

var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())

client.on('message', message => {

  if (message.content === prefix + 'help') {
    new rm.menu(message.channel, message.author.id, [
      new Discord.MessageEmbed({ title: '<:Info:714456499459719218> Page 1: Commandes:', description: "<:TeteCirno:715605827494346833> Page 2 et 3: Cirno games\n<:Manette:712383020224610305> Page 4: Card Battle\n<:IconeWindows9:717492746922754080> Page 5: Windows ⑨\n<:Fun:712385604171858101> Page 6: Fun\n<:Horreur:713353444987109417> Page 7: Horreur\n<:Parametres:712382805874835476> Page 8: Autres\n\n<:Attention:712387173000675389> Merci de ne pas abuser ni de troll avec les commandes >suggestion et >bugreport.\nNe mettez pas les crochets et remplacez l'intérieur des crochets par ce qui est indiqué." }),
      new Discord.MessageEmbed({ title: '<:TeteCirno:715605827494346833> Page 2: Cirno games (partie 1/2):', description: '>Cirnocoins, pour recevoir quelques Cirno coins par jour\n\n>Cirnoshop, pour voir ce que vous pouvez acheter avec les Cirno coins\n\n>inventory, pour voir ce que vous avez obtenu (tout les jeux sont compris)\n\n>achievements, pour voir les achievements (tout les jeux compris)' }),
      new Discord.MessageEmbed({ title: '<:TeteCirno:715605827494346833> Page 3: Cirno games (partie 2/2):', description: '>regles, pour connaître les règles de tous les jeux' }),
      new Discord.MessageEmbed({ title: '<:Manette:712383020224610305> Page 4: Card Battle:', description: '>cbcoins, pour recevoir des récompenses quotidiennes\n\n>cbshop, pour accéder au shop' }),
      new Discord.MessageEmbed({ title: '<:IconeWindows9:717492746922754080> Page 5: Windows ⑨:', description: '>search [votre recherche], pour rechercher quelque chose sur Cirno Explorer\n\n>playms, pour jouer à Minig Simulator V.9' }),
      new Discord.MessageEmbed({ title: '<:Fun:712385604171858101> Page 6: Fun:', description: '>Cirno, affiche une image aléatoire de Cirno\n\n>coinflip, pour faire un pile ou face\n\n>dice, pour lancer un dé à six faces\n\n>helptroll, pour activer/désactiver certaines options de troll' }),
      new Discord.MessageEmbed({ title: '<:Horreur:713353444987109417> Page 7: Horreur:', description: '>scp, pour voir un scp choisi au hasard' }),
      new Discord.MessageEmbed({ title: '<:Parametres:712382805874835476> Page 8: Autres (partie 1/2):', description: ">help, pour afficher l'aide\n>ping, pour voir si je suis là\n>infobot, pour avoir des informations sur moi\n>update, pour voir si j'ai eu des mises à jour et ce que ça a ajouté\n>changeprefix [nouveau préfixe], pour changer mon préfixe" }),
      new Discord.MessageEmbed({ title: '<:Parametres:712382805874835476> Page ⑨: Autres (partie 2/2):', description: '>bugreport [description du bug], pour report un bug\n>suggestion [votre suggestion], pour suggérer des idées à mon créateur' })])
  }

  if (message.content === prefix + 'newhelp') {
    message.channel.send(help)
    var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())
    if (message.author.bot) return
    if (userdatas.includes(message.author.id)) return
    userdatas.push(message.author.id)
    fs.writeFileSync("./userdatas.json", JSON.stringify(userdatas))
  }

  if (message.content === prefix + 'invite') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Clique ici pour m\'inviter !')
      .setURL('https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D709804810668343448%26scope%3Dbot%26permissions%3D2146958847')
      .setDescription("> __Fun fact:__\n> \n> Bah, y'en n'à pas...")
      .setThumbnail("https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png")
      .setImage('https://discord.com/assets/14c037b7102f18b2d2ccf065a52bb595.jpg')
      .setTimestamp()
      .setFooter('Bot incroyable par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'ping') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setDescription("Pong <@" + message.author.id + "> !\nMa latence est de " + `${Date.now() - message.createdTimestamp}` + "ms.")
      .setImage('https://zupimages.net/up/20/21/g9g5.jpg')
      .setTimestamp()
      .setFooter('Ping, pong !', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'PINGEVERYEBAKA') {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.send(messageping).then(function (message) {
        message.react("✅")
        message.react("❌")
        messagepingid = message.id
      })
    }
  }

  if (message.content === prefix + 'choccy') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .setImage('https://zupimages.net/up/20/40/t37c.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + 'avatar')) {
    const user = message.mentions.users.first() || message.author
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle("Voici l'avatar de " + user.username)
      .setImage(user.avatarURL())
      .setTimestamp()
      .setFooter('Qui lit sa ?', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'regles') {

    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Voici les règles de tout les jeux !')
      .setURL('')
      .setAuthor('')
      .setDescription("__Argent:__\n\nIl y a trois types de monnaie:\n-<:CirnoCoin:715320263465762837> Cirno coins\n-<:CardCoin:718168105033138227> Card coins\n-<:ArcadeCoin:718169908478869514> Arcade coins\n\nCes types de monnaie vous permettrons d'acheter divers objets dans les shops !\n \n \n__Card Battle:__\n \nLe but est de tuer (virtuellement bien sûr) les autres membres du serveur. Si vous tuer quelqu'un vous gagnerez des points (<:Points:718205076719534150>) et si vous êtes tués vous en perdrez. Il y a 2 types de cartes: combat et objet, avec 7 rangs:\n \n-Commun (60%)\n-Incommun (30%)\n-Rare (10%)\n-Ultra rare (5%)\n-Légendaire (1%)\n-Iréelle (0,1 %)\n-Bonus (uniquemment disponible dans le Card Battle shop)\n \nPlus c'est rare plus c'est puissant (logique).\n \n \n__Mining Simulator V.9:__\n \nLe but est d'avoir le maximum de points en 30 secondes, plus vous serez bas, plus les minerais vaudront des points.\n \n<:Herbe:717476583442743449> 1 point,\n<:Terre:717476583832551465> 1 point,\n<:Pierre:717476585061482536> 1 point,\n<:Charbon:717476583929020437> 5 points,\n<:Or:717476583660716053> 10 points,\n<:Rubis:726895245672841256> 15 points,\n<:LapisLazuli:726895245639286894> 15 points,\n<:Emeraude:726895245547274260> 20 points,\n<:Quartz:726895245673103390> 25 points,\n<:Uranium:726895245236633703> 30 points,\n<:Magmatium:727948846218346526> 40 points,\n<:Galaxium:726895245769441300> 50 points,\n<:Cirnocium:726895245534691379> 99 points,\n<:Rainbowcium:726895245446479925> 150 points,\n<:Lave:726895245845069834> game over et -50 points.")
      .setThumbnail('https://zupimages.net/up/20/23/uqnr.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'cbcoins') {

    if (!datas[message.author.id]) {
      datas[message.author.id] = {
        coin: 0
      }
      fs.writeFileSync("./datas.json", JSON.stringify(datas))
    }
    var user = datas[message.author.id]

    var coinresult = Math.floor(Math.random() * 500)
    user.coin = user.coin + coinresult
    fs.writeFileSync("./datas.json", JSON.stringify(datas))

    var cooldowns = JSON.parse(fs.readFileSync("./cooldowns.json").toString())
    if (!cooldowns[message.author.id]) {
      cooldowns[message.author.id] = {
        cooldown: 0
      }
      fs.writeFileSync("./cooldowns.json", JSON.stringify(cooldowns))
    }
    var user = cooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.cooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.cooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.cooldown = Date.now()
      fs.writeFileSync("./cooldowns.json", JSON.stringify(cooldowns))
      message.channel.send("Tu as gagné " + coinresult + "<:CardCoin:718168105033138227> et une carte de type:")
    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  if (message.content === prefix + 'cbcoins') {

    var probabilités = {
      commun: 60, //45
      incommun: 30, //30
      rare: 10, //10
      ultrarare: 5, //9
      légendaire: 1, //5
      iréel: 0.1 //1
    }

    var array = []

    for (var i = 0; i < probabilités.commun; i++)
      array.push("<:C_commun:711680592525131884><:O_commun:711680592504160286><:M_commun:711680592315416637><:M_commun:711680592315416637><:U_commun:711680592454090812><:N_commun:711680592529326140>" + "https://zupimages.net/up/20/21/twth.png")
    for (var i = 0; i < probabilités.incommun; i++)
      array.push("<:I_incommun:711680890430029824><:N_uncommun:711680890140360766><:C_uncommun:711680890576830567><:O_uncommun:711680890295812098> <:M_uncommun:711680890463322132><:M_uncommun:711680890463322132><:U_uncommun:711680890576830526><:N_uncommun:711680890140360766>")
    for (var i = 0; i < probabilités.rare; i++)
      array.push("<:R_rare:711680829079814194><:A_rare:711680829272621056><:R_rare:711680829079814194><:E_rare:711680828979282001>");
    for (var i = 0; i < probabilités.ultrarare; i++)
      array.push("<:U_ultrarare:711680864940982363><:L_ultrarare:711680864991576194><:T_ultrarare:711680864693780482><:R_ultrarare:711680865004028005><:A_ultrarare:711680864714489998><:R_ultrarare:711680865004028005><:E_ultrarare:711680864974798868>")
    for (var i = 0; i < probabilités.légendairee; i++)
      array.push("<:L_lgendaire:711680698444021760><:_lgendaire:711680698398015538><:G_lgendaire:711680698930561074><:E_lgendaire:711680698293157898><:N_lgendaire:711680698175586315><:D_lgendaire:711680697978323007><:A_lgendaire:711680698263535616><:I_lgendaire:711680698116997231><:R_lgendaire:711680698473250816><:E_lgendaire:711680698293157898>")
    for (var i = 0; i < probabilités.iréel; i++)
      array.push("<:I_irrel:711680623705849946><:R_irrel:711680623475032076><:_irrel:711680623923822682><:E_irrel:711680623730753536><:L_irrel:711680623831547904>")

    var resultat = array[Math.floor(Math.random() * 106.1)]
    var cooldownscartes = JSON.parse(fs.readFileSync("./cooldownscartes.json").toString())
    if (!cooldownscartes[message.author.id]) {
      cooldownscartes[message.author.id] = {
        cooldowncartes: 0
      }
      fs.writeFileSync("./cooldownscartes.json", JSON.stringify(cooldownscartes))
    }
    var user = cooldownscartes[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.cooldowncartes)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.cooldowncartes >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.cooldowncartes = Date.now()
      fs.writeFileSync("./cooldownscartes.json", JSON.stringify(cooldownscartes))
      message.channel.send(resultat)
    }
    else {
      message.channel.send("")

    }
  }

  if (message.content === prefix + 'cbshop') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Shop')
      .setURL('')
      .setAuthor('')
      .setDescription("Description des articles: \n \n-1 carte_combat => 1000<:CardCoin:718168105033138227> \n \n-5 cartes_objets => 10,000<:CardCoin:718168105033138227> \n \n \nPour acheter un produit (ce qui n'est pas encore possible lol), faite >buy [le nom du produit].")
      .setThumbnail('https://zupimages.net/up/20/21/kilo.png')
      .setImage('https://www.zupimages.net/up/20/20/drqn.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content === prefix + 'Cirnocoins') {
    var stonkresultat = Math.floor(Math.random() * 3)
    var cirnocoinresult = Math.floor(Math.random() * 10)
    if (!datas2[message.author.id]) {
      datas2[message.author.id] = {
        cirnocoin: 0
      }
      fs.writeFileSync("./datas2.json", JSON.stringify(datas2))
    }
    var user = datas2[message.author.id]
    var cirnocoinresult = Math.floor(Math.random() * 10)
    user.cirnocoin = user.cirnocoin + cirnocoinresult
    fs.writeFileSync("./datas2.json", JSON.stringify(datas2))
    var cooldownscirno = JSON.parse(fs.readFileSync("./cooldownscirno.json").toString())
    if (!cooldownscirno[message.author.id]) {
      cooldownscirno[message.author.id] = {
        cooldowncirno: 0
      }
      fs.writeFileSync("./cooldownscirno.json", JSON.stringify(cooldownscirno))
    }
    var user = cooldownscirno[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.cooldowncirno)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.cooldowncirno >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.cooldowncirno = Date.now()
      fs.writeFileSync("./cooldownscirno.json", JSON.stringify(cooldownscirno))
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle("Clique ici pour voir l'économie des Cirno coins !")
        .setURL(stonk[stonkresultat])
        .setAuthor('')
        .setDescription('Vous avez obtenu ' + cirnocoinresult + '<:CirnoCoin:715320263465762837> !')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)
    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }

  }

  if (message.content === prefix + 'Cirnoshop') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Bienvenue dans le Cirno shop !')
      .setURL('') //lien de la documentation
      .setAuthor('')
      .setDescription('Consultez la documentation en cliquant sur le message en bleu pour voir la description des articles.')
      .setThumbnail('https://pbs.twimg.com/profile_images/930932584426754048/DiTcKkgR_400x400.jpg')
      .addFields(
        { name: '<:BadgeCirno:717359978075258890> Badge Cirno (1 de disponible)', value: '=> 1<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:BonbonCirno:717330549588492350> Bonbons Cirno (50 de disponibles)', value: '=> 5<:CirnoCoin:715320263465762837>', inline: true },
        { name: "<:CirnoMag:717352748894650378> Cirno mag' (1 de disponible)", value: '=> 15<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:Carton:715618663566409779> Carton (10 de disponibles)', value: '=> 50<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:Windows9:717363734128885900> Windows ⑨ (1 de disponible)', value: '=> 99<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:CirnoPlush:715491441845207060> Peluche Cirno (1 de disponible)', value: '=> 250<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:CirnoEX:715494680917311499> CirnoEX (1 de disponible)', value: '=> 500<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:TouhoumonCirnoEdition:717355215719759872> Touhoumon Cirno édition (1 de disponible)', value: '=> 99 999<:CirnoCoin:715320263465762837>', inline: true },
        { name: '<:CBCirno:715494720146767873> Ma carte bancaire (1 de disponible)', value: '=> 999 999 999<:CirnoCoin:715320263465762837>', inline: true },
      )
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'arcadecoins') {
    var arcaderesult = Math.floor(Math.random() * 50)
    if (!datas3[message.author.id]) {
      datas3[message.author.id] = {
        arcadecoin: 0
      }
      fs.writeFileSync("./datas3.json", JSON.stringify(datas3))
    }
    var user = datas3[message.author.id]
    var arcaderesult = Math.floor(Math.random() * 10)
    user.arcadecoin = user.arcadecoin + arcaderesult
    fs.writeFileSync("./datas3.json", JSON.stringify(datas3))
    var acooldowns = JSON.parse(fs.readFileSync("./acooldowns.json").toString())
    if (!acooldowns[message.author.id]) {
      acooldowns[message.author.id] = {
        acooldown: 0
      }
      fs.writeFileSync("./acooldowns.json", JSON.stringify(acooldowns))
    }
    var user = acooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.acooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.acooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.acooldown = Date.now()
      fs.writeFileSync("./acooldowns.json", JSON.stringify(acooldowns))
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle("")
        .setAuthor('')
        .setDescription('Vous avez obtenu ' + arcaderesult + ' <:ArcadeCoin:718169908478869514> !')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)
    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }

  }

  if (message.content === prefix + 'arcadeshop') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Arcade shop')
      .setURL('')
      .setAuthor('')
      .setDescription("Description des articles: \n \n-1 ticket classique => 10 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'argent => 30 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'émeraude => 50 <:ArcadeCoin:718169908478869514> \n \n-1 ticket Cirno => 99 <:ArcadeCoin:718169908478869514>")
      .setThumbnail('https://nsa40.casimages.com/img/2020/06/08/mini_200608105821414449.png')
      .setImage('https://zupimages.net/up/20/24/p40n.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content === prefix + 'inventory') {
    if (!datas[message.author.id]) {
      datas[message.author.id] = {
        coin: 0
      }
      fs.writeFileSync("./datas.json", JSON.stringify(datas))
    }

    if (!datas2[message.author.id]) {
      datas2[message.author.id] = {
        cirnocoin: 0
      }
      fs.writeFileSync("./datas2.json", JSON.stringify(datas2))
    }

    if (!datas3[message.author.id]) {
      datas3[message.author.id] = {
        arcadecoin: 0
      }
      fs.writeFileSync("./datas3.json", JSON.stringify(datas3))
    }

    if (!tcdatas[message.author.id]) {
      tcdatas[message.author.id] = {
        ticketclassique: 0
      }
      fs.writeFileSync("./tcdatas.json", JSON.stringify(tcdatas))
    }

    if (!lunaticcoin[message.author.id]) {
      lunaticcoin[message.author.id] = {
        lunatic: 0
      }
      fs.writeFileSync("./lunaticcoin.json", JSON.stringify(lunaticcoin))
    }

    if (!frogdatas[message.author.id]) {
      frogdatas[message.author.id] = {
        frogs: 0
      }
      fs.writeFileSync("./frogdatas.json", JSON.stringify(frogdatas))
    }

    var user1 = datas[message.author.id]
    var user2 = datas2[message.author.id]
    var user3 = datas3[message.author.id]
    var user4 = tcdatas[message.author.id]
    var user5 = lunaticcoin[message.author.id]
    var user6 = frogdatas[message.author.id]
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Inventaire')
      .setURL('')
      .setAuthor('')
      .setDescription('__Card Battle coins:__\n' + user1.coin + ' <:CardCoin:718168105033138227>\n\n__Cirno coins:__\n' + user2.cirnocoin + ' <:CardCoin:718168105033138227>\n\n__Arcade coins:__\n' + user3.arcadecoin + ' <:ArcadeCoin:718169908478869514>\n\n__Lunatic coins:__\n' + user5.lunatic + ' <:LunaticCoin:733803554099298421>\n\n__Tickets:__\n' + user4.ticketclassique + ' <:TicketClassique:719298480044113948>\n\n__Grenouilles congelées:__\n' + user6.frogs + ' <:FrogFreeze:734104312879513670>')
      .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqH5RTXOHtbm_bfrG39KAqjb5FWEQQmGZgVO0OC1shfmwK7fJW&usqp=CAU')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'badges') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Liste des badges:')
      .setURL('')
      .setAuthor('')
      .setDescription('<:BadgeNonObtenue:717424172799754361> => Badge Cirno \n<:BadgePasObtenue:716039861240594524> => Badge du respect du créateur.')
      .setThumbnail('https://cdn.shopify.com/s/files/1/0078/6563/0831/products/2434465_grande.png?v=1552807115')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + 'changeprefix')) {
    let allowedRole = message.guild.roles.find("Adminsistrator", "Adminsistrator")
    if (message.member.roles.has(allowedRole.id)) {
      message.channel.send('Le préfix a bien été changé en' + message.content.substr(13))
    } else {
      message.channel.send("Tu n'as pas la permission d'utiliser cette commande !")
    }
  }

  if (message.content === prefix + 'infobot') {
    var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Informations sur le bot:')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .addFields(
        { name: '__Date création:__', value: '12/05/2020.', inline: true }, //12/05/2020 à 16:30 et 54,399 secondes.
        { name: '__Version:__', value: '1.0.0.', inline: true },
        { name: '__Serveurs:__', value: client.guilds.cache.size + ' serveurs.', inline: true },
        { name: '__Utilisateurs:__', value: userdatas.length + '.', inline: true },
        { name: '__Mémoire utilisée:__', value: ram + " Mo.", inline: true },
        { name: '__Nombre patchnotes:__', value: "0.", inline: true },
        { name: '__Nombre lignes code:__', value: fs.readFileSync("./indexC.js").toString().split("\n").length + '.', inline: true },
        { name: '__Développeur:__', value: 'MagicTendo.', inline: true },
        { name: '__Aides pour le code:__', value: 'Hasuko et Yurisensei.', inline: true },
        { name: "__Aide pour la doc':__", value: 'Ninjdai.', inline: true },
        { name: "__Bugs hunter:__", value: 'Ninjdai.', inline: true },
        { name: '__Créateur de Cirno:__', value: 'ZUN.', inline: true },
        { name: '__Langage:__', value: 'Java Script.', inline: true },
        { name: '__Documentation:__', value: 'https://documentationCirno.fr', inline: true },
        { name: '__Librairie:__', value: 'Discord.js.', inline: true },
        { name: '__Serveur support:__', value: 'https://discord.io/Cirno-official', inline: true },
        { name: '__Fandom:__', value: 'https://frama.link/Cirnobot', inline: true },
        { name: '__Code source:__', value: '[Insére lien Github]', inline: true },
      )
      .setThumbnail('https://zupimages.net/up/20/21/kilo.png')
      .setTimestamp()
      .setFooter('Bot incroyable par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'infoserv') {
    let { guild } = message
    var server = message.guild.id
    var propriétaire = guild.owner.user.tag
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle(`Informations sur ${guild.name}:`)
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .addFields(
        { name: '__Nom:__', value: `${guild.name}`, inline: true },
        { name: '__Nom acronyme:__', value: guild.nameAcronym, inline: true },
        { name: '__ID:__', value: server, inline: true },
        { name: '__Propriétaire:__', value: propriétaire, inline: true },
        { name: '__Mon nom:__', value: guild.me, inline: true },
        { name: '__Date création:__', value: guild.createdAt, inline: true },
        { name: '__Vérification:__', value: guild.verified, inline: true },
        { name: '__Région:__', value: guild.region, inline: true },
        { name: '__Salon de bienvenue:__', value: guild.systemChannel, inline: true },
        { name: '__Salon annonces:__', value: guild.publicUpdatesChannel, inline: true },
        { name: '__Notifications:__', value: guild.defaultMessageNotifications, inline: true },
        { name: '__Niveau sécurité:__', value: guild.verificationLevel, inline: true },
        { name: '__Filtre médias:__', value: guild.explicitContentFilter, inline: true },
        { name: '__Boost tier:__', value: guild.premiumTier, inline: true },
        { name: '__Nombre boost:__', value: guild.premiumSubscriptionCount, inline: true },
        { name: '__Vocal AFK:__', value: guild.afkChannel, inline: true },
        { name: '__Temps avant AFK:__', value: guild.afkTimeout + " secondes", inline: true },
        { name: '__Bannière:__', value: guild.banner, inline: true },
        { name: '__Nombre total membres:__', value: guild.members.cache.size, inline: true },
        { name: '__Nombre rôles:__', value: guild.roles.cache.size - 1, inline: true },
        { name: '__Nombre émojis:__', value: guild.emojis.cache.size, inline: true },
        { name: '__Nombre salons textes:__', value: "text", inline: true },
        { name: '__Nombre salons vocaux:__', value: "cvbn", inline: true },
        { name: '__Nombre catégories:__', value: "jh", inline: true },
      )
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'update') {
    message.channel.send("Je n'ai eu aucune mise à jour !")

  }

  if (message.author.id === '610493430325313549' && message.content.startsWith(prefix + "eval")) {
    var codeevaluer = message.content.substr(6)
    function clean(text) {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
      else
        return text
    }
    const args = message.content.split(" ").slice(1)
    try {
      const code = args.join(" ")
      let evaled = eval(code)

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled)

      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#1df500")
        .setTitle("<:CirnoOuais:719644249683132477> Éval réussie !")
        .setDescription("Résultat:\n\`\`\`js\n" + clean(evaled) + "\`\`\`\n\nLatence:\n" + `\`${Date.now() - message.createdTimestamp} ms\``)
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    } catch (err) {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#e00000")
        .setTitle("<:SadCirno:719126599014023188> Erreur...")
        .setDescription(`\`\`\`js\n${clean(err)}\`\`\``)
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }
  }

  if (message.content.startsWith(prefix + 'bugreport')) {
    var bcooldowns = JSON.parse(fs.readFileSync("./bcooldowns.json").toString())
    if (!bcooldowns[message.author.id]) {
      bcooldowns[message.author.id] = {
        bcooldown: 0
      }
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
    }
    var user = bcooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.bcooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.bcooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.bcooldown = Date.now()
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
      message.channel.send(client.channels.resolve("710170623279628471").send(("<@610493430325313549> tu t'es encore foiré dans le code car il y a un bug trouvé par " + message.author.username + " !\n" + message.content.substr(10))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("Le problème a bien été signalé !"))
    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  if (message.author.id === '664023250287984651' && message.content.startsWith(prefix + 'br')) {
    message.channel.send(client.channels.resolve("710170623279628471").send(("<@610493430325313549> tu as encore fait une erreur dans le code (comme d'habitude) mais il a été trouvé pas le meilleur bug hunter du monde !\n" + message.content.substr(12))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("La faute a été envoyée !"))
  }

  if (message.content.startsWith(prefix + 'suggestion')) {
    var bcooldowns = JSON.parse(fs.readFileSync("./bcooldowns.json").toString())
    if (!bcooldowns[message.author.id]) {
      bcooldowns[message.author.id] = {
        bcooldown: 0
      }
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
    }
    var user = bcooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.bcooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.bcooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.bcooldown = Date.now()
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
      client.channels.resolve("709831610299711579").send(("<@610493430325313549> y'a une suggestion de " + message.author.username + " !\n" + message.content.substr(11))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("La suggestion a bien été envoyée !")

    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  if (message.content.startsWith(prefix + 'question')) {
    var bcooldowns = JSON.parse(fs.readFileSync("./bcooldowns.json").toString())
    if (!bcooldowns[message.author.id]) {
      bcooldowns[message.author.id] = {
        bcooldown: 0
      }
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
    }
    var user = bcooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.bcooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.bcooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.bcooldown = Date.now()
      fs.writeFileSync("./bcooldowns.json", JSON.stringify(bcooldowns))
      client.channels.resolve("719217922496528425").send(("<@610493430325313549> y'a une question de " + message.author.username + " !\n" + message.content.substr(9))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("La question a bien été envoyée !")

    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  if (message.content === prefix + 'faq1') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('FAQ (page 1):')
      .setURL('')
      .setAuthor('')
      .setDescription("__Combien de temps de développement a pris pour faire le bot ?__\nJE L'AI MÊME PAS FINI !\n\n__Quelle est le premier nom du bot ?__\nMagicCard, Magic car j'aime bien mettre sois Magic sois Tendo à des noms de bot et Card car à la base mon idée était de faire un jeu de cartes comme pokémon. Le nom MagicCard me plaisais pas et le bot avait une image de Cirno qui est pas la même que celle de maintenant donc je laisse deviné pourquoi le bot s'appele Cirno.\n\n__Pourquoi le prefix de base de Cirno est \">\" ?__\n*Honetement, je sais pas.*\n\n__Pourquoi tu as le pseudo MagicTendo ?__\nMon premier pseudo était Frifu (g honte aled), Fri pour le deuxiéme youtubeur que j'avais découvert, Frigiel et fu pour le premier youtubeur que j'ai découvert, Furious Jumper. Déjà que ce pseudo me convenais pas et que en plus c'est le nom d'un hamester (enfin je crois) je l'ai changé en MagicCraft (encore mieux...), Magic car je pratique de la magie et Craft pour Minecraft puis je l'ai changé en MagicTendo, Tendo faisant référence à la meilleur marque de jeux vidéo Nintendo.\n\n__C'est facile de coder un bot ?__\nCela dépend de ce que tu veux faire si c'est juste en bot qui répond UwU quand on envoie OwO, oui sa sera très simple, mais un bot comme celui-là est beaucoup plus complexe (tu peux le constaté par le nombre de lignes de code avec >infobot).\n\n__Comment le bot fait pour afficher des émojis personnalisés ?__\nLe bot à 4 serveurs émojis (oui je compte le serveur support), je récupère l'ID de l'émoji (exemple: <NomÉmojis:ID>) et je le mets dans le code, tout simplement !\n\n__Connais-tu l'heure exacte du bot ?__\nOui c'est 12/05/2020 à 16:30 et 54,399 secondes (j'adore la précision OwO).\n\n__Pourquoi le bot Cirno sur le serveur support a les rôles Fugueur(se) et Tueur(se) de poulets ?__\nJuste un délire avec Ninjdai OwO.")
      .setThumbnail('https://i.imgur.com/L1jpR7Y.jpg')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content === prefix + 'faq2') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('FAQ (page 2):')
      .setURL('')
      .setAuthor('')
      .setDescription("__Le CirnoSCPDatas existe ?__\nNon, les rapports SCP sont stocké dans une variable et chaque rapport a un nom associées, le rapport de SCP-910-JP est associé au nom SCP-910-JP et qund on execute la commande >scpsearch SCP-910-JP, Cirno regarde dans la variable si il y a un rapport assigné aux nom SCP-910-JP, si oui, elle l'envois, si non, elle envois Aucun résultat !")
      .setThumbnail('https://i.imgur.com/L1jpR7Y.jpg')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content.startsWith(prefix + 'scpsend')) {
    var scpscooldowns = JSON.parse(fs.readFileSync("./scpscooldowns.json").toString())
    if (!scpscooldowns[message.author.id]) {
      scpscooldowns[message.author.id] = {
        scpscooldown: 0
      }
      fs.writeFileSync("./scpscooldowns.json", JSON.stringify(scpscooldowns))
    }
    var user = scpscooldowns[message.author.id]
    var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.scpscooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000));
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000));
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.scpscooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.scpscooldown = Date.now()
      fs.writeFileSync("./scpscooldowns.json", JSON.stringify(scpscooldowns))
      client.channels.resolve("726106913531625562").send(("<@610493430325313549> y'a un rapport SCP de " + message.author.username + " !\n" + message.content.substr(9))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("Le rapport a bien été envoyée !")

    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  if (message.author.id === '697438073646088194' && message.content.startsWith(prefix + 'fautereport')) {
    message.channel.send(client.channels.resolve("720566010431930388").send(("<@610493430325313549> tu as encore fait une faute d'orthographe !\n" + message.content.substr(12))).then((sentMessage) => sentMessage.react("✅")) && message.channel.send("La faute a été envoyée !"))
  }

  if (message.content === prefix + 'achievements') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Liste des achievements:')
      .setURL('')
      .setAuthor('')                                                                                              //say I'm not baka
      .setDescription('```Card Battle: \n \n-Récupérer 100K CBcoins au total => Carte bonus.           ❌\n \nAutres: \n \n-??? => 100 Cirno coins                                    ❌\n \n-Acheter la carte bancaire de Cirno => Badge du respect de mon créateur                                               ❌```')
      .setThumbnail('')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content.startsWith("say")) {
    var say = message.content.substr(4)
    var text = message.content.substr(4)
    function remplaceur(correspondance, p1, p2, p3, decalage, chaine) {
      return [p1, p2, p3].map(x => x === "n" ? "n" : extrathicc.split("")[alphabet.indexOf(x)]).join("").replace(/n/g, "𠘨")
    }

    text.split("").map(lettre => {
      var index = alphabet.indexOf(lettre)
      return index < 0 ? lettre : [...extrathicc][index]
    })

    message.channel.send(text)
    var nouvelleChaine = '[[]]'.replace(/([^\d]*)(\d*)([^\w]*)/, remplaceur)
    message.channel.send(lettre)

  }

  if (message.content.startsWith(prefix + "say")) {
    message.channel.startTyping()
    setTimeout(function () {
      message.channel.send(message.content.substr(4).replace(/\[Nine\]/g, "⑨").replace(/\[Obsidia\]/g, "<:Obsidia:722923154619498556>").replace(/\[Ninjdai\]/g, ":rooster:").replace(/\[MagicTendo\]/g, "<:MagicTendo:722867619560161340>").replace(/\[Troll\]/g, "<:Troll:714458036667678726>").replace(/\[Cirno\]/g, "<:CirnoDank:719640618388684901>").replace(/\[XD\]/g, "<:XD:722879901421797386>").replace(/\[9\]/g, "<:9Power:719126568709914644>").replace(/\[HappyCirno\]/g, "<:HappyCirno:719132196732010518>").replace(/\[CirnoDab\]/g, "<:CirnoDab:712309643673862156>").replace(/\[CirnoOuais\]/g, "<:CirnoOuais:719644249683132477>").replace(/\[CirnoWaw\]/g, "<:CirnoWaw:719132144278175755>").replace(/\[CirnoFealGreat\]/g, "<:CirnoKwaa:719128005133205554>").replace(/\[CirnoHeHe\]/g, "<:CirnoHehe:711279721123414087>").replace(/\[CirnoYeah\]/g, "<:CirnoYeah:719126616722112513>").replace(/\[CirnoIDK\]/g, "<:CirnoIDK:719128118639460382>").replace(/\[CirnoKwa\]/g, "<:CirnoKwa:719126616743084084>").replace(/\[CirnoQuoi\]/g, "<:CirnoQuoi:719131740769091606>").replace(/\[CirnoHein\]/g, "<:CirnoHein:714415602332073984>").replace(/\[CirnoHmm\]/g, "<:CirnoHmm:719131587815538693>").replace(/\[CirnoGasp\]/g, "<:CirnoGasp:719640958974820352>").replace(/\[CirnoPLS\]/g, "<:CirnoPLS:719131678819483731>").replace(/\[SadCirno\]/g, "<:SadCirno:719126599014023188>").replace(/\[CirnoYes\]/g, "<:CirnoYes:719123594587799562>").replace(/\[CirnoNo\]/g, "<:CirnoNo:719126598481084417>").replace(/\[CirnoNan\]/g, "<:CirnoNan:719131519570149376>").replace(/\[CirnoOwO\]/g, "<:CirnoOwO:719126796796297248>").replace(/\[CirnoOK\]/g, "<:CirnoOk:715607626968465418>").replace(/\[CirnoEatPopcorns\]/g, "<:CirnoEatPopcorns:719132301635616848>").replace(/\[CirnoPadoru\]/g, "<:CirnoPadoruPadoru:719123752775843920>").replace(/\[AquaThumbsUp\]/g, "\<:AquaThumbsUp:722923082020552884>").replace(/\[YuzukoKwa\]/g, "\<:YuzukoKwa:722923193198968844>").replace(/\[KannaYes\]/g, "\<:KannaYes:722923081957376030>").replace(/\[KannaHmm\]/g, "\<:KannaHmm:722923082192388146>").replace(/\[KannaDrink\]/g, "\<:KannaDrink:722923082599235655>").replace(/\[MashaHi\]/g, "\<:MashaHi:731176070291783691>").replace(/\[KannaDetective\]/g, "\<:KannaDetective:731175991761698956>").replace(/\[WoopWoop\]/g, "\<a:WoopWoop:731176048112304240>"))
    }, 1000)
    message.channel.stopTyping()

  }

  if (message.content.startsWith(prefix + "embed")) {
    try {
      message.delete()
      const array = message.content.substr(7).split(',,').replace(/\[Obsidia\]/g, "<:Obsidia:722923154619498556>").replace(/\[Banane\]/g, 'https://www.youtube.com/watch?v=3r7mIB3Rhw4').replace(/\[Hasuko\]/g, "(╯°□°）╯").replace(/\[Ninjdai\]/g, ":rooster:").replace(/\[MagicTendo\]/g, "<:MagicTendo:722867619560161340>").replace(/\[Troll\]/g, "<:Troll:714458036667678726>").replace(/\[Cirno\]/g, "<:CirnoDank:719640618388684901>").replace(/\[Coolux\]/g, "```　    ∧,,∧\n　 (；・ω・）　　,\n　 /　ｏ={=}ｏ , ', ´\n､､しー-Ｊミ(.@)ｗｗｗｗｗｗｗｗｗｗｗ```").replace(/\[XD\]/g, "<:XD:722879901421797386>").replace(/\[9\]/g, "<:9Power:719126568709914644>").replace(/\[HappyCirno\]/g, "<:HappyCirno:719132196732010518>").replace(/\[CirnoDab\]/g, "<:CirnoDab:712309643673862156>").replace(/\[CirnoOuais\]/g, "<:CirnoOuais:719644249683132477>").replace(/\[CirnoWaw\]/g, "<:CirnoWaw:719132144278175755>").replace(/\[CirnoFealGreat\]/g, "<:CirnoKwaa:719128005133205554>").replace(/\[CirnoHeHe\]/g, "<:CirnoHehe:711279721123414087>").replace(/\[CirnoYeah\]/g, "<:CirnoYeah:719126616722112513>").replace(/\[CirnoIDK\]/g, "<:CirnoIDK:719128118639460382>").replace(/\[CirnoKwa\]/g, "<:CirnoKwa:719126616743084084>").replace(/\[CirnoQuoi\]/g, "<:CirnoQuoi:719131740769091606>").replace(/\[CirnoHein\]/g, "<:CirnoHein:714415602332073984>").replace(/\[CirnoHmm\]/g, "<:CirnoHmm:719131587815538693>").replace(/\[CirnoGasp\]/g, "<:CirnoGasp:719640958974820352>").replace(/\[CirnoPLS\]/g, "<:CirnoPLS:719131678819483731>").replace(/\[SadCirno\]/g, "<:SadCirno:719126599014023188>").replace(/\[CirnoYes\]/g, "<:CirnoYes:719123594587799562>").replace(/\[CirnoNo\]/g, "<:CirnoNo:719126598481084417>").replace(/\[CirnoNan\]/g, "<:CirnoNan:719131519570149376>").replace(/\[CirnoOwO\]/g, "<:CirnoOwO:719126796796297248>").replace(/\[CirnoOK\]/g, "<:CirnoOk:715607626968465418>").replace(/\[CirnoEatPopcorns\]/g, "<:CirnoEatPopcorns:719132301635616848>").replace(/\[CirnoPadoru\]/g, "<:CirnoPadoruPadoru:719123752775843920>").replace(/\[AquaThumbsUp\]/g, "\<:AquaThumbsUp:722923082020552884>").replace(/\[YuzukoKwa\]/g, "\<:YuzukoKwa:722923193198968844>").replace(/\[KannaYes\]/g, "\<:KannaYes:722923081957376030>").replace(/\[KannaHmm\]/g, "\<:KannaHmm:722923082192388146>").replace(/\[KannaDrink\]/g, "\<:KannaDrink:722923082599235655>")
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor(array[0])
        .setTitle(array[1])
        .setURL(array[2])
        .setDescription(array[3])
        .setThumbnail(array[4])
        .setImage(array[5])
        .setTimestamp()
        .setFooter(array[6], array[7])
      message.channel.send(exampleEmbed)
    } catch (err) {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#e00000")
        .setTitle("<:SadCirno:719126599014023188> Erreur...")
        .setDescription("Vérifiez que vous entrez correctement la commande.\n\`\`\`" + message.content + "\`\`\`")
        .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/752/096/baf.jpg")
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }

  }

  if (message.content.startsWith(prefix + "objectif")) {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setDescription(message.content.substr(10))
    message.channel.send(exampleEmbed).then((sentMessage) => sentMessage.react("✅"))

  }

  if (message.author.id === '610493430325313549' && message.content === 'Ninjdaiiiiii') {
    message.channel.send("<@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651><@664023250287984651>")

  }

  if (message.content === prefix + 'Cirno') {
    var iresultat = Math.floor(Math.random() * 19)
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .setImage(rando_imgs[iresultat])
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'kmb') {
    var kmbresultat = Math.floor(Math.random() * 23)
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .setImage(kmb[kmbresultat])
      .setTimestamp()
      .setFooter('Bot Yasuna par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'octagon') {
    var oresultat = Math.floor(Math.random() * 4)
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .setImage(octagon[oresultat])
      .setTimestamp()
      .setFooter('Bot Jack Black par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'coinflip') {
    var cresultat = Math.floor(Math.random() * 2)
    message.channel.send(pf[cresultat])

  }

  if (message.content === prefix + 'dice') {
    var dresultat = Math.floor(Math.random() * 6)
    message.channel.send(dice[dresultat])

  }

  if (message.content === prefix + 'scpinfo') {
    message.channel.send('<a:Loading:722107401892921446> Accès à la base de données...').then(message => { message.delete({ timeout: 1000 }) })
    setTimeout(function () {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Informations sur les SCP')
        .setDescription("**__Important !!!__**\n\nCertains SCP pourraient perturber certaines personnes, surtout celles qui n'aiment pas les choses d'horreurs ou les enfants de moins de 15 ans. À vos risques et périls...\n\n**__Classification des SCP:__**\n\n-__Sûr:__ Les objets de classe Sûr sont des anomalies qui sont soit assez bien comprises pour être confinées sans aucun risque de façon permanente, soit dotées de propriétés qui ne s'activent qu'en réponse à une action extérieure intentionnelle. \nUn objet classé Sûr n'est toutefois pas nécessairement inoffensif et le manipuler ou entrer en contact avec lui sans respecter les procédures en vigueur peut s'avérer dangereux.\n\n-__Euclide:__ Les objets de classe Euclide sont des anomalies qui sont soit peu comprises soit intrinsèquement imprévisibles, de telle sorte qu'un confinement précis est nécessaire pour bloquer leurs effets. Euclide est la classe intermédiaire qui désigne un objet susceptible de rompre son confinement, mais normalement incapable de le faire si des procédures efficaces sont établies et respectées à la lettre.\n\n-__Keter:__ Les objets de classe Keter sont des anomalies dont le confinement requiert des procédures avancées et complexes, ou qui ne peuvent pas être confinées efficacement par la Fondation avec ses connaissances et capacités actuelles. \nCes anomalies sont généralement considérées comme les plus problématiques du fait du danger qu'elles peuvent représenter soit pour la vie d'êtres vivants soit pour le maintien du secret autour du monde anormal. De ce fait, la Fondation investit d'importants efforts dans la recherche pour développer des confinements plus efficaces pour ces anomalies voire, en ultime recours, neutraliser leurs effets anormaux ou les détruire.\n\n-__Expliqué:__ Cette classe est donné à un SCP qui a été compris. C'est un SCP qui n'est plus classé comme tel, soit parce qu'il est devenu commun, que son fonctionnement a été compris, ou qu'il ne pose plus aucun problème.")
        .setThumbnail('https://vignette.wikia.nocookie.net/scp-secret-laboratory-official/images/b/b7/SCPLogo.png/revision/latest?cb=20200504233725')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }, 1000)
  }

  if (message.content === prefix + 'scplist') {
    message.channel.send('<a:Loading:722107401892921446> Accès à la base de données...').then(message => { message.delete({ timeout: 1000 }) })
    setTimeout(function () {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Liste des SCP enregistrés dans la CirnoSCPDatas:')
        .setDescription("Cette liste est là pour voir quels SCP sont là ou pas. Vous pouvez faire >scpsearch [le nom du exact du SCP dans la liste]\n\n__SCP:__\n\nSCP-008\nSCP-009\nSCP-048\nSCP-049\nSCP-096\nSCP-099\nSCP-115\nSCP-151\nSCP-173\nSCP-198\nSCP-207\nSCP-242\nSCP-283\nSCP-330\nSCP-345\nSCP-354\nSCP-355\nSCP-500\nSCP-517\nSCP-524\nSCP-529\nSCP-617\nSCP-674\nSCP-686\nSCP-697\nSCP-703\nSCP-786\nSCP-823\nSCP-872\nSCP-882\nSCP-970\nSCP-1002\nSCP-1070\nSCP-1471\nSCP-1507\nSCP-1673\nSCP-1678\nSCP-1715\nSCP-2046\nSCP-2223\nSCP-2262\nSCP-2521\nSCP-2915\nSCP-2999-A\nSCP-2999-B\nSCP-3003\nSCP-3008\nSCP-3009\nSCP-3349\nSCP-4187\nSCP-4486\nSCP-4885\nSCP-4962\n\n__SCP-FR:__\n\nSCP-172-FR\n\n__SCP-JP:__\n\nSCP-009-JP\nSCP-020-JP\nSCP-040-JP\nSCP-404-JP\nSCP-444-JP\nSCP-835-JP\nSCP-910-JP\n\n__SCP-J:__\n\nSCP-300-FR(-J ?)\nSCP-329-J\n\n__SCP-EX:__\n\nSCP-1974-EX")
        .setThumbnail('https://zupimages.net/up/20/26/fg16.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }, 1000)
  }

  if (message.content === prefix + 'scp') {
    message.channel.send('<a:Loading:722107401892921446> Accés à la base de données...').then(message => { message.delete({ timeout: 1000 }) })
    setTimeout(function () {
      var tresultat = Object.keys(scp)[Math.floor(Math.random() * 67)]
      if (tresultat === 'SCP-404-JP') {
        setTimeout(function () {
          message.channel.send(embed).then(message => {
            setTimeout(() => {
              message.edit(embed2)
            }, 100000)
          })
        })
      }
      else {
        message.channel.send(scp[tresultat])
      }

    }, 1100)
  }

  if (message.content.startsWith(prefix + 'scpsearch')) {
    message.channel.send('<a:Loading:722107401892921446> Recherche en cours...').then(message => { message.delete({ timeout: 1000 }) })
    if (message.content === prefix + 'scpsearch SCP-404-JP') {
      setTimeout(function () {
        message.channel.send(embed).then(message => {
          setTimeout(() => {
            message.edit(embed2)
          }, 50000)
        })
      })
    }
    else {
      var scpsearch = scp[message.content.substr(11)]
      if (scpsearch) {
        setTimeout(function () {
          message.channel.send(scpsearch)
        }, 1200)
      }
      else {
        setTimeout(function () {
          message.channel.send("Aucun résultat !")
        }, 1200)
      }
    }
  }

  if (message.content === prefix + "creepyanime") {
    var caresultat = Math.floor(Math.random() * 7)
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .setImage(kmb[caresultat])
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'helptroll') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('<:Template4:714458036667678726> Commandes trolls:')
      .setURL('') //lien de la documentation
      .setAuthor('')
      .setDescription("<:ActiverDesactiver:715633929607970847> Commandes activées/desactivées:\n \nEnable = activé \nDisable = desactivé \n \n>okboomer [enable/disable], je répond boomer quand quelqu'un écrit ok \n \n>OwO [enable/disable], je répond UwU quand quelqu'un écrit OwO \n \n \n<:CreateTroll:714467056678076479> Créé un troll \n \n>create [mot écrit par quelqu'un] [ce que je répond] \n \n \n<:Attention:712387173000675389> Ne mettez pas les crochets et remplacez l'intérieur des crochets par ce qui est indiqué !")
      .setThumbnail('https://zupimages.net/up/20/21/kilo.png')
      .setImage('')
      .setTimestamp()
      .setFooter('Bot troll par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  /*if (message.content === 'OwO') {
    message.channel.send("UwU")
  }*/

  if (message.author.id === '610493430325313549' && message.content === '<:CirnoOk:715607626968465418>') {
    message.channel.send("<:CirnoOk:715607626968465418>")

  }

  /*if (message.content === 'ok') {
    message.channel.send("boomer")
  }*/

  if (message.has === 'baka' || message.content === 'BAKA' || message.content === 'Baka' || message.content === '*baka*' || message.content === 'バカ' || message.content === 'ばか' || message.content === '馬鹿' || message.content === '*バカ*' || message.content === '*ばか*' || message.content === '*馬鹿*' || message.content === '**バカ**' || message.content === '**ばか**' || message.content === '**馬鹿**' || message.content === '__バカ__' || message.content === '__ばか__' || message.content === '__馬鹿__'  || message.content === '**baka**' || message.content === '**BAKA**' || message.content === '||baka||' || message.content === '||BAKA||' || message.content === '__baka__' || message.content === '__BAKA__' || message.content === '~~baka~~' || message.content === '~~BAKA~~' || message.content === '~~バカ~~' || message.content === '~~ばか~~' || message.content === '~~馬鹿~~' || message.content === '_バカ_' || message.content === '_ばか_' || message.content === '_馬鹿_' || message.content === '||バカ||' || message.content === '||ばか||' || message.content === '||馬鹿||' || message.content === '`バカ`' || message.content === '`ばか`' || message.content === '`馬鹿`') {
    message.channel.send("I'AM NOT BAKA !!!")
  }

  if (message.content === prefix + 'windows9') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Liste des fonctionnalitées:')
      .setURL('')
      .setAuthor('')
      .setDescription('-Mining Simulator V.9\n-Cirno Explorer')
      .setImage('') //image du bureau
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + 'wsearch')) {
    const user = message.mentions.users.first() || message.author
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle("Voici l'avatar de " + user.username)
      .setImage(user.avatarURL())
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'Cmail') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Cirno mail:')
      .setURL('')
      .setAuthor('')
      .setDescription("Vous avez " + 0 + " mail(s) !")
      .setThumbnail('https://zupimages.net/up/20/24/si3x.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)

  }

  if (message.content === prefix + 'miningsimulator') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Mining simulator')
      .setURL('')
      .setAuthor('')
      .setDescription('<:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Nuage:717476583971225681><:Ciel:717476583841202287><:Soleil:717476583828619274>\n<:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287><:Ciel:717476583841202287>\n<:Ciel:717476583841202287><:Player:717480099678519326><:Ciel:717476583841202287><:Herbes:717476583853522945><:Fleur:717476584004780072><:Ciel:717476583841202287><:Ciel:717476583841202287><:Herbes:717476583853522945><:Ciel:717476583841202287>\n<:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449><:Herbe:717476583442743449>\n<:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465>\n<:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Pierre:717476585061482536><:Pierre:717476585061482536><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465><:Terre:717476583832551465>\n<:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536><:Pierre:717476585061482536>')
      .setThumbnail('https://zupimages.net/up/20/23/5u2b.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'freezefrog') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Cirno\'s Frog Freeze')
      .setURL('')
      .setAuthor('')
      .setDescription('')
      .setThumbnail('')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + 'Cirnomathchallenge') {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setDescription(easy + " + " + easy2)
      .setThumbnail('https://i.pinimg.com/originals/12/73/05/127305ba345363803f81f0353b52a8e0.jpg')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + 'trollmp')) {
    var destinataire = client.users.cache.get('665225957732515850')//coolman: 697438073646088194 shimy: 665225957732515850
    if (destinataire) {
      destinataire.send(message.content.substr(8)).then(message => console.log("Message envoyé à:" + message.content))
    }
  }

  /*if (message.channel.type == "dm"){
client.channels.resolve("721809219774447646").send(message.content)
}*/

  if (message.content.startsWith(prefix + "calculate")) {
    const calcul = message.content.substr(10)
    const calcul2 = message.content.substr(11)

    if (message.content === prefix + "calculate 1 + 1" || message.content === prefix + "calculate 1+1") {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#0098d9")
        .setTitle("")
        .setDescription("Calcul:\n`" + calcul2 + "`\n\nRésultat:\n" + "```js\n" + "⑨ !" + "```")
        .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/211/481/1322884994202.jpg")
        .setTimestamp()
        .setFooter('Bot qui compte de base 9 par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    } else {

      if (message.content === prefix + "calculate ∞") {
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor("#0098d9")
          .setTitle("")
          .setDescription("Calcul:\n`" + calcul2 + "`\n\nRésultat:\n" + "```js\n" + "Stonks" + "```")
          .setThumbnail("https://zupimages.net/up/20/22/hfzq.png")
          .setTimestamp()
          .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
        message.channel.send(exampleEmbed)
      }
    }

    if (message.content === prefix + "calculate OwO") {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#0098d9")
        .setTitle("")
        .setDescription("Calcul:\n`" + calcul2 + "`\n\nRésultat:\n" + "```js\n" + "What this ?" + "```")
        .setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/915794845186557217/EFA534B3355045C97C14490CC5CF2F14C5163D87/")
        .setTimestamp()
        .setFooter('Bot OwO par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }

    if (message.content === prefix + "calculate π" || message.content === prefix + "calculate pi" || message.content === prefix + "calculate PI" || message.content === prefix + "calculate Pi" || message.content === prefix + "calculate pI") {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#0098d9")
        .setTitle("")
        .setDescription("Calcul:\n`" + calcul2 + "`\n\nRésultat:\n" + "```js\n" + "3.14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679 82148 08651 32823 06647 09384 46095 50582 23172 53594 08128 48111 74502 84102 70193 85211 05559 64462 29489 54930 38196 44288 10975 66593 34461 28475 64823 37867 83165 27120 19091 45648 56692 34603 48610 45432 66482 13393 60726 02491 41273 72458 70066 06315 58817 48815 20920 96282 92540 91715 36436 78925 90360 01133 05305 48820 46652 13841 46951 94151 16094 33057 27036 57595 91953 09218 61173 81932 61179 31051 18548 07446 23799 62749 56735 18857 52724 89122 79381 83011 94912 98336 73362 44065 66430 86021 39494 63952 24737 19070 21798 60943 70277 05392 17176 29317 67523 84674 81846 76694 05132 00056 81271 45263 56082 77857 71342 75778 96091 73637 17872 14684 40901 22495 34301 46549 58537 10507 92279 68925 89235 42019 95611 21290 21960 86403 44181 59813 62977 47713 09960 51870 72113 49999 99837 29780 49951 05973 17328 16096 31859 50244 59455 34690 83026 42522 30825 33446 85035 26193 11881 71010 00313 78387 52886 58753 32083 81420 61717 76691 47303 59825 34904 28755 46873 11595 62863 88235 37875 93751 95778 18577 80532 17122 68066 13001 92787 66111 95909 21642 01989 38095 25720 10654 85863 27886 59361 53381 82796 82303 01952 03530 18529 68995 77362 25994 13891 24972 17752 83479 13151 55748 57242 45415 06959 et puis j′en ai marre, c′est trop long :p" + "```")
        .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/211/481/1322884994202.jpg")
        .setTimestamp()
        .setFooter('Bot qui n\'aime pas π par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)

    } else {
      try {
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor("#0098d9")
          .setTitle("")
          .setDescription("Calcul:\n`" + calcul2 + "`\n\nRésultat:\n" + "```js\n" + math.evaluate(calcul) + "```")
          .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/211/481/1322884994202.jpg")
          .setTimestamp()
          .setFooter('Bot intelligent par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
        message.channel.send(exampleEmbed)
      }
      catch (banane) {
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor("#e00000")
          .setTitle("<:SadCirno:719126599014023188> Erreur...")
          .setDescription("Vérifier que ce que vous avez taper est un calcul.\n```js\n" + calcul2 + "```")
          .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/752/096/baf.jpg")
          .setTimestamp()
          .setFooter('Bot qui se fait mal comprendre par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
        message.channel.send(exampleEmbed)
      }
    }
  }

  if (message.content.startsWith(prefix + "poll")) {
    const options = [
      '',
      '🇦',
      '🇧',
      '🇨',
      '🇩',
      '🇪',
      '🇫',
      '🇬',
      '🇭',
      '🇮',
      '🇯',
      '🇰',
      '🇱',
      '🇲',
      '🇳',
      '🇴',
      '🇵',
      '🇶',
      '🇷',
      '🇸',
      '🇹',
      '🇺',
      '🇻',
      '🇼',
      '🇽',
      '🇾',
      '🇿',
    ]

    const options2 = [
      '🇦',
      '🇧',
      '🇨',
      '🇩',
      '🇪',
      '🇫',
      '🇬',
      '🇭',
      '🇮',
      '🇯',
      '🇰',
      '🇱',
      '🇲',
      '🇳',
      '🇴',
      '🇵',
      '🇶',
      '🇷',
      '🇸',
      '🇹',
      '🇺',
      '🇻',
      '🇼',
      '🇽',
      '🇾',
      '🇿',
    ]

    const args = message.content.trim().split(/ +/g)
    const choices = []
    const regex = /(["])((?:\\\1|\1\1|(?!\1).)*)\1/g
    let match
    while (match = regex.exec(args.join(' '))) choices.push(match[2])

    let content = []
    for (let i = 1; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`)
    content = content.join('\n')

    if (!args[0] || !args[2] || !args[3] || args[22]) {
      var embed = new Discord.MessageEmbed()
        .setColor('#e00000')
        .setTitle("<:SadCirno:719126599014023188> Erreur...")
        .setDescription("Veuillez entrez correctement la commande et/ou de mettre minimum une question et 2 proposition ou de ne pas mettre plus de 20 propositions !\n\n`>poll \"Question\" \"Proposition 1\" \"Proposition 2\"`")
        .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/752/096/baf.jpg")
        .setTimestamp()
        .setFooter('Bot erreur par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(embed)

    } else {

      var titreclean = args[1].replace(/"/g, "").replace(/--/g, " ")
      var embed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle(titreclean)
        .setDescription(content)
        //.setThumbnail("https://static-cdn.jtvnw.net/emoticons/v1/300066179/3.0")
        .setTimestamp()
        .setFooter('Bot sondage par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(embed)

        .then(async m => {
          for (let i = 1; i < choices.length; i++) await m.react(options[i])
        })

    }

  }

  if (message.content === prefix + "arcadebuy1") {
    if (!datas3[message.author.id]) {
      datas3[message.author.id] = {
        arcadecoin: 10
      }
      fs.writeFileSync("./datas3.json", JSON.stringify(datas3))
    }
    var user3 = datas3[message.author.id]

    if (user3.arcadecoin === 10) {
      message.channel.send("HOORAY")
      user3.arcadecoin = -10
      fs.writeFileSync("./datas3.json", JSON.stringify(datas3))
      new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Merci de votre achat !')
        .setURL('')
        .setAuthor('')
        .setDescription("Description des articles: \n \n-1 ticket classique => 10 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'argent => 30 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'émeraude => 50 <:ArcadeCoin:718169908478869514> \n \n-1 ticket Cirno => 99 <:ArcadeCoin:718169908478869514>")
        .setThumbnail('https://nsa40.casimages.com/img/2020/06/08/mini_200608105821414449.png')
        .setImage('https://zupimages.net/up/20/25/q6al.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)

      if (!tcdatas[message.author.id]) {
        tcdatas[message.author.id] = {
          ticketclassique: 0
        }
        fs.writeFileSync("./tcdatas.json", JSON.stringify(tcdatas))
      }
      var user = tcdatas[message.author.id]
      user.ticketclassique = 1
      fs.writeFileSync("./tcdatas.json", JSON.stringify(tcdatas))
    } else {
      new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle("Vous n'avez pas assez d'Arcade coins !")
        .setURL('')
        .setAuthor('')
        .setDescription("Description des articles: \n \n-1 ticket classique => 10 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'argent => 30 <:ArcadeCoin:718169908478869514> \n \n-1 ticket d'émeraude => 50 <:ArcadeCoin:718169908478869514> \n \n-1 ticket Cirno => 99 <:ArcadeCoin:718169908478869514>")
        .setThumbnail('https://nsa40.casimages.com/img/2020/06/08/mini_200608105821414449.png')
        .setImage('https://zupimages.net/up/20/25/f8e2.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }
  }

  if (message.content.startsWith(prefix + 'clear')) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      const args = message.content.split(' ').slice(1)
      const amount = args.join(' ')

      if (!amount) return message.channel.send('Veuillez donnez un nombre de messages à supprimés !').then(message => { message.delete({ timeout: 1200 }) })
      if (isNaN(amount)) return message.channel.send("Désolé mais j'ai une préférence aux chiffres qu'aux lettres !").then(message => { message.delete({ timeout: 1200 }) })
      if (amount > 100) return message.channel.send('Je ne peut pas supprimés plus de 100 messages !').then(message => { message.delete({ timeout: 1200 }) })

      message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)
        message.channel.send("J'ai supprimés " + amount + " messages avec mes pouvoirs de glaces !").then(message => { message.delete({ timeout: 1200 }) })
      })
    } else {
      message.channel.send("Tu n'as pas la permission !")
    }
  }

  if (message.content.startsWith(prefix + 'emotelist')) {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("")
      .setDescription("Vous pouvez utiliser ces émojis et polices avec les commandes >say, >sayembed et >send et même avec la SCP sandbox sauf que vous aurez pas accés aux émojis. L'utilisation des émojis est simple, si vous voulez <:CirnoOwO:719126796796297248> vous aurez qu'à mettre [CirnoOwO] à l'endroit voulu est le bot le convertira tout seul ! Idem pour les polices.\n\n[9] => <:9Power:719126568709914644>\n[HappyCirno] => <:HappyCirno:719132196732010518>\n[CirnoDab] => <:CirnoDab:712309643673862156>\n[CirnoOuais] => <:CirnoOuais:719644249683132477>\n[CirnoWaw] => <:CirnoWaw:719132144278175755>\n[CirnoFealGreat] => <:CirnoKwaa:719128005133205554>\n[CirnoHeHe] => <:CirnoHehe:711279721123414087>\n[CirnoYeah] => <:CirnoYeah:719126616722112513>\n[CirnoIDK] => <:CirnoIDK:719128118639460382>\n[CirnoKwa] => <:CirnoKwa:719126616743084084>\n[CirnoQuoi] => <:CirnoQuoi:719131740769091606>\n[CirnoHein] => <:CirnoHein:714415602332073984>\n[CirnoHmm] =><:CirnoHmm:719131587815538693>\n[CirnoGasp] => <:CirnoGasp:719640958974820352>\n[CirnoPLS] => <:CirnoPLS:719131678819483731>\n[SadCirno] => <:SadCirno:719126599014023188>\n[CirnoYes] => <:CirnoYes:719123594587799562>\n[CirnoNo] => <:CirnoNo:719126598481084417>\n[CirnoNan] => <:CirnoNan:719131519570149376>\n[CirnoOwO] => <:CirnoOwO:719126796796297248>\n[CirnoOK] => <:CirnoOk:715607626968465418>\n[CirnoEatPopcorns] => <:CirnoEatPopcorns:719132301635616848>")
      .setThumbnail("https://cdn.discordapp.com/emojis/719126796796297248.png?v=1")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + 'send')) {
    try {

      var scooldowns = JSON.parse(fs.readFileSync("./scooldowns.json").toString())
      if (!scooldowns[message.author.id]) {
        scooldowns[message.author.id] = {
          scooldown: 0
        }
        fs.writeFileSync("./scooldowns.json", JSON.stringify(scooldowns))
      }
      var user = scooldowns[message.author.id]
      var tempsRestant = (24 * 60 * 60 * 1000) - (Date.now() - user.scooldown)
      var heures = Math.floor(tempsRestant / (60 * 60 * 1000))
      var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000))
      var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
      if (Date.now() - user.scooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

        user.scooldown = Date.now()
        fs.writeFileSync("./scooldowns.json", JSON.stringify(scooldowns))
        const array = message.content.substr(6).split(',,')
        message.delete()
        var auteur = message.mentions.users()
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor("#0098d9")
          .setTitle(array[0])
          .setDescription(array[1].replace("[Obsidia]", "<:Obsidia:722923154619498556>").replace("[Banane]", 'https://www.youtube.com/watch?v=3r7mIB3Rhw4').replace("[Hasuko]", "(╯°□°）╯").replace("[Ninjdai]", ":rooster:").replace("[MagicTendo]", "<:MagicTendo:722867619560161340>").replace("[Troll]", "<:Troll:714458036667678726>").replace("[Cirno]", "<:CirnoDank:719640618388684901>").replace("[Coolux]", "```　    ∧,,∧\n　 (；・ω・）　　,\n　 /　ｏ={=}ｏ , ', ´\n､､しー-Ｊミ(.@)ｗｗｗｗｗｗｗｗｗｗｗ```").replace("[XD]", "<:XD:722879901421797386>").replace("[9]", "<:9Power:719126568709914644>").replace("[HappyCirno]", "<:HappyCirno:719132196732010518>").replace("[CirnoDab]", "<:CirnoDab:712309643673862156>").replace("[CirnoOuais]", "<:CirnoOuais:719644249683132477>").replace("[CirnoWaw]", "<:CirnoWaw:719132144278175755>").replace("[CirnoFealGreat]", "<:CirnoKwaa:719128005133205554>").replace("[CirnoHeHe]", "<:CirnoHehe:711279721123414087>").replace("[CirnoYeah]", "<:CirnoYeah:719126616722112513>").replace("[CirnoIDK]", "<:CirnoIDK:719128118639460382>").replace("[CirnoKwa]", "<:CirnoKwa:719126616743084084>").replace("[CirnoQuoi]", "<:CirnoQuoi:719131740769091606>").replace("[CirnoHein]", "<:CirnoHein:714415602332073984>").replace("[CirnoHmm]", "<:CirnoHmm:719131587815538693>").replace("[CirnoGasp]", "<:CirnoGasp:719640958974820352>").replace("[CirnoPLS]", "<:CirnoPLS:719131678819483731>").replace("[SadCirno]", "<:SadCirno:719126599014023188>").replace("[CirnoYes]", "<:CirnoYes:719123594587799562>").replace("[CirnoNo]", "<:CirnoNo:719126598481084417>").replace("[CirnoNan]", "<:CirnoNan:719131519570149376>").replace("[CirnoOwO]", "<:CirnoOwO:719126796796297248>").replace("[CirnoOK]", "<:CirnoOk:715607626968465418>").replace("[CirnoEatPopcorns]", "<:CirnoEatPopcorns:719132301635616848>").replace("[CirnoPadoru]", "<:CirnoPadoruPadoru:719123752775843920>").replace("[AquaThumbsUp]", "\<:AquaThumbsUp:722923082020552884>").replace("[YuzukoKwa]", "\<:YuzukoKwa:722923193198968844>").replace("[KannaYes]", "\<:KannaYes:722923081957376030>").replace("[KannaHmm]", "\<:KannaHmm:722923082192388146>").replace("[KannaDrink]", "\<:KannaDrink:722923082599235655>"))
          .setThumbnail(array[2])
          .setTimestamp()
          .setFooter('Message de: ' + message.author.username, message.author.avatarURL())
        message.auteur.send(exampleEmbed)
      }
      else {
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor('#0098d9')
          .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
          .setURL()
          .setAuthor('')
          .setDescription('')
          .setImage('https://zupimages.net/up/20/22/6yt3.png')
          .setTimestamp()
          .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

        message.channel.send(exampleEmbed)
      }
    }
    catch (err) {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor("#e00000")
        .setTitle("<:SadCirno:719126599014023188> Erreur...")
        .setDescription("Veuillez mentionner un utilisateur ou/et définisez un titre ou/et une description minimum.")
        .setThumbnail("https://i.kym-cdn.com/photos/images/facebook/000/752/096/baf.jpg")
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }
  }

  if (message.content === prefix + "date") {
    var d = new Date()
    message.channel.send(d.toLocaleString())
  }

  if (message.content === prefix + "debug") {
    let { guild } = message
    guild.channels.cache.map(channel => console.log(channel.type == "text"))
  }

  if (message.content === prefix + "join") {
    if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join()
      message.channel.send('Connection réussie !')
    } else {
      message.reply("tu doit être dans un salon vocal d'abord !")
    }
  }

  if (message.content === prefix + "leave") {
    if (message.member.voice.channel) {
      const déconnection = message.member.voice.channel.leave()
      message.channel.send('Déconnection réussie !')
    } else {
      message.reply("tu doit être dans un salon vocal d'abord !")
    }
  }

  if (message.content.startsWith(prefix + "play")) {
    var musique = message.content.substr(6)
    message.channel.send(musique)
    var connection = message.member.voice.channel.join()
      .then(connection => {
        var musique = message.content.substr(6)
        var imgyt = message.content.substr(38).replace(/ /g, "")
        var exampleEmbed = new Discord.MessageEmbed()
          .setColor('#0098d9')
          .setTitle('')
          .setURL('')
          .setAuthor('')
          .setTitle('Lecture en cours...')
          .setDescription("https://i.ytimg.com/vi/" + imgyt + "/hqdefault.jpg")
          .setThumbnail("https://img.youtube.com/vi/" + imgyt + "/maxresdefault.jpg")
          .setTimestamp()
          .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
        message.channel.send(exampleEmbed)
        //connection.play(ytdl("https://www.youtube.com/watch?v=lJL_kQrvDsU"))
        connection.play(ytdl(musique),)
      })
  }

  if (message.content === prefix + "radiolist") {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setDescription("__Listes des radios:__\n\n> **Jet Set Radio, Funky Fresh Beats from Tokyo-to.**\n> **Silvagunner**\n> **Id: 1**\n\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣")
      .setThumbnail('https://zupimages.net/up/20/28/y5aw.jpg')
      .addFields(
        { name: 'Crédits', value: 'Silvagunner: https://www.youtube.com/channel/UC9ecwl3FTG66jIKA9JRDtmg' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + "inforadio 1") {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#62ff00')
      .setTitle('Jet Set Radio')
      .setURL('https://www.youtube.com/channel/UC9ecwl3FTG66jIKA9JRDtmg')
      .setAuthor('')
      .setDescription("Liste des sons:\n\n> https://www.youtube.com/playlist?list=PLL0CQjrcN8D3CU6cV_Yacn6_c43GjD67V \n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣")
      .setThumbnail('https://zupimages.net/up/20/27/rovm.png')
      .addFields(
        { name: 'Crédits', value: 'https://www.youtube.com/watch?v=HdJDtq3gUuM' })
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + "setradio 1") {
    if (message.member.voice.channel) {
      var connection = message.member.voice.channel.join()
        .then(connection => {
          connection.play(ytdl("https://www.youtube.com/playlist?list=PLWoqre_Yk7NRir5LL4oONrgmows_UyIsX", { quality: 'highestaudio' }))
        })
    } else {
      message.reply("tu doit être dans un salon vocal d'abord !")
    }
  }

  if (message.content.startsWith(prefix + "search")) {
    const recherchegoogle = "https://www.google.com/search?client=firefox-b-d&q=" + message.content.substr(8).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour rechercher " + message.content.substr(8) + " !")
      .setURL(recherchegoogle)
      .setImage("https://zupimages.net/up/20/41/oy4i.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "ytsearch")) {
    const rechercheyt = "https://www.youtube.com/results?search_query=" + message.content.substr(10).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour rechercher " + message.content.substr(10) + " !")
      .setURL(rechercheyt)
      .setImage("https://zupimages.net/up/20/41/x8rf.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "redditsearch")) {
    const recherchereddit = "https://www.reddit.com/search/?q=" + message.content.substr(14).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour rechercher " + message.content.substr(14) + " !")
      .setURL(recherchereddit)
      .setImage("https://zupimages.net/up/20/41/x8rf.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "twitchsearch")) {
    const recherchetwitch = "https://www.twitch.tv/search?term=" + message.content.substr(14).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour rechercher " + message.content.substr(14) + " !")
      .setURL(recherchetwitch)
      .setImage("https://zupimages.net/up/20/41/x8rf.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "githubsearch")) {
    const recherchegithub = "https://github.com/search?q=" + message.content.substr(14).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour rechercher " + message.content.substr(14) + " !")
      .setURL(recherchegithub)
      .setImage("https://zupimages.net/up/20/41/x8rf.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "translate")) {
    const translate = "https://translate.google.fr/?hl=fr#view=home&op=translate&sl=auto&tl=fr&text=" + message.content.substr(11).replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+").replace(" ", "+")
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Cliquez ici pour avoir la traduction de " + message.content.substr(11) + " !")
      .setURL(translate)
      .setImage("https://zupimages.net/up/20/41/kww3.png")
      .setTimestamp()
      .setFooter('Bot polyglotte par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(prefix + "scpsandbox")) {
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0098d9")
      .setTitle("Bienvenue sur la SCP sandbox !")
      .setDescription("Le principe est le même que sur le site original et vous n'avez pas besoin de compte ou d'être membre pour vous inscire à la SCP sandbox. Avant que vous accédez à la sandbox, veuillez prendre conscience de ces règles d'écriture de rapport:\n\n-Pas d'insulte ou de vulgarité,\n\n-Pas d'image choquante (nudité, gore (je sais, certains SCP ont des images flippantes mais il y a des limites), violence, etc...),\n\n-Ne faite pas votre pub dans le rapport,\n\n-Votre rapport doit être sérieux (sauf pour un rapport SCP-J) avec le minimum de fautes d'ortographe (si vous en faites ce n'est pas grave je vous corrigerais ||enfin plutôt Word et Ninjdai **ahem**||),\n\n-Les rapports doive avoir minimum le objet # (le nom du SCP, SCP-333-C par exemple), la classe (sûre, euclide, keter, apollyon, thaumiel ou neutralis) et une description, les procédures de confinemment spécial, addendum, notes, etc... ne sont pas obligatoires,\n\n\nPour que votre rapport soit pubier vous devez me l'envoyer avec la commande >scpsend, si votre SCP est trop gros, prenez un/des captrure(s) d'écran du rapport, héberger l'/les images et envoyer le/les lien(s) ou vous pouvez héberger du texte et m'envoyer le lien. Ensuite je vous enverrez un message sur Cirno mail pour donner mon avis et ce qu'il y à améliorer ou si tous est bon, votre autorisation de publication. Si vous ne respectez pas les règles (surtout les 3 premières) vous serez en blacklist, c'est à dire que vous aurez plus accés à la sandbox.\n\nRappel: Un SCP n'est pas obliger d'être horrifique et vouloir tuer.\n\nPour accéder à la sandbox réécrivez la commande >scpsandbox.")
      .setThumbnail("https://zupimages.net/up/20/26/6awu.png")
      .setImage("https://zupimages.net/up/20/26/kx6v.png")
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content === prefix + "hack") {
    message.channel.send('<a:Loading:722107401892921446> Accés à la base de données...').then(msg => { msg.delete({ timeout: 1000 }) })

    setTimeout(() => {
      message.channel.send("<a:Loading:722107401892921446> Criptage des données...").then(msg => { msg.delete({ timeout: 10000 }) })
    }, 1050)

    setTimeout(() => {
      message.channel.send("<a:Loading:722107401892921446> Hack du bot en cours...").then(msg => { msg.delete({ timeout: 15000 }) })
    }, 10050)

    setTimeout(() => {
      message.channel.send("Action interrompue, code erreur: 403.")
    }, 15050)
  }

  if (message.content === prefix + "setbakabutton") {
    //var numberreactionclicked = 0
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Baka button.')
      .setURL('')
      .setAuthor('')
      .setDescription('Nombre de fois que le baka button a été appuyé:\n\n> ')
      .setThumbnail('https://cdn.frankerfacez.com/emoticon/28726/2')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed).then((sentMessage) => sentMessage.react("726505645322403931"))
  }

  if (message.content.startsWith(prefix + "emojiid")) {
    if (message.content.startsWith(prefix + "emojiid <:")) {
      var emoji = message.content.substr(8).replace(/ /g, "").replace(/  /g, "").replace(/   /g, "")
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('')
        .setURL('')
        .setAuthor('')
        .setDescription(emoji + " => **\\" + emoji + "**")
        .setThumbnail('')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    } else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('')
        .setURL('')
        .setAuthor('')
        .setDescription("Ce que tu as envoyer n'est pas un émoji personnalisé, baka !")
        .setThumbnail('')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
      message.channel.send(exampleEmbed)
    }
  }

  if (message.content === "test") {
    var min = Math.ceil(1)
    var max = Math.floor(1)
    console.log(Math.floor(Math.random() * (max - min)) + min)
  }

  if (message.content === prefix + 'frog') {

    if (!frogdatas[message.author.id]) {
      frogdatas[message.author.id] = {
        frogs: 0
      }
      fs.writeFileSync("./frogdatas.json", JSON.stringify(frogdatas))
    }
    var user = frogdatas[message.author.id]

    var frog = Math.floor(Math.random() * (10 - 1) + 1)
    user.frogs = user.frogs + frog
    fs.writeFileSync("./frogdatas.json", JSON.stringify(frogdatas))

    var fcooldowns = JSON.parse(fs.readFileSync("./fcooldowns.json").toString())
    if (!fcooldowns[message.author.id]) {
      fcooldowns[message.author.id] = {
        fcooldown: 0
      }
      fs.writeFileSync("./fcooldowns.json", JSON.stringify(fcooldowns))
    }
    var user = fcooldowns[message.author.id]
    var tempsRestant = (48 * 60 * 60 * 1000) - (Date.now() - user.fcooldown)
    var heures = Math.floor(tempsRestant / (60 * 60 * 1000))
    var minutes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000)) / (60 * 1000))
    var secondes = Math.floor((tempsRestant - (heures * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    if (Date.now() - user.fcooldown >= 86400000) { //86400000 ou 24 * 60 * 60 * 1000 = 24H

      user.fcooldown = Date.now()
      fs.writeFileSync("./fcooldowns.json", JSON.stringify(fcooldowns))
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('')
        .setDescription("Hoorray !\nTu as congeler " + frog + " <:Frog:734104312401362976> !\nEt Suwako n'a absolument rien vu !")
        .setThumbnail('https://zupimages.net/up/20/29/t9pu.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)
    }
    else {
      var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0098d9')
        .setTitle('Attends encore ' + `${heures}h ${minutes}min ${secondes}s` + ' !')
        .setURL()
        .setAuthor('')
        .setDescription('')
        .setImage('https://zupimages.net/up/20/22/6yt3.png')
        .setTimestamp()
        .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')

      message.channel.send(exampleEmbed)

    }
  }

  /*if (message.webhookID) {
    message.channel.send(client.channels.resolve("720566010431930388").send(webhook.content))
  }*/

  if (message.author.id === '610493430325313549' && message.content === prefix + 'stop') {
    process.exit()
  }

  if (message.content.startsWith("<@709804810668343448>") || message.content.startsWith("<@&711679916370034759>")) {
    message.channel.send("Vwiii~~♪ ? Mon préfix est `" + prefix + "` !")
  }

  if (message.content === prefix + "analytiques") {
    var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())
    var cbcoins = datas.coin
    var exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0098d9')
      .setTitle('Informations sur le bot:')
      .setURL('')
      .setAuthor('')
      .setDescription("")
      .addFields(
        { name: '__Serveurs:__', value: client.guilds.cache.size + ' serveurs.', inline: true },
        { name: '__Utilisateurs:__', value: userdatas.length + '.', inline: true },
        { name: '__Mémoire utilisée:__', value: ram + " Mo.", inline: true },
        { name: '__Nobres totaux de Card Battle Coins:__', value: cbcoins, inline: true },
      )
      .setThumbnail('https://zupimages.net/up/20/22/hfzq.png')
      .setTimestamp()
      .setFooter('Bot Cirno par MagicTendo', 'https://zupimages.net/up/20/21/kilo.png')
    message.channel.send(exampleEmbed)
  }

  if (message.content.startsWith(">")) {
    if (message.author.bot) return

    if (message.content.startsWith("> ")) {
    } else {
      message.delete()
      var userdatas = JSON.parse(fs.readFileSync("./userdatas.json").toString())
      if (userdatas.includes(message.author.id)) return
      userdatas.push(message.author.id)
      fs.writeFileSync("./userdatas.json", JSON.stringify(userdatas))
    }
  }

})

client.on('messageReactionAdd', (reaction, user) => {

  let message = reaction.message, emoji = reaction.emoji

  if (reaction.emoji.name === "🐸") {
    message.channel.send("OwO")
  }

  if (reaction.emoji.name === "✅") {
    if (message.id === messagepingid) {
      message.channel.send("YAAAAAAAAAAAAAAAAAAAY !!!!!!!!")

    }
  }

})

client.login(token)
