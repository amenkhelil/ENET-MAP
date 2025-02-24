"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ClassCard from "@/Components/ClassCard";

function Planning() {
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

  return (
    <>
      <Navbar currentPath="/AfterSign/Planning" />
      <main className="main-content">
        <button className="filter-btn"><i className="bx bx-filter"></i></button>

        <aside className={`filter-sidebar ${isFilterSidebarActive ? "active" : ""}`}>
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
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
          <ClassCard img="/class.avif" type="Classroom" occ={29} location="Second floor" title="C 22" isAdmin={false} />
        </div>
      </main>

      <Footer isPlanning={true} />
    </>
  );
}

export default Planning;