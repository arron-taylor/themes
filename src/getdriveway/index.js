export const driveway = {
  palette: {
    type: 'light',
    common:{
      black:'#000',
      white:'#fff'
    },
    background:{
      paper:'#fff',
      default:'#fff'
    },
    primary:{
      light:'#b070c8',
      main:'#6f30a0',
      dark:'#55276C',
      contrastText:'rgba(247, 247, 247, 1)'
    },
    secondary:{
      light:'rgba(138, 138, 138, 1)',
      main:'rgba(74, 74, 74, 1)',
      dark:'rgba(51, 51, 51, 1)',
      contrastText:'#fff'
    },
    error:{
      light:'#e57373',
      main:'#de3b72',
      dark:'#d32f2f',
      contrastText:'#fff'
    },
    success: {
      main: '#008f77',
      dark: '#00614b',
      light: '#4fc0a6'
    },
    info: {
      main: '#24b1e4',
      dark: '#0081b2',
      light: '#6de3ff'
    },
    text:{
      primary:'rgba(54, 54, 54, 1)',
      secondary:'rgba(74, 74, 74, 1)',
      disabled:'rgba(0, 0, 0, 0.38)',
      hint:'rgba(0, 0, 0, 0.38)'}
    },
  mixins: {
    toolbar: {
      minHeight: 64
    }
  },
  typography: {
    h1: {
      fontWeight: '700',
      lineHeight: 1.117,
      letterSpacing: '-0.01562em',
      fontFamily: 'Raleway',
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: 'Open Sans',
    },
    h3: {
      fontWeight: '700',
      fontFamily: 'Raleway',
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 800,
      fontFamily: 'Raleway',
    },
    h6: {
      fontWeight: 800,
      fontFamily: 'Raleway',
    },
    p: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      fontFamily: 'Open Sans',
    },
    caption: {
      fontSize: '14px'
    },
  },
  props: {
    MuiAppBar: {
      elevation: 3,
      disableGutters: true
    },
    MuiFab: {
      disableElevation: true,
      disableRipple: true,
    },
    MuiButtonGroup: {
      disableElevation: true,
      disableRipple: true,
      size: 'small'
    },
    MuiButton: {
      disableElevation: true,
      size: 'small'
    },
    MuiTextField: {
      variant: 'outlined',
    },
    MuiSelect: {
      MenuProps: {
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        }
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 1024,
      lg: 1215,
      xl: 1440,
    },
  },
}

export const getDriveway = (mode) => {
  const isDark = (mode === 'dark')
  return isDark ? driveway_dark : driveway
}

export const driveway_dark = {
  ...driveway,
  palette: {
   // ...driveway.palette,
   type: 'dark',
    primary:{
      light:'#b070c8',
      main:'#6f30a0',
      dark:'#55276C',
      contrastText:'#eee'
    },
    secondary:{
      light:'rgba(138, 138, 138, 1)',
      main:'rgba(74, 74, 74, 1)',
      dark:'rgba(51, 51, 51, 1)',
      contrastText:'#fff'
    },
    background:{
      paper:'#424242',
      default:'#333'
    },
    text:{
      primary:'#fff',
      secondary:'#ccc',
      disabled:'#aaa',
      hint:'rgba(0, 0, 0, 0.38)'
    },
  }
}

