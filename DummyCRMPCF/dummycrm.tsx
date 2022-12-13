/* eslint-disable */

import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore, AnyAction, combineReducers } from "redux";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CircularProgress from '@mui/material/CircularProgress';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { StackItemsList } from './dashboard';
import ItemList from './items';
import ItemInputForm from './newitem';
import { store, loadStoreData } from './globalstate';


const DialogTransition = React.forwardRef(function Transition(
    props: TransitionProps & {
    children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DummyCRM : React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [menuValue, setMenuValue] = React.useState(0);
    const [showLoadingData, setShowLoadingData] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleClickLoadData = () => {
        setShowLoadingData(true);
        loadStoreData(1, dispatch).then((data)=>{
            setShowLoadingData(false);
        });
    }

    function SimpleNavigationMenu() {
        return (
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={menuValue}
                    onChange={(event, newValue) => {
                        setMenuValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
                    <BottomNavigationAction label="Items" icon={<CategoryIcon />} />
                    <BottomNavigationAction label="New Item" icon={<LibraryAddIcon />} />
                </BottomNavigation>
            </Box>      
        )              
    }

    const dispatch = useDispatch();

    useEffect(() => {
        //Load async data once..
        console.log("Load async data once..");
        setShowLoadingData(true);
        loadStoreData(0, dispatch).then((data)=>{
            setShowLoadingData(false);
        });
    }, []);
    
    let testdata = useSelector((state) => state);
    console.error("state data: " + testdata);
    
    return (
        <>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open Dummy CRM App
                </Button>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={DialogTransition}
                >
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>

                    <SimpleNavigationMenu />
                    
                    <div style={{padding:"20px"}}>

                        {menuValue==0 &&<div>
                            <br/>
                            <br/>
                            <StackItemsList />
                        </div>}

                        {menuValue==1 &&<div>
                            <Button variant="outlined" onClick={handleClickLoadData}>
                                Load data 2
                            </Button>
                            {showLoadingData==true && <CircularProgress />}
                            <br/>
                            <br/>
                            <ItemList testdata={testdata} />
                        </div>}

                        {menuValue==2 &&<div>
                            <br/>
                            <br/>
                            <ItemInputForm />
                        </div>}

                    </div>

                    {/*
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                                >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    */}

                    {/*
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText
                                primary="Default notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItem>
                    </List>
                    */}
                </Dialog>
            </div>            
        </>
    );
}


export function Render(container:any) {
  
    /* ReactDOM.render is deprecated, but FluentUI does not support new React version until now
    const root = createRoot(container);
    root.render(<div><SearchSelectControl context={context} theobj={theobj} /></div>);
    */
   
    ReactDOM.render(
        <Provider store={store}>
            <DummyCRM />
        </Provider>
      , container
    );
  
  }
