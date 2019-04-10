import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import { StyledTextField } from './styled';
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
              <StyledTextField
                id="descripton"
                label="Do"
                value={description}
                onChange={this.props.changeDescription}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={1} md={1} style={{display:'flex'}}>
              <Button 
                onClick={() => add(description)}
                color='primary'
              >
                <Add/>
              </Button>
              <Button 
                onClick={() => clear()}
                color='secondary'
              >
                <Close/>
              </Button>
            </Grid>
          </Grid>
          <Select
            value={option}
            onChange={this.props.changeOption}
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
