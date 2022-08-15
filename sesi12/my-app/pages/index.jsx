import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data, '================= data ===============')
        setUsers(data)
      })
  }, [])

  return (
    <table>
      <thead>
        <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

