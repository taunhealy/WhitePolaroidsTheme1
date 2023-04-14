function isDayUnavailable(events, date) {
    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
    for (const event of events) {
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);
      if (dayStart < eventEnd && dayEnd > eventStart) {
        return true;
      }
    }
    return false;
  }
  
  // Displaying availability:

  function AvailabilityMessage({ isAvailable }) {
    return (
      <p>
        {isAvailable
          ? 'This date and time range is available.'
          : 'This date and time range is not available.'}
      </p>
    );
  }
  