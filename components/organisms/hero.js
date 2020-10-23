import { FiChevronDown as ArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { string } from 'prop-types';

const Hero = ({ title, subtitle }) => {
	return (
		<div className="relative h-screen w-full">
			<div className="relative flex flex-col h-full w-10/12 lg:w-11/12 m-auto">
				<div className="absolute flex justify-between items-center w-full bottom-0 leading-loose mb-40 lg:mb-16">
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
					<div className="inline-flex items-center justify-center">
						<Link
							smooth
							to={title.toLowerCase() === 'archive' ? 'archived-posts' : 'projects'}
							duration={500}
							offset={-100}
							className="cursor-pointer lg:p-2"
						>
							<ArrowDown size={22} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

Hero.propTypes = {
	title: string.isRequired,
	subtitle: string,
};

export default Hero;
