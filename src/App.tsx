import Close from './close'
import './index.css'
import Max from './max'

import Minimal from './minimal'
import WriteTR from './ter'
import Bash from './terminal'

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 className="text-3xl font-bold underline">
    //       Hello world!
    //     </h1>
    //   </header>
    // </div>
    <body className="bg-gray-900 min-h-screen">
      <header className="pt-4 px-4">
        <div className="bg-slate-600 h-14 flex items-center justify-between rounded-t-xl">
          <div className="flex-grow-0 relative h-full pl-2">
            <div className="w-48 h-4/5 bottom-0 absolute mt-2 rounded-t-2xl flex items-center pl-2 bg-slate-700">
              <Bash/>
            </div>
          </div>
              <div className="flex gap-2 pr-2">
              <Minimal/>
              <Max/>
              <Close/>
              </div>
        </div>
      </header>
      <section className="px-4">
        <div className='min-h-screen mt-0  pt-0 bg-slate-800 border-b border-x border-slate-900'>
          <div className='text-gray-200 pt-2 pl-1'>
            <span className='text-green-600'> >_  </span>
          </div>
        </div>
      </section>
    </body>
  )
}

export default App
