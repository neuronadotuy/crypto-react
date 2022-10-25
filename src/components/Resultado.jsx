import styled from '@emotion/styled';

const ResultContainer = styled.div`
	align-items: center;
	color: #FFF;
	gap: 12px;
	display: flex;
	margin: 24px 0;
`;

const Image = styled.img`
	display: block;
	width: 150px;
`;

const Text = styled.p`
	font-size: 18px;
	margin: 8px 0;
	span {
		font-weight: 700;
	}
`;

const Price = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

const Resultado = ({resultado}) => {

	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

	return ( 
		<ResultContainer>
			<Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Logo" />
			<div>
				<Price>El precio es de: <span>{PRICE}</span></Price>
				<Text>El precio mas alto del dia: <span>{HIGHDAY}</span></Text>
				<Text>El precio mas bajo del dia: <span>{LOWDAY}</span></Text>
				<Text>Variacion ultimas 24hs: <span>{CHANGEPCT24HOUR}</span>%</Text>
				<Text>Ultima actualizacion: <span>{LASTUPDATE}</span></Text>
			</div>
		</ResultContainer>
	 );
}
 
export default Resultado;