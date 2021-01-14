import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
// import './styles.scss'
TodoList.proptype = {
    todoList : PropTypes.array
};
TodoList.defaultProps = {
    todoList : [],
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo,index)=>{
        onTodoClick(todo,index);
    }
    console.log("E");
    return (
        <ul className="todo-list">
            {todoList.map((item,index) =>{
                <li onClick={()=> handleTodoClick(item,index)} className={classnames({completed:  item.status === "completed",'todo-item' : true })} key={item.id}> {item.title} - {item.status} </li>
            })}
        </ul>
    )
}
export default TodoList;