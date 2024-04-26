import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prismadb'; 

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ todos }); 
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }); 
  }
}