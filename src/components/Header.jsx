import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Header = () => {
  const styles = {
    fontSize:'2rem'
  };

  return (
    <div style={{ height: "10vh", width: "100%", backgroundColor: "gray" }}>
      <Grid container>
        <Grid item md={4}>
          <Link style={ styles } to="/">
            Home
          </Link>
        </Grid>
        <Grid item md={4}>
          <Link style={ styles } to="/about">About</Link>
        </Grid>
        <Grid item md={4}>
          <Link style={ styles }to="/contact">Contact</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
