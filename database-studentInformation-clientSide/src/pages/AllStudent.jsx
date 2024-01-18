import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const studentInfo = useLoaderData();

  useEffect(() => {
    setStudents(studentInfo);
  }, [studentInfo]);

  const handleDelete = (roll) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the student if the user confirms
        fetch(`http://localhost:5000/students/${roll}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setStudents((prevStudents) =>
              prevStudents.filter((student) => student.roll !== roll)
            );
            Swal.fire({
              title: "Deleted!",
              text: "The Student has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting student:", error);
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Roll</th>
            <th>Shift</th>
            <th>Semester</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.shift}</td>
                <td>{student.semester}</td>
                <td>{student.department}</td>
                <td className="">
                  <button
                    onClick={() => handleDelete(student.roll)}
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


export default AllStudent;
