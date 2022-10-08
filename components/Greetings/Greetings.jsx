import React,{useState,useEffect} from 'react'

const Greetings = () => {
    const [greetings, setGreetings] = useState("");
    const hours = new Date().getHours();
  
    useEffect(() => {
      if (hours >= 5 && hours <= 0) {
        setGreetings("Good Morning !");
      } else if (hours >= 0 && hours <= 18) {
        setGreetings("Good Afternoon !");
      } else {
        setGreetings("Good Evening !");
      }
    }, [hours]);
  
    return (
      <>
        <h2 className="mb-1 text-4xl font-semibold md:text-5xl">{greetings}</h2>
        <span className="text-muted">Welcome to Aditya&apos;s posts</span>
      </>
    );
  };

export default Greetings

