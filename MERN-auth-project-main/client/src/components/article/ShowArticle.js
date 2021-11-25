import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useToasts } from 'react-toast-notifications';
import Axios from "axios";
import UserContext from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
    button: {
    	margin: theme.spacing(1),
    }
}));

export default function ShowArticle() {

	const [ selArticleTitle, setSelArticleTitle ] = useState('');
	const [ selArticleContent, setSelArticleContent ] = useState('');
	const [ registerStatus, setRegisterStatus ] = useState('');
	const [ ownerID, setOwnerID ] = useState('');
	const { addToast } = useToasts();
	const classes = useStyles();
	const { userData, setUserData } = useContext(UserContext);
	let { id } = useParams();

	useEffect( () => {

		Axios.get("http://localhost:5000/article/get/" + id)
			 .then(async (response) => {
			 	setSelArticleTitle(response.data.title);
			 	setSelArticleContent(response.data.content);
				
				if (  userData.user ) {

					setOwnerID(userData.user.id);
					let info = {
						ownerID: userData.user.id,
						articleID: id
					};

					Axios.post("http://localhost:5000/collection/get/", info)
						.then((response) => {
							if ( response.data.msg === 'exist' ) {
								setRegisterStatus(1);
							} else {
								setRegisterStatus(0);
							}
					});
				}
			});

	}, []);

	const addCollection = async () => {

		const articleID = id;
		
		const likeArticles = { 
			ownerID, 
			articleID 
		};

		const restlt = await Axios.post(
			"http://localhost:5000/collection/create",
			likeArticles
		);

		if (restlt.data.msg === 'success') {
			addToast('Added Successfully', { appearance: 'success',autoDismiss: true, });
			setRegisterStatus(1);
		} else {
			addToast('Sorry, Operation is failure', { appearance: 'error', autoDismiss: true, });
			setRegisterStatus(0);
		}
	}

	return (
		<div>
			<h1>{selArticleTitle}</h1>
			<p style={{paddingTop: '4%'}}>{selArticleContent}</p>
			{ userData.user && !registerStatus ? (
				<div style={{display: "flex", justifyContent: "center", paddingTop: "1%"}}>
					<Button
						style={{textTransform: 'none'}}
				        variant="contained"
				        color="primary"
				        className={classes.button}
				        endIcon={<AddCircleOutlineIcon />}
				        onClick={addCollection}
				    >
			        Add to collection
			    	</Button>
				</div>
			) : (<></>) }
		</div>
	);
}