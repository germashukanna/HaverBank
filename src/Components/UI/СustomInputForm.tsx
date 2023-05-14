import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {OutlinedInputProps} from '@mui/material/OutlinedInput';


export const RedditTextField = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
        '& .MuiFilledInput-root': {
            overflow: 'hidden',
            borderRadius: 16,
            backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#F3F6F9',
            color: '#0C3845',
            // position: 'absolute',
            // right: 0,
            // padding: "16px",
            border: '1px solid',
            borderColor: theme.palette.mode === 'light' ? '#D8F5FF' : '#B2ECFF',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&.Mui-focused': {
                backgroundColor: 'transparent',
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
    // '& label.Mui-root': {
    //     color: 'red',
    //     opacity: '70%',
    // },
    '& label.Mui-focused': {
        color: '#0C3845',
        opacity: '70%',
    },
}));