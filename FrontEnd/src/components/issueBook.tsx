import axios from 'axios';
import React, { useEffect, useState } from 'react'

const issueBook = () => {
    useEffect( ()=> {
        axios
        .get("http://localhost:5000/books")
        .then((response) => setBooks(response.data))
        .catch((error) => console.error(error));
    }, []);

    // useEffect(()=> {
    //     Books.filt
    // })

    const [Books, setBooks] = useState('');
    const [searchItem, setSearchItem] = useState('');
  return (
    <>
        <h1>Issue books</h1>
        <input type="text" onChange={ (e) => setSearchItem(e.target.value)}/>
    </>
  )
}

export default issueBook