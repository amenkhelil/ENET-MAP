
import enet from "../assets/enet.png"
import  "../home.css"
export default function Home(){
    return ( 
        <main>
            <div className="container">
                <p className="title ">Simplify Room Reservations for University Clubs and Associations.</p>
                <div className="over"><img src={enet} alt="" /></div>
                <p className="easy">An easy-to-use platform to book classrooms and manage schedules in real-time.</p>
                <div className="button">
                    <a href="#">Get Started</a>
                    <a href="#">Learn More</a>
            
                </div>
                <p className="q"> Why Choose Our Platform?</p>
                <div className="icons">
                    <div className="icon icon-1 ">
                            <i class="fa-regular fa-calendar"></i>
                            <p>Book rooms in just a few clicks.</p>
                    </div>
                    <div className="icon icon-2 ">
                            <i class="fa-regular fa-clock"></i>
                           <p>Always know which rooms are free.</p>
                     </div> 
                    <div className="icon icon-3 ">
                            <i class="fa-solid fa-users"></i>
                            <p>Ensure fair access for all users.</p>
                        
                     </div>  
                     <div className="icon icon-4 ">
                              <i class="fa-solid fa-mobile"></i>
                             <p>Accessible on all devices</p>

                     </div>
                </div>
                <div className="booking">
                    <p>Start Booking Your Rooms Today!</p>
                    <div className="buttons">
                        <a href="#">Get Started</a>
                     
                        <a href="#">Contact Us</a>
                        </div>
                    </div>
                

            </div>
        </main>
    )
     
}