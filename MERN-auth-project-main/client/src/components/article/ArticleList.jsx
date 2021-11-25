import React, { useState, useEffect, useContext } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useToasts } from 'react-toast-notifications';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";

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

export default function ArticleList() {

	const [ articles, setArticles ] = useState(() => []);
	const [ deleteId, setDeleteId ] = useState('');
	const [ editId, setEditId ] = useState('');
	const [ deleteOpen, setDeleteOpen ] = useState(false);
	const [ editOpen, setEditOpen ] = useState(false);
	const { addToast } = useToasts();
	const [ title, setTitle ] = useState('');
 	const [ content, setContent ] = useState(() => '');
 	const [ author, setAuthor ] = useState('');
 	const [ filterBeforeArticles, setFilterBeforeArticles ] = useState([]);
 	const { userData, setUserData } = useContext(UserContext);
	const classes = useStyles();

	useEffect(() => {
		
		Axios.get("http://localhost:5000/article/get")
			.then((response) => {
				var articleSize = Object.keys(response.data).length;
				var articles = [];
				for (let i = 0; i < articleSize; i++) {
					var article = [];
					article = {
						author: response.data[i].author,
						title: response.data[i].title,
						content: response.data[i].content,
						id: response.data[i].id
					};
					articles.push(article);
				}
				setArticles(articles);
				setFilterBeforeArticles(articles);
		});
	}, []);

	const newArticle = () => history.push("/new_article");
	const history = useHistory();
	const addArticleStyle = {
		textAlign: 'right',
		paddingTop: '15px',
	};

	// When user click "Delete" button, Delete Modal appear.
	React.useEffect(() => {
		
		if ( deleteId !== '' ) {
			setDeleteOpen(true);
		}

	}, [deleteId]);

	// When user click "Edit" button, Edit Modal appear.
	React.useEffect(() => {
		
		if ( editId !== '' ) {

			Axios.get("http://localhost:5000/article/get/" + editId)
				 .then((response) => {
				 		setTitle(response.data.title);
				 		setContent(response.data.content);
						setEditOpen(true);
			});
		}

	}, [editId]);

	// Delete Modal Close
	const deleteModalClose = () => {
    	setDeleteOpen(false);
    	setDeleteId('');
    };

    // Edit Modal Close
    const editModalClose = () => {
    	setEditOpen(false);
    	setEditId('');
    };

    // When click "OK" button of Dialog, Finally, delete article.
    const deleteModalOk = () => {

    	setDeleteOpen(false);
    	
    	//Before clicking "Delete" button, 
    	var prevArticles = articles;

    	Axios.delete('http://localhost:5000/article/delete/' + deleteId)
			 .then((response) => {

			 	if ( response.data.msg === 'success' ) {
				 	var del_id = response.data.del_id;
				 	var articleSize = Object.keys(prevArticles).length;
				 	var articles = [];
				 	for ( let i = 0; i < articleSize; i++ ) {
				 		var article = [];
				 		if ( del_id !== prevArticles[i].id ) {
				 			article = {
				 				author: prevArticles[i].author,
				 				title: prevArticles[i].title,
				 				content: prevArticles[i].content,
				 				id: prevArticles[i].id
				 			};
				 			articles.push(article);
				 		}
				 	}
				 	setArticles(articles);
				 	addToast('Deleted Successfully', { appearance: 'success',autoDismiss: true, });
			 	} else {
			 		addToast('Sorry, Operation is failure', { appearance: 'error', autoDismiss: true, });
			 	}
		});
    };

    // When click "OK" button of EditDialog, Finally, edit article.
    const editModalOk = () => {
    	
    	const updatedArticle = {
    		id: editId,
    		title: title,
    		content: content
    	};
    	Axios.put('http://localhost:5000/article/update/', updatedArticle)
    		.then((response) => {
    		 	setEditOpen(false);
    			addToast('Update Successfully', { appearance: 'success',autoDismiss: true, });
    			var articleSize = Object.keys(response.data).length;
				var articles = [];
				for (let i = 0; i < articleSize; i++) {
					var article = [];
					article = {
						author: response.data[i].author,
						title: response.data[i].title,
						content: response.data[i].content,
						id: response.data[i].id
					};
					articles.push(article);
				}
				setArticles(articles);
				setEditId('');
    	});
    };

    // Filter Author
    const filterAuthor = async (e) => {
    	
    	var allArticles = articles;
    	e.preventDefault();

    	if ( author ) {

	    	Axios.get("http://localhost:5000/author/get/" + author)
					 .then((response) => {
						
						if( response.data.msg === 'no author' ) {

							addToast("Sorry, Author doesn't exist.", { appearance: 'error',autoDismiss: true, });

						} else if ( response.data.msg === 'no article' ) {

							addToast("Sorry, Article doesn't exist.", { appearance: 'error',autoDismiss: true, });
						} else {

							var articleSize = Object.keys(response.data.article).length;
							var articles = [];
							for (let i = 0; i < articleSize; i++) {
								var article = [];
								article = {
									author: response.data.article[i].author,
									title: response.data.article[i].title,
									content: response.data.article[i].content,
									id: response.data.article[i].id
								};
								articles.push(article);
							}
							setArticles(articles);
							addToast(`Author is published ${articleSize} article.`, { appearance: 'success',autoDismiss: true, });
						}
			});
    	} else {
    		setArticles(filterBeforeArticles);
    	}
    }

	return (
		<div>
			<div style={addArticleStyle}>
				<form className="example" style={{display: "inline-block", paddingRight: "50px"}}  onSubmit={filterAuthor}>
					<input autoComplete="off" type="text" placeholder="Search.." name="search" style={{padding: "8px 15px"}} value={author} onChange={(e) => setAuthor(e.target.value)}/>
					<button type="submit"  style={{padding: "10px 15px", background:"#4689ff"}}><i className="fa fa-search"></i></button>
				</form>
				{ userData.user ? (
					<Button variant="outlined" color="primary" onClick={newArticle}>Add Article</Button>
				) : (<></>)}
			</div>
			
			<div style={{paddingTop: '30px'}}>
				{articles.map((article, index) => (
					<div  key={index} style={{paddingTop: '10px'}}>
						<Link to={'/article-show/' + article.id} >
							<p style={{color: "#222", fontSize: "16px", fontWeight: "bold"}}>{article.title}</p>
							<p style={{fontSize: "14px"}}>Author: {article.author}</p>
							<p style={{maxHeight: '75px', overflow: 'hidden', color: "#6f6f6f", fontSize: "13px"}}>{article.content}</p>
						</Link>
						<div style={{textAlign: 'right'}}>
							{ userData.user ? (
								<Button
							        variant="contained"
							        color="secondary"
							        onClick={() => setDeleteId(article.id)}
							        className={classes.button}
							        startIcon={<DeleteIcon />}
							    >
						        Delete
						        </Button>
							) : (<></>) }
					        <Dialog
						        open={deleteOpen}
						        onClose={deleteModalClose}
						        aria-labelledby="alert-dialog-title"
						        aria-describedby="alert-dialog-description"
						    >
						        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this article ?"}</DialogTitle>
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
						    { userData.user ? (
						        <Button
							        variant="contained"
							        color="primary"
							        className={classes.button}
							        onClick={() => setEditId(article.id)}
							        endIcon={<EditIcon />}
							    >
						        Edit
						    	</Button>
						    ) : (<></>) }
					    	<Dialog
						        open={editOpen}
						        onClose={editModalClose}
						        aria-labelledby="alert-dialog-title"
						        aria-describedby="alert-dialog-description"
						        fullWidth="true"
						        maxWidth="md"
						    >
						        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
						        <DialogContent>
						            
									<TextField
										autoComplete="off"
										id="standard-full-width"
										label=""
										placeholder="Enter title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										fullWidth
										margin="normal"
										style={{ margin: 8 ,marginBottom: '3%'}}
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<TextField
							          id="outlined-multiline-static"
							          label="Content"
							          value={content}
							          onChange={(e) => setContent(e.target.value)}
							          multiline
							          rows={4}
							          placeholder="Enter Content"
							          variant="outlined"
							          style={{width: '100%'}}
							        />
						          
						        </DialogContent>
						        <DialogActions>
						          <Button onClick={editModalClose} color="primary">
						            Cancel
						          </Button>
						          <Button onClick={editModalOk} color="primary" autoFocus>
						            OK
						          </Button>
						        </DialogActions>
						    </Dialog>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}