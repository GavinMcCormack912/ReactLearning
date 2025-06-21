import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    let btnCaption = "Edit";
    function handleEditClick() {
        setIsEditing((wasEditing) => !wasEditing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = "Save";
    } else {
        btnCaption = "Edit";
    }
    return (
        <li className={isActive ? 'active' : null}>
            <span className="player">
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}