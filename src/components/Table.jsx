import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

export const Table = ({ rows, handleDelete, handleEdit }) => {
    return (
        <div className="table-wrapper">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th className='expand'>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((items) => {
                        const statusText = items.status.charAt(0).toUpperCase() + items.status.slice(1);

                        return (
                            <tr key={items.id}>
                                <td>{items.page}</td>
                                <td>{items.description}</td>
                                <td><span className={`label label-${ items.status }`}>{statusText}</span></td>
                                <td>
                                    <span className='actions'>
                                        <IconButton onClick={() => handleDelete(items.id)}>
                                            <Delete />
                                        </IconButton>
                                        <IconButton onClick={() => handleEdit(items.id)}>
                                            <Edit />
                                        </IconButton>
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
