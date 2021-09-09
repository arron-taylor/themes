# Driveway and CarbodyLab Style Guide
All of the material-ui components on one page, see all that you need to see and edit right away.

Architecture
  1. You'll notice <code>getMyTheme</code> is exported from theme.js, this is set up for easy light/dark mode switching.
  2. If you intend to use a light and dark mode for a new theme, set your light mode in the object <code>theme</code> and set your dark mode in the object <code>theme_dark</code> within the theme.js file. <br /><i>If you do not intend to use a dark mode, only allow <code>getMyTheme</code> inside of theme.js to return <code>theme</code></i>
  3. Inside of RouteContainer.js the material-ui <code>ThemeProvider</code> component is passed a <code>createTheme()</code> object from the <code>getTheme()</code> function whenever it is called. 
  4. <code>getTheme()</code> is called inside of useEffect as a side effect of the <code>themeName</code> or <code>mode</code> being changed by the user via the Switch or the Select dropdown. <code>getTheme()</code> is used to set the current state of the theme that is passed to <code>ThemeProvider</code>

<img src="https://i.imgur.com/f90a7mM.png" />
<br /> 
<img src="https://i.imgur.com/IzQNWtC.png" />
<br /> 
<img src="https://i.imgur.com/ykBjCWt.png" />


# List of Material-ui Components on the Components Page:
  - Accordion
  - AppBar
  - Avatar
  - Alert
  - Badge
  - Button
  - Breadcrumbs 
  - BottomNavigation
  - Card
  - Chip
  - Checkboxes
  - Dialog
  - FAB
  - Icon
  - List
  - Menu
  - Progress
  - RadioGroup
  - Select
  - Slider
  - Snackbar
  - Stepper
  - Switch
  - Table
  - Tabs
  - TextField
  - Typography

