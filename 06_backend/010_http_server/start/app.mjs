import * as http from "http";

const server = http.createServer(function (req, res) {
  console.log(req.url);
  // res.writeHead(302, { location: '/redirected' });
  res.writeHead(200, { "content-type": "text/html; charset=UTF-8" });

  if (req.url === "/") {
    res.write(
      `<a href="/result?param1=param1&param2=param2">Grt Method Link</a>`
    );
    res.end(`
        <form action="/result" method="POST">
          <input type="text" name="title">
          <input type="text" name="description">
          <button type="submit">Submit</button>
        </form>
      `);
  } else {
    if (req.method === "GET") {
      const queryString = req.url.split('?')[1]
      const params = new URLSearchParams(queryString);
      console.log(params.get('param1'))
    } else if (req.method === 'POST') {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      })
      req.on('end', () => {
        const params = new URLSearchParams(data);
        console.log(params)
      })
    }
    res.end(req.url);
  }
});

server.listen(8080);
