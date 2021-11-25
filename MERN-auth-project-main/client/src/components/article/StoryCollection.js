import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) => ({
  	button: {
    	margin: theme.spacing(1),
    },
    modal: {
    	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    paper: {
    	backgroundColor: theme.palette.background.paper,
    	border: '2px solid #000',
    	boxShadow: theme.shadows[5],
    	padding: theme.spacing(2, 4, 3),
    },
}));

export default function StoryCollection() {

	const { userData, setUserData } = useContext(UserContext);
	const [ articles, setArticles ] = useState([]);
	const [ deleteOpen, setDeleteOpen ] = useState(false);
	const [ delLikeArticleID, setDelLikeArticleID ] = useState('');
	const [ likeArticleSize, setLikeArticleSize ] = useState('');
	const { addToast } = useToasts();
	const classes = useStyles();

	useEffect( () => {
		if ( userData.user ) {
			
			Axios.get("http://localhost:5000/collection/get/" + userData.user.id)
				.then(async (response) => {
			 		var articleSize = Object.keys(response.data).length;
			 		setLikeArticleSize(articleSize);
					var articles = [];
					for (let i = 0; i < articleSize; i++) {
						var article = [];
						article = {
							author: response.data[i].author,
							title: response.data[i].title,
							content: response.data[i].content,
							id: response.data[i].id,
							likeArticleID: response.data[i].likeArticleID
						};
						articles.push(article);
					}
					setArticles(articles);
			});
		}
	}, []);

	// When user click "Delete" button, Delete Modal appear.
	React.useEffect(() => {
		
		if ( delLikeArticleID !== '' ) {
			setDeleteOpen(true);
		}

	}, [delLikeArticleID]);

	// Delete Modal Close
	const deleteModalClose = () => {
    	setDeleteOpen(false);
    	setDelLikeArticleID('');
    };

    // When click "OK" button of Dialog, Finally, delete article.
    const deleteModalOk = () => {
    	setDeleteOpen(false);

    	//Before clicking "Delete" button, 
    	var prevArticles = articles;

    	Axios.delete('http://localhost:5000/collection/delete/' + delLikeArticleID)
			 .then((response) => {
			 	if ( response.data.msg === 'success' ) {
				 	var del_id = response.data.del_id;
				 	var articleSize = Object.keys(prevArticles).length;
				 	var articles = [];
				 	for ( let i = 0; i < articleSize; i++ ) {
				 		var article = [];
				 		if ( del_id !== prevArticles[i].likeArticleID ) {
				 			article = {
				 				author: prevArticles[i].author,
				 				title: prevArticles[i].title,
				 				content: prevArticles[i].content,
				 				id: prevArticles[i].id,
				 				likeArticleID: prevArticles[i].likeArticleID
				 			};
				 			articles.push(article);
				 		}
				 	}
				 	setArticles(articles);
				 	addToast('Removed Successfully', { appearance: 'success',autoDismiss: true, });
			 	} else {
			 		addToast('Sorry, Operation is failure', { appearance: 'error', autoDismiss: true, });
			 	}
		});
    };

	return (
		<div style={{paddingTop: '30px'}}>
			{ likeArticleSize != 0 ? (
				articles.map((article, index) => (
				<div  key={index} style={{paddingTop: '10px'}}>
					<Link to={'/article-show/' + article.id} >
						<p style={{color: "#222", fontSize: "16px", fontWeight: "bold"}}>{article.title}</p>
						<p style={{fontSize: "14px"}}>Author: {article.author}</p>
						<p style={{maxHeight: '75px', overflow: 'hidden', color: "#6f6f6f", fontSize: "13px"}}>{article.content}</p>
					</Link>
					<div style={{textAlign: 'right'}}>
						<Button
					        variant="contained"
					        color="secondary"
					        onClick={() => setDelLikeArticleID(article.likeArticleID)}
					        className={classes.button}
					        startIcon={<DeleteIcon />}
					    >
				        Delete
				        </Button>
				        <Dialog
					        open={deleteOpen}
					        onClose={deleteModalClose}
					        aria-labelledby="alert-dialog-title"
					        aria-describedby="alert-dialog-description"
					    >
					        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this article from collection ?"}</DialogTitle>
					        <DialogContent>
					          <DialogContentText id="alert-dialog-description">
					            
					          </DialogContentText>
					        </DialogContent>
					        <DialogActions>
					          <Button onClick={deleteModalClose} color="primary">
					            Cancel
					          </Button>
					          <Button onClick={deleteModalOk} color="primary" autoFocus>
					            OK
					          </Button>
					        </DialogActions>
					    </Dialog>
					</div>
				</div>
			))) : (<h1>There is no article.</h1>) }
		</div>
	);
}