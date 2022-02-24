/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        辽ICP备18008975号-1 {" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <Link to="/">twigcodes.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
