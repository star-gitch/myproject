import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Axios from "axios";
import UserContext from "../../context/UserContext";
import { useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '25ch',
	},
}));

export default function NewArticle() {
	const classes = useStyles();
	const { addToast } = useToasts();
	const [ title, setTitle ] = useState(() => '');
  	const [ content, setContent ] = useState(() => '');
	const { userData } = useContext(UserContext);
	
	const submit = async (e) => {
		e.preventDefault();
		if(userData.user !== undefined){
			var userID = userData.user.id;
		}
		const newArticle = {title, content, userID};
		const saveResult = await Axios.post(
	        "http://localhost:5000/article/create",
	        newArticle
	    );

		if (saveResult.data.msg === 'success') {
			addToast('Saved Successfully', { appearance: 'success',autoDismiss: true, });
			setTitle('');
			setContent('');
		} else {
			addToast('Sorry, Operation is failure', { appearance: 'error', autoDismiss: true, });
		}
	};
	return (
		<form className={classes.root} noValidate autoComplete="off" style={{paddingTop:"10%", width:"50%", margin:"auto"}} onSubmit={submit}>
			<TextField
				id="standard-full-width"
				label=""
				style={{ margin: 8 }}
				placeholder="Enter title"
				fullWidth
				margin="normal"
				style={{marginBottom: '3%'}}
				onChange={(e) => setTitle(e.target.value)}
            	value = {title}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
	          id="outlined-multiline-static"
	          label="Content"
	          multiline
	          rows={4}
	          onChange={(e) => setContent(e.target.value)}
	          value={content}
	          placeholder="Enter Content"
	          variant="outlined"
	          style={{width: '100%'}}
	        />
	        <div style={{width: "100%", textAlign: "center", paddingTop: "5%"}}>
		        <Button
		        	type="submit"
			        variant="contained"
			        color="primary"
			        size="large"
			        className={classes.button}
			        startIcon={<SaveIcon />}
			    >
			        Save
			    </Button>
	        </div>
		</form>
	);
}