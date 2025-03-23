import React from 'react'

const Summary = () => {
  return (
    <div className='summary flex flex-col w-full'>
      <div className="user w-full">
        <h3 className='py-7 px-10 border-b-1 border-zinc-800'>Hi, User!</h3>
      </div>

      <div className="equityHolding flex w-full text-white px-10 py-10 justify-evenly">
        <div className="equity w-1/2">
          <p className='text-2xl font-bold'>Equity</p>
          <div className="inner-box p-4 mt-4 rounded-xl bg-zinc-900">
            <div className="data">
              <div className="margin text-zinc-400"><p>Margin Available</p></div>
              <div className="margin"><p className='text-4xl font-bold text-zinc-300'>Rs.33,700</p></div>
            </div>
            <div className="dataother flex flex-col mt-4 text-zinc-600">
              <div className="margin flex">
                <p className='mr-2'>Margin Used :</p>
                <p className='mr-2'>Rs.0</p>
              </div>
              <div className="margin flex">
                <p className='mr-2'>Opening balance :</p>
                <p className='mr-2'>Rs.3,700</p>
              </div>

            </div>
          </div>
        </div>

        <div className="equity w-1/2 ml-10">
          <p className='text-2xl font-bold'>Holding</p>
          <div className="inner-box p-4 mt-4 rounded-xl bg-zinc-900">
            <div className="data">
              <div className="margin text-zinc-400"><p>P&L</p></div>
              <div className="margin"><p className='text-4xl font-bold text-zinc-300'>Rs.1,450 <span className='text-xl'>+5.33%</span></p></div>
            </div>
            <div className="dataother flex flex-col mt-4 text-zinc-600">
              <div className="margin flex">
                <p className='mr-2'>Current Value :</p>
                <p className='mr-2'>Rs.34,555</p>
              </div>
              <div className="margin flex">
                <p className='mr-2'>Investment :</p>
                <p className='mr-2'>Rs.29,700</p>
              </div>

            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Summary