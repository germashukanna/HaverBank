import * as React from 'react';
import {ReactNode} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
};

type childrenPropsType = {
    children: ReactNode
    open: boolean
}

export const BasicModal: React.FC<childrenPropsType> = ({children, open}) => {
    return (
        <Modal open={open}>
            <Box
                onClick={e => {
                    e.stopPropagation()
                }}
                sx={style}
            >
                {children}
            </Box>
        </Modal>
    );
}