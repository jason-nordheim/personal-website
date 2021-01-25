import React from "react";
import { openInNewWindow } from "../../util/windowUtilities";
export default function AchivementCard({ cardInfo }) {
  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p key={i} onClick={() => openInNewWindow(v.url)}>
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
