async function httprequest(req,res) {
	console.log("Real request")
}

const httpserver = http.createServer(httprequest);

const hostname = "0.0.0.0"
const httpport = 3000
httpserver.listen(httpport, hostname, () => {
  console.log(`Server running at http://${hostname}:${httpport}/`);
});


httpserver.on('connect', (req, cltSocket, head) => {
  console.log("Preconnect")
});