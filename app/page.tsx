'use client'
import Image from "next/image";
import '../app/style.scss'
import edit from '../public/edit.svg'
import trash from '../public/trash.svg'
import check from '../public/check.svg'
import { useRef } from "react";

export default function Home() {
  const task = useRef<HTMLInputElement>(null)

  const submit = () => {
    console.log(task?.current?.value)
  }
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col ">
      <div>
        <input ref={task} type="text" className="lg:w-[600px] w-2/3 h-12 rounded-md pl-4 outline-none" placeholder="Create Todo" />
        <button onClick={() => submit()} className="w-[100px] rounded-md h-12 bg-gray-500 text-white ">Click</button>
      </div>
      <div className="flex flex-col gap-4 lg:w-[700px] p-2 w-2/3 h-fit min-h-56 bg-black bg-opacity-40 rounded-md mt-5">
        <div className="w-full h-32 rounded-md bg-white relative p-2 flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
          <h1 className="font-bold text-xl">Write Code</h1>
          <Image width={20} height={20} alt="edit" src={edit} className="cursor-pointer"/>
          </div>
          <Image width={20} height={20} alt="edit" src={trash} className="cursor-pointer"/>
            </div>
          <div className="flex justify-between items-center">
            <p>22.01.2024</p>
            <Image width={20} height={20} alt="edit" src={check} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </main>
  )
}
