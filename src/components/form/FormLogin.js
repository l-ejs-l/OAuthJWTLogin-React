import Button from "../button/Button";
import Separator from "../separator/Separator";
import FormInput from "./input/FormInput";
import color from "color";
import theme from "../../assets/jss/theme";
import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = theme => ({
  buttonGroup: {
    margin: `${theme.xsSpace} 0`,
    display: "flex",
    justifyContent: "space-between"
  },
  buttonWrapper: {
    margin: `${theme.mdSpace} 0`
  }
});

const FormLogin = props => {
  const { classes } = props;
  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes.buttonGroup}>
        <Button onClick={props.onClickFacebook} text={"Facebook"} />
        <Button
          onClick={props.onClickGoogle}
          text={"Google"}
          backColor={"#DD4C3D"}
        />
      </div>

      <Separator />

      <FormInput type={"email"} text={"Email"} name={"email"} />
      <FormInput type={"password"} text={"Password"} name={"password"} />

      <div className={classes.buttonWrapper}>
        <Button
          onClick={props.onSubmit}
          text={"Sign In"}
          backColor={color(theme.primary)
            .lighten(0.35)
            .hex()}
          fontColor={theme.textBlack}
        />
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  classes: PropTypes.any,
  onClickFacebook: PropTypes.func,
  onClickGoogle: PropTypes.func
};

export default withStyles(styles)(FormLogin);
