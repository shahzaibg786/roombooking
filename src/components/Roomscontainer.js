import React, {useState} from "react";
import RoomList from "./RoomList";
import Roomsfilter from "./Roomsfilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import { Pagination } from "./Pagination";


function Roomcontainer({ context }) {
  const  {loading, sortedRooms, rooms}  = context;

  const [currentPage, setCurrentPage] = useState(0)
  // const [roomsPerPage, setRoomsPerPage] = useState(4)
  const roomsPerPage = 8
//get current rooms
 const indexOfLastRoom = currentPage * roomsPerPage
//  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
// const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom)
//  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom)
const currentRooms = sortedRooms.slice(indexOfLastRoom, indexOfLastRoom + roomsPerPage)
console.log(currentRooms)

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Roomsfilter rooms={rooms} />
      {/* <RoomList rooms={sortedRooms} /> */}
      <RoomList rooms={currentRooms} />
      <Pagination roomsPerPage={roomsPerPage} setCurrentPage={setCurrentPage} totalRooms={rooms.length}/>
    </>
  );
}

export default withRoomConsumer(Roomcontainer);

// import React from "react";
// import RoomList from "./RoomList";
// import Roomsfilter from "./Roomsfilter";
// import {RoomConsumer} from "../context";
// import Loading from './Loading'

// export default function Roomscontainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         // destructuring from value
//         const [loading, rooms, sortedRooms] = value;
//         if(loading){
//             return <Loading />
//         }
//         return (
//           <div>
//             Hello from roomscontainer
//             <Roomsfilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
