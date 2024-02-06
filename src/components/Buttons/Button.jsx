const Button = ({children, ...props}) => {
	return (
		<button {...props} className="px-4 py-2 text-xs md:text-base rounded-md border-solid border-2 capitalize border-stone-500 bg-stone-900 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
			{children}
		</button>
	);
};

export default Button
