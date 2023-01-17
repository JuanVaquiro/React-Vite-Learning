import { useState, useEffect } from "react";

const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //callBack 
    // listener 
    const onMouseMove = ({ x, y }) => {
      setcoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    //Cleanup - limpieza 
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };

    //arreglo de dependecias, condiciones por las cuales
    //el useEffect se vuelva a disparar. arreglo vacio = se dispara una unica vez
    //cuando el elemento se renderiza por primera vez
  }, []);

  return (
    <div>
      <h3>User is live</h3>
        {JSON.stringify(coords)}
    </div>
  );
};

export default Message;
