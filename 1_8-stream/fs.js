fs = require('fs');
//fs.ReadStream -> stream.Readable
stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});
stream.on('readable', function () {
    data = stream.read();
    /*if (data != null) {
        console.log(data.toString());
    }*/
    console.log(data);
});
stream.on('end', function () {
    console.log("The End");
});
stream.on('error', function (err) {
    if (err.code == 'ENOENT') {
        console.log("File not found, send about it")
    } else {
        console.error(err);
    }
});