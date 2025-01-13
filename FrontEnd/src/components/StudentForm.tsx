import { useState } from "react";
import axios from "axios";


const StudentForm = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(name + roll + semester);
    axios
      .post(`http://localhost:5000/student`, { name, roll, semester })
      .then(() => alert("Student added successfully!"))
      .catch(() => { alert("Failed to add Student!") });
  }

    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  };



  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h2>Add Student</h2>
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <input
  //       type="number"
  //       placeholder="Roll No"
  //       value={roll}
  //       onChange={(e) => setRoll(e.target.value)}
  //     />
  //     <label htmlFor="semester">Semester</label>
  //     <select name="semester" id="semester" required onChange={(e) => setSemester(e.target.value)}>
  //       <option value="1st Sem">1st Sem</option>
  //       <option value="2nd Sem">2nd Sem</option>
  //       <option value="3rd Sem">3rd Sem</option>
  //       <option value="4th Sem">4th Sem</option>
  //       <option value="5th Sem">5th Sem</option>
  //       <option value="6th Sem">6th Sem</option>
  //     </select>
  //     <button type="submit">Add Student</button>
  //   </form>
  // );
// };
export default StudentForm;
