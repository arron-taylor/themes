import React from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import MailIcon from "@material-ui/icons/Mail"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { Paper, Grid, Container, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      padding: '1rem',
      "& > div > span": {
        marginRight: theme.spacing(4),
      },
    },
  })
)

export default function BadgeExample() {
  const classes = useStyles()
  const [count, setCount] = React.useState(1)
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Badge color="primary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <Badge color="error" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0))
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={6}>
        <Badge color="primary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <Badge color="error" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={!invisible}
              onChange={handleBadgeVisibility}
            />
          }
          label="Show Badge"
        />
      </Grid>
    </Grid>
  )
}
