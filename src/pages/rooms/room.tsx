import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Loading from '../../components/loading/Loading';
import routes from '../../config/names';
import { fetchHotelRooms, fetchOneRoom } from '../../redux/actions';
import { Room } from './rooms';
import './rooms.css';
interface RoomProps {
  props: string;
}

const SingleRoom: React.FC = () => {
  const combinedSlug: RoomProps['props'] = window.location.pathname;
  const slug: string = combinedSlug.replace('/rooms/', '');

  const dispatch: Dispatch<any> = useDispatch();
  const { rooms, room, roomsError, roomLoading } = useSelector((state: any) => state.rooms);

  const singleRoom = (): JSX.Element => {
    return (
      <div className="single-room-card">
        <img src={room && room.image} />
        <h2>{room && room.name}</h2>
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchHotelRooms());
    dispatch(fetchOneRoom(slug));
  }, [dispatch]);

  return (
    <div className="lists-container">
      <h2>
        Single Rooms <a href={routes.home}>Return Homepage</a> | <a href={routes.rooms}>Rooms</a>
      </h2>
      <div className="cards">{roomLoading ? <Loading /> : singleRoom()}</div>

      {/* <form data-test="single-room-card">
                <input name="name" data-test="name"/>
            </form> */}

      <h1>More Rooms</h1>
      <div className="cards">
        {rooms &&
          rooms.slice(1, 10).map((room: Room, i: number) => {
            return (
              <a href={`/rooms/${room.slug}`} className="card" key={i + 1}>
                <img src={room.image} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc">
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      alt="image"
                      src="https://res.cloudinary.com/igitego-hotels/image/upload/v1635238620/Logos/WhatsApp_Image_2021-10-23_at_07.45.02_fuimgr.jpg"
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{room.name}</h3>
                      <span className="card__status">{room.status}</span>
                    </div>
                  </div>
                  <p className="card__description">{room.description}</p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SingleRoom;
