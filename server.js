const express = require('express')
const log = require('simple-node-logger').createSimpleLogger('./fileUpload.log')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
var https = require('https')
/*var privateKey  = fs.readFileSync('/etc/letsencrypt/live/legalify.app/privkey.pem', 'utf-8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/legalify.app/cert.pem', 'utf-8');
var credentials = {key: privateKey, cert: certificate};*/
const app = express()
//app.use(express.static(path.join(__dirname, 'build')));
//Here we are configuring express to use body-parser as middle-ware.
app.use(
  express.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: '50mb',
  })
)
// app.use(express.static('data/img'));

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(bodyParser())

app.use(cors())

app.post('/uploadImage', async function (req, res) {
  var dirpath = './public/' + req.body.user + '/images/' + req.body.destination
  //
  await fs.promises.mkdir(dirpath, { recursive: true })
  let base64String = req.body.file // Not a real image
  // Remove header
  let base64Image = base64String.split(';base64,').pop()
  //console.log(req);
  const fileNames = fs.readdirSync(dirpath)

  new Promise((resolve, reject) => {
    var path = ''
    if (req.body.destination === 'perfil') {
      path =
        './public/' +
        req.body.user +
        '/images/' +
        req.body.destination +
        '/' +
        req.body.user +
        ' n0.png'
    }

    if (req.body.destination === 'DNI') {
      path =
        './public/' +
        req.body.user +
        '/images/' +
        req.body.destination +
        '/' +
        req.body.fileName +
        '.png'
    } else {
      path =
        './public/' +
        req.body.user +
        '/images/' +
        req.body.destination +
        '/' +
        req.body.user +
        ' n' +
        fileNames.length +
        '.png'
    }

    fs.writeFile(path, base64Image, { encoding: 'base64' }, function (err) {
      if (err) {
        log.info('Error: ', err)
        reject('Error: ', err)
      }

      resolve(res.send({ response: 'File created' }))
    })
  })
})

app.get('/getImages', async (req, res) => {
  // // console.log(req.query.user)
  // let user = req.query.user
  // let folder = req.query.folder
  const fs = require('fs')
  const dir = './public/' + req.query.user + '/images/' + req.query.folder + '/'
  try {
    var fileNames = fs.readdirSync(dir)
    res.json({ fileNames })
  } catch (error) {
    await fs.promises.mkdir(dir, { recursive: true })
  }
})

app.post('/uploadDocument', function (req, res) {
  // const mkdirp = require('mkdirp');
  // mkdirp('./public/octaviodimarco', function (err) {
  //       console.log(err)
  //
  //   });
  var dirpath = './public/octaviodimarco'
  fs.mkdirSync(dirpath, { recursive: true })

  let base64String = req.body.file.base64 // Not a real image

  // Remove header
  let base64Image = base64String.split(';base64,').pop()
  //console.log(req);

  new Promise((resolve, reject) => {
    let path =
      './public/images/documents/' + req.body.fileName + '.' + req.body.fileExt
    fs.writeFile(path, base64Image, { encoding: 'base64' }, function (err) {
      if (err) {
        log.info('Error: ', err)
        reject('Error: ', err)
      }

      resolve(res.send({ response: 'File created' }))
    })
  })
})

// static files
//app.use(express.static(path.resolve(__dirname, '/public')));
//app.get("/",function (req, res) {
//   res.sendFile(__dirname + "/public/index.html")
// });
var publicDir = require('path').join(__dirname, '/public')
app.use(express.static(publicDir))

//var httpsServer = https.createServer(credentials, app);
console.log('App running on port', process.env.PORT || 8080)
app.listen(process.env.PORT || 8080)
