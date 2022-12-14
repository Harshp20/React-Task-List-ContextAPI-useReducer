import { useToDoDispatch, useToDoList } from '../../contexts/ToDoContext'
import { actions } from '../../actions/actions'
import React from 'react'
import './ToDo.scss'
import Button from 'react-bootstrap/Button'

export default function ToDo() {
    const toDoList = useToDoList()
    const toDoDispatch = useToDoDispatch()

    const handleEdit = (id: number) => {
        toDoDispatch({ type: actions.EDIT, payload: id })
    }

    return (
        <>
            {toDoList.map(todo => (
                <div
                    key={todo.id}
                    className={`todo ${todo.status ? 'complete' : 'incomplete'}`}
                    style={{ cursor: 'pointer', marginTop: '1rem', borderRadius: '0.25em' }}
                    onDoubleClick={() => toDoDispatch({ type: actions.TOGGLE, payload: todo.id })}
                >
                    <div className="todo" style={{ marginLeft: '0.3rem' }}>
                        <div><strong>{todo.title}</strong></div>
                        <Button size='sm' onClick={() => handleEdit(todo.id)}>
                            Edit
                        </Button>
                        <Button size='sm' variant='danger' onClick={() => toDoDispatch({ type: actions.DELETE, payload: todo.id })}>
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </>
    )
}