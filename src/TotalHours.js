import React from 'react'

const TotalHours  = () => {
    const hours = 0;
    return (
        <div>
       <section className="page-section" id="about">
        <center>
        <div className='boxTotal'>
      <div className="container">
          <div className="text-center">
              <h3 className="section-heading text-uppercase">Total Tutoring Hours Completed</h3>
              <p className="text-muted">Hours Completed: {hours}</p>
          </div>
          </div>
      </div>
      </center>
  </section>
        </div>
    );
};

export default TotalHours