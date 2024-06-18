import React from "react";
import './nav.css';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>Lorem ipsum dolor sit amet. Ea architecto dolores aut incidunt voluptas ab dolore ducimus.</p>
              <p>4 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Anna Nelson</h4>
              <p>33 magnam eveniet sit nihil alias eum maiores rerum est omnis commodi est iure architecto aut nihil consequatur.</p>
              <p>6 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Dissy Ulina</h4>
              <p>Id adipisci veniam et minima corporis in obcaecati facilis ut quia quia aut eligendi voluptates ex sequi ipsa in perferendis quam.</p>
              <p>8 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage;