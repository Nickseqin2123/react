import { useCallback, useEffect, useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../Hooks/useinput'


export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(
        async () => {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }, []
    )

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])


    return (
        <section>
            <h3>
                Effects
            </h3>
            <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, error laudantium. Quas similique ipsam aut totam est excepturi quae exercitationem, iste sapiente qui quaerat! Fugit sed necessitatibus ut distinctio corrupti!
                </p>
                <Button onClick={() => {setModal(false)}}>Закрыть окно</Button>
            </Modal>
            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input type="text" className='control' {...input}/>
                    <h6>{input.value}</h6>
                    <ul>
                        {users.filter((user) => 
                            user.name.toLowerCase().includes(
                                input.value.toLowerCase()
                            )
                        ).map((user) => 
                            <li key={user.id}>{user.name}</li>
                        )}
                    </ul>
                </>
            )}
        </section>
    )
}