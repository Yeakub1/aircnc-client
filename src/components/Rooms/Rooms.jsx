import React, { useEffect, useState } from 'react';
import Container from '../Shard/Container/Container';
import Card from './Card';
import Loader from '../Shard/Loder/Loder';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Shard/Heading/Heading';

const Rooms = () => {
    const [room, setRoom] = useState([]);
  const [loding, setlogin] = useState(false);
   const [params, setParams] = useSearchParams();
  const category = params.get("category");
 
  
    useEffect(() => {
        setlogin(true);
        fetch('room.json')
            .then(res => res.json())
          .then(data => {
              if (category) {
                const filters = data.filter(room => room.category === category);
                setRoom(filters);
            }
              else {
                setRoom(data);
            }
                setlogin(false)
            })
    }, [category]);


if (loding) {
  return <Loader></Loader>;
}

    return (
      <Container>
      {room && room.length>0 ?   <div className="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {room.map((rooms, index) => (
            <Card key={index} rooms={rooms}></Card>
          ))}
        </div> : <div className='pt-12'>
          <Heading
              title={'No Room Avable the Category'}
              subtitle={'Please Select The Others Category'}
              center={true}
          ></Heading></div>}
      </Container>
    );
};

export default Rooms;