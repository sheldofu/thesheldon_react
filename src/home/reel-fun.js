import React from 'react';
import SpinLetter from "./spin-letter.js"
import Paper from '@material-ui/core/Paper';

class ReelFun extends React.Component {


	render() {
		return (
			<div className="jackpot">
				<div>
					<SpinLetter letterId = "letter1" />
					<SpinLetter letterId = "letter2" />
					<SpinLetter letterId = "letter3" />
					<SpinLetter letterId = "letter4" />
					<SpinLetter letterId = "letter5" />
					<SpinLetter letterId = "letter6" />
					<SpinLetter letterId = "letter7" />
				</div>		
				<div>
					<SpinLetter letterId = "letter8" />
					<SpinLetter letterId = "letter9" />
					<SpinLetter letterId = "letter10" />
					<SpinLetter letterId = "letter11" />
					<SpinLetter letterId = "letter12" />
				</div>
			</div>
		);
	}
}

export default ReelFun;