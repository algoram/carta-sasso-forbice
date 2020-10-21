import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { ReactComponent as QuestionIcon } from "./assets/question.svg";
import { ReactComponent as PaperIcon } from "./assets/paper.svg";
import { ReactComponent as RockIcon } from "./assets/rock.svg";
import { ReactComponent as ScissorsIcon } from "./assets/scissors.svg";
import React from "react";
import { Choice } from "./utility";

interface Props {
	choice: Choice;
}

const ChoiceIcon: React.FC<Props> = (props) => {
	const classes = useStyles();

	switch (props.choice) {
		case Choice.None:
			return (
				<Grid item container xs={12}>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<QuestionIcon className={classes.icons} />
					</Grid>
					<Grid item xs={4} />
				</Grid>
			);

		case Choice.Rock:
			return (
				<Grid item container xs={12}>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<RockIcon className={classes.icons} />
					</Grid>
					<Grid item xs={4} />
				</Grid>
			);

		case Choice.Paper:
			return (
				<Grid item container xs={12}>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<PaperIcon className={classes.icons} />
					</Grid>
					<Grid item xs={4} />
				</Grid>
			);

		case Choice.Scissors:
			return (
				<Grid item container xs={12}>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<ScissorsIcon className={classes.icons} />
					</Grid>
					<Grid item xs={4} />
				</Grid>
			);
	}
};

export default ChoiceIcon;
