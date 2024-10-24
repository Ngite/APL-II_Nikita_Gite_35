import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, TextField, Checkbox, Card, CardContent, Dialog,
  DialogTitle, DialogContent, DialogActions, Snackbar, IconButton, RadioGroup, FormControlLabel, Radio,
  LinearProgress, Tooltip, Drawer, List, ListItem, ListItemText, Switch, Grid, Box, Badge, Avatar,
  Divider, Fab, Slider, Select, MenuItem, Tabs, Tab, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Backdrop, CircularProgress,
  SpeedDial, SpeedDialAction, Breadcrumbs, Link, Pagination, Stepper, Step, StepLabel, ToggleButton,
  ToggleButtonGroup, Container, Stack, ImageList, ImageListItem, Collapse, CssBaseline, Modal, Popover,
  Chip, Alert, Autocomplete, Rating, Skeleton
} from '@mui/material';
import { Close as CloseIcon, Menu as MenuIcon, ExpandMore, Add as AddIcon, Home as HomeIcon, Info as InfoIcon, Mail as MailIcon } from '@mui/icons-material';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [tabValue, setTabValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(30);
  const [selectedToggle, setSelectedToggle] = useState('web');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [ratingValue, setRatingValue] = useState(2);
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [messageCount, setMessageCount] = useState(5); // Message count state

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleRadioChange = (event) => setSelectedValue(event.target.value);
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const handleSliderChange = (event, newValue) => setSliderValue(newValue);
  const handleToggleChange = (event, newToggle) => setSelectedToggle(newToggle);
  const handlePaginationChange = (event, value) => setPaginationPage(value);
  const handleBackdropClose = () => setBackdropOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLoading = () => setLoading(!loading);
  const toggleAccordion = () => setAccordionExpanded(!accordionExpanded);
  const handlePopoverOpen = (event) => setPopoverAnchor(event.currentTarget);
  const handlePopoverClose = () => setPopoverAnchor(null);
  const handleRatingChange = (event, newValue) => setRatingValue(newValue);

  const popoverOpen = Boolean(popoverAnchor);

  return (
    <div style={{ height: '100vh', backgroundColor: darkMode ? '#333' : '#fff' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">MUI App</Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" style={{ marginLeft: 'auto' }} />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Container style={{ padding: 20 }}>
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Typography variant="h5">Forms and Inputs</Typography>
              <TextField label="Name" variant="outlined" fullWidth margin="normal" />
              <FormControlLabel control={<Checkbox />} label="Subscribe" />
              <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              </RadioGroup>
              <Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
              <Select value={selectedValue} onChange={handleRadioChange} fullWidth margin="normal">
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
              <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={autocompleteValue}
                onChange={(event, newValue) => setAutocompleteValue(newValue)}
                renderInput={(params) => <TextField {...params} label="Autocomplete" margin="normal" />}
              />
              <Rating value={ratingValue} onChange={handleRatingChange} />
              <Tooltip title="Submit">
                <Button variant="contained" color="primary" onClick={handleDialogOpen}>Submit</Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Alert severity="success">This is a success alert — check it out!</Alert>

          <Accordion expanded={accordionExpanded} onChange={toggleAccordion}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Accordion content goes here.</Typography>
            </AccordionDetails>
          </Accordion>

          <Box>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
            </Tabs>
            <Typography>{tabValue === 0 ? 'Tab 1 Content' : 'Tab 2 Content'}</Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nikita</TableCell>
                  <TableCell align="right">30</TableCell>
                  <TableCell align="right">USA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rasika</TableCell>
                  <TableCell align="right">25</TableCell>
                  <TableCell align="right">Canada</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Badge badgeContent={4} color="primary">
            <Avatar>U</Avatar>
          </Badge>

          <Chip label="Clickable Chip" onClick={() => alert('Chip clicked!')} />

          <Pagination count={10} page={paginationPage} onChange={handlePaginationChange} />

          <ImageList rowHeight={160} cols={3}>
            <ImageListItem>
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            </ImageListItem>
          </ImageList>

          <SpeedDial ariaLabel="SpeedDial example" icon={<AddIcon />} onClose={() => {}} onOpen={() => {}} open={false}>
            <SpeedDialAction icon={<HomeIcon />} tooltipTitle="Home" />
            <SpeedDialAction icon={<InfoIcon />} tooltipTitle="Info" />
          </SpeedDial>

          <Skeleton variant="rectangular" width={210} height={118} />

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Link underline="hover" color="inherit" href="/">Catalog</Link>
            <Typography color="textPrimary">Product</Typography>
          </Breadcrumbs>

          <Button variant="contained" onClick={handlePopoverOpen}>
            Open Popover
          </Button>
          <Popover
            open={popoverOpen}
            anchorEl={popoverAnchor}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography style={{ padding: 10 }}>This is a popover content</Typography>
          </Popover>

          <Button variant="contained" onClick={toggleLoading}>
            {loading ? 'Stop Loading' : 'Start Loading'}
          </Button>
          {loading && <CircularProgress />}
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: darkMode ? '#444' : '#fff',
          padding: 2,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Badge badgeContent={messageCount} color="secondary">
          <MailIcon />
        </Badge>
      </Box>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Dialog</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Name" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="This is a snackbar message"
        action={
          <>
            <Button color="secondary" size="small" onClick={handleSnackbarClose}>
              Undo
            </Button>
            <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <Backdrop style={{ zIndex: 9999 }} open={backdropOpen} onClick={handleBackdropClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
