export default function WayToTeach(prop) {
	return (
		<ul key={prop.id}>
			<li>
				<p>
					<strong>{ prop.title }</strong>
					{ prop.description }
				</p>
			</li>
		</ul>
	)
}