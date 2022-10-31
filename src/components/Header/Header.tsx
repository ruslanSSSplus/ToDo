import React from 'react';
import {Button} from '../Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
    todoCount: number;
    setAll: () => void;
    setOnlyActive: () => void;
    setOnlyDone: () => void;
    deleteAllDone: () => void;
    allActiveDone: number
}

export const Header: React.FC<HeaderProps> = ({todoCount, setAll, setOnlyActive, setOnlyDone, deleteAllDone, allActiveDone}) => (
    <div className={styles.header_container}>
        <h1 className={styles.header_title}>
            Todo list <b>{todoCount}</b> task(s)
        </h1>
        <span className={styles.buttons}>
             <Button color={allActiveDone === 1 ? 'active' : 'blue' } onClick={setAll}>
            All
          </Button>
        <Button color={allActiveDone === 2 ? 'active' : 'blue' } onClick={setOnlyActive}>
            Active
          </Button>
             <Button color={allActiveDone === 3 ? 'active' : 'blue' } onClick={setOnlyDone}>
            Done
          </Button>
            <Button color='red' onClick={deleteAllDone}>
            Delete All Done
          </Button>
      </span>

    </div>
);
