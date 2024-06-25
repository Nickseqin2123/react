import Button from '../Button/Button'
import { useState, useRef } from 'react'


function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKey(event) {
        if (event.key == 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>
                Input Value: {show && input.current.value}
            </h3>
            <input ref={input} type="text" className='control' onKeyDown={handleKey}/>
        </div>
    )
}

export default function FeedBackSection() {
    const [ form, setForm ] = useState(
        {
            name: '',
            hasError: true,
            reason: 'help'
        }
    )

    function stringWrite(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        })
    )
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form action="" style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                 type="text"
                  id="name"
                   className="control"
                    value={form.name}
                     onChange={stringWrite}
                     style={{ 
                        border: form.hasError ? '1px solid red': null    
                     }}
                     />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={
                    (event) => {
                        setForm(prev => ({
                            ...prev,
                            reason: event.target.value
                        })) 
                    }
                }>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            
            <hr />

            <StateVsRef />
        </section>
    )
}