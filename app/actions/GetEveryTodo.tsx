import { setTodos } from "@/lib/Todos/todoslice";

const GetTodos = async (dispatch : any) => {
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
}

export default GetTodos;