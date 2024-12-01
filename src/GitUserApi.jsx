import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
const GitUserApi = () => {

  const [data, setData] = useState([])

  const getUser = async () => {
    try {
      const apiResponse = await fetch("https://api.github.com/users");
      const result = await apiResponse.json();
      setData(result);
    } catch (error) {
      console.log(error, "gituser error")
    }
    // fetch("https://api.github.com/users").then((result) => {
    //     result.json().then((resp) => {
    //       setData(resp)
    //     })
    //   })
  }

  useEffect(() => {

    getUser();
  }, [])

  return (
    <div className='allCards'>
      {
        data.map((item) => <div>
          <Card name={item.login}
            id={item.id}
            dp={item.avatar_url}
            url={item.html_url}
          />
        </div>
        )
      }

    </div>
  )
}

export default GitUserApi