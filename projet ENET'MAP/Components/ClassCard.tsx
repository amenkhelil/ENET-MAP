"use client";

import Link from "next/link";

type ClassCardProps = {
    img: string;
    type: string;
    occ: number;
    location: string;
    title: string;
    isAdmin: boolean; 
    onEdit?: () => void;
    onDelete?: () => void; 
}

function ClassCard({ title, img, type, occ, location, isAdmin, onEdit, onDelete }: ClassCardProps) {
    return (
        <div className="room-card">
            <img src={img} alt={title} />
            <div className="room-info">
                <h2>{title}</h2>
                <div className="room-details">
                    <span><i className='bx bxs-info-circle'></i>{type}</span>
                    <span><i className='bx bxs-group'></i> Max Occupancy: {occ}</span>
                    <span><i className='bx bxs-building'></i>{location}</span>
                </div>
            </div>
            {isAdmin && ( // Afficher les boutons uniquement si l'utilisateur est un admin
                <div className="card-actions">
                    <button onClick={onEdit} className="edit-button">
                        Edit
                    </button>
                    <button onClick={onDelete} className="delete-button">
                        Delete
                    </button>
                </div>
            )}
            <Link href="">
                <i className='bx bx-right-arrow-alt'></i>
            </Link>
        </div>
    );
}

export default ClassCard;