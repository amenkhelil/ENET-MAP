"use client";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ClassCard from "@/Components/ClassCard";
import AddRoomCard from "@/Components/AddRoomCard";
import { useRef, useEffect } from 'react';

type Room = {
    img: string;
    title: string;
    type: string;
    occ: number;
    location: string;
};

function PlanningAdmin() {
    const rooms = [
        { img: "/class.avif", title: "C 22", type: "Classroom", occ: 28, location: "Second Floor" },
        { img: "/class.avif", title: "C 23", type: "Classroom", occ: 30, location: "First Floor" },
    ];

    const editModalRef = useRef<HTMLDivElement>(null);
    const deleteModalRef = useRef<HTMLDivElement>(null);
    const filterSidebarRef = useRef<HTMLDivElement>(null);

    

    const handleAddRoom = (newRoom: Room) => {
        rooms.push(newRoom);
    };

    const handleEditRoom = (index: number, updatedRoom: Room) => {
        rooms[index] = updatedRoom;
    };

    const handleDeleteRoom = (index: number) => {
        rooms.splice(index, 1);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, editingRoom: Room) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                editingRoom.img = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleFilterSidebar = () => {
        if (filterSidebarRef.current) {
            filterSidebarRef.current.classList.toggle("active");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (editModalRef.current && !editModalRef.current.contains(event.target as Node)) {
                editModalRef.current.style.display = 'none';
            }
            if (deleteModalRef.current && !deleteModalRef.current.contains(event.target as Node)) {
                deleteModalRef.current.style.display = 'none';
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <Navbar currentPath='/Admin/Planning' />
            <main className="main-content">
                <button className="filter-btn" onClick={toggleFilterSidebar}><i className='bx bx-filter'></i></button>
                <aside className="filter-sidebar" ref={filterSidebarRef}>
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-input" />
                    </div>

                    <div className="filter-section">
                        <div className="filter-header">
                            <h3>Property Filter</h3>
                            <button className="reset-btn">Reset all</button>
                        </div>

                        <div className="filter-group">
                            <label>Max Occupation</label>
                            <div className="range-slider">
                                <input type="range" min="20" max="70" defaultValue="20" className="slider" />
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
                                    <input type="checkbox" value="ground-floor" />
                                    Ground floor
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" value="first-floor" />
                                    First floor
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" value="second-floor" />
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
                            isAdmin={true}
                            onEdit={() => {
                                if (editModalRef.current) {
                                    editModalRef.current.style.display = 'flex';
                                }
                            }}
                            onDelete={() => {
                                if (deleteModalRef.current) {
                                    deleteModalRef.current.style.display = 'flex';
                                }
                            }}
                        />
                    ))}
                    <AddRoomCard onAddRoom={handleAddRoom} />
                </div>
            </main>

            <div className="edit-modal-overlay" ref={editModalRef}>
                <div className="edit-modal">
                    <button
                        onClick={() => {
                            if (editModalRef.current) {
                                editModalRef.current.style.display = 'none';
                            }
                        }}
                        className="close-button"
                    ><i className='bx bx-x'></i></button>
                    <h2>Edit Room</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div className="form-group">
                            <label>Room Name</label>
                            <input
                                type="text"
                                defaultValue={rooms[0].title}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Room Type</label>
                            <select defaultValue={rooms[0].type}>
                                <option value="Classroom">Classroom</option>
                                <option value="Amphi">Amphi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Max Occupancy</label>
                            <input
                                type="number"
                                defaultValue={rooms[0].occ}
                                min="1"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <select defaultValue={rooms[0].location}>
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
                                onChange={(e) => handleImageUpload(e, rooms[0])}/>
                            {rooms[0].img && (
                                <img
                                    src={rooms[0].img}
                                    alt="Preview"
                                    className="edit-modal-image"
                                />
                            )}
                        </div>
                        <button type="submit" className="save-button">Save</button>
                    </form>
                </div>
            </div>

            <div className="delete-modal-overlay" ref={deleteModalRef}>
                <div className="delete-modal">
                    <h2>Are you sure you want to delete this room?</h2>
                    <div className="delete-modal-content">
                        <img
                            src={rooms[0].img}
                            alt={rooms[0].title}
                            className="delete-modal-image"/>
                        <p><strong>{rooms[0].title}</strong></p>
                        <p>Type: {rooms[0].type}</p>
                        <p>Location: {rooms[0].location}</p>
                    </div>
                    <div className="delete-modal-actions">
                        <button
                            onClick={() => handleDeleteRoom(0)}
                            className="confirm-delete-button">Yes, Delete</button>
                        <button
                            onClick={() => {
                                if (deleteModalRef.current) {
                                    deleteModalRef.current.style.display = 'none';
                                }
                            }}
                            className="cancel-delete-button">Cancel</button>
                    </div>
                </div>
            </div>

            <Footer isPlanning={true} />
        </>
    );
}

export default PlanningAdmin;
