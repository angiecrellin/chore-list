import { connect } from 'react-redux'
import ChoreListInfoView from '../components/choreListInfoView'

const mapStateToProps = (state) => {
  return {
    count: state.chores.length
  }
}

export default connect(mapStateToProps, null)(ChoreListInfoView)

/*import React from "react"

const ChoreListInfoView = () => <h1>Hello</h1>

export default ChoreListInfoView*/
