import { useEffect } from 'react';

type AsciinemaPlayerProps = {
	id: string;
	autoplay?: boolean;
	size?: string;
	cols?: number;
	rows?: number;
	speed?: number;
};

const AsciinemaPlayer = ({
	id,
	autoplay,
	size,
	cols,
	rows,
	speed,
}: AsciinemaPlayerProps) => {
	const playerDivId = `div_${id}`;

	useEffect(() => {
		const script = document.createElement('script');

		script.src = `https://asciinema.org/a/${id}.js`;
		script.id = `asciicast-${id}`;
		script.async = true;

		if (autoplay) {
			script.dataset.autoplay = String(autoplay);
		}

		if (size) {
			script.dataset.size = size;
		}

		if (cols) {
			script.dataset.cols = String(cols);
		}

		if (rows) {
			script.dataset.rows = String(rows);
		}

		if (speed) {
			script.dataset.speed = String(speed);
		}

		const playerDiv = document.querySelector(`#${playerDivId}`);
		if (playerDiv) {
			playerDiv.append(script);
		}

		return () => {
			if (playerDiv) {
				playerDiv.remove();
			}
		};
	}, [playerDivId, id, autoplay, cols, rows, size, speed]);

	return <div id={playerDivId} />;
};

export default AsciinemaPlayer;
