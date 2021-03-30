import {createMuiTheme} from '@material-ui/core'



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
      borderRadius: 25,
    },
    spacing: 5
})

theme.props = {
  MuiInputLabel: {
    shrink: true,
  },
  MuiOutlinedInput: {
    disableUnderline: true,
  },
  MuiTextField: {
    variant: 'outlined',
    borderRadius: 20,
  },
}

theme.overrides = {
  MuiOutlinedInput: {
    root: {
      backgroundColor: '#F0F3F3',
      color: '#0001F0',
      fontSize: '15px',
      fontWeight: '550',
      fontFamily: 'Comic Sans MS',
      top: theme.spacing(1.5),
      border: `2px solid #FFEBEE`,
      padding: theme.spacing(1),
      '&$focused': {
        border: `2px solid ${theme.palette.primary.main}`,
        // outline: `1px solid ${theme.palette.primary.main}`
      },
    },
    input: {
      textAlign: 'center'
    }
  },
  // MuiInputBase: {
  //   root: {
  //     top: theme.spacing(2),
  //     // border: `1px solid ${grey[500]}`,
  //     // borderRadius: 20,
  //     padding: theme.spacing(1),
  //     // outline: `1px solid ${theme.palette.secondary.main}`,
  //     // outline: `1px solid ${theme.palette.primary.main}`,
  //     '&$focused': {
  //       // border: `1px solid ${theme.palette.primary.main}`,
  //       // outline: `1px solid ${theme.palette.primary.main}`
  //     }
  //   },
  // },
  MuiInputLabel: {
    root: {
      // backGround: `${theme.palette.primary.main}`,

      // ! TEST LATER
      textTransform: 'uppercase',
      fontSize: '1.5rem',
      color: `${theme.palette.primary.main}`
    }
  }
}


export default theme;