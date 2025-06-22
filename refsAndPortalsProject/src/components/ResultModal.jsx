import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ref, targetTime, remainingTime, onReset }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog ref={dialog} className="result-modal" onClose={onReset}>
            <h2> You {userLost ? 'Lost' : 'Won'}!</h2>
            <p>The time time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{(remainingTime/1000).toFixed(2)} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}