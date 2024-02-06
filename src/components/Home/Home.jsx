import homeImg from "../../assets/home-img.png";
import Button from "../Buttons/Button";

const Home = ({ setContent }) => {
	return (
		<section className="flex flex-col items-center justify-center w-full">
			<h1 className="text-6xl font-bold text-center">Welcome!</h1>
			<div className="mt-8">
				<img className="w-[16rem] mx-auto" src={homeImg} alt="main image" />
			</div>
			<div className="mt-8">
				<Button onClick={() => setContent("addProject")}>+ add a new project</Button>
			</div>
		</section>
	);
};

export default Home;
