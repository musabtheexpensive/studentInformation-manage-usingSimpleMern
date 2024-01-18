import React from "react";
import Swal from "sweetalert2";

const StudentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const roll = form.roll.value;
    const semester = form.semester.value;
    const shift = form.shift.value;
    const department = form.department.value;
    const addStudent = {
      name,
      roll,
      semester,
      shift,
      department,
    };
    console.log(addStudent);
    fetch("http://localhost:5000/addStudent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addStudent),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Student Add Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Reset the form data
          form.reset();
        }
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">...Student Information Form...</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="write name here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student Roll</span>
              </label>
              <input
                type="text"
                name="roll"
                placeholder="write Roll here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student Semester</span>
              </label>
              <input
                type="number"
                name="semester"
                placeholder="write semester here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student Shift</span>
              </label>
              <input
                type="number"
                name="shift"
                placeholder="write shift here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control text-black md:w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Department</span>
              </label>
              <label className="input-group">
                <select
                  className="select select-success text-black w-full max-w-xs mt-3"
                  type="text"
                  name="department"
                  placeholder="write department here"
                >
                  <option>Computer</option>
                  <option>Civil</option>
                  <option>Electrical</option>
                  <option>Mechanical</option>
                  <option>Rac</option>
                  <option>Electronics</option>
                  <option>Mining</option>
                </select>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Submit Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
