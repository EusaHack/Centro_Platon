import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ButtonTxt({txtButton,to,color,sombraColor,colorTexto}) {
    const navigate = useNavigate();

    // Función para manejar el clic en el botón y redirigir al /login
    const handleClick = () => {
        navigate(to);  // Redirige al /login
    };

    return (
        <Stack direction="row" spacing={2}>
          <Button 
            variant="contained" 
            onClick={handleClick}
            sx={{ backgroundColor: color, color: colorTexto, '&:hover': { backgroundColor: sombraColor } }}>
                {txtButton}
          </Button>
        </Stack>
    )
}
