"use client";

import { useState, useRef, useEffect } from 'react';

type RoomFormData = {
  title: string;
  type: string;
  occ: number;
  location: string;
  img: string;
}

type AddRoomCardProps = {
  onAddRoom: (room: RoomFormData) => void;
}

function AddRoomCard({ onAddRoom }: AddRoomCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<RoomFormData>({
    title: '',
    type: 'Classroom',
    occ: 20,
    location: 'Ground Floor',
    img: ''
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpen]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target?.result as string;
        setFormData({ ...formData, img: dataURL });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddRoom(formData);
    setIsFormOpen(false);
    setFormData({
      title: '',
      type: 'Classroom',
      occ: 20,
      location: 'Ground Floor',
      img: ''
    });
  };

  if (isFormOpen) {
    return (
      <div className="add-room-overlay">
        <div className="add-room-modal" ref={modalRef}>
          <button 
            onClick={() => setIsFormOpen(false)}
            className="close-button"
          >
            <i className='bx bx-x'></i>
          </button>
          <h2>Add New Room</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Room Name</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Room Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="Classroom">Classroom</option>
                <option value="Amphi">Amphi</option>
              </select>
            </div>
            <div className="form-group">
              <label>Max Occupancy</label>
              <input
                type="number"
                value={formData.occ}
                onChange={(e) => setFormData({...formData, occ: parseInt(e.target.value)})}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              >
                <option value="Ground Floor">Ground Floor</option>
                <option value="First Floor">First Floor</option>
                <option value="Second Floor">Second Floor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
              {formData.img && (
                <img 
                  src={formData.img} 
                  alt="Preview" 
                  style={{ width: '100px', marginTop: '10px' }} 
                />
              )}
            </div>
            <button type="submit" className="submit-button">
              Add Room
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="room-card add-room-card" onClick={() => setIsFormOpen(true)}>
      <div className="add-room-content">
        <i className='bx bx-plus-circle'></i>
        <p>Add New Room</p>
      </div>
    </div>
  );
}

export default AddRoomCard;