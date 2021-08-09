import React from 'react';
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import ApproveAuth from './ApproveAuth';
import RejectDialog from './RejectDialog';
import DeleteConfirm from './DeleteConfirm';
import Message from './Message';

const theme = createTheme({
    palette:{
        primary:{
            main: '#2884f0'
        }
    }
  });

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);





export default function ManageTransactionsActions(prop) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        // console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    const handleReview = () => {
        setAnchorEl(null);

    };

    const handlePrint = () => {
        setAnchorEl(null);

    };
    const handleEdit = () => {
        setAnchorEl(null);

    };
    const handleDelete = () => {
        setAnchorEl(null);

    };


    const handleReject = () => {
        setAnchorEl(null);

    };
    // ---------------Handle-Approve-----------
    const [authOpen, setAuthOpen] = React.useState(false);

    const handleAuthClickOpen = () => {
        setAuthOpen(true);
        setAnchorEl(null);
    };

    const handleAuthClose = () => {
        setAuthOpen(false);
    };
    // ---------------Handle-Reject-----------
    const [rejOpen, setRejOpen] = React.useState(false);

    const handleRejClickOpen = () => {
        setRejOpen(true);
        setAnchorEl(null);
    };

    const handleRejClose = () => {
        setRejOpen(false);
    };
    // ---------------Handle-Delete-----------
    const [delOpen, setDelOpen] = React.useState(false);

    const handleDelClickOpen = () => {
        setDelOpen(true);
        setAnchorEl(null);
    };

    const handleDelClose = () => {
        setDelOpen(false);
    };
    // ---------------Handle-Message-----------
    const [msgState, setMsgState] = React.useState({
        msgOpen:false,
        severity:"info",
        message: ""
    });

    const handleMsgClickOpen = (severity,message) => {

        setMsgState({
            msgOpen:true,
        severity:severity,
        message:message 
        })
        // setAnchorEl(null);
        

    };

    const handleMsgClose = () => {
        setMsgState({
            msgOpen:false,
            severity:"info",
            message: ""
        })
    };

    // const severity = "warning";
    return (
        <ThemeProvider theme={theme}>
            <div>
                <ApproveAuth open={authOpen} handleClose={() => {
                    handleAuthClose();
                    handleMsgClickOpen("success", "Transaction approval complete");

                } }/>
                <RejectDialog open={rejOpen} handleClose={() => {
                    handleRejClose();
                    handleMsgClickOpen("warning","transaction Rejected");


                } }/>
                <DeleteConfirm open={delOpen} handleClose={() => {
                    handleDelClose();
                    handleMsgClickOpen("error", "Transaction Deleted");

                } }/>
                {msgState.msgOpen?<Message open ={msgState.msgOpen} handleClose ={handleMsgClose} severity ={msgState.severity} message ={msgState.message}/> :null}
                

                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="text"
                    color='primary'
                    onClick={handleClick}
                >
                    Actions
                    <ArrowDropDownOutlinedIcon fontSuze="large" />
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >

                    {/* <StyledMenuItem onClick={handleMsgClickOpen} >
                        <ListItemIcon>
                            <VisibilityOutlinedIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Msg" />
                    </StyledMenuItem> */}

                    <StyledMenuItem onClick={handleReview} >
                        <ListItemIcon>
                            <VisibilityOutlinedIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Review" />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handlePrint}>
                        <ListItemIcon>
                            <PrintOutlinedIcon fontSize="large" style ={{color: '#000000'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Print"  />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handleEdit}>
                        <ListItemIcon>
                            <EditOutlinedIcon fontSize="large" color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary="Edit" />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handleDelClickOpen}>
                        <ListItemIcon>
                            <DeleteOutlineOutlinedIcon fontSize="large" color="secondary"/>
                        </ListItemIcon>
                        <ListItemText primary="Delete"  />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handleAuthClickOpen}>
                        <ListItemIcon>
                            <DoneAllOutlinedIcon fontSize="large" style ={{color: '#40d50a'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Approve" />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handleRejClickOpen}>
                        <ListItemIcon>
                            <BlockOutlinedIcon fontSize="large" color="secondary"/>
                        </ListItemIcon>
                        <ListItemText primary="Reject" />
                    </StyledMenuItem>

                </StyledMenu>
            </div>

        </ThemeProvider>
    );
}
