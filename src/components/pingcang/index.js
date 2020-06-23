import React, { Component } from 'react'
import { connect } from "react-redux"
@connect(
  state => {
    return {
      list: state.data.list,

    }
  }
)
class Kpingcang extends Component {
  constructor() {
    super()
    this.state = {
      numIndex: 0
    }
  }
  abnav = (a) => {
    this.setState({
      numIndex: a
    })
  }
  render() {
    const {
      numIndex
    } = this.state
    const {
      list
    } = this.props
    return (
      <div style={{ width: 446, height: 340, background: "rgba(18,24,38,.02)" }}>
        <div className="cang-deader-t">
          {
            list.map((item, index) => {
              return (
                <div className={numIndex !== index ? "zback-content-li" : "bclick zback-content-li"}
                  onClick={() => this.abnav(index)}
                  key={item + index}>
                  {item.symbol}
                  <span className="span2">{item.min_trade_number}%</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Kpingcang