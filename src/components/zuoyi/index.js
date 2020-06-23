import React, { Component } from 'react';
import "./index.scss"
import store from '@/reducers/store';
import { bbasset } from '@/action'

class Zback extends Component {
	constructor() {
		super()
		this.state = {
			arr: [1, 2, 3, 4, 5],
			numIndex: 0
		}
	}
	abnav = (a) => {
		store.dispatch(bbasset(a))
		this.setState({
			numIndex: a
		})
	}
	render() {
		const {
			arr, numIndex
		} = this.state

		return (
			<div style={{ width: 200, height: 315, background: "rgba(250,250,250,1)", margin: "20px" }} className="clear" >
				<input type="text" className="zback-header-inp" />
				<p className="zback-content-p clear">
					<span className="span1">合约</span>
					<span className="span2">涨幅</span>
				</p>
				<div>
					{
						arr.map((item, index) => {
							return (
								<div className={numIndex !== index ? "zback-content-li" : "bclick zback-content-li"}
									onClick={() => this.abnav(index)}
									key={item + index}>
									BTC永续
									<span className="span2">-0.72%</span>
								</div>
							)
						})
					}
				</div>
			</div >
		);
	}
}

export default Zback;