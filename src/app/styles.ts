import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles((theme) => ({
    button: {
        background: theme.colors.primary["10"],
        borderRadius: theme.borderRadius.lg,
        border: "none",
        padding: 12,
        display: "block",
        '&:hover': {
            backgroundColor: theme.colors.primary.DEFAULT,
        }
    },
    blogCard: {
        backgroundColor: theme.colors.secondary["02"],
        border: `${theme.colors.secondary.DEFAULT} solid`,
        borderRadius: theme.borderRadius.xl,
        padding: 16,
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // display: 'block',
        '& h1': {
            fontSize: '24px'
        }
    },
    blogsList: {
        // backgroundColor: theme.colors.secondary["02"],
        // border: `${theme.colors.secondary.DEFAULT} solid`,
        // borderRadius: theme.borderRadius.xl,
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
        gridGap: '100px',
    },
    blogPage: {
        border: `solid ${theme.colors.secondary.DEFAULT}`,
        borderRadius: theme.borderRadius.xl,
        padding: 16,
        minHeight: "80vh",
    },
    input: {
        padding: 8,
        marginBottom: 16,
        borderRadius: theme.borderRadius.lg,
    },
    header: {
        margin: 12,
        display: "flex",
        justifyContent: "space-between"
    },
    label: {
        display: "block"
    }
}))

