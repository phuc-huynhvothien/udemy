import React,{useEffect, useState} from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string'
import TodoList from '../../components/TodoList'
import productApi from '../../../../api/productApi'
ListPageDemo.propTypes = {
    
};

function ListPageDemo(props) {
    const initTodoList =[
        {
            id: 1,
            title:"EAT",
            status : 'new'
        },
        {
            id: 2,
            title:'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status : 'new'
        }
    ];

    const location  = useLocation();
    const history  = useHistory();

    const [todoList,setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search)
        return params.status || 'all'
    });
    useEffect(()=>{
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status || 'all')
    },[location.search])

    const handleTodoClick = (status) =>{
    }
    const handleShowAllClick = () =>{
        const params = {status : 'all'};
        history.push({search : queryString.stringify(params)})


    }

    const handleShowCompletedClick = () =>{
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () =>{
        setFilteredStatus('new')
    }

    

    const renderTodoLst = todoList.filter(todo => filteredStatus === 'all' || filteredStatus ==  todo.status);
    return(
     <>
     {/* <h1>{filteredStatus}</h1> */}
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

export default ListPageDemo;