import React, { Component } from 'react'
import { FaCocktail,FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [{
            icon: <FaCocktail />,
            title: "Free Cocktails",
            description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot'
        },
        {
            icon: <FaHiking />,
            title: "Endless hiking",
            description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot'
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot'
        },
        {
            icon: <FaBeer />,
            title: "Free Beer",
            description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot'
        }
    ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
