import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from './components/NavBar';
import TaskCard from './components/TaskCard';


function App() {
	const [taskTitle, setTaskTitle] = useState('');
    const [taskAbout, setTaskAbout] = useState('');

	const [taskList, setTaskList] = useState([
		{
			title: 'Demo Task',
			about: 'This is just a demonstrative display of how the task will look if you enter a task using the inputs given above. Click "done" if you\'re done or want to delete the task.',
		}
	]);

    const [taskIsEmpty, setIsEmpty] = useState(true);
	
	let taskComponentList = taskList.map(task =>  <TaskCard taskTitle={task.title} taskAbout={task.about}/>);
	let addedObj = {
		title: taskTitle,
		about: taskAbout
	}

	
	return (
		<div>
            <NavBar/>
            <h1>To-do List App</h1>
			<input type='text' id='task-title-bar' placeholder='Enter Task' value={taskTitle} onChange={
                (e) => {setTaskTitle(e.target.value); setIsEmpty(false)}

                }/>
                <br hidden={taskIsEmpty}/><br hidden={taskIsEmpty}/>
			<textarea type='text' hidden={taskIsEmpty} placeholder='Enter About' value={taskAbout} onChange={(e) => setTaskAbout(e.target.value)}/>
			<br/><br/>
            <button className='add-task' onClick={() => {
				setTaskList([...taskList, addedObj]);
				setTaskTitle('');
				setTaskAbout('');
                setIsEmpty(true);
				}} disabled={taskIsEmpty} >Add Task</button>
                <br/><br/>
                <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
			{taskComponentList}
            </div>

		</div>
	);
	
	

}



export default App;
