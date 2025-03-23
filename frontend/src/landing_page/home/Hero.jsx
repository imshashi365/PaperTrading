import React from 'react'
import Hyperspeed from '@/components/ui/Hyperspeed';
import GradientText from '@/components/ui/GradientText'
import TrueFocus from '@/components/ui/TrueFocus';
import { Button } from "@/components/ui/button"
import '/src/app.css'
import Threads from '@/components/ui/Threads';
import SpotlightCard from '@/components/ui/SpotlightCard';
import ScrollVelocity from '@/components/ui/ScrollVelocity';


const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    const velocity = -100;
    return (

        <div className='w-full flex flex-col'>
            <div className="grid-background"></div>
            <div className="grid-background"></div>

            <div className=" flex flex-col justify-center items-center">

                <GradientText colors={["white", "#00e805", "#40ffaa", "#4079ff", "green"]} animationSpeed={3} showBorder={false}
                    className="custom-class mt-40 text-8xl font-bold text-center">
                    Paper Trade Without Risks
                </GradientText>

                <h3 className='text-white text-2xl mt-5'>Experience the Thrill of Live Trading with Zero Risk!</h3>
                <Button variant="outline" className='mt-5 h-10 w-60 p-5'>Start Paper Trade</Button>
                <div className='flex w-full justify-center mt-20'>
                    <div className='w-1/2 flex justify-center'>
                        <img src="/images/phone.png" className='w-2xl phonetrade' alt="" srcset="" />
                        <img src="/images/laptop.png" className='w-full phonetrade1' alt="" srcset="" />
                    </div>
                </div>


            </div>
            <div style={{ width: '100%', height: '500px', position: 'relative' }} className=''>
                <Threads
                    amplitude={2}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>

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

export default Hero