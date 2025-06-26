export function getBookings() {
  const stored = localStorage.getItem('bookings');
  return stored ? JSON.parse(stored) : [];
}

export function saveBookings(bookings) {
  localStorage.setItem('bookings', JSON.stringify(bookings));
}
