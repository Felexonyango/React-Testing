import React,{useState,useEffect} from 'react'

const FetchData = () => {
  const [title, setTitle] = useState("");

  const handleClick = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const { title } = await response.json();

    setTitle(title);
  };

  return (
    <>
      <button onClick={handleClick}>Click me to fetch post</button>
      {title}
    </>
  );
}

export default FetchData
