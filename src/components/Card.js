import React from "react";
import moment from "moment";
const Card = ({ content, onClick, editServer }) => {
  const showServer = () => {
    if (editServer) {
      if (content.server) {
        return (
          <p>
            Server:
            <div className="chip">
              {content.server}
              <i
                class="close material-icons"
                onClick={() => ("Clicked")}
              >
                close
              </i>
            </div>
          </p>
        );
      } else {
        return (
          <div className="chip" onClick={() => onClick()}>
            Add Server
          </div>
        );
      }
    }
  };
  return (
    <div className="card white">
      <div className="card-content">
        <p>Email: {content.email}</p>
        <p>Guests: {content.numberOfGuests}</p>
        <p>RSVP ID: {content.id}</p>
        <p>Date: {moment(content.date + " " + content.time).format("LLLL")}</p>
        {showServer()}
      </div>
    </div>
  );
};

export default Card;
