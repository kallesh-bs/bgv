import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const PasswordField = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  onkeyDown = () => {},
  passwordInputClass,
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);

  return (
    <>
      <input
        className={`w-full h-12 p-4 border rounded-full  active:outline-[#031B59]
                          focus:outline-[#031B59] ${passwordInputClass}`}
        type={show ? "text" : "password"}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={(e) => onkeyDown(e)}
      />
      {show ? (
        <BsEyeFill
          className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <BsEyeSlashFill
          className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </>
  );
};

PasswordField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onkeyDown: PropTypes.func,
  passwordInputClass: PropTypes.string,
};

export default PasswordField;
