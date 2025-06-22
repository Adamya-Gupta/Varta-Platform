import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="https://github.com/Adamya-Gupta/Varta-Platform" target='_blank'>About us</a>
          <a className="link link-hover" href="https://linkedin.com/in/adamya-gupta" target='_blank'>Contact</a>
          <a className="link link-hover" >Services</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            
            <a href="https://linkedin.com/in/adamya-gupta" target='_blank'>
              <Linkedin />
            </a>
            <a href="https://github.com/Adamya-Gupta/Varta-Platform" target='_blank'>
              <Github />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Varta</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
