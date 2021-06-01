import InputBase from '@material-ui/core/InputBase';
import PropTypes from "prop-types";
import React, { useCallback } from "react";

export const matchNothingRegex = /(?!)/;

const RegexTextField = ({ regex, onChange, ...rest }) => {
    const handleChange = useCallback(
        (e) => {
            e.currentTarget.value = e.currentTarget.value.replace(regex, "");
            onChange(e);
        },
        [onChange, regex]
    );

    return <InputBase onChange={handleChange} {...rest} />;
};
export default React.memo(RegexTextField);

RegexTextField.propTypes = {
    onChange: PropTypes.func.isRequired,
    regex: PropTypes.instanceOf(RegExp)
};

RegexTextField.defaultProps = {
    regex: matchNothingRegex
};

