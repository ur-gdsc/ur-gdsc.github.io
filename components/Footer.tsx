import React from 'react';
import { assetPath } from '../utils/assetPath';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
const Footer: React.FC = () => <footer className="site-footer"><div className="footer-inner">
    <div className="footer-brand"><img src={assetPath('/google-developers-seeklogo.svg')} alt="" width="52" height="26" /><div className="footer-title">GDSC Rochester<span>Ever Better. Ever Bolder.</span></div></div>
    <div className="footer-contact"><p>Get in touch.</p><div><a className="text-link" href="mailto:uofrdsc@gmail.com?cc=krish.jain@rochester.edu,hwongbud@u.rochester.edu&subject=GDSC%20Rochester%20Inquiry">uofrdsc@gmail.com <ArrowUpRight size={20} aria-hidden="true" /></a><a className="text-link" href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={20} aria-hidden="true" /></a></div></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} GDSC · University of Rochester</p><a className="text-link" href="#home">Back to top <ArrowUp size={17} aria-hidden="true" /></a></div>
</div></footer>;
export default Footer;
