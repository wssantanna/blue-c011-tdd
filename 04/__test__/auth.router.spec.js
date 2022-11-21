
const webService = require('../src/app');

const request = require('supertest');

describe('Testando a rota de autenticação', () => {

   describe('Testando os status code', () => {

        it('DEVE retornar 200 QUANDO enviar credencial correta no corpo', () => {
            request(webService)
                .post('/auth')
                .send({ username: 'wssantanna', password: '1234'})
                .expect(200);
        });
    
        it('DEVE rornar 401 QUANDO enviar credencial incorreta no corpo', () => {
            request(webService)
                .post('/auth')
                .send({ username: 'wssantanna', password: '12345'})
                .expect(401);
        });

    });
/*
    describe('Testar o corpo do retorno', () => {

        it('DEVE retornar um corpo compatível com contrato QUANDO autenticado', () => {
            const bodyToken = {
                token: '',
                user: {
                    id: 1,
                    name: '',
                }
            }
    
            expect()
                .toBe(200);

            expect()
                .toEqual(bodyToken);
        });
        

    });
*/
});