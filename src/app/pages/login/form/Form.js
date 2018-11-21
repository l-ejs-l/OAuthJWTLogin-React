import Button from "../../../../components/button/Button";
import Separator from "../../../../components/separator/Separator";
import FormInput from "../../../../components/form/input/FormInput";
import theme from "../../../../assets/jss/theme";
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

const Form = props => {
  const { classes } = props;
  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes.buttonGroup}>
        <Button
          onClick={props.onClickFacebook}
          text={"Facebook"}
          backColor={"#4469B0"}
        />
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
          backColor={theme.secondary}
          fontColor={theme.text}
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  classes: PropTypes.any,
  onClickFacebook: PropTypes.func,
  onClickGoogle: PropTypes.func
};

export default withStyles(styles)(Form);
