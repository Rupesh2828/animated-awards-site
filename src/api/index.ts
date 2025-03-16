import { Todo } from "../entities/Todo";

const todos = [
    {
        id:1,
        title:"HTML",
        completed:true
    },
    {
        id:2,
        title:"CSS",
        completed:true
    },
    {
        id:3,
        title:"Javascript",
        completed:false
    },
    {
        id:4,
        title:"React",
        completed:true
    },
]

export const fetchTodos = async(query = ""):Promise<Todo[]> => {
    await new Promise((resolve)=> setTimeout(resolve,1000));

    console.log("fecthed todo ");
    
    const filteredTodo = todos.filter((todo)=> todo.title.toLowerCase().includes(query.toLowerCase()))

    return [...filteredTodo]
}

export const addTodo = async(todo:Pick<Todo, "title">):Promise<Todo> => {
    await new Promise((resolve)=> setTimeout(resolve,1000));

    const newTodo = {
        id:todos.length +1,
        title:todo.title,
        completed:false
    }

    todos.push(newTodo)

    return newTodo
}