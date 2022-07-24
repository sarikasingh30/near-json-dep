const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8000;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.use(middlewares);
server.use(router);

server.listen(port);
console.log("Listning",port)