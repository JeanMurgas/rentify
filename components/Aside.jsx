import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Aside() {
 return (
 <aside class="_social-links">
	<ul class="_links-list">
		<li class="_social-link"><a href="https://instagram.com" target="_blank"><FaInstagram /></a></li>
		<li class="_social-link"><a href="https://facebook.com" target="_blank"><FiFacebook /></a></li>
		<li class="_social-link"><a href="mailto:Rentify@gmail.com" target="_blank"><MdMailOutline  /></a></li>
		<li class="_social-link"><a href="https://wa.me/+50766735814" target="_blank"><FaWhatsapp /></a></li>
	</ul>
</aside>
);
}
export default Aside;