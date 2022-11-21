import { useState } from 'react';

function App() {


	const [currentTask, setCurrentTask] = useState('');
	const [listTasks, setListTasks] = useState([]);

	const getTaskWhenInputChange = function(event) {
		const { value } = event.target;

		setCurrentTask(value);
	}

	const clearTaskInput = function() {

		setCurrentTask('');
	}

	const addTaskOnList = function(event) {

		event.preventDefault();
		
		setListTasks([...listTasks, currentTask]);
		clearTaskInput();
	}

	return (
		<div className="container my-5">
			<div className="row">
				<div className="col">
					<form onSubmit={addTaskOnList}>
						<div className='d-flex gap-2'>

							<input 
								className="form-control" 
								data-testid='inputTask'
								type="text"
								placeholder="Type a new task here"
								value={currentTask}
								onChange={getTaskWhenInputChange}
							/>
							<button 
								className="btn btn-primary"
								type="submit"
							>
								+
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="row mt-3">
				<div className="col">
					
					<ul className="list-group">

						{
							listTasks.map((task, index) => {
								
							return (
								<li 
									className="list-group-item"
									key={`taskId-${index}`}
								>
										<input 
											className="form-check-input me-1" 
											type="checkbox" 
											value="" 
											id={`checkTask-${index}`}
										/>
										<label 
											className="form-check-label" 
											htmlFor={`checkTask-${index}`}
										>
											{task}
										</label>
									</li>
								);
							})
						}

					</ul>

				</div>
			</div>
		</div>
	);
}

export default App;
