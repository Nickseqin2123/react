import logo from '/vite.svg'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useEffect } from 'react'


const HeaderContainer = styled.header`
	height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {
	const [ content, setContent ] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setContent(new Date()), 1000)
		
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<HeaderContainer>
            <img src={ logo }/>
			<h3>University</h3>
			<span>Время сейчас: { content.toLocaleTimeString() }</span>
		</HeaderContainer>
	)
}