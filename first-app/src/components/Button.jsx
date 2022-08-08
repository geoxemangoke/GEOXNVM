import {Button} from "@mui/material";

export const ButtonComponent = (props) => {
    const {sx = {}} = props 
    return (
        <Button variant="contained" sx={{backgroundColor:'red', ...sx}}>
            {props.title}
        </Button>
    )
}