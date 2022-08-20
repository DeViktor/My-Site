import Close from './close'
import './index.css'
import Java from './java'
import Javascript from './javascript'
import Max from './max'

import Minimal from './minimal'
import Node from './node'
import Php from './php'
import Bash from './terminal'
import Typescript from './typescript'

function App() {

  return (
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
          <div className='pt-2 pl-1'>
            <div className='animate-write whitespace-nowrap overflow-hidden'>
            <h1 className='text-green-600'> <span className='animate-ping'> >_ </span> ~~ @DeViktor</h1>
              <div className='text-green-400'>
                <p className=''>Hello, My name is João Victor, I'm 22 years old, I've studied Software Development since 2016</p>
                <p>I've been through languages such as:</p>
                  <div className='flex gap-1'>
                  <Java/> <Javascript/> <Typescript/> <Node/> <Php/>
                  </div>
                  <div className='pt-4 pl-2'>
                    <div className='pl-2 border w-[30%] border-dashed border-2 border-green-600'>
                      <a href=""className='font-bold'>Connect With Metamask</a>
                      <div className='italic'>             
                        <p>in this little script I use the web page to go through </p> 
                        <p>the browser behind some etherium remnant </p>
                        <p> used by MetaMask Wallet</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default App
