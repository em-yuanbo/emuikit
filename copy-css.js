var glob = require('glob');
var fs = require('fs');
var path = require('path');

glob('src/components/**/*.css',{},function(err,files){
  files.forEach(file=>{
    var dist = path.resolve('lib',file.replace(/^src\/components/,'./'));
    fs.createReadStream(file).pipe(fs.createWriteStream(dist));
  });
});
