# Aula 01 - Introdução Test driven development

## Por que testar uma aplicação? 

- Corrigir bugs e conflitos - *Mauricio*;
- Testar o desempenho do meu código - *Jacaré (Ramon)*;
- Testar se funciona da forma esperada - *Henrique*;

O principal objetivo é manter a consistência e a qualidade da aplicação.

## O que é TDD?

- Criando "contratos" / "regras";
- Os "contratos" / "regras" serão desenvolvidos antes da implementação do recurso;

## Quais os benefícios?

- Garantir que a aplicação funcionar como esperado;
- Fica muito mais fácil implementar um recurso a partir de um teste;
- Fica muito mais fácil refatorar recursos do projeto;

## Como funciona o TDD nos seus fundamentos?

1. Escrevo o teste de uma unidade;

**Nota:** O teste vai falhar.  

2. Cria o código do recurso que deve respeitar o contrato do teste.

3. Uma vez implementado, refatoramos o recurso (se necessário). 

**Nota:** A refatoração deve passar no teste.

## Como funcionar TDD em projetos legados?

- Implemente teste para apresentar como um recurso deveria funcionar;

- Na criação de um novo recurso, cria-se um teste antes;

## Instalando/configurando o Jest

### Instalação

Inicialize o `npm` em seu projeto

```cmd
npm install --save-dev jest
```

### Configurando um teste

Adicione um script no arquivo `package.json` para rodar o comando `jest`.

```json
"scripts": {
    "test": "jest"
}
```

Execute o teste utilizando o comando `npm run test`.

### Criando um arquivo de teste 

Crie um arquivo com sufixo `.spec.js` ou `.test.js`;

Exemplo: `componente.spec.js` ou `component.test.js`.

**Nota:** Normalmente repetimos o nome do componente que desejamos testar antes do sufixo `.spec.js` / `.test.js`.
