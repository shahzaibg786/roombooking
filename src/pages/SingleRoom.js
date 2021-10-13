import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import Minibanner from '../components/Minibanner'

export default class SingleRoom extends Component {

    constructor(props){
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext
    componentDidMount(){

    }
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return (
            <div className="error">
                <h3>No Such Rooms Available ...</h3>
                <Link to="/rooms" className="btn-primary">
                Back to Rooms
                </Link>
            </div>
            )
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        return (
            <Banner className="roomsHero">
                <Minibanner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Minibanner>
            </Banner>
        )
    }
}
