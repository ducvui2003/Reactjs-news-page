import { DividerProps } from '@mui/material';

// Define the type for the ownerState
interface DividerOwnerState extends DividerProps {
  orientation?: 'horizontal' | 'vertical';
}
const dividerMUI = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: DividerOwnerState }) => {
      return {
        ...(ownerState.orientation === 'vertical'
          ? {
              borderWidth: '1.5px',
            }
          : {
              borderWidth: '1.5px',
            }),
      };
    },
  },
};
export default dividerMUI;
