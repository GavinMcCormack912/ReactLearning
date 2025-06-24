import Input from "./Input";
import { useState, useRef } from 'react';
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // ..... validation later
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">You forgot to enter a value for one of the inputs</p>
            <p className="text-stone-500 mb-4">Please provide a valid input for every value field</p>
        </Modal>
        <div className="w-[35rem]">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} labelText={"Title"} />
                <Input ref={description} labelText={"Description"} textarea />
                <Input type="date" ref={dueDate} labelText={"Due Date"}/>
            </div>
        </div>
    </>
}