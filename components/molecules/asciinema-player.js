import { string, bool, number } from 'prop-types';
import { useEffect } from 'react';

const AsciinemaPlayer = ({ id, autoplay, size, cols, rows, speed }) => {
	const playerDivId = `div_${id}`;

	useEffect(() => {
		const script = document.createElement('script');

		script.src = `https://asciinema.org/a/${id}.js`;
		script.id = `asciicast-${id}`;
		script.async = true;

		if (autoplay) {
			script.dataset.autoplay = autoplay.toString();
		}

		if (size) {
			script.dataset.size = size;
		}

		if (cols) {
			script.dataset.cols = cols.toString();
		}

		if (rows) {
			script.dataset.rows = rows.toString();
		}

		if (speed) {
			script.dataset.speed = speed.toString();
		}

		const playerDiv = document.querySelector(`#${playerDivId}`);
		if (playerDiv) {
			playerDiv.append(script);
		}

		return () => {
			if (playerDiv) {
				playerDiv.remove(script);
			}
		};
	}, [playerDivId, id, autoplay, cols, rows, size, speed]);

	return <div id={playerDivId} />;
};

AsciinemaPlayer.propTypes = {
	id: string.isRequired,
	autoplay: bool,
	size: string,
	cols: number,
	rows: number,
	speed: number,
};

export default AsciinemaPlayer;
