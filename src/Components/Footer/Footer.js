import {
	Facebook,
	Instagram,
	Logo,
	LogoWhite,
	Twitter,
} from "../../Assets/Icon/Icon";
import Nav from "../Header/Nav/Nav";

import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<LogoWhite />
			<ul className='footer__list'>
				<Nav Text={"HOME"} />
				<Nav Text={"ABOUT US"} />
				<Nav Text={"CREATE YOUR PLAN"} />
			</ul>
			<div className='icons'>
				<a href='#'>
					<Facebook />
				</a>
				<a href='#'>
					<Twitter />
				</a>
				<a href='#'>
					<Instagram />
				</a>
			</div>
		</footer>
	);
};
export default Footer;