driveway.overrides = {
  MuiAppBar: {
    colorDefault: {
      backgroundColor: '#fff'
    }
  },
  MuiCheckbox: {
    root: {
      color: driveway.palette.secondary.dark,
    },
    colorSecondary: {
      "&$checked": {
        color: driveway.palette.primary.main,
      }
    }
  },
  MuiRadio: {
     colorSecondary: {
      "&$checked": {
        color: driveway.palette.primary.main,
      }
    }
  },
  MuiFab: {
    secondary: {
      color: driveway.palette.primary.contrastText
    }
  },
  MuiSwitch: {
    track: {
      backgroundColor: '#6a6a6a',
    },
    colorPrimary: {
      '& .MuiSwitch-thumb': {
        color: driveway.palette.primary.main,
      },
      "&$checked": {
        color: driveway.palette.primary.main,
        '& .MuiSwitch-thumb': {
          color: driveway.palette.primary.main
        }
      },
      '&$checked + $track': {
        backgroundColor: '#888',
      },
    },
    colorSecondary: {
      '& .MuiSwitch-thumb': {
        color: '#777',
      },
      "&$checked": {
        color: driveway.palette.secondary.contrastText,
        '& .MuiSwitch-thumb': {
          color: '#333',
        }
      },
      '&$checked + $track': {
        backgroundColor: '#333',
      },
    }
  },
  MuiSelect: {
    icon: {
      color: driveway.palette.primary.main,
    }
  },
  MuiInput: {
    underline: {
      '&:$before': {
        borderBottomColor: driveway.palette.primary.main,
        borderBottomWidth: '2px'
      },
      '&:$after': {
        borderBottomColor: driveway.palette.primary.main,
        borderBottomWidth: '2px'
      },
    }
  },
  MuiInput: {
    underline: {
      '&:$before': {
        borderBottomColor: driveway.palette.primary.main
      }
    }
  },
  MuiChip: {
    outlined: {
      borderColor: driveway.palette.text.primary,
      borderWidth: '2px',
      color: driveway.palette.text.primary,
      '& .MuiChip-icon': {
        color: driveway.palette.text.primary,
      },
      '& .MuiChip-deleteIcon': {
        color: driveway.palette.text.primary,
      }
    },
    outlinedPrimary: {
      borderColor: driveway.palette.primary.main,
      borderWidth: '2px',
      color: driveway.palette.primary.main,
      '& .MuiChip-icon': {
        color: driveway.palette.primary.main,
      },
      '& .MuiChip-deleteIcon': {
        color: driveway.palette.primary.main,
        '&:hover': {
          color: driveway.palette.primary.dark,
        }
      }
    },
    outlinedSecondary: {
      borderColor: driveway.palette.secondary.main,
      borderWidth: '2px',
      color: driveway.palette.secondary.main,
      '& .MuiChip-icon': {
        color: driveway.palette.secondary.main,
      },
      '& .MuiChip-deleteIcon': {
        color: driveway.palette.secondary.main,
        '&:hover': {
          color: driveway.palette.secondary.dark,
        }
      }
    },
    clickableColorPrimary: {
      color: driveway.palette.primary.contrastText,
      '& .MuiChip-deleteIcon': {
        color: driveway.palette.primary.contrastText,
      }
    },
    deletable: {
      '& .MuiChip-deleteIcon': {
        color: '#888',
        '&:hover': {
          color: '#666',
        }
      }
    },
    deletableColorPrimary: {
      color: driveway.palette.primary.contrastText,
      '& .MuiChip-deleteIcon': {
        color: driveway.palette.primary.contrastText,
      },
    },
  },
  MuiTableCell: {
    head: {
      '& svg': {
        color: driveway.palette.primary.dark,
      }
    },
    alignRight: {
      '& svg': {
        color: driveway.palette.primary.dark,
      }
    }
  },
  MuiTableRow: {
    root: {
      "&$selected": {
        backgroundColor: '#eee',
        '&:hover': {
          backgroundColor: '#eee'
        }
      },
      '&$hover:not($selected)': {
        '&:hover': {
          backgroundColor: '#eee',
        }
      },
    }
  },
  MuiBackdrop: {
    root: {
      backgroundColor: 'none',
    }
  },
  MuiLinearProgress: {
    root: {
      backgroundColor: 'transparent'
    }
  },
  MuiBadge: {
    colorSecondary: {
      backgroundColor: driveway.palette.primary.dark,
      color: driveway.palette.primary.contrastText,
    }
  },
  MuiPaper: {
    elevation3: {
      boxShadow: '0 0 5px rgb(1 1 1 / 25%)'
    }
  },
  MuiContainer: {
    root: {
      border: '1px solid transparent',
      padding: '0 0 1rem 0rem'
    }
  },
  MuiFormHelperText: {
    root: {
      fontSize: '12px',
      contained: {
        fontSize: '12px'
      },
    },
    contained: {
      fontSize: '12px',
      marginLeft: '0px',
      '& p': {
        fontSize: '12px'
      }
    }
  },
  MuiOutlinedInput: {
    root: {
      position: 'relative',
      fontFamily: 'Open Sans',
      '& $notchedOutline': {
        borderColor: '#dadada'
      },
      '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
        borderColor: driveway.palette.primary.light,
      },
      '&$focused $notchedOutline': {
        borderColor: driveway.palette.primary.main,
        borderWidth: '2px'
      },
    },
  },
  MuiBreadcrumbs: {
    root: {
    },
    ol: {
      '& .MuiTypography-colorInherit': {
        color: '#999'
      },
      '& .MuiTypography-colorTextPrimary': {
        border: `1px solid ${driveway.palette.primary.light}`,
        color: driveway.palette.primary.light,
        padding: '.15rem .35rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '3px',
        '&:hover': {
          cursor: 'pointer',
          border: `1px solid ${driveway.palette.primary.dark}`,
          color: driveway.palette.primary.dark,
        }
      }
    }
  },
  MuiBox: {
    root: {
      marginTop: '100px',
    }
  },
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: driveway.palette.primary.main,
        color: driveway.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: driveway.palette.primary.main,
        }
      }
    },
    button: {
      '&:$hover': {
        backgroundColor: driveway.palette.primary.main,
        color: driveway.palette.primary.contrastText,
        '& .MuiListItemIcon-root': {
          color: driveway.palette.primary.contrastText,
        }
      }
    }
  },
  MuiListItemIcon: {
    root: {
      color: '#888'
    }
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: driveway.palette.primary.dark
    },
    action: {
      '& .MuiButton-textSizeSmall': {
        color: '#fff',
        '&:hover': {
          color: driveway.palette.primary.main
        }
      }
    }
  },
  MuiButton: {
    root: {
      textTransform: 'capitalize',
    },
    contained: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      backgroundColor: '#ccc',
      color: '#333',
      borderRadius: 2,
      '&:hover': {
        backgroundColor: '#888',
        color: '#fff'
      },
      '&$disabled': {
        color: driveway.palette.text.disabled,
        border: `1px solid ${driveway.palette.text.disabled}`,
      }
    },
    containedPrimary: {
      color: driveway.palette.primary.contrastText,
    },
    containedSecondary: {

    },
    outlinedSecondary: {
      color: '#666',
      borderColor: '#aaa',
      '&:hover': {
        borderColor: '#888',
        backgroundColor: '#fafafa'
      }
    },
    textSecondary: {
      color: '#666',
      '&:hover': {
        backgroundColor: '#fafafa'
      }
    },
    containedSizeSmall: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      fontSize: '1rem',
      borderRadius: 32,
    },
    containedSizeLarge: {
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      borderRadius: 32,
      '&:hover': {
        background: driveway.palette.primary.light,
      },
      '&:active': {
        background: driveway.palette.primary.dark,
      }
    },
    outlinedSizeLarge: {
      padding: '1rem 1.85rem',
      fontSize: '1.25rem',
      height: '2.25em',
      borderRadius: 32,
      lineHeight: 1.5,
      '&:hover': {
        background: driveway.palette.primary.main,
        color: driveway.palette.primary.contrastText,
      }
    },
    outlined: {
      padding: '.5rem .5rem',
      fontSize: '.65rem',
      borderRadius: 2,
      height: '2.25em',
      lineHeight: 1.5,
      color: driveway.typography.primary,
      borderColor: driveway.typography.primary,
      '&:hover': {
        background: driveway.palette.primary.contrastText,
        color: driveway.palette.primary.titleText,
      },
      '&$disabled': {
        color: driveway.palette.text.disabled,
        border: `1px solid ${driveway.palette.text.disabled}`,
      }
    },
  },
  MuiBottomNavigationAction: {
    root: {
      color: driveway.palette.text.secondary,
      '&$selected': {
        color: driveway.palette.primary.main,
        '&:hover': {
          backgroundColor: driveway.palette.background.default
        }
      },
      '&:hover': {
        backgroundColor: '#ccc'
      },
    },
  }
}


