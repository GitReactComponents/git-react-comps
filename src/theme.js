import {createMuiTheme} from '@material-ui/core'
import {grey} from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#B90000',
      },
      secondary: {
        main: '#D1D1D1',
      },
    },
    shape: {
      borderRadius: 7,
    },
    spacing: 5
})

theme.props = {
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTextField: {
    variant: 'outlined',
  },
}

theme.overrides = {
  MuiInputLabel: {
    root: {
    }
  },
  MuiOutlinedInput: {
    root: {
      backgroundColor: '#f0f3f3',
      color: '#0001f0',
      fontSize: '15px',
      fontWeight: '550',
      fontFamily: 'Comic Sans MS',
      top: theme.spacing(2),
      border: `1px solid ${grey[500]}`,
      padding: theme.spacing(1),
      outline: `1px solid ${theme.palette.primary.main}`,
      '&$focused': {
        border: `1px solid ${theme.palette.primary.main}`,
        outline: `1px solid ${theme.palette.primary.main}`
      },
    },
  },
  MuiInput: {
    root: {
      top: theme.spacing(2),
      border: `1px solid ${grey[500]}`,
      padding: theme.spacing(1),
      // outline: `1px solid ${theme.palette.secondary.main}`,
      outline: `1px solid ${theme.palette.primary.main}`,
      '&$focused': {
        border: `1px solid ${theme.palette.primary.main}`,
        outline: `1px solid ${theme.palette.primary.main}`
      }
    },
  },
  MuiInputLabel: {
    root: {
      backGround: `${theme.palette.secondary.main}`,

      // ! TEST LATER
      textTransform: 'uppercase',
      fontSize: '1.5rem',
      color: `${theme.palette.primary.main}`
    }
  }
}


export default theme;