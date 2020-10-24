import { motion } from 'framer-motion';
import { FiChevronDown as ArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

type HeroProps = {
	title: string;
	subtitle?: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
	return (
		<div className="relative h-screen w-full">
			<div className="relative flex flex-col h-full w-10/12 lg:w-11/12 m-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 0.1,
						},
					}}
					exit={{ opacity: 0 }}
					className="absolute flex justify-between items-center w-full bottom-0 leading-loose mb-40 lg:mb-16"
				>
					<div className="relative max-w-3xl">
						<h1 className="relative font-normal text-2xl md:text-3xl lg:text-4xl">
							{title}
						</h1>
						{subtitle && (
							<h2
								dangerouslySetInnerHTML={{ __html: subtitle }}
								className="relative text-gray-400 font-hairline text-base md:text-lg lg:text-xl mt-2"
							/>
						)}
					</div>
					<motion.div
						whileHover={{ scale: 1.2 }}
						className="inline-flex items-center justify-center text-gray-500 hover:text-white focus:text-white ml-2"
					>
						<Link
							smooth
							to={title.toLowerCase() === 'archive' ? 'archived-posts' : 'projects'}
							duration={500}
							offset={-100}
							className="cursor-pointer lg:p-2"
						>
							<ArrowDown size={22} />
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
