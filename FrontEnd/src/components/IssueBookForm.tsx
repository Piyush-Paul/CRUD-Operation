import axios from 'axios';
import { useEffect , useState } from 'react'

const IssueBookForm = () => {

    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);
    const [roll, setRoll] = useState<number | undefined>();
    const [filterIteam, setFilterIteam] = useState([]);
    const [hidden, setHidden] = useState(false);

    useEffect( ()=> {
      axios
      .get("http://localhost:5000/books/booksName")
      .then((response) => setBooks(response.data.Books))
      .catch((error) => console.error(error));
    },[])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
      // setHidden(false);
      const fetchDataFun = async () => {
        console.log(books);
        
      const items = await books.filter((book) => book.toLowerCase().includes(title.toLowerCase()));
      setFilterIteam(items);
      // console.log(items);
    }
    fetchDataFun();
    }, [title,books])
    


  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1>Issue books</h1>
      <input
      type="text"
      placeholder="Student Roll Number"
      value={roll}
      onChange={(e) => setRoll(Number(e.target.value))}
      />
      {false && (
        <ul>
          {filterIteam.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
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
            <input type='radio' id={item} key={index} value={item} onClick={ (e)=> {setTitle(e.target.value); setHidden(true)}} hidden/>
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