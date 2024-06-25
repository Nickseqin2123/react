import { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'


export default function EffectSection() {
    const [modal, setModal] = useState(false)


    function openModal() {
        setModal(true)
    }
    return (
        <section>
            <h3>
                Effects
            </h3>
            <Button onClick={openModal}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, error laudantium. Quas similique ipsam aut totam est excepturi quae exercitationem, iste sapiente qui quaerat! Fugit sed necessitatibus ut distinctio corrupti!
                </p>
                <Button onClick={() => {setModal(false)}}>Закрыть окно</Button>
            </Modal>
        </section>
    )
}