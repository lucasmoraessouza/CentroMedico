import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(() => ({
  backgroundColor: `#0F2554`,
  borderRadius: "5px",
  width: "100%",
  height: "40px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "initial",
  "&:hover": {
    backgroundColor: `#0F2554`,
  },
  fontFamily: "Montserrat",
  fontWeight: "500",
  // "@media (max-width:660px)": {
  //   width: "160px",
  // },
}));

export default function PrimaryButton({ text, route, funcao, disabled }) {
  const navigate = useNavigate();

  return (
    <StyledButton
      disabled={disabled}
      variant="contained"
      onClick={() => {
        if (funcao) {
          funcao();
        } else {
          navigate(`${route}`);
        }
      }}
    >
      {text}
    </StyledButton>
  );
}
