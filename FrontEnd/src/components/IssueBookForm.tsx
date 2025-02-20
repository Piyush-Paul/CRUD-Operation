import axios from 'axios';
import { useEffect , useState } from 'react'

const IssueBookForm = () => {

    const [title, setTitle] = useState("");
    const [roll, setRoll] = useState<number | undefined>();
    const [books, setBooks] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [students,setStudents] = useState([]);
    const [hide, setHide] = useState(false);
    const [formData, setFormData] = useState({SudentRoll: undefined, BookId: undefined, AvailableQuantity: undefined});

    useEffect( ()=> {
      if (title != '') {
        axios
        .get(`http://localhost:5000/books/booksName/${title}`)
        .then((response) => setBooks(response.data.Books))
        .catch((error) => console.error(error));
      }
    },[title])

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      
      if (formData.BookId && formData.SudentRoll && (formData.AvailableQuantity != 0) ) {
        console.log(formData);
        axios
        .post(`http://localhost:5000/books/issuedBook`,[formData])
        .then( (Response) => console.log(Response))
        .catch( (err) => console.log(err))
      }else{
        alert('Invalid Request');
      }
    };

    useEffect( ()=>{
      if (roll) {
        axios
        .get(`http://localhost:5000/student/searchStudent/${roll}`)
        .then((response)=> setStudents(response.data.Students))
        .catch((err)=> console.log(err)) 
      }
    },[roll])
    


  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1>Issue books</h1>
      <input
      type="text"
      placeholder="Student Roll Number"
      value={roll}
      onChange={(e) => {setHide(false);setRoll(Number(e.target.value))}}
      />

    <div 
      style={{ display:'flex',flexDirection: 'column',
        // maxHeight:'60px', overflow: 'scroll'
        }}>
        {students.map((item, index) => (
          <>
          <input type='radio' id={item.roll} key={index} value={item.roll} onClick={ (e)=> {
            setRoll(e.target.value);
            setHide(true)
            setFormData({SudentRoll: item.roll, BookId: formData.BookId, AvailableQuantity: formData.AvailableQuantity})
            }} hidden/>
          <label htmlFor={item.roll} hidden={hide} >{item.name}({item.roll})</label>
          </>
        ))}
      </div>
      
      
      <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
      <input
      type="text"
      placeholder="Book Title"
      value={title}
      onChange={(e) => {setHidden(false);setTitle(e.target.value)}}
      />
      {title != '' && (
      <div 
        style={{ display:'flex',flexDirection: 'column'}}>
          {books.map((item, index) => (
            <>
            <input type='radio' id={item.id} key={index} value={item.title} onClick={ (e)=> {
              if (item.availableQuantity<1) {
                null
              }else{
                setTitle(e.target.value);
                setHidden(true);
                setFormData({ BookId: item.id, SudentRoll: formData.SudentRoll, AvailableQuantity: item.availableQuantity })
              }
              }} hidden/>
            <label htmlFor={item.id} hidden={hidden} >{item.title}({item.availableQuantity})</label>
            </>
          ))}
        </div>
      )}
      </div>
      <button type="submit">Issue Book</button>
      </form>
    </>
  )
}

export default IssueBookForm ;