import Page from '../components/page';
import Link from '../components/link';
import OutboundLink from '../components/outbound-link';
import logOutboundLink from '../utils/log-outbound-link';

const About = () => {
	return (
		<Page
			title="About"
			description="Some insignificant things about me."
		>
			<div className="bg-gray-300 dark:bg-black text-black dark:text-white font-space-mono">
				<h1 className="text-5xl md:text-6xl lg:text-10vw p-5 lg:px-10 bg-gray-100 dark:bg-gray-900 font-bold uppercase">
					About
				</h1>
				<div className="text-base lg:text-lg p-5 lg:p-10 font-thin leading-loose">
					<p>
						Hello, I&apos;m <span className="font-bold">Nikolaos Kamarinakis</span> (a.k.a. kama || <span className="font-bold">k4m4</span>).{' '}
						I currently work as a full-stack software engineer at a cool startup called{' '}
						<Link
							as={OutboundLink}
							className="border-b-2 border-red-500 hover:text-red-500"
							href="https://meeshkan.com"
							onClick={() => logOutboundLink('About > Meeshkan')}
						>
							Meeshkan
						</Link>.
						In the meantime, I&apos;m also an undergraduate student at{' '}
						<Link
							as={OutboundLink}
							className="border-b-2 border-red-500 hover:text-red-500"
							href="https://www.cs.umd.edu/"
							onClick={() => logOutboundLink('About > UMD CS')}
						>
							UMD CS
						</Link>.
						The technologies that I work with these days include mostly <em>Node.js</em>, <em>React</em>, <em>Next.js</em>, and <em>Python</em>.
					</p>
					<p className="pt-6">
						When I&apos;m not coding, you will most likely find me playing tennis 🎾, skiing ⛷, traveling 🌍, listening to{' '}
						<Link
							as={OutboundLink}
							className="border-b-2 border-red-500 hover:text-red-500"
							href="https://open.spotify.com/user/11100023175"
							onClick={() => logOutboundLink('About > Spotify')}
						>
							all kinds of music
						</Link> 🎧,{' '}
						and/or playing the guitar 🎸.
					</p>
				</div>
			</div>
		</Page>
	);
};

export default About;
