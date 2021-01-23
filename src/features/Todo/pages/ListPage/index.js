import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string'
import TodoList from '../../components/TodoList'
import productApi from '../../../../api/productApi'

import TodoForm from '../../components/TodoForm'
function ListPage() {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const initTodoList = [
        {
            id: 1,
            title: "EAT",
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];
    
    
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })
    useEffect(() => {
        const fetchProducts = async () => {
            const productLst = await productApi.getAll();
        }
        fetchProducts();
    }, []);
    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status || 'all');
    }, [location.search]);
    const handleTodoClick = (todo, idx) => {
        var newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status == 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        history.push({
            pathname: match.path,
            search: queryString.stringify({ status: 'all' }),
        });
        console.log(match);
    }
    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () => {
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id  : todoList.length +1,
            title : values.title,
            status : 'new'
        };
        const todolistClone =[...todoList,newTodo];
        setTodoList(todolistClone);

    }
    const renderTodoLst = todoList.filter(todo => filteredStatus === 'all' || filteredStatus == todo.status);
    return (
        <>
            <h1>TODO FORM</h1>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <div>
                <TodoList todoList={renderTodoLst} onTodoClick={handleTodoClick} />
                <div>
                    <button onClick={handleShowAllClick}>Show ALL</button>
                    <button onClick={handleShowCompletedClick}>Show Completed</button>
                    <button onClick={handleShowNewClick}>Show new</button>
                </div>
            </div>
        </>
    )
}
export default ListPage; 
