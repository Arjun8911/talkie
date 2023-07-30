import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer px-5">
      <span className="copyright">© 2023 talkie. All Rights Reserved.</span>
      <div className="d-flex align-items-center">
        <FiLinkedin className="me-2 fs-5 link-hover scale-hover" />
        <FiTwitter className="me-2 fs-5 link-hover scale-hover" />
        <FiGithub className="fs-5 link-hover scale-hover" />
      </div>
    </footer>
  );
}
