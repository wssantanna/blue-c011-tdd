

const TodoService = {

    create: async function(taskBody) {

        try {
            const require = await fetch('', {
                method: 'POST',
                body: JSON.stringify(taskBody) 
            });    
            const response = await require.json();
        
            return response;
        }
        catch {
            return '500-ServerError';
        }

    },

    deleteById: function(idTask) {

    },

    updateById: function(idTask) {

    },

    getAll() {

    }
}

export { TodoService }