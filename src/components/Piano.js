import React, { useEffect, useState } from "react";
import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";
import { v4 as uuidv4 } from 'uuid'
import { whiteKeys, whiteKeysMapping, blackKeys, blackKeysMapping } from "./../CONST/key";

function Piano() {
	const [highlightKey, setHighLightKey] = useState(null)
	const play = (config) => window.piano.play(config[0], config[1], 2);
	const whiteKeysComponent = whiteKeys.map((key, index) => <WhiteKey config={key} highlightKey={highlightKey} play={play} key={index} />);
	const blackKeysComponent = blackKeys.map((key, index) => <BlackKey config={key} highlightKey={highlightKey} play={play} key={index} />);

	const playNode = (event) => {
		const key = event.key
		const config = whiteKeysMapping[key] || blackKeysMapping[key]
		if (config) {
			setHighLightKey({
				key,
				uuid: uuidv4(),
			})
			play(config)
		}
	};
	useEffect(() => {
		const doc = window.document;
		doc.addEventListener("keypress", playNode);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="page">
				<div className="piano">
					{whiteKeysComponent}
					<div>{blackKeysComponent}</div>
				</div>
			</div>
		</>
	);
}

export default Piano;