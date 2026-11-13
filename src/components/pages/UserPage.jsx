import { useState, useEffect } from 'react'
import UserList from '../organisms/UserList'
import Spinner from '../atoms/Spinner'
import ErrorMessage from '../atoms/ErrorMessage'

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            return res.json()
        })
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
        .catch((err) => {
            if (err.name === 'AbortError') return
            setError(err.message)
            setLoading(false)
        })

        return () => controller.abort() 
    }, [])

    if (loading) return <Spinner />
    if (error) return <ErrorMessage message={error} />

    return (
        <main>
        <h1>Users directory</h1>
        <UserList
            users={users}
            selectedId={selectedUser?.id}
            onSelect={setSelectedUser}
        />
        {}
        {selectedUser && <p>Selected: {selectedUser.name}</p>}
        </main>
    )
}