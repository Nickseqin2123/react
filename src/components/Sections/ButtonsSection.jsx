import { differences } from '../../data';
import Button from "../Button/Button";
import { useState } from 'react'


export default function ButtonsSection() {
    const [ content, setContent ] = useState(null)

	function click(type) {
		setContent(type)
	}

    return (
        <section>
			<h3>Чем мы отличаемся от других</h3>
			<Button isActive={content === 'way'} onClick={ () => click('way') }>Подход</Button>
			<Button isActive={content === 'easy'} onClick={ () => click('easy') }>Доступность</Button>
			<Button isActive={content === 'program'} onClick={ () => click('program') }>Концентрация</Button>

			{content ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
		</section>
    )
}