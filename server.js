const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

// handles 404 situations or routes that are not covered above
app.all('*', (req, res) => {
    res.status(404)
    // handle html requests that didn't get handled by expected routes
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    // handle json request that didn't get handled by expected routes
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found'})
    // handle all other exceptions
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))