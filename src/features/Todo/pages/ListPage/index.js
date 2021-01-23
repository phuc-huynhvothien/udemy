import React,{useEffect, useState} from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string'
import TodoList from '../../components/TodoList'
import productApi from '../../../../api/productApi'
function ListPage() {
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
    const location = useLocation();
    const history = useHistory();
    const match  =useRouteMatch();
    const [todoList,setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search)
        return params.status ||  'all'
    })
    useEffect(()=>{
        const fetchProducts = async () =>{
            const productLst = await productApi.getAll();
            console.log(productLst)
        }
        fetchProducts();
    },[]);
    useEffect(()=>{
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status);
    },[location.search]);
    const handleTodoClick = (todo,idx) =>{
        var newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status == 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () =>{
        setFilteredStatus('all');
        history.push({
            pathname : match.path,
            search : queryString.stringify({status : 'complexxxxxted'}),
        });
        console.log(match);
    }
    const handleShowCompletedClick =()=>{
        setFilteredStatus('completed');
        const queryParams = {status : 'completed'};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick =()=>{
        setFilteredStatus('new');
        const queryParams = {status : 'new'};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams),
        });
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
export default ListPage; 
