
import Header from "./Components/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import OurSec from "./Components/Our/OurSec";
import Why from "./Components/Why/Why";
import Footer from "./Components/Footer/Footer";
import How from "./Components/How/How";

import "./app.css";

function App() {
	// const params = useParams();

	return (
		<div className='container'>
			<Header />
			<Showcase />
			<OurSec />
			<Why />
      <How/>
      <Footer/>
		</div>
	);
}

export default App;
