import Image from 'next/image'

function Card(){
  return (
    <div className='w-1/2 h-96 flex'>

      <div className="w-1/2 bg-black text-white flex justify-center items-center rounded-s-2xl">
        <p className="bg-cyan-400 w-32 h-8 flex justify-center items-center rounded-full">Hola</p>
      </div>

      <div className="w-1/2 bg-white flex justify-center items-center rounded-e-2xl">
      <p className="bg-cyan-400 w-32 h-8 flex justify-center items-center rounded-full text-white">Mundo</p>
      </div>

    </div>
  )
}


export default function Home() {
  return (
    <main className='w-full h-dvh flex justify-center items-center'>
      <Card />
    </main>
  )
}
