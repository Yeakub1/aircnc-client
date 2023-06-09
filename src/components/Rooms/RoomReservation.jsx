import React from 'react';
import DatePicker from './Calender';
import Button from '../Button/Button';

const RoomReservation = () => {
    return (
        <div className='bg-white rounded-xl broder-[1px] broder-neutral-200 overflow-hidden'>
            <div className="flex flex-row items-center gap-4 p-4">
                <div className="text-2xl font-semibold ">300</div>
                <div className="text-neutral-600 font-light ">Night</div>
            </div>
            <hr />
            <DatePicker></DatePicker>
            <hr />
            <div className="p-4 ">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex flex-row justify-between items-center font-semibold text-lg">
                <div className="">total</div>
                <div className="">300</div>
            </div>
        </div>
    );
};

export default RoomReservation;