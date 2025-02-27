

type ReservationProps = {
    sentAt: string;
    date: string;
    time: string;
    status: "approved" | "declined";
    className: string;
  };


function RequestAnswer({sentAt , time , status , className ,date} : ReservationProps){
   return(
    <div className="status-card">
        <div className="card-info">
            <div className="info-row">
                <span className="label">Date:</span>
                <span className="value">{date}</span>
            </div>
            <div className="info-row">
                <span className="label">Time:</span>
                <span className="value">{time}</span>
            </div>
            <div className="info-row">
                <span className="label">Class:</span>
                <span className="value">{className}</span>
            </div>
        </div>
        <div className="status-info">
            <div className="status-accepted">{status}</div>
            <div className="timestamp">{sentAt}</div>
        </div>
    </div>
   );

}

export default RequestAnswer;