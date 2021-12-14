export const daylightrepairs = {
  palette: {
    mode: 'light',
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

export const getDaylightrepairs = (mode) => {
  const isDark = (mode === 'dark')
  return isDark ? daylightrepairs_dark : daylightrepairs
}

export const daylightrepairs_dark = {
  ...daylightrepairs,
  palette: {
   // ...daylightrepairs.palette,
   mode: 'dark',
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

daylightrepairs.components = {
  MuiAppBar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: '#fff'
      }
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: daylightrepairs.palette.secondary.dark,
      },
      colorSecondary: {
        "&$checked": {
          color: daylightrepairs.palette.primary.main,
        }
      }
    },
  },
  MuiRadio: {
    styleOverrides: {
      colorSecondary: {
        "&$checked": {
          color: daylightrepairs.palette.primary.main,
        }
      },
    }
  },
  MuiFab: {
    styleOverrides: {
      secondary: {
        color: daylightrepairs.palette.primary.contrastText
      }
    },
  },
  MuiSwitch: {
    styleOverrides: {
      track: {
        backgroundColor: '#6a6a6a',
      },
      colorPrimary: {
        '& .MuiSwitch-thumb': {
          color: daylightrepairs.palette.primary.main,
        },
        "&$checked": {
          color: daylightrepairs.palette.primary.main,
          '& .MuiSwitch-thumb': {
            color: daylightrepairs.palette.primary.main
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
          color: daylightrepairs.palette.secondary.contrastText,
          '& .MuiSwitch-thumb': {
            color: '#333',
          }
        },
        '&$checked + $track': {
          backgroundColor: '#333',
        },
      }
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        color: daylightrepairs.palette.primary.main,
      }
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        '&:$before': {
          borderBottomColor: daylightrepairs.palette.primary.main,
          borderBottomWidth: '2px'
        },
        '&:$after': {
          borderBottomColor: daylightrepairs.palette.primary.main,
          borderBottomWidth: '2px'
        },
      }
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        '&:$before': {
          borderBottomColor: daylightrepairs.palette.primary.main
        }
      }
    },
  },
  MuiChip: {
    styleOverrides: {
      outlined: {
        borderColor: daylightrepairs.palette.text.primary,
        borderWidth: '2px',
        color: daylightrepairs.palette.text.primary,
        '& .MuiChip-icon': {
          color: daylightrepairs.palette.text.primary,
        },
        '& .MuiChip-deleteIcon': {
          color: daylightrepairs.palette.text.primary,
        }
      },
      outlinedPrimary: {
        borderColor: daylightrepairs.palette.primary.main,
        borderWidth: '2px',
        color: daylightrepairs.palette.primary.main,
        '& .MuiChip-icon': {
          color: daylightrepairs.palette.primary.main,
        },
        '& .MuiChip-deleteIcon': {
          color: daylightrepairs.palette.primary.main,
          '&:hover': {
            color: daylightrepairs.palette.primary.dark,
          }
        }
      },
      outlinedSecondary: {
        borderColor: daylightrepairs.palette.secondary.main,
        borderWidth: '2px',
        color: daylightrepairs.palette.secondary.main,
        '& .MuiChip-icon': {
          color: daylightrepairs.palette.secondary.main,
        },
        '& .MuiChip-deleteIcon': {
          color: daylightrepairs.palette.secondary.main,
          '&:hover': {
            color: daylightrepairs.palette.secondary.dark,
          }
        }
      },
      clickableColorPrimary: {
        color: daylightrepairs.palette.primary.contrastText,
        '& .MuiChip-deleteIcon': {
          color: daylightrepairs.palette.primary.contrastText,
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
        color: daylightrepairs.palette.primary.contrastText,
        '& .MuiChip-deleteIcon': {
          color: daylightrepairs.palette.primary.contrastText,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        '& svg': {
          color: daylightrepairs.palette.primary.dark,
        }
      },
      alignRight: {
        '& svg': {
          color: daylightrepairs.palette.primary.dark,
        }
      }
    },
  },
  MuiTableRow: {
    styleOverrides: {
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
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: 'none',
      }
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent'
      }
    },
  },
  MuiBadge: {
    styleOverrides: {
      colorSecondary: {
        backgroundColor: daylightrepairs.palette.primary.dark,
        color: daylightrepairs.palette.primary.contrastText,
      }
    },
  },
  MuiPaper: {
    styleOverrides: {
      elevation3: {
        boxShadow: '0 0 5px rgb(1 1 1 / 25%)'
      }
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        border: '1px solid transparent',
        padding: '0 0 1rem 0rem'
      }
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
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
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        position: 'relative',
        fontFamily: 'Open Sans',
        '& $notchedOutline': {
          borderColor: '#dadada'
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: daylightrepairs.palette.primary.light,
        },
        '&$focused $notchedOutline': {
          borderColor: daylightrepairs.palette.primary.main,
          borderWidth: '2px'
        },
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
      },
      ol: {
        '& .MuiTypography-colorInherit': {
          color: '#999'
        },
        '& .MuiTypography-colorTextPrimary': {
          border: `1px solid ${daylightrepairs.palette.primary.light}`,
          color: daylightrepairs.palette.primary.light,
          padding: '.15rem .35rem',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '3px',
          '&:hover': {
            cursor: 'pointer',
            border: `1px solid ${daylightrepairs.palette.primary.dark}`,
            color: daylightrepairs.palette.primary.dark,
          }
        }
      }
    },
  },
  MuiBox: {
    styleOverrides: {
      root: {
        marginTop: '100px',
      }
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&$selected': {
          backgroundColor: daylightrepairs.palette.primary.main,
          color: daylightrepairs.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: daylightrepairs.palette.primary.main,
          }
        }
      },
      button: {
        '&:$hover': {
          backgroundColor: daylightrepairs.palette.primary.main,
          color: daylightrepairs.palette.primary.contrastText,
          '& .MuiListItemIcon-root': {
            color: daylightrepairs.palette.primary.contrastText,
          }
        }
      }
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: '#888'
      }
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: daylightrepairs.palette.primary.dark
      },
      action: {
        '& .MuiButton-textSizeSmall': {
          color: '#fff',
          '&:hover': {
            color: daylightrepairs.palette.primary.main
          }
        }
      }
    },
  },
  MuiButton: {
    styleOverrides: {
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
          color: daylightrepairs.palette.text.disabled,
          border: `1px solid ${daylightrepairs.palette.text.disabled}`,
        }
      },
      containedPrimary: {
        color: daylightrepairs.palette.primary.contrastText,
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
          background: daylightrepairs.palette.primary.light,
        },
        '&:active': {
          background: daylightrepairs.palette.primary.dark,
        }
      },
      outlinedSizeLarge: {
        padding: '1rem 1.85rem',
        fontSize: '1.25rem',
        height: '2.25em',
        borderRadius: 32,
        lineHeight: 1.5,
        '&:hover': {
          background: daylightrepairs.palette.primary.main,
          color: daylightrepairs.palette.primary.contrastText,
        }
      },
      outlined: {
        padding: '.5rem .5rem',
        fontSize: '.65rem',
        borderRadius: 2,
        height: '2.25em',
        lineHeight: 1.5,
        color: daylightrepairs.typography.primary,
        borderColor: daylightrepairs.typography.primary,
        '&:hover': {
          background: daylightrepairs.palette.primary.contrastText,
          color: daylightrepairs.palette.primary.titleText,
        },
        '&$disabled': {
          color: daylightrepairs.palette.text.disabled,
          border: `1px solid ${daylightrepairs.palette.text.disabled}`,
        }
      },
    }
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        color: daylightrepairs.palette.text.secondary,
        '&$selected': {
          color: daylightrepairs.palette.primary.main,
          '&:hover': {
            backgroundColor: daylightrepairs.palette.background.default
          }
        },
        '&:hover': {
          backgroundColor: '#ccc'
        },
      },
    }
  }
}


