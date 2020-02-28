import React from "react";
import { Navbar } from "./layouts/Navbar";
import Welcome from '../assets/welcome.svg';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export const Home = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <div >
                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >

                    <img alt='Welcome message' className='mx-auto mt-40' height={400} width={400} src={Welcome} />
                    <div className='flex-row justify-center'>
                        <div className='text-center text-3xl font-bold'>We have been waiting for you!</div>
                        <div className='text-center'>
                            <i className='fas fa-angle-double-down text-orange-500 text-4xl'></i>
                        </div>
                        <div className='text-center my-6'>
                            <Link to='/auth' className='border-orange-500 my-2  border mx-auto text-orange-500 py-2 px-8 hover:bg-orange-500 hover:text-white w-12 rounded-md'>Login</Link>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}
