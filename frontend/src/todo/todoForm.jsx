import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import { changeDescription, changeOption, add, clear, search } from './actions'

class TodoForm extends Component {

  componentWillMount() {
    this.props.search()
  }
 
  render(){

      const { add, clear, description, option } = this.props

      return (
        <div>
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
        <Select
          value={option}
          onChange={this.props.changeOption}
          style={{width:'120px'}}
          displayEmpty
          >
          <MenuItem value=''>
          <em>None</em>
          </MenuItem>
          <MenuItem value="complete"
          >Complete</MenuItem>
          <MenuItem value="pending"
          >Pendign</MenuItem>
        </Select>
        </div>
      )
  }

}

const mapStateToProps = state => ({ description: state.todo.description, option: state.todo.option })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, changeOption, add, clear, search }, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoForm)
