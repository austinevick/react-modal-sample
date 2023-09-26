import { Button } from '@mui/material';
import './App.css';
import { Modal } from './components/Modal';
import { Table } from './components/Table';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import TransitionsModal from './components/MaterialModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const [rows, setRows] = useState([
    { id: nanoid(), page: 'Page 1', description: 'This is the first page', status: 'live' },
    { id: nanoid(), page: 'Page 2', description: 'This is the second page', status: 'draft' },
    { id: nanoid(), page: 'Page 3', description: 'This is the third page', status: 'error' }
  ]);
  const handleDelete = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };
  const handleSubmit = (newValue) => {
    setRows([...rows, newValue]);
  };

  const handleEdit = (index) => {
    setRowToEdit(index);
    setIsOpen(true);
  };

  return (
    <div className="App">
      <TransitionsModal />
      <Table handleDelete={handleDelete}
        handleEdit={handleEdit}
        rows={rows} />
      <Button onClick={() => setIsOpen(true)}>Add</Button>
      {isOpen && <Modal handleSubmit={handleSubmit}
        defaultValue={rowToEdit !== null && rows[rowToEdit]}
        closeModal={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
