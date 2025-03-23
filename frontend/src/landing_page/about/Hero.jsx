import React from 'react';
import LiquidChrome from '@/components/ui/LiquidChrome';

const Hero = () => {
    return (
        <div>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                <LiquidChrome
                    baseColor={[0.1, 0.1, 0.1]}
                    speed={1}
                    amplitude={0.6}
                    interactive={true}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '48px',
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 1,
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                }}>
                    <h1>About Us</h1>

                </div>
            </div>

            <div className="abouttext flex justify-center flex-col mt-10 px-100 mb-30">
                <div className="aboutheading text-center m-10">
                    <h2 className='text-4xl'>We pioneered the discount broking model in India.</h2>
                    <h2 className='text-4xl'>Now, we are breaking ground with our technology.</h2>
                </div>
                <div className="abouttext  flex justify-center flex-row border-t-1">
                    <div className="w-1/2 justify-center items-center  text-zinc-500 mt-10">
                        <p className='m-4 text-zinc-500 '>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier
                        </p>
                        <p className='m-4'>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p className='m-4'>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.

                        </p>
                    </div>
                    <div className="w-1/2 justify-center items-center  text-zinc-500 mt-10">
                        <p className='m-4 text-zinc-500'>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.                        </p>
                        <p className='m-4'>
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.                        </p>
                        <p className='m-4'>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
