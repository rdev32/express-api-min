import app from './app'

app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port http://localhost:${app.get('port')}`)
})
