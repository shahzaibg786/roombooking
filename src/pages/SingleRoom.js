import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Minibanner from "../components/Minibanner";
import StyledHero from "../components/StyledBanner";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No Such Rooms Available ...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    // array destructuring using rest operator
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          {/* <StyledHero  img={images[0] || defaultBcg }> */}
          {/* <Banner className="roomsHero" > */}
          <Minibanner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Minibanner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              // {images.map((item,index) =>{
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Information</h3>
              <h6>Price:${price}</h6>
              <h6>Size:${size} SQFT</h6>
              <h6>max capacity:{capacity > 1 ? `${capacity} people` : `${capacity} person`} SQFT</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "Free breakfast also included"}</h6>

            </article>
          </div>
        </section>

{/* extras section */}
<section className="room-extras">
    <h6>Extras</h6>
    <ul className="extras">
        {extras.map((item,index) =>{
            return <li key={index}> - {item}</li>
        } )}
    </ul>
</section>

      </>
    );
  }
}
