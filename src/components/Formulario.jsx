/** @format */

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelect from '../hooks/useSelect';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #ffffff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;

const Formulario = ({setMonedas}) => {
	const [crypto, setCrypto] = useState([]);
	const [error, setError] = useState(false);
	const [nombreMoneda, SelectMonedas] = useSelect('Select Monedas', monedas);
	const [nombreCrypto, SelectCrypto] = useSelect('Select Crypto', crypto);
	
	useEffect(() => {
		const callAPI = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
			const req = await fetch(url)
			const res = await req.json()
			
			const arrayCrypto = res.Data.map( crypto => {
					const objCrypto = {
						id: crypto.CoinInfo.Name,
						nombre: crypto.CoinInfo.FullName,
					} 
					return objCrypto;
			}) 
			setCrypto(arrayCrypto);
		}
		callAPI()
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if ([nombreMoneda, nombreCrypto].includes('')) {
			console.warn('Error');
			setError(true);
			return;
		}

		setError(false);
		setMonedas({
			nombreMoneda,
			nombreCrypto
		})
	}
	return (
		<>
			{error && <Error setError={setError}>Todos los campos son obligatorios</Error>}
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCrypto />
				<InputSubmit type='submit' value='Cotizar' />
			</form>
		</>
	);
};

export default Formulario;
