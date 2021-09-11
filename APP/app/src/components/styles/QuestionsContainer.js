import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const QuestionsContainer = withStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
    }
})(Container);

export default QuestionsContainer;
