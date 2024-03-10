import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="p-5 bg-gray-200">
			<nav>
				<ul className="flex gap-2 font-semibold">
					<li className="underline">
						<Link to="/">Blog Post</Link>
					</li>
					<li className="underline">
						<Link to="/ab-tests">Manage A/B Tests</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