daylightrepairs_dark.components = {
  MuiCheckbox: {
   styleOverrides: {
    root: {
      color: daylightrepairs_dark.palette.primary.light,
    },
    colorSecondary: {
      "&$checked": {
        color: daylightrepairs_dark.palette.primary.light,
      }
    }
   }
  },
  MuiRadio: {
    styleOverrides: {
      colorSecondary: {
        color: daylightrepairs_dark.palette.primary.light,
        opacity: .65,
        '&:hover': {
          color: daylightrepairs_dark.palette.primary.light,
          opacity: 1
        },
       "&$checked": {
         color: daylightrepairs_dark.palette.primary.light,
         opacity: 1
       }
     }
    }
 },
  MuiButton: {
    styleOverrides: {
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
        color: daylightrepairs_dark.palette.primary.contrastText,
        borderRadius: 2,
        '&:hover': {
          backgroundColor: '#222'
        },
        '&$disabled': {
          color: daylightrepairs_dark.palette.text.disabled,
          border: `1px solid ${daylightrepairs_dark.palette.text.disabled}`,
        }
      },
      containedSizeSmall: {
        padding: 'calc(.375em - 1px) .75em',
        lineHeight: 1.5,
        height: '2.25em',
        letterSpacing: '0px',
        border: '0px solid transparent',
        fontSize: '1rem',
        color: daylightrepairs_dark.palette.primary.contrastText,
        borderRadius: 32,
      },
      containedSizeLarge: {

        lineHeight: 1.5,
        height: '2.25em',
        letterSpacing: '0px',
        border: '0px solid transparent',
        borderRadius: 32,
        '&:hover': {
          background: daylightrepairs_dark.palette.primary.light,
        },
        '&:active': {
          background: daylightrepairs_dark.palette.primary.dark,
        }
      },
      outlinedSizeLarge: {
        padding: '1rem 1.85rem',
        fontSize: '1.25rem',
        height: '2.25em',
        borderRadius: 32,
        lineHeight: 1.5,
        '&:hover': {
          background: daylightrepairs_dark.palette.primary.main,
          color: daylightrepairs_dark.palette.primary.contrastText,
        }
      },
      outlined: {
        padding: '.5rem .5rem',
        fontSize: '.65rem',
        borderRadius: 2,
        height: '2.25em',
        lineHeight: 1.5,
        color: daylightrepairs_dark.typography.primary,
        borderColor: daylightrepairs_dark.typography.primary,
        '&:hover': {
          background: 'rgba(10, 10, 10, 0.25)',
          color: daylightrepairs_dark.palette.primary.titleText,
        },
        '&$disabled': {
          color: daylightrepairs_dark.palette.text.disabled,
          border: `1px solid ${daylightrepairs_dark.palette.text.disabled}`,
        }
      },

      outlinedPrimary: {
        color: daylightrepairs_dark.palette.primary.light,
        borderColor: daylightrepairs_dark.palette.primary.light
      },
      outlinedSecondary: {
        color: daylightrepairs_dark.palette.secondary.light,
        borderColor: daylightrepairs_dark.palette.secondary.light
      },
      text: {
        '&:hover': {
          backgroundColor: 'rgba(10, 10, 10, 0.15)'
        }
      },
      textPrimary: {
        color: daylightrepairs_dark.palette.primary.light,
        '&:hover': {
          backgroundColor: 'rgba(10, 10, 10, 0.15)'
        }
      },
      textSecondary: {
        color: daylightrepairs_dark.palette.secondary.light,
        '&:hover': {
          backgroundColor: 'rgba(10, 10, 10, 0.15)'
        }
      },
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&$selected': {
          backgroundColor: daylightrepairs_dark.palette.primary.light,
          color: '#333',
          '&:hover': {
            backgroundColor: daylightrepairs_dark.palette.primary.light,
          }
        }
      },
      button: {
        '&:$hover': {
          backgroundColor: daylightrepairs_dark.palette.primary.light,
          color: '#333',
          '& .MuiListItemIcon-root': {
            color: daylightrepairs_dark.palette.primary.dark.contrastText,
          }
        }
      }
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: daylightrepairs_dark.palette.text.primary,
        opacity: .75,
        '&$focused': {
          color: daylightrepairs_dark.palette.text.primary,
        }
      },
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        color: daylightrepairs_dark.palette.text.primary,
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
    }
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        color: daylightrepairs_dark.palette.primary.light,
      }
    }
  },
  MuiInput: {
   styleOverrides: {
    underline: {
      '&:$before': {
        borderBottomColor: daylightrepairs_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
      '&:$after': {
        borderBottomColor: daylightrepairs_dark.palette.primary.light,
        borderBottomWidth: '2px'
      },
    }
   }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        position: 'relative',
        fontFamily: 'Open Sans',
        '& $notchedOutline': {
          borderColor: '#dadada'
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: daylightrepairs_dark.palette.primary.light,
        },
        '&$focused $notchedOutline': {
          borderColor: daylightrepairs_dark.palette.primary.light,
          borderWidth: '2px'
        },
      },
    }
  },
  MuiSwitch: {
    styleOverrides: {
      track: {
        backgroundColor: '#6a6a6a',
      },
      colorPrimary: {
        '& .MuiSwitch-thumb': {
          color: daylightrepairs_dark.palette.primary.main,
        },
        "&$checked": {
          color: daylightrepairs_dark.palette.primary.main,
          '& .MuiSwitch-thumb': {
            color: daylightrepairs_dark.palette.primary.main
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
          color: daylightrepairs_dark.palette.secondary.contrastText,
          '& .MuiSwitch-thumb': {
            color: '#eee',
          }
        },
        '&$checked + $track': {
          backgroundColor: '#ccc',
        },
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        '& svg': {
          color: daylightrepairs_dark.palette.primary.light,
        }
      },
      alignRight: {
        '& svg': {
          color: '#fff',
        }
      }
    }
  },
  MuiSlider: {
   styleOverrides: {
    thumb: {

    },
    track: {
      backgroundColor: daylightrepairs_dark.palette.primary.light
    },
    rail: {
      backgroundColor: daylightrepairs_dark.palette.primary.light
    }
   }
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&$selected": {
          backgroundColor: '#222',
          '&:hover': {
            backgroundColor: '#222'
          }
        },
        '&$hover:not($selected)': {
          '&:hover': {
            backgroundColor: daylightrepairs_dark.palette.background.default,
          }
        },
      }
    }
  },
  MuiBottomNavigationAction: {
   styleOverrides: {
    root: {
      color: daylightrepairs_dark.palette.text.secondary,
      '&$selected': {
        color: daylightrepairs_dark.palette.primary.light,
        '&:hover': {
          backgroundColor: daylightrepairs_dark.palette.background.default
        }
      },
      '&:hover': {
        backgroundColor: daylightrepairs_dark.palette.background.default
      },
    },
   }
  },
  MuiChip: {
   styleOverrides: {
    outlinedPrimary: {
      borderColor: daylightrepairs_dark.palette.primary.light,
      borderWidth: '2px',
      color: daylightrepairs_dark.palette.primary.light,
      '& .MuiChip-icon': {
        color: daylightrepairs_dark.palette.primary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: daylightrepairs_dark.palette.primary.light,
        '&:hover': {
          color: daylightrepairs_dark.palette.primary.dark,
        }
      }
    },
    outlinedSecondary: {
      borderColor: daylightrepairs_dark.palette.secondary.light,
      borderWidth: '2px',
      color: daylightrepairs_dark.palette.secondary.light,
      '& .MuiChip-icon': {
        color: daylightrepairs_dark.palette.secondary.light,
      },
      '& .MuiChip-deleteIcon': {
        color: daylightrepairs_dark.palette.secondary.light,
        '&:hover': {
          color: daylightrepairs_dark.palette.secondary.dark,
        }
      }
    },
   }
  },
  MuiSnackbarContent: {
   styleOverrides: {
    root: {
      backgroundColor: daylightrepairs_dark.palette.primary.main,
      color: '#fff'
    },
    action: {
      '& .MuiButton-textSizeSmall': {
        color: '#fff',
        '&:hover': {
          color: daylightrepairs_dark.palette.primary.main
        }
      }
    }
   }
  },
}
