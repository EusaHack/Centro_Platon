import "./CardMenu.css"

export function CardMenu({txtCard,icon}) {
    return (
        <div className="card">
          <div className="card-header">
            <i className="fas fa-clipboard-list"></i>
            <div className="icon-circle">
              <i className="fas fa-circle">
                {icon}
              </i>
            </div>
          </div>
          <div className="card-body">
            <h2>{txtCard}</h2>
          </div>
        </div>
      );
}
