import React, { Component } from "react";
// import items from "./data";
import Client from './Contentful'


const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    braekfast: false,
    pets: false,
  };
  // getdata

getData = async () =>{
  try{
    let response = await Client.getEntries({
      content_type:"roombookingdata",
      order: "fields.price"
    })
    // getting external data from outer source 'response'
    let rooms = this.formatData(response.items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }
  catch (error){
    console.log(error)
  }
}





  componentDidMount() {
    this.getData()
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...rooms.map((item) => item.price));
    // let maxSize = Math.max(...rooms.map((item) => item.size));
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  // function that will hanle our filter related things

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
    // console.log(`This is type ${type}, this is name ${name}, this is value ${value}`);
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, braekfast, pets } =
      this.state;
    // all the rooms
    let tempRooms = [...rooms];
    //  Transform value
    capacity = parseInt(capacity)
    price = parseInt(price)
    // Filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // Filter by Price
    tempRooms = tempRooms.filter(room =>room.price <= price)
    // Filter by Size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <=maxSize)
    // Filter by breakfast
    if(braekfast){
      tempRooms = tempRooms.filter(room => room.braekfast === true)
    }
    // Filter by pet
    if(pets){
      tempRooms = tempRooms.filter(room => room.pets === true)
    }
    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

//creating consumer

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  // it will return another functon
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
