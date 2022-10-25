/** @format */

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imgCrypto from './assets/imagen-criptos.png';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(a, 1fr);
		column-gap: 2rem;
	}
`;

const Heading = styled.h1`
	color: #fff;
	font-family: 'Lato', sans-serif;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`;

const Image = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`;

function App() {

	const [monedas, setMonedas] = useState({})
	const [resultado, setResultado] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {

			const {nombreMoneda, nombreCrypto} = monedas;

			const cotizarCrypto = async () => {
				setLoading(true);
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${nombreCrypto}&tsyms=${nombreMoneda}`
				const req = await fetch(url)
				const res = await req.json()
				setResultado(res.DISPLAY[nombreCrypto][nombreMoneda])
				setLoading(false);
			}
			cotizarCrypto()
		}
	}, [monedas]);

	return (
		<Container>
			<Image src={imgCrypto} alt='crypto img' />
			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Formulario setMonedas={setMonedas}/>
				{loading && <Spinner />}
				{(Object.keys(resultado).length !== 0 && !loading) && <Resultado resultado={resultado}/>}
			</div>
		</Container>
	);
}

export default App;
