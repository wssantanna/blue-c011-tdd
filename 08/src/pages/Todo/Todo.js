
import { useState } from 'react';

function Todo() {


    const [currentTask, setCurrentTask] = useState('');
    const [listTasks, setListTasks] = useState([]);

    const getTaskWhenInputChange = function(event) {
        const { value } = event.target;

        setCurrentTask(value);
    }

    const clearTaskInput = function() {
        setCurrentTask('');
    } 

    const addTaskOnList = function (event) {
        event.preventDefault();

        setListTasks([...listTasks, currentTask]);
        clearTaskInput();
    }

    return (
        <>
            <div className='container my-5'>

                <div className='row'>
                    <div className='col'>
                        <h1>My Todo list</h1>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col'>
                        <form onSubmit={addTaskOnList}>
                            <div className='d-flex gap-2'>
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Type a new task here'
                                    value={currentTask}
                                    onChange={getTaskWhenInputChange}
                                    id="inputTask"
                                />
                                <button
                                    className='btn btn-primary'
                                >
                                    +
                                </button>
                            </div>
                        </form>className=
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col'>
                        <ul className="list-group">
                            {listTasks.map((textTask, indexTask) => {

                                return (
                                    <li 
                                        key={indexTask}
                                        className="list-group-item"
                                    >
                                        <input 
                                            className="form-check-input me-3" 
                                            type="checkbox" 
                                            value="" 
                                            id={`taskId-${indexTask}`} 
                                        />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor={`taskId-${indexTask}`}
                                        >
                                            {textTask}
                                        </label>
                                    </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Todo;