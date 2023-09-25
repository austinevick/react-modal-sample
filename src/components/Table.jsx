import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

export const Table = () => {
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

                    <tr>
                        <td>Home</td>
                        <td>This is the main page</td>
                        <td><span className='label label-live'>Live</span></td>
                        <td>
                            <span className='actions'>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Home</td>
                        <td>This is the main page Lorem ipsum dolor sit amet</td>
                        <td><span className='label label-draft'>Draft</span></td>
                        <td>
                            <span className='actions'>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Home</td>
                        <td>This is the main page</td>
                        <td><span className='label label-error'>Draft</span></td>
                        <td>
                            <span className='actions'>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
