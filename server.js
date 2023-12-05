// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
import https from "https";

import cors_proxy from "cors-anywhere";
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ["cookie", "cookie2"],
    Agent: httpsAgent,
  })
  .listen(port, "localhost", function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
