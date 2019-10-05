const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require("cors");
const documents = {};

io.on("connection", socket => {
  let previousId;
  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  socket.on("getDoc", docId => {
    safeJoin(docId);
    socket.emit("document", documents[docId]);
  });

  socket.on("addDoc", doc => {
    documents[doc.id] = doc;
    safeJoin(doc.id);
    io.emit('documents', Object.keys(documents));
    socket.emit("document", doc);
  });

  socket.on("editDoc", doc => {
    documents[doc.id] = doc;
    socket.to(doc.id).emit("document", doc);
  });

  io.emit("documents", Object.keys(documents));
});

var corsOptions = {
  origin: 'http://myDomain:4200',
  credentials: true
};

app.use(cors(corsOptions));

http.listen(4444, 'myDomain', function () {
    console.log('Application worker ' + process.pid + ' started...');
  }
);
