import {Button, Checkbox, Grid, ListItem, Typography} from "@material-ui/core";
import React from "react";
import { useActions } from "../hooks/useAction";


type Props = {
    title: string,
    completed: boolean,
    id: string
}

const Todo = ({id, title, completed}: Props) => {
    const {removeTodo} = useActions()
    const onDeleteTodo = () => {
        removeTodo(id)
    }
    return (
        <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
                <Typography>{title}</Typography>
                <Button
                    onClick={onDeleteTodo}
                    variant="contained"
                    color="secondary">
                    X
                </Button>
            </Grid>
        </ListItem>
    )
}

export default Todo