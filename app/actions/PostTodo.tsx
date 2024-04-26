import { setTodos } from "@/lib/Todos/todoslice";

export const PostTodo = async ({ title, dispatch }: { title: any, dispatch : any }) => {

    const res = await fetch('/api/CreateTodo', { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        todo: title
      })
    })

    try {
        const res = await fetch('/api/GetTodos', { 
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch todos');
        }

        const data = await res.json();
        dispatch(setTodos(data.todos));
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }

  
    const data = await res.json();
  };