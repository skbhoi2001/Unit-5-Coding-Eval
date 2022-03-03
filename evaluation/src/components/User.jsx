import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserDetails } from "./UserDetails";

export const User = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const goTo = (ud) => {
    navigate(`/user/${ud.id}`);
  };

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div >
              {user.map((ud) => {
                return (
                  <div key={ud.id}>
                    <div style={{display:"flex",gap:"30px"}} >
                      <div>
                        <h2>{ud.username}</h2>
                      </div>
                      <button style={{height:"30px",marginTop:"20px"}} onClick={() => goTo(ud)}>
                        View
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};