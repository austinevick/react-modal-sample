import { Button } from '@mui/material';
import React, { useState } from 'react';

export const Modal = ({ closeModal, handleSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        page: '',
        description: '',
        status: 'live'
    });

    const handleOnChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === 'modal-container') {
                closeModal();
            }
        }}>
            <div className="modal">
                <form >
                    <div className='form-group'>
                        <label htmlFor="page">Page</label>
                        <input name='page' type="page" value={formState.page}
                            onChange={handleOnChange} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="description">Description</label>
                        <textarea name='description' type="description"
                            value={formState.description} onChange={handleOnChange} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="status">Description</label>
                        <select name='status' type="status"
                            value={formState.status} onChange={handleOnChange}>
                            <option value="live">Live</option>
                            <option value="draft">Draft</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                    <Button onClick={() => {
                        if (!formState.description || !formState.page || !formState.status) {
                            return alert('Please enter all fields');
                        }
                        handleSubmit(formState);
                        closeModal();
                    }}>Submit</Button>
                </form>

            </div>
        </div>
    );
};
