const { createServer } =  require('http')

const port = process.env.PORT || 3000

function webServer(req, res) {
    res.end(`
        <h1>Now + GitHub </h1>

        <header>
            <img src="https://cdn-images-1.medium.com/max/1600/1*HwLQ0aoCqrkrRNFuIEQ_dQ.png" alt="ZEIT Ico" height="360" width="480">
        </header>
    `)
}

const server = createServer(webServer)

server.listen(port, err => {
    if(err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})