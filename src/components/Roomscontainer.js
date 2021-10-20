import React from "react";
import RoomList from "./RoomList";
import Roomsfilter from "./Roomsfilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function Roomcontainer({ context }) {
  const  {loading, sortedRooms, rooms}  = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Roomsfilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
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
