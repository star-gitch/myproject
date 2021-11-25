import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArticleList from '../article/ArticleList';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	rooter: {
		'& > *': {
			margin: theme.spacing(0),
			width: '100%',
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<ArticleList />
		</div>
	);
}
