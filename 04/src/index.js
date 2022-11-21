
const webService = require('./app');

webService.listen(12345, () => {
    console.log('Servidor está okay');
});