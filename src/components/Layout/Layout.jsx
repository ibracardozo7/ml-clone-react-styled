import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Product from "../Product/Product";
import { Container, Wrapper } from "./styles"
const Layaut = () => {

	return (
		<Container>
			<Header />
			<Wrapper>
				<Hero />
				<Product />
			</Wrapper>
		</Container>
	);
};

export default Layaut;
