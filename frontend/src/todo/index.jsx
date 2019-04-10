import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export default class Todo extends Component {
 
    render() {
        return (
            <Paper style={{
                margin:'100px',
                padding:'30px 100px' 
            }}>
                <TodoForm/>
                <Divider style={{margin:'20px 0'}}/>
                <TodoList/>
            </Paper>
        )
    }
  }