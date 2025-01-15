import axios from 'axios';
import { useEffect , useState } from 'react'

const IssueBookForm = () => {

    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);
    const [roll, setRoll] = useState<number | undefined>();
    const [filterIteam, setFilterIteam] = useState([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
        .get("http://localhost:5000/books/booksName")
        .then((response) => setBooks(response.data.Books))
        .catch((error) => console.error(error));
    };

    useEffect(() => {
      const fetchDataFun = async () => {
      const items = await books.filter((book) => book === title);
      setFilterIteam(items);
      console.log(items);
    }
    fetchDataFun();
    }, [title])
    


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
      {filterIteam.length > 0 && (
        <ul>
          {filterIteam.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <input
      type="text"
      placeholder="Book Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Issue Book</button>
      </form>
    </>
  )
}

export default IssueBookForm ;