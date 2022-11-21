
const SignUpRepository = require('../src/infra/repositories/signup.repository');
const SignUpCase = require('../src/domain/signup.case');
const SignUpController = require('../src/application/signup.controller');

describe('Testar o cadastro de um usuário', () => {

    // Infrastructure
    describe('Testar conexão e operações do banco de dados', () =>{

        it('Deve retornar o usuário registrado quando a operação ocorrer com sucesso', async () => {

            const registeredUser = await SignUpRepository("Willian", "Sant Anna", "willian@blueedtech.com");

            expect(registeredUser)
                .toEqual({ firstname: "Willian", lastname: "Sant Anna", email: "willian@blueedtech.com" })
        });

        it('Deve disparar um error quando existir um registro com o mesmo e-mail', async () => {

            const registeredUser = await SignUpRepository("Ramon", "Jacaré", "javare@gmail.com");

            expect(registeredUser)
                .toBe('Usuário já possui um cadastro.');
        })

    });

    // Domain
    describe('Testar as regras de negócio', () => {

        it('Deve disparar um error quando o e-mail não for válido', async () => {

            const currentUser = await SignUpCase("Willian", "Sant Anna", "willianblueedtech.com.br")

            expect(currentUser)
                .toBe('O e-mail não é válido');
        });


    }); 

    // Application
    describe('Testar a apresentação dos dados', () => {

        it('Deve retornar 201 quando registrado', async () => {
            
            const userRegistered = await SignUpController({ body: { firstname: "Willian", lastname: "Sant Anna", email: "willian@blueedtech.com" } });
            
            expect(userRegistered.status)
                .toBe(201);
        });

        it('Deve registrar 409 quando existir outro usuário com o mesmo e-mail', async () => {
            const userRegistered = await SignUpController({ body: { firstname: "Ramon", lastname: "Jacaré", email: "javare@gmail.com" } });
            
            expect(userRegistered.status)
                .toBe(409);
        });

        it('Deve retornar 400 quando enviar um e-mail inválido', () => {
            expect()
            .toBe(400);
        });

        it('Deve retornar "Você já possui cadastro" quando existir outro registro com o mesmo e-mail', () => {
            expect()
                .toBe('Você já possui cadastro');
        });

    });

    // Interface

});