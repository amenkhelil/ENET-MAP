"use client";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ClassCard from "@/Components/ClassCard";
import AddRoomCard from "@/Components/AddRoomCard";
import { useState, useRef, useEffect } from 'react';

type Room = {
    img: string;
    title: string;
    type: string;
    occ: number;
    location: string;
}

function PlanningAdmin() {
    const [isNavLinksActive, setNavLinksActive] = useState(false);
    const [isFilterSidebarActive, setFilterSidebarActive] = useState(false);
  
    useEffect(() => {
      const mobileMenuButton = document.getElementById("mobileMenu");
      const filterBtn = document.querySelector(".filter-btn");
  
      const handleMobileMenuClick = () => {
        setNavLinksActive((prev) => !prev);
      };
  
      const handleFilterBtnClick = () => {
        setFilterSidebarActive((prev) => !prev);
      };
      if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", handleMobileMenuClick);
      }
      if (filterBtn) {
        filterBtn.addEventListener("click", handleFilterBtnClick);
      }
      return () => {
        if (mobileMenuButton) {
          mobileMenuButton.removeEventListener("click", handleMobileMenuClick);
        }
        if (filterBtn) {
          filterBtn.removeEventListener("click", handleFilterBtnClick);
        }
      };
    }, []);

    const [rooms, setRooms] = useState<Room[]>([
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
    ]);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingRoom, setEditingRoom] = useState<Room | null>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const editModalRef = useRef<HTMLDivElement>(null);
    const deleteModalRef = useRef<HTMLDivElement>(null);

    const isAdmin = true; 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (editModalRef.current && !editModalRef.current.contains(event.target as Node)) {
                setIsEditModalOpen(false);
            }
            if (deleteModalRef.current && !deleteModalRef.current.contains(event.target as Node)) {
                setIsDeleteModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleAddRoom = (newRoom: Room) => {
        setRooms([...rooms, newRoom]);
    };

    const handleEditRoom = (index: number, updatedRoom: Room) => {
        const updatedRooms = [...rooms];
        updatedRooms[index] = updatedRoom;
        setRooms(updatedRooms);
        setIsEditModalOpen(false);
        setEditingRoom(null);
        setEditingIndex(null);
    };

    const handleDeleteRoom = (index: number) => {
        const updatedRooms = rooms.filter((_, i) => i !== index);
        setRooms(updatedRooms);
        setIsDeleteModalOpen(false);
        setDeletingIndex(null);
    };

    const handleEditClick = (index: number) => {
        setEditingRoom(rooms[index]);
        setEditingIndex(index);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (index: number) => {
        setDeletingIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && editingRoom) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataURL = e.target?.result as string;
                setEditingRoom({ ...editingRoom, img: dataURL });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navbar currentPath='/Admin/Planning' />
            <main className="main-content">
                <button className="filter-btn">
                    <i className='bx bx-filter'></i>
                </button>
                <aside className={`filter-sidebar ${isFilterSidebarActive ? "active" : ""}`}>
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-input"/>
                    </div>

                    <div className="filter-section">
                        <div className="filter-header">
                            <h3>Property Filter</h3>
                            <button className="reset-btn">Reset all</button>
                        </div>

                        <div className="filter-group">
                            <label>Max Occupation</label>
                            <div className="range-slider">
                                <input type="range" min="20" max="70" defaultValue="20" className="slider"/>
                                <div className="range-values">
                                    <span>20</span>
                                    <span>70</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Scheduling Region</label>
                            <div className="checkbox-group">
                                <label className="checkbox">
                                    <input type="checkbox" value="ground-floor"/>
                                    Ground floor
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" value="first-floor"/>
                                    First floor
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" value="second-floor"/>
                                    Second floor
                                </label>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Class type</label>
                            <select className="select-input">
                                <option value="classroom">Classroom</option>
                                <option value="amphi">Amphi</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Square feet</label>
                            <div className="number-inputs">
                                <input type="number" placeholder="Min" className="number-input" />
                                <input type="number" placeholder="Max" className="number-input" />
                            </div>
                        </div>

                        <button className="search-btn">Search</button>
                    </div>
                </aside>

                <div className="rooms-grid">
                    {rooms.map((room, index) => (
                        <ClassCard 
                            key={index}
                            img={room.img}
                            title={room.title}
                            type={room.type}
                            occ={room.occ}
                            location={room.location}
                            isAdmin={isAdmin} // Passer la prop isAdmin
                            onEdit={isAdmin ? () => handleEditClick(index) : undefined} // Passer la fonction uniquement si admin
                            onDelete={isAdmin ? () => handleDeleteClick(index) : undefined} // Passer la fonction uniquement si admin
                        />
                    ))}
                    {isAdmin && <AddRoomCard onAddRoom={handleAddRoom} />} {/* Afficher AddRoomCard uniquement si admin */}
                </div>
            </main>

            {isEditModalOpen && editingRoom && (
                <div className="edit-modal-overlay">
                    <div className="edit-modal" ref={editModalRef}>
                        <button 
                            onClick={() => setIsEditModalOpen(false)}
                            className="close-button"
                        >
                            <i className='bx bx-x'></i>
                        </button>
                        <h2>Edit Room</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (editingIndex !== null) {
                                handleEditRoom(editingIndex, editingRoom);
                            }
                        }}>
                            <div className="form-group">
                                <label>Room Name</label>
                                <input
                                    type="text"
                                    value={editingRoom.title}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Room Type</label>
                                <select
                                    value={editingRoom.type}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, type: e.target.value })}
                                >
                                    <option value="Classroom">Classroom</option>
                                    <option value="Amphi">Amphi</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Max Occupancy</label>
                                <input
                                    type="number"
                                    value={editingRoom.occ}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, occ: parseInt(e.target.value) })}
                                    min="1"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <select
                                    value={editingRoom.location}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, location: e.target.value })}
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
                                />
                                {editingRoom.img && (
                                    <img 
                                        src={editingRoom.img} 
                                        alt="Preview" 
                                        style={{ width: '100px', marginTop: '10px' }} 
                                    />
                                )}
                            </div>
                            <button type="submit" className="save-button">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && deletingIndex !== null && (
                <div className="delete-modal-overlay">
                    <div className="delete-modal" ref={deleteModalRef}>
                        <h2>Are you sure you want to delete this room?</h2>
                        <div className="delete-modal-content">
                            <img 
                                src={rooms[deletingIndex].img} 
                                alt={rooms[deletingIndex].title} 
                                className="delete-modal-image"
                            />
                            <p><strong>{rooms[deletingIndex].title}</strong></p>
                            <p>Type: {rooms[deletingIndex].type}</p>
                            <p>Location: {rooms[deletingIndex].location}</p>
                        </div>
                        <div className="delete-modal-actions">
                            <button 
                                onClick={() => handleDeleteRoom(deletingIndex)} 
                                className="confirm-delete-button"
                            >
                                Yes, Delete
                            </button>
                            <button 
                                onClick={() => setIsDeleteModalOpen(false)} 
                                className="cancel-delete-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer isPlanning={true}/>
        </>
    );
}

export default PlanningAdmin;