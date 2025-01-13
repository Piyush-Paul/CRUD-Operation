import { useState } from "react";
import axios from "axios";


const StudentForm = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [semester, setSemester] = useState("");

    const handelSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        alert(name+roll+semester);
        axios.post(`http://localhost:5000/students`, { name, semester, roll})
        .then(() => alert("Student added successfully!"))
        .catch(() => {alert("Failed to add Student!")});
    }

  return (
    <>
      <div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" required onChange={ (e)=> setName(e.target.value)} value={name}/>
          <label htmlFor="Roll">Roll</label>
          <input type="text" id="Roll" required onChange={ (e)=> setRoll(e.target.value)} value={roll}/>
          <label htmlFor="Semester">Semester</label>
          <select name="Semester" id="Semester" required onChange={(e)=> setSemester(e.target.value)}>
            <option value="1st Sem">1st Sem</option>
            <option value="2nd Sem">2nd Sem</option>
            <option value="3rd Sem">3rd Sem</option>
            <option value="4th Sem">4th Sem</option>
            <option value="5th Sem">5th Sem</option>
            <option value="6th Sem">6th Sem</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
