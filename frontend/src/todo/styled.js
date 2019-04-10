import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const StyledPaper = styled(Paper)`
margin:100px
padding:30px 100px
@media(max-width:600px){
    margin:0
    padding: 30px 20px
} 
`
const StyledTextField = styled(TextField)`
width:100%
`

export { StyledPaper, StyledTextField }