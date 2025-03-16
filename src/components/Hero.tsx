import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api";
import TodoCard from "./TodoCard";
import { useState } from "react";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient()

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos", {search}],
  });

  const {  mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    }
  });

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <div >
        <input className="bg-gray-500 rounded-md border-black text-white"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

      <button className="bg-blue rounded-b-md cursor-pointer"
        onClick={async () => {
          try {
            await addTodoMutation({ title });
            setTitle("");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Add Todo
      </button>
      </div>


      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Hero;
