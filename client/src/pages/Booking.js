import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
function Booking() {
  const [selectedDate,setSelectedDate] = useState(null);

  return (
    <div>
     <div>Date and time Selector</div>
      <DatePicker 
     inline
      selected={selectedDate}
      onChange={date =>setSelectedDate(date)} 
      dateFormat="dd/MM/yyyy ;hh:mm" 
      showTimeSelect
        className="border-2 rounded-full"
      />
    </div>
  );
}

export default Booking