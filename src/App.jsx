import Header from "./components/Header/Header";
import TeachingSection from './components/Sections/TeachingSection'
import ButtonsSection from './components/Sections/ButtonsSection'
import IntroSection from "./components/Sections/IntroSection";
import TabsSection from "./components/Sections/TabsSection";
import FeedBackSection from "./components/Sections/FeedBackSection";
import { useState } from "react";
import EffectSection from "./components/Sections/EffectSection";


export default function App() {
	const [visible, setVisible] = useState(true)
	const [tab, setTab] = useState('effect')

	
  return (
	<>
	<div>
		{visible && <Header />}
		<main>
			<IntroSection />
			<TabsSection active={tab} onChange={(active) => setTab(active)}/>

			{tab === 'main' && (<>
				<TeachingSection />
				<ButtonsSection />
			</>
			)}
			{tab === 'feedback' && <FeedBackSection />}

			{tab === 'effect' && <EffectSection/>}
		</main>
    </div>
	</>
  )
}
