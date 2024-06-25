import { ways } from '../../data';
import WayToTeach from "../WayToTeach";


export default function TeachingSection() {
    return (
        <section>
			<h3>Наш подход к обучению</h3>
			{ways.map((item) => {
				return WayToTeach(item)
			})}
		</section>
    )
}