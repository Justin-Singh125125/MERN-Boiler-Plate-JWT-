import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { Component } from 'react';
// import MenuIcon from '@material-ui/icons/MenuIcon';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '2rem'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	inputField: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%'
		}
	},
	header: {
		fontSize: '2rem',
		color: '#c51162',
		textAlign: 'center'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	navbar: {
		background: '#c51162'
	},
	links: {
		color: 'white',
		'&:hover': {
			color: 'white',
			borderBottom: 'none',
			textDecoration: 'none'
		}
	}
}));

class Signup extends Component() {
	render() {
		const classes = useStyles();

		return (
			<>
				<AppBar position='static' className={classes.navbar}>
					<Toolbar>
						<Typography variant='h6' className={classes.title}>
							JWT DEMO
						</Typography>

						<Link className={classes.links} href='/login'>
							LOGIN
						</Link>
					</Toolbar>
				</AppBar>
				<div className={classes.root}>
					<Grid item xs={12}>
						<h1 className={classes.header}>SIGN UP</h1>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<form className={classes.inputField} noValidate autoComplete='off'>
								<TextField id='signup-email' label='EMAIL' />
								<TextField id='signup-password' label='PASSWORD' />
							</form>
							<Button variant='contained' color='secondary'>
								SUBMIT
							</Button>
						</Grid>
					</Grid>
				</div>
			</>
		);
	}
}

export default Signup;
