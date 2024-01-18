
import React, {useState} from 'react';

function TaskCard(props){
    const[hoverColor, setHoverColor] = useState('#191830');
    const [taskPresent, setTaskPresent] = useState(true);
    const closeButtonStyle = {
        background: 'white',
        borderRadius: '30% 70% 70% 30% / 30% 28% 72% 70%',
        color: '#ff5269',
        padding: '15px',
        marginTop: '0px',
        webkitBoxShadow:`0px 0px 111px 10px ${hoverColor}`,
        mozBoxShadow: `0px 0px 111px 10px ${hoverColor}`,
        boxShadow: `0px 0px 111px 10px ${hoverColor}`,
    };
    return taskPresent && (
        <>
        <div className='task-card'>
            <strong>{props.taskTitle.toUpperCase()}</strong>
            <br/><br/><br/><br/>
            <p>{props.taskAbout}</p>
            <button style={closeButtonStyle} key={props.taskTitle} onClick={() => setTaskPresent(false)} onMouseOver={() => setHoverColor('white')} onMouseOut={() => setHoverColor('#191830')}>Done</button>

        </div>
        <br/>
        </>
    );
}

export default TaskCard;