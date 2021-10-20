import React from 'react'
import Banner from '../components/Banner'
import Minibanner from '../components/Minibanner'
import { Link } from 'react-router-dom'
import Roomscontainer from '../components/Roomscontainer'


const Rooms = () => {
    return <>
    <Banner hero="roomsHero" >
        <Minibanner title='Our Rooms' subtitle = 'Best Lowest Price Rooms'>
            <Link to='/' className='btn-primary'>Return Home</Link>
        </Minibanner>
    </Banner>
    <Roomscontainer />
    </>
}

export default Rooms
