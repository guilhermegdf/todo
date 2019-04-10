import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import { changeDescription, add, clear, search } from './actions'

class TodoForm extends Component {
    
  componentWillMount() {
    this.props.search()
  }

  render(){

      const { add, clear, description } = this.props

      return (
          <Grid container spacing={24}>
          <Grid item xs={12} sm={10} md={10}>
            <TextField
              id="descripton"
              label="Do"
              value={description}
              onChange={this.props.changeDescription}
              margin="normal"
              style={{
                width:'100%'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={1} md={1}>
            <Button 
              onClick={() => add(description)}
              color='primary'
              style={{
                marginTop:'50%'
              }}
            >
              <Add/>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1} md={1}>
            <Button 
              onClick={() => clear()}
              color='secondary'
              style={{
                marginTop:'50%'
              }}
            >
              <Close/>
            </Button>
          </Grid>
      </Grid>
      )
  }

}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, add, clear, search }, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoForm)