driveway_dark.overrides = {
  MuiCheckbox: {
    root: {
      color: driveway_dark.palette.primary.light,
    },
    colorSecondary: {
      "&$checked": {
        color: driveway_dark.palette.primary.light,
      }
    }
  },
  MuiRadio: {
    colorSecondary: {
      color: driveway_dark.palette.primary.light,
      opacity: .65,
      '&:hover': {
        color: driveway_dark.palette.primary.light,
        opacity: 1
      },
     "&$checked": {
       color: driveway_dark.palette.primary.light,
       opacity: 1
     }
   }
 },
  MuiButton: {
    root: {
      textTransform: 'capitalize',
    },
    contained: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      backgroundColor: '#333',
      color: driveway_dark.palette.primary.contrastText,
      borderRadius: 2,
      '&:hover': {
        backgroundColor: '#222'
      },
      '&$disabled': {
        color: driveway_dark.palette.text.disabled,
        border: `1px solid ${driveway_dark.palette.text.disabled}`,
      }
    },
    containedSizeSmall: {
      padding: 'calc(.375em - 1px) .75em',
      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      fontSize: '1rem',
      color: driveway_dark.palette.primary.contrastText,
      borderRadius: 32,
    },
    containedSizeLarge: {

      lineHeight: 1.5,
      height: '2.25em',
      letterSpacing: '0px',
      border: '0px solid transparent',
      borderRadius: 32,
      '&:hover': {
        background: driveway_dark.palette.primary.light,
      },
      '&:active': {
        background: driveway_dark.palette.primary.dark,
      }
    },
    outlinedSizeLarge: {
      padding: '1rem 1.85rem',
      fontSize: '1.25rem',
      height: '2.25em',
      borderRadius: 32,
      lineHeight: 1.5,
      '&:hover': {
        background: driveway_dark.palette.primary.main,
        color: driveway_dark.palette.primary.contrastText,
      }
    },
    outlined: {
      padding: '.5rem .5rem',
      fontSize: '.65rem',
      borderRadius: 2,
      height: '2.25em',
      lineHeight: 1.5,
      color: driveway_dark.typography.primary,
      borderColor: driveway_dark.typography.primary,
      '&:hover': {
        background: 'rgba(10, 10, 10, 0.25)',
        color: driveway_dark.palette.primary.titleText,
      },
      '&$disabled': {
        color: driveway_dark.palette.text.disabled,
        border: `1px solid ${driveway_dark.palette.text.disabled}`,
      }
    },

    outlinedPrimary: {
      color: driveway_dark.palette.primary.light,
      borderColor: driveway_dark.palette.primary.light
    },
    outlinedSecondary: {
      color: driveway_dark.palette.secondary.light,
      borderColor: driveway_dark.palette.secondary.light
    },
    text: {
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
    textPrimary: {
      color: driveway_dark.palette.primary.light,
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
    textSecondary: {
      color: driveway_dark.palette.secondary.light,
      '&:hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.15)'
      }
    },
  },
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: driveway_dark.palette.primary.light,
        color: '#333',
        '&:hover': {
          backgroundColor: driveway_dark.palette.primary.light,
        }
      }
    },
    button: {
      '&:$hover': {
        backgroundColor: driveway_dark.palette.primary.light,
        color: '#333',
        '& .MuiListItemIcon-root': {
          color: driveway_dark.palette.primary.dark.contrastText,
        }
      }
    }
  },
  MuiFormLabel: {
    root: {
      color: driveway_dark.palette.text.primary,
      opacity: .75,
      '&$focused': {
        color: driveway_dark.palette.text.primary,
      }
    },
  },
  MuiFormHelperText: {
    root: {
      fontSize: '12px',
      color: driveway_dark.palette.text.primary,
      contained: {
        fontSize: '12px'
      },
    },
    contained: {
      fontSize: '12px',
      marginLeft: '0px',
      '& p': {
        fontSize: '12px'
      }
    }
  },
  MuiSelect: {
    icon: {
      color: driveway_dark.palette.primary.light,
    }
  },
  MuiInput: {
    underline: {
      '&:$before': {
        borderBottomColor: driveway_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
      '&:$after': {
        borderBottomColor: driveway_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
    }
  },
  MuiOutlinedInput: {
    root: {
      position: 'relative',
      fontFamily: 'Open Sans',
      '& $notchedOutline': {
        borderColor: '#dadada'
      },
      '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
        borderColor: driveway_dark.palette.primary.light,
      },
      '&$focused $notchedOutline': {
        borderColor: driveway_dark.palette.primary.light,
        borderWidth: '2px'
      },
    },
  },
  MuiSwitch: {
    track: {
      backgroundColor: '#6a6a6a',
    },
    colorPrimary: {
      '& .MuiSwitch-thumb': {
        color: driveway_dark.palette.primary.main,
      },
      "&$checked": {
        color: driveway_dark.palette.primary.main,
        '& .MuiSwitch-thumb': {
          color: driveway_dark.palette.primary.main
        }
      },
      '&$checked + $track': {
        backgroundColor: '#ccc',
      },
    },
    colorSecondary: {
      '& .MuiSwitch-thumb': {
        color: '#eee',
      },
      "&$checked": {
        color: driveway_dark.palette.secondary.contrastText,
        '& .MuiSwitch-thumb': {
          color: '#eee',
        }
      },
      '&$checked + $track': {
        backgroundColor: '#ccc',
      },
    }
  },
  MuiTableCell: {
    head: {
      '& svg': {
        color: driveway_dark.palette.primary.light,
      }
    },
    alignRight: {
      '& svg': {
        color: '#fff',
      }
    }
  },
  MuiSlider: {
    thumb: {

    },
    track: {
      backgroundColor: driveway_dark.palette.primary.light
    },
    rail: {
      backgroundColor: driveway_dark.palette.primary.light
    }
  },
  MuiTableRow: {
    root: {
      "&$selected": {
        backgroundColor: '#222',
        '&:hover': {
          backgroundColor: '#222'
        }
      },
      '&$hover:not($selected)': {
        '&:hover': {
          backgroundColor: driveway_dark.palette.background.default,
        }
      },
    }
  },
  MuiBottomNavigationAction: {
    root: {
      color: driveway_dark.palette.text.secondary,
      '&$selected': {
        color: driveway_dark.palette.primary.light,
        '&:hover': {
          backgroundColor: driveway_dark.palette.background.default
        }
      },
      '&:hover': {
        backgroundColor: driveway_dark.palette.background.default
      },
    },
  },
  MuiChip: {
    outlinedPrimary: {
      borderColor: driveway_dark.palette.primary.light,
      borderWidth: '2px',
      color: driveway_dark.palette.primary.light,
      '& .MuiChip-icon': {
        color: driveway_dark.palette.primary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: driveway_dark.palette.primary.light,
        '&:hover': {
          color: driveway_dark.palette.primary.dark,
        }
      }
    },
    outlinedSecondary: {
      borderColor: driveway_dark.palette.secondary.light,
      borderWidth: '2px',
      color: driveway_dark.palette.secondary.light,
      '& .MuiChip-icon': {
        color: driveway_dark.palette.secondary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: driveway_dark.palette.secondary.light,
        '&:hover': {
          color: driveway_dark.palette.secondary.dark,
        }
      }
    },
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: driveway_dark.palette.primary.main,
      color: '#fff'
    },
    action: {
      '& .MuiButton-textSizeSmall': {
        color: '#fff',
        '&:hover': {
          color: driveway_dark.palette.primary.main
        }
      }
    }
  },
}
