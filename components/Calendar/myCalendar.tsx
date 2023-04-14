// Rendering a calendar component using react-datepicker:

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyCalendar({ selectedDate, onChange }) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      timeCaption="Time"
    />
  );
}
