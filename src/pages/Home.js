import React from 'react'
import Banner from '../components/Banner'
import Minibanner from '../components/Minibanner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return (
        <>
    <Banner>
        <Minibanner title="Luxuriou rooms" subtitle="Delux rooms starting at 30000" >
            <Link to='/rooms' className="btn-primary">
                Our Rooms
            </Link>
        </Minibanner>
    </Banner>
    <Services />
    <FeaturedRoom />
    </>
    )
    
}
