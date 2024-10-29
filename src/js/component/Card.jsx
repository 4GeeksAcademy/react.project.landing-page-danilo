import React from "react";

const Card = () => {
  return (
    <div className="col-12 col-md-3 d-flex justify-content-center">
      <div class="card" style={{ width: "18rem;" }}>
        <img
          src="https://images.unsplash.com/photo-1727946443877-f6dcad028e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body text-center">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
