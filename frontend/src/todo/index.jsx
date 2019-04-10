import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { StyledPaper } from './styled';
import Divider from '@material-ui/core/Divider';

export default class Todo extends Component {
 
    render() {
        return (
            <StyledPaper>
                <TodoForm/>
                <Divider style={{margin:'20px 0'}}/>
                <TodoList/>
            </StyledPaper>
        )
    }
  }