import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footerstyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "yellow",
				textAlign: "left",
				marginBottom: "50px" }}>
		This is the IMDB Clone modified by Ruchit Bagade based on the Open Source code. 
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
		</Column>
		<Column>
			<Heading>Content</Heading>
			<FooterLink href="/movies/upcoming">Movies</FooterLink>
			<FooterLink href="/anime">Anime</FooterLink>
            <FooterLink href="#">Shows</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Chandrapur</FooterLink>
			<FooterLink href="#">Nagpur</FooterLink>
			<FooterLink href="#">Delhi</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink target="_blank" href="https://www.instagram.com/thelocalframe_/?hl=en">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink target="_blank" href="https://www.instagram.com/thelocalframe_/?hl=en">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
