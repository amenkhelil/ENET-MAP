"use client";

import React, { useState } from 'react';
import { ArrowLeft, Users, MapPin } from 'lucide-react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import styles from './page.module.css';

function Availibility() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false
      });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const days = getDaysInMonth(currentMonth);

  const selectedDateStr = formatDate(selectedDate);
  const filteredReservations: any[] = [];

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const year = currentMonth.getFullYear();

  return (
    <>
      <Navbar currentPath="/Availibilty"/>
      <div className={styles.roomReservationContainer}>
        <div className={styles.roomHeader}>
          <img src="/class.avif" alt="Room" />
          <div className={styles.roomHeaderContent}>
            <h1>C 22</h1>
            <div className={styles.roomTags}>
              <div className={styles.roomTag}>
                <Users size={16} />
                <span>Max Occupancy: 30</span>
              </div>
              <div className={styles.roomTag}>
                <MapPin size={16} />
                <span>Room Location: First floor</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.roomContent}>
          <div className={styles.roomCalendarSection}>
            <div className={styles.calendar}>
              <div className={styles.calendarHeader}>
                <h2>{monthName} {year}</h2>
                <div className={styles.calendarNav}>
                  <button onClick={prevMonth}><i className="bx bx-chevron-left"></i></button>
                  <button onClick={nextMonth}><i className="bx bx-chevron-right"></i></button>
                </div>
              </div>

              <div className={styles.calendarGrid}>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                  <div className={styles.calendarDayHeader} key={index}>{day}</div>
                ))}

                {days.map((day, index) => (
                  <div 
                    key={index}
                    className={`${styles.calendarDay} ${day.isCurrentMonth ? '' : styles.otherMonth} ${isToday(day.date) ? styles.today : ''} ${isSelected(day.date) ? styles.selected : ''}`}
                    onClick={() => handleDateClick(day.date)}
                  >
                    {day.date.getDate()}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.reservations}>
              <h2>Reservations for {selectedDate.toLocaleDateString()}</h2>

              <div className={styles.reservationList}>
                {filteredReservations.length > 0 ? (
                  filteredReservations.map(reservation => (
                    <div className={styles.reservationItem} key={reservation.id}>
                      <div className={styles.reservationDetails}>
                        <h3>{reservation.title}</h3>
                        <p>{reservation.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No reservations for this date.</p>
                )}
              </div>

              <button className={styles.reserveButton}>Reserve</button>
            </div>
          </div>

          <div className={styles.roomPhotos}>
            <div className={styles.roomMainPhoto}>
              <img src="/class.avif" alt="Room" />
            </div>
            <div className={styles.roomPhotoGrid}>
              {Array(3).fill('/class.avif').map((image, index) => (
                <div className={styles.roomPhoto} key={index}>
                  <img src={image} alt={`Room view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Availibility;