import { alpha, styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";


export const Search = styled('div')(({theme}) => (
	{
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}
));

export const SearchIconWrapper = styled('div')(({theme}) => (
	{
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
));

export const StyledInputBase = styled(InputBase)(({theme}) => (
	{
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}
));

export const appBarStyles = {
	height: '10vh',
	display: "flex",
	justifyContent: "center",
	background: "#132F4C"
}

export const cardStyle = {
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
	width: "12vw",
	height: "25vh",
	padding: '15px',
	margin: '10px 0 0 15px',
	border: "1px solid #132F4C",
}

export const cardBoxStyle = {
	display: "flex",
	justifyContent: "space-between",
}

export const cardsTextStyles = {
	fontFamily: "Montserrat",
	fontSize: "1.3rem"
}

export const cardButtonStyle = {
	background: "#22446E"
}

export const cancelIconStyle = {
	width: "30px",
	height: "30px",
	cursor: "pointer",
}

export const modalBoxStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '35vw',
	height: '50vh',
	backgroundColor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const moreInfoText = {
	display: "flex",
	flexDirection: "column",
	fontSize: '1.2rem',
	fontFamily: "Montserrat",
	mb: 1
}

export const moreInfoBoxStyle = {
		marginRight: "5px",
		border: "1px solid black",
		padding: '10px',
		display: 'flex',
		flexDirection: "column",
		justifyContent: "space-between",
}

export const moreInfoTextStyle = {
	display: "flex",
	justifyContent: "center",
	fontSize: '1.2rem',
}