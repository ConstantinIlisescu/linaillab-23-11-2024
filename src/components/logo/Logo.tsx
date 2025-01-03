import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return <Link to="/" className="logo-overlay" aria-label="Navigate to home page"/>;
};

export default Logo;
