export const dracula = {
  palette: {
    type: 'dark',
    common:{
      black:'#000',
      white:'#fff'
    },
    background:{
      paper:'#1E1F28',
      default: '#272A35',
    },
    primary:{
      light:'#f1c4ff',
      main:'#bd93f9',
      dark:'#8b65c6',
      contrastText:'#eee',
      red: {
        main: '#c5162c',
        light: '#ff8982',
        dark: '#8c0004',
        contrastText:'#eee'
      },
      yellow: {
        main: '#f1fa8c',
        light: '#ffffbe',
        dark: '#bdc75c',
        contrastText:'#eee'
      },
      pink: {
        main: '#ff79c6',
        light: '#ffacf9',
        dark: '#c94695',
        contrastText:'#ee'
      },
      orange: {
        main: '#ffb86c',
        light: '#ffea9c',
        dark: '#c9883e',
        contrastText:'#eee'
      },
      blue: {
        main: '#8be9fd',
        light: '#c0ffff',
        dark: '#56b7ca',
        contrastText:'#eee'
      },
      purple: {
        light:'#f1c4ff',
        main:'#bd93f9',
        dark:'#8b65c6',
        contrastText:'#eee',
      },
      green: {
        light:'#8dffac',
        main:'#50fa7b',
        dark:'#00c64c',
        contrastText:'#eee'
      },
    },
    secondary:{
      light:'#8dffac',
      main:'#50fa7b',
      dark:'#00c64c',
      contrastText:'#1E1F28',
      red: {
        main: '#c5162c',
        light: '#ff8982',
        dark: '#8c0004',
        contrastText:'#1E1F28'
      },
      yellow: {
        main: '#f1fa8c',
        light: '#ffffbe',
        dark: '#bdc75c',
        contrastText:'#1E1F28'
      },
      pink: {
        main: '#ff79c6',
        light: '#ffacf9',
        dark: '#c94695',
        contrastText:'#1E1F28'
      },
      orange: {
        main: '#ffb86c',
        light: '#ffea9c',
        dark: '#c9883e',
        contrastText:'#1E1F28'
      },
      blue: {
        main: '#8be9fd',
        light: '#c0ffff',
        dark: '#56b7ca',
        contrastText:'#1E1F28'
      },
      purple: {
        light:'#f1c4ff',
        main:'#bd93f9',
        dark:'#8b65c6',
        contrastText:'#1E1F28',
      },
      green: {
        light:'#8dffac',
        main:'#50fa7b',
        dark:'#00c64c',
        contrastText:'#1E1F28'
      },
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
      primary:'#eee',
      secondary:'rgba(74, 74, 74, 1)',
      disabled:'#666',
      hint:'rgba(0, 0, 0, 0.38)'
    }
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
      fontFamily: 'Abril Fatface',
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: 'source-sans-pro',
    },
    h3: {
      fontWeight: '700',
      fontFamily: 'Abril Fatface',
    },
    h4: {
      fontFamily: 'Abril Fatface',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 800,
      fontFamily: 'Abril Fatface',
    },
    h6: {
      fontWeight: 800,
      fontFamily: 'Abril Fatface',
    },
    p: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      fontFamily: 'source-sans-pro',
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
      disableRipple: true,
      size: 'small'
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
    MuiTextField: {
      variant: 'outlined',
    }
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

const getContrast = (color) => {
  color = color.replace('#', '');
  var r = parseInt(color.substr(0,2),16);
  var g = parseInt(color.substr(2,2),16);
  var b = parseInt(color.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? '#1E1F28' : '#FFF';
}

export const getDracula = (primaryColor, secondaryColor) => {
  return {
    palette: {
      ...dracula.palette,
        primary: {
          ...dracula.palette.primary[primaryColor]
        },
        secondary: {
          ...dracula.palette.secondary[secondaryColor]
        },
    },
    typography: {
      ...dracula.typography
    },
    props: {
      ...dracula.props,
    },
    overrides: {
      MuiAppBar: {
        colorDefault: {
          backgroundColor: '#fff'
        },
        colorPrimary: {
          backgroundColor: '#1E1F28'
        }
      },
      MuiCheckbox: {
        root: {
          color: dracula.palette.primary[primaryColor].dark,
        },
        colorSecondary: {
          "&$checked": {
            color: dracula.palette.primary[primaryColor].main,
          }
        }
      },
      MuiRadio: {
        colorSecondary: {
          "&$checked": {
            color: dracula.palette.primary[primaryColor].main,
          }
        }
      },
      MuiSwitch: {
        track: {
          backgroundColor: '#6a6a6a',
        },
        colorPrimary: {
          '& .MuiSwitch-thumb': {
            color: dracula.palette.primary[primaryColor].main + '90',
          },
          "&$checked": {
            color: dracula.palette.primary[primaryColor].main,
            '& .MuiSwitch-thumb': {
              color: dracula.palette.primary[primaryColor].main
            }
          },
          '&$checked + $track': {
            backgroundColor: '#aaa',
          },
        },
        colorSecondary: {
          '& .MuiSwitch-thumb': {
            color: dracula.palette.secondary[secondaryColor].main + '90',
          },
          "&$checked": {
            color: dracula.palette.secondary[secondaryColor].main,
            '& .MuiSwitch-thumb': {
              color: dracula.palette.secondary[secondaryColor].main
            }
          },
          '&$checked + $track': {
            backgroundColor: '#aaa',
          },
        }
      },
      MuiSelect: {
        icon: {
          color: dracula.palette.primary[primaryColor].main,
        }
      },
      MuiInput: {
        underline: {
          '&:$before': {
            borderBottomColor: dracula.palette.primary[primaryColor].main
          }
        }
      },
      MuiFab: {
        primary: {
          color: dracula.palette.secondary[secondaryColor].contrastText,
        },
        secondary: {
          color: dracula.palette.secondary[secondaryColor].contrastText,
        }
      },
      MuiFormLabel: {
        root: {
          color: dracula.palette.primary[primaryColor].contrastText,
          opacity: .75
        }
      },
      MuiTableCell: {
        root: {
          fontWeight: 600,
          fontSize: '1rem',
          fontFamily: 'source-sans-pro',
        },
        head: {
          '& svg': {
            color: dracula.palette.primary[primaryColor].dark,
          }
        },
        alignRight: {
          '& svg': {
            color: dracula.palette.primary[primaryColor].dark,
          }
        }
      },
      MuiTableSortLabel: {
        icon: {
          color: dracula.palette.primary[primaryColor].dark,
          '& svg': {
            color: dracula.palette.primary[primaryColor].dark,
          }
        }
      },
      MuiTableRow: {
        root: {
          "&$selected": {
            fontWeight: 800,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
            }
          },
          '&$hover:not($selected)': {
            '&:hover': {
              backgroundColor: dracula.palette.background.default,
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
        colorPrimary: {
          backgroundColor: dracula.palette.primary[primaryColor].main,
          color: getContrast(dracula.palette.secondary[primaryColor].main)
        },
        colorSecondary: {
          backgroundColor: dracula.palette.secondary[secondaryColor].main,
          color: getContrast(dracula.palette.secondary[secondaryColor].main)
        }
      },
      MuiChip: {
        outlined: {
          borderColor: dracula.palette.primary[primaryColor].contrastText,
          borderWidth: '2px',
          color: dracula.palette.primary[primaryColor].contrastText,
          '& .MuiChip-icon': {
            color: dracula.palette.primary[primaryColor].contrastText,
          },
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.primary[primaryColor].contrastText,
          }
        },
        outlinedPrimary: {
          borderColor: dracula.palette.primary[primaryColor].main,
          borderWidth: '2px',
          color: dracula.palette.primary[primaryColor].main,
          '& .MuiChip-icon': {
            color: dracula.palette.primary[primaryColor].main,
          },
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.primary[primaryColor].main,
            '&:hover': {
              color: dracula.palette.primary[primaryColor].dark,
            }
          }
        },
        outlinedSecondary: {
          borderColor: dracula.palette.secondary[secondaryColor].main,
          borderWidth: '2px',
          color: dracula.palette.secondary[secondaryColor].main,
          '& .MuiChip-icon': {
            color: dracula.palette.secondary[secondaryColor].main,
          },
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.secondary[secondaryColor].main,
            '&:hover': {
              color: dracula.palette.secondary[secondaryColor].dark,
            }
          }
        },
        clickableColorPrimary: {
          color: dracula.palette.secondary[secondaryColor].contrastText,
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.secondary[secondaryColor].contrastText,
          }
        },
        deletable: {
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.secondary[secondaryColor].contrastText,
            '&:hover': {
              color: dracula.palette.secondary[secondaryColor].contrastText,
            }
          }
        },
        deletableColorPrimary: {
          color: dracula.palette.secondary[secondaryColor].contrastText,
          '& .MuiChip-deleteIcon': {
            color: dracula.palette.secondary[secondaryColor].contrastText,
          },
        },
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
          color: dracula.palette.primary[primaryColor].contrastText,
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
          fontFamily: 'source-sans-pro',
          '& $notchedOutline': {
            borderColor: '#dadada'
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            borderColor: dracula.palette.primary[primaryColor].light,
          },
          '&$focused $notchedOutline': {
            borderColor: dracula.palette.primary[primaryColor].main,
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
            border: `1px solid ${dracula.palette.primary[primaryColor].light}`,
            color: dracula.palette.primary[primaryColor].light,
            padding: '.15rem .35rem',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '3px',
            '&:hover': {
              cursor: 'pointer',
              border: `1px solid ${dracula.palette.primary[primaryColor].dark}`,
              color: dracula.palette.primary[primaryColor].dark,
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
        button: {
          '&$selected': {
            backgroundColor: dracula.palette.primary[primaryColor].light,
            color: getContrast(dracula.palette.primary[primaryColor].light),
            '&:hover': {
              backgroundColor: dracula.palette.primary[primaryColor].light,
            }
          },
          '&:$hover': {
            backgroundColor: dracula.palette.primary[primaryColor].light,
            color: getContrast(dracula.palette.primary[primaryColor].light),
            '& .MuiListItemIcon-root': {
              color: dracula.palette.primary[primaryColor].contrastText,
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
          backgroundColor: dracula.palette.primary[primaryColor].dark
        },
        action: {
          '& .MuiButton-textSizeSmall': {
            color: '#fff',
            '&:hover': {
              color: dracula.palette.primary[primaryColor].main
            }
          }
        }
      },
      MuiButton: {
        root: {
          textTransform: 'capitalize',
          '&$disabled': {
            color: dracula.palette.text.disabled,
            borderColor: dracula.palette.text[primaryColor],
          }
        },
        contained: {
          padding: 'calc(.375em - 1px) .75em',
          lineHeight: 1.5,
          height: '2.25em',
          letterSpacing: '0px',
          border: '0px solid transparent',
          '&$disabled': {
            color: dracula.palette.text.disabled,
            border: `2px solid ${dracula.palette.text.disabled}`,
          }
        },
        containedPrimary: {
          color: getContrast(dracula.palette.primary[primaryColor].main),
        },
        containedSecondary: {
          color: getContrast(dracula.palette.primary[secondaryColor].main),
        },
        containedSizeSmall: {
          padding: 'calc(.375em - 1px) .75em',
          lineHeight: 1.5,
          height: '2.25em',
          letterSpacing: '0px',
          border: '0px solid transparent',
          fontSize: '1rem',
        },
        containedSizeLarge: {
          lineHeight: 1.5,
          height: '2.25em',
          letterSpacing: '0px',
          border: '0px solid transparent',
        },
        outlinedSizeLarge: {
          padding: '1rem 1.85rem',
          fontSize: '1.25rem',
          height: '2.25em',
          lineHeight: 1.5,
          '&:hover': {
            background: dracula.palette.primary[primaryColor].main,
            color: dracula.palette.primary[primaryColor].contrastText,
          }
        },
        outlined: {
          padding: '.5rem .5rem',
          fontSize: '.65rem',
          height: '2.25em',
          lineHeight: 1.5,
          color: dracula.palette.primary[primaryColor].contrastText,
          borderColor: dracula.palette.primary[primaryColor].contrastText,
          '&$disabled': {
            color: dracula.palette.text.disabled,
            border: `2px solid ${dracula.palette.text.disabled}`,
          }
        }
      }

    }
  }
}
