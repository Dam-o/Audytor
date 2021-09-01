import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const AuditCard = withStyles({
    root: {
        minHeight: 100,
        maxHeight: 100,
        padding: 15,
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
})(Card);

export default AuditCard;
