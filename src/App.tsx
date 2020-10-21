import {
	AppBar,
	Button,
	ButtonGroup,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { ReactComponent as PaperIcon } from "./assets/paper.svg";
import { ReactComponent as RockIcon } from "./assets/rock.svg";
import { ReactComponent as ScissorsIcon } from "./assets/scissors.svg";
import InfoIcon from "@material-ui/icons/Info";
import "./App.css";
import ChoiceIcon from "./ChoiceIcon";
import useStyles from "./styles";
import { _gameWon, _getRandomChoice, Choice } from "./utility";

function App() {
	const classes = useStyles();
	const [opponentChoice, setOpponentChoice] = useState(Choice.None);
	const [playerChoice, setPlayerChoice] = useState(Choice.None);
	const [open, setOpen] = useState(false);

	const gameWon = _gameWon(playerChoice, opponentChoice);

	return (
		<Grid container>
			<Grid item xs={12}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Sasso Carta Forbice
						</Typography>
						<IconButton onClick={() => setOpen(true)} color="inherit">
							<InfoIcon />
						</IconButton>
						<Dialog onClose={() => setOpen(false)} open={open} maxWidth="xs">
							<DialogTitle>Informazioni</DialogTitle>
							<DialogContent dividers>
								<Typography gutterBottom>
									Applicazione sviluppata da{" "}
									<Link href="https://github.com/algoram">Enrico Milanese</Link>
								</Typography>
								<Typography gutterBottom>
									Icons made by{" "}
									<Link
										href="https://www.flaticon.com/authors/freepik"
										title="Freepik"
									>
										Freepik
									</Link>{" "}
									from{" "}
									<Link href="https://www.flaticon.com/" title="Flaticon">
										{" "}
										www.flaticon.com
									</Link>
								</Typography>
							</DialogContent>
							<DialogActions>
								<Button onClick={() => setOpen(false)} color="primary">
									Close
								</Button>
							</DialogActions>
						</Dialog>
					</Toolbar>
				</AppBar>
			</Grid>

			<ChoiceIcon choice={opponentChoice} />

			<Container>
				<Typography variant="h6" className={classes.justifyCenter}>
					{playerChoice === Choice.None
						? "Scegli per iniziare"
						: gameWon > 0
						? "Hai vinto!!!"
						: gameWon < 0
						? "Hai perso..."
						: "Pareggio."}
				</Typography>
			</Container>

			{playerChoice === Choice.None ? (
				<Grid item container xs={12}>
					<Grid item xs={false} sm={2} />
					<Grid item container xs={12} sm={8}>
						<Grid item xs={4}>
							<RockIcon className={classes.icons} />
						</Grid>
						<Grid item xs={4}>
							<PaperIcon className={classes.icons} />
						</Grid>
						<Grid item xs={4}>
							<ScissorsIcon className={classes.icons} />
						</Grid>
					</Grid>
					<Grid item xs={false} sm={2} />
				</Grid>
			) : (
				<ChoiceIcon choice={playerChoice} />
			)}

			<Container className={classes.justifyCenter}>
				{playerChoice === Choice.None ? (
					<ButtonGroup color="primary" variant="contained">
						<Button
							onClick={() => {
								setPlayerChoice(Choice.Rock);
								setOpponentChoice(_getRandomChoice());
							}}
						>
							Sasso
						</Button>
						<Button
							onClick={() => {
								setPlayerChoice(Choice.Paper);
								setOpponentChoice(_getRandomChoice());
							}}
						>
							Carta
						</Button>
						<Button
							onClick={() => {
								setPlayerChoice(Choice.Scissors);
								setOpponentChoice(_getRandomChoice());
							}}
						>
							Forbice
						</Button>
					</ButtonGroup>
				) : (
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							setPlayerChoice(Choice.None);
							setOpponentChoice(Choice.None);
						}}
					>
						Rigioca
					</Button>
				)}
			</Container>
		</Grid>
	);
}

export default App;
