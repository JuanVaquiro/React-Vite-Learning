import { useState, useEffect } from "react";

const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      //   const coords = { x, y };
      setcoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <h3>User is live</h3>
        {JSON.stringify(coords)}
    </div>
  );
};

export default Message;
