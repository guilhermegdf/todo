import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Done from '@material-ui/icons/Done';
import Delete from '@material-ui/icons/Delete';
import Replay from '@material-ui/icons/Replay';
import If from '../utils/if';

import { markAsDone, markAsPending, remove } from './actions'

const TodoList = props => {

    const list = props.list || []
    
    return (
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Açãos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.description}
                </TableCell>
                <TableCell align="right">
                <If teste={!row.status}>
                    <Button
                    color='success'
                    onClick={() => props.markAsDone(row)}
                    >
                    <Done/>
                    </Button>
                </If>
                <If teste={row.status}>
                    <Button
                    color='warning'
                    onClick={() => props.markAsPending(row)}
                    >
                      <Replay/>
                    </Button>
                    <Button
                    color='danger'
                    onClick={() => props.remove(row)}
                    >
                    <Delete/>
                    </Button>
                </If>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)