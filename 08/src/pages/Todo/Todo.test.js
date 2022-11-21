
import { render, screen } from '@testing-library/react'; 

import Todo from './Todo';

describe('Testar as funcionalidades do componente Todo', () => {

    it('Deve renderizar todos os recursos quando carregado', () => {
        
        // 1. Renderizo o componente
        render(<Todo />);

        // 2. Seleciono o recurso que desejo testar...
        const inputTask = document.getElementById('inputTask');

        // 3. Eu realizo o teste
        expect(input);

    });

    it('Deve adicionar uma tarefa na lista quando formulário for disparado', () => {

    });

    it('Deve impedir a adição de uma tarefa na lista quando o input não estiver preenchido', () => {

    });

    it('Deve remover o elemento da tarefa quando a tarefa ser deletada', () => {

    });

    it('Deve apresentar os valores atualizados quando o usuário editar e salvar a tarefa', () => {

    });

    it('Deve listar todas as tarefas quando todas as tarefas estiverem disponíveis', () => {
        
    });

    it('Deve apresentar uma mensagem quando não houver tarefas na lista', () => {

    });

    it('Deve apresentar um modal quando houver um problema de conexão com servidor', () => {

    });

});