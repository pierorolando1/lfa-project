import { useState } from 'react'
import { useAutomata } from './automata'


const EVENTOS: { [key: string]: string } = {
  "encendido": 'e',
  "llenar_agua": 'l',
  "capuccino": 'c',
  "americano": 'a',
  "espreso": 'x',
  "te": 't',
  "manzanilla": 'h',
  "1_sol": '1',
  "2_sol": '2',
  'dar_vuelto': 'r',
  'bebida_lista': 'b',
  'monto_correcto': 'p',
  'bebida_recogida': 'f'
}

function App() {


  const [inputString, setInputString] = useState('')
  const [logs, setLogs] = useState<string[]>([])

  const [IsEncendida, setIsEncendida] = useState(false)

  const { data, isLoading  } = useAutomata(inputString)

  // i want the type of evento to be a key of EVENTOS
  const dispacher = (evento: 
    'encendido' | 
    'llenar_agua' | 
    'capuccino' | 
    'espreso' | 
    'te' | 
    'manzanilla' | 
    "americano" |
    '1_sol' | 
    '2_sol' | 
    'deja_de_ingresar' | 
    'dar_vuelto' | 
    'bebida_lista' | 
    'monto_correcto' | 
    'bebida_recogida'
  ) => {
    console.log(`Evento: ${evento}`)


    setInputString(s => s + EVENTOS[evento])

    setLogs(l => {
      return [...l, evento]
    })
  }


  
  return (
    <div className="flex flex-col h-screen bg-gray-950">
      <section className='bg-gray-900 h-3/5 w-full flex items-center justify-center flex-wrap'>
        {
          IsEncendida ?
          (
           <>

          <div className="w-2/3 h-full flex items-center justify-center">
            <button 
              style={{
                background: 'url(https://image.tuasaude.com/media/article/yp/dt/beneficios-del-te-verde_17350_l.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => dispacher('te')}
              className='bg-cover bg-center bg-no-repeat relative text-white p-8 py-14 rounded font-bold m-2 text-3xl'>
            Te S/4
            </button>

            <button 
              style={{
                background: 'url(https://www.recetasderechupete.com/wp-content/uploads/2022/01/Expresso-macchiato-1200x828.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => dispacher('espreso')}
              className='bg-cover bg-center bg-no-repeat relative text-white p-8 py-14 rounded font-bold m-2 text-3xl'>
            Espresso S/4
            </button>

            <button 
              style={{
                background: 'url(https://www.luxcafeclub.com/cdn/shop/articles/Americano_Coffee_1100x.png?v=1713411608)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => dispacher('americano')}
              className='bg-cover bg-center bg-no-repeat relative text-white p-8 py-14 rounded font-bold m-2 text-3xl'>
            Americano S/5
            </button>

            <button 
              style={{
                background: 'url(https://dairyfarmersofcanada.ca/sites/default/files/image_file_browser/conso_recipe/2022/Capuccino.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => dispacher('capuccino')}
              className='relative text-white p-8 py-14 rounded font-bold m-2 text-3xl'>
            Capucino S/6
            </button>

            <button 
              style={{
                background: 'url(https://image.tuasaude.com/media/article/yp/dt/beneficios-del-te-verde_17350_l.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => dispacher('manzanilla')}
              className='bg-cover bg-center bg-no-repeat relative text-white p-8 py-14 rounded font-bold m-2 text-3xl'>
            Manzanilla S/3
            </button>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-center bg-gray-800">

          <h1 className='text-white font-bold py-3'>Monedas</h1>
          <div className="flex">
            <button onClick={() => dispacher('1_sol')} className='hover:opacity-70 bg-white p-3 rounded-lg flex items-center justify-center'>
              <img className='max-w-20' src="https://img.asmedia.epimg.net/resizer/v2/GDO5RK2M25EZTNBUNWTKEGWUNE.png?auth=93e24b7e4b2e958d86bfafdffc4ca07b0efa14e062b16c11b2c85c5ae57241f2&width=1200&height=1200&smart=true" alt="" />
            </button>
            

            <button onClick={() => dispacher('2_sol')} className='ml-4 hover:opacity-70 bg-white p-3 rounded-lg flex items-center justify-center'>
              <img className='max-w-20' src="https://es.numista.com/catalogue/photos/perou/1704-original.jpg" alt="" />
            </button>
          </div>
          <div className="flex flex-col">
            <button onClick={() => {
              dispacher('monto_correcto')
            }} className='bg-blue-500 p-2 rounded-md'>Pagar</button>
            <button onClick={() => {
              dispacher('bebida_lista')
              dispacher('bebida_recogida')              
            }} className='bg-green-500 p-2 rounded-md my-2'>Recoger bebida</button>
            <button onClick={() => dispacher('dar_vuelto')} className='bg-green-500 p-2 rounded-md'>Dar vuelto</button>
          </div>



          </div>

           </> 
          ) : (
            <button 
            onClick={() => {
              setIsEncendida(true)
              dispacher('encendido')
              dispacher('llenar_agua')
            }}
            className='text-white py-2 px-4 bg-red-600/70 hover:bg-red-600 rounded'>
              Encender   
            </button>
          )
        }
      </section>

      <section className='flex h-2/5 overflow-scroll max-h-full'>

        <section className='border-gray-800 border-r-2 w-3/5 h-full p-3'>
         <h1 className='text-white/50 font-medium'>Eventos</h1>
          <ul className='text-white/80'>
            {
              logs.map((log, index) => (
                <li key={index}>{
                  `Event ${index} = { ${log}, symbol = ${EVENTOS[log]} }`
                }</li>
              ))
            }
          </ul>
        </section>

        <section className='w-2/5 p-3 overflow-auto'>
          <div className='flex justify-between w-full'>
            <h1 className='text-white/50 font-medium'>Input string</h1>
            <button className='text-white bg-blue-600 px-4 py-2 rounded-md'>{
              isLoading ? "Executing..." : "Execute"

            }</button>
          </div>

          <h1 className='text-white/90 text-2xl'>{inputString}</h1>

          <p className='text-white flex flex-col'>{

            data?.isFinalState ? 
            <span className='text-green-500 text-xl font-bold'>Final State</span> :
            <span className='text-red-500  text-xl  font-bold'>Not final</span>
          
          }{
            data?.states.map((state, index) => (
              <span key={index} className='text-white/80'>{state}</span>
            ))
          }</p>
    

        </section>

      </section>
    </div>
  )
}

export default App
