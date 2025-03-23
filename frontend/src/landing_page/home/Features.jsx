import React from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard';
import ScrollVelocity from '@/components/ui/ScrollVelocity';
const Features = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};
const velocity = -100;
  return (
    <div>
      <div className="features flex w-full justify-center mt-10 flex-col items-center">
                <h1 className='text-white text-5xl mb-8'>Build up Your Investing Skills without Risks</h1>
                <div className="w-full flex justify-center items-center flex-row gap-5 p-30">
                    <SpotlightCard className="custom-spotlight-card flex justify-center items-center flex-col w-xl h-80" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <img src="/images/account.png" className='w-1/2' alt="" />
                        <h2 className='text-amber-50 text-3xl'>Register with MindTrade</h2>
                        <p className='text-zinc-500 text-center'>Receive $1M virtual money in your paper trade account.</p>
                    </SpotlightCard>

                    <SpotlightCard className="custom-spotlight-card flex justify-center items-center flex-col w-xl h-80" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <img src="/images/account.png" className='w-1/2' alt="" />
                        <h2 className='text-amber-50 text-3xl'>Start paper trade</h2>
                        <p className='text-zinc-500 text-center'>10000+ stocks, ETFs and options.</p>
                    </SpotlightCard>

                    <SpotlightCard className="custom-spotlight-card flex justify-center items-center flex-col w-xl h-80" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <img src="/images/account.png" className='w-1/2' alt="" />
                        <h2 className='text-amber-50 text-3xl'>Learn. Practice. Improve</h2>
                        <p className='text-zinc-500 text-center'>Explore 900+ educational resources, follow top users, and join paper trade competitions*.</p>
                    </SpotlightCard>
                </div>
            </div>

            <ScrollVelocity
                texts={['Paper Trade', 'No Risk']}
                velocity={velocity}
                className="custom-scroll-text"
            />
    </div>
  )
}

export default Features