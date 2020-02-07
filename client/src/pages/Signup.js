import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
	form: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%'
		}
	}
});

class LoginComponent extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Grid container spacing={12}>
					<h1>SIGN UP</h1>
					<Grid item xs={12}>
						<form className={classes.form} noValidate autoComplete='off'>
							<TextField id='standard-basic' label='Standard' />
						</form>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(LoginComponent);
