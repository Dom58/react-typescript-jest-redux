import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Loading from '../../components/loading/Loading';
import routes from '../../config/names';
import { fetchHotelRooms } from '../../redux/actions';
import './rooms.css';

export interface Room {
  name: string;
  slug: string;
  status: string;
  price: number;
  currency: string;
  period: Date;
  adult: number;
  children: number;
  bed: number;
  location: string;
  image: string;
  roomCategory: string;
  description?: string;
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  imageFour?: string;
  roomNumber?: string;
}

export interface IRooms {
  rooms: {
    name: string;
    slug: string;
    status: string;
    price: number;
    currency: string;
    period: Date;
    adult: number;
    children: number;
    bed: number;
    location: string;
    image: string;
    roomCategory: string;
    description?: string;
    imageOne?: string;
    imageTwo?: string;
    imageThree?: string;
    imageFour?: string;
    roomNumber?: string;
    createdAt?: Date;
  }[];
}

const AllRooms: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { rooms, roomsError, roomLoading } = useSelector((state: any) => state.rooms);

  const allRooms = (): JSX.Element[] => {
    return (
      rooms &&
      rooms.map((room: Room, i: number) => {
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
                  src="https://res.cloudinary.com/igitego-hotels/image/upload/v1635238620/Logos/WhatsApp_Image_2021-10-23_at_07.45.02_fuimgr.jpg"
                  alt=""
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
      })
    );
  };

  useEffect(() => {
    dispatch(fetchHotelRooms());
  }, [dispatch]);

  return (
    <div className="lists-container">
      <h2>
        Rooms <a href={routes.home}>Return Homepage</a>
      </h2>
      <div className="cards">{roomLoading ? <Loading /> : allRooms()}</div>
    </div>
  );
};

export default AllRooms;
