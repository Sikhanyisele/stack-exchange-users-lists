import React, {useEffect, useState} from 'react';
import './App.css';
import User from "./user";
function App() {
  const USERS_API_URL = 'https://run.mocky.io/v3/c4464f53-cbc6-4cab-859a-7409f3440c96';
  // const USERS_API_URL = 'https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow';
  const [users, setUsers] = useState([] as  any);
  const headers = {'APIKEY':'CCE5M6)g5V)wSQn0ylpEAA'}
  const [query, setQuery] = useState("")

    // Triggering the StackExchange API
    useEffect(() => {
    const getUsers = async () => {
      try {
        fetch(USERS_API_URL, {
          method : "GET",
          headers: headers
        })
            .then((response) => {
              if (!response.ok) {
                // throw new Error(response.error)
              }
              return response.json();
            })
            .then(data => {
              setUsers(data.items);
            })
            .catch(function(error) {
            });

      } catch (err) {
      }
    }

    (async () => await getUsers())();
  }, [])
  return (
      <div className='mt-6'>
          <div className='header place-items-center grid'>
              <p  className='text-center text-black'>STACKEXCHANGE TOP 20 USERS</p>
              <hr className="w-[200px] border-t-4 border-teal-400 mt-1"></hr>
          </div>
          <div className="App mb-4">
              <div style={{ margin: '0 auto', marginTop: '10%' }}>
                  <label>Search:</label>
                  <input placeholder='Search user by name' className='border border-2 border-amber-400 p-1' type="text" onChange={event => setQuery(event.target.value)} />
              </div>
          </div>
      <div className='max-container-center border-t-gray-50 mx-auto grid md:grid-cols-3 gap-2 grid-cols-1 items-end place-items-center'>
          { users.filter((user: any) => {
              if (query === "") {
                  return user;
              } else if (user.display_name.toLowerCase().includes(query.toLowerCase())) {
                  return user;
              }
          }).map((user:any, i:number) => {
              return (
                  <>
                      <User item={user} i={i} />
                  </>
              )
          })}
      </div>
      </div>
  );
}

export default App;
