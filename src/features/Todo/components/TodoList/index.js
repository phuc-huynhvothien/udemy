import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import '../TodoList/styles.scss'
TodoList.proptype = {
    todoList: PropTypes.array
};
TodoList.defaultProps = {
    todoList: [],
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        // if(!onTodoClick) return;
        onTodoClick(todo, index);
    }
    return (
        <ul className="todo-list">
            {todoList.map((item, index) => {
                return <li onClick={() => handleTodoClick(item, index)} className={classnames({ completed: item.status === "completed", 'todo-item': true })} key={item.id}>{item.title} </li>

            })}
        </ul>
    )
}
export default TodoList;