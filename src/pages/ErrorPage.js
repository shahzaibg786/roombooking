import React from 'react'
import Banner from '../components/Banner'
import Minibanner from '../components/Minibanner'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return <Banner >
        <Minibanner title="404" subtitle="page not found">
            <Link to='/' className='btn-primary'>
                Return Home
            </Link>
        </Minibanner>
    </Banner>
}

