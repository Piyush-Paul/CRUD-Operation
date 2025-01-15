import axios from 'axios';
import { useEffect , useState } from 'react'

const IssueBookForm = () => {

    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);
    const [filterIteam, setFilterIteam] = useState([]);
    const [hidden, setHidden] = useState(false);
    
    const [roll, setRoll] = useState<number | undefined>();
    const [studentsDetail, setStudentsDetails] = useState({rolls: [], names: []});
    const [filterStudents, setFiltreStudent] = useState({rolls: '', names: null});

    useEffect( ()=> {
      axios
      .get("http://localhost:5000/books/booksName")
      .then((response) => setBooks(response.data.Books))
      .catch((error) => console.error(error));
      axios
      .get("http://localhost:5000/student/students")
      .then( (Response) => {setStudentsDetails({rolls: Response.data.roll,names: Response.data.name})})
    },[])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
      const fetchDataFun = async () => {
        console.log(books);
        
        const items = await books.filter((book) => book.toLowerCase().includes(title.toLowerCase()));
        setFilterIteam(items);
      }
      fetchDataFun();
    }, [title,books])

    useEffect(() => {
      const fetchDataFun = async () => {
        console.log(books);
        const items = await studentsDetail.rolls.filter(roll);
        console.log(items);
      }
      fetchDataFun();
    }, [roll,studentsDetail])
    


  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1>Issue books</h1>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
      <input
      type="text"
      placeholder="Student Roll Number"
      value={roll}
      onChange={(e) => setRoll(Number(e.target.value))}
      />
      {roll && (
        <ul>
          {filterIteam.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      </div>

      {/* <------------------------------------------------------------------------------------> */}

      <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
      <input
      type="text"
      placeholder="Book Title"
      value={title}
      onChange={(e) => {setHidden(false);setTitle(e.target.value)}}
      />
      {title != '' && (
        <div 
        style={{ display:'flex',flexDirection: 'column',
          // maxHeight:'60px', overflow: 'scroll'
          }}>
          {filterIteam.map((item, index) => (
            <>
            <input 
            type='radio' 
            id={item} key={index} 
            value={item} 
            onClick={ (e)=> {setHidden(true);setTitle(e.target.value)}} hidden/>
            
            <label htmlFor={item} hidden={hidden} >{item}</label>
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