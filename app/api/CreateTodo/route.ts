import Prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: any) {
    try {
        const {todo} = await req.json()
        const createTodo = await Prisma.todo.create({
            data : {
                todo
            }
        })
        return NextResponse.json({message : "Created"})
    } catch (error) {
        return NextResponse.json({message : "error"})
    }
}