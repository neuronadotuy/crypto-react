import styled from '@emotion/styled';

const Text = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #B7322C;
	color: #FFF;
	padding: 12px;
	font-size: 14px;
	font-family:'Lato', sans-serif;
	text-align: center;
	border-radius: 4px;
	letter-spacing: 2px;
`

const CloseError = styled.span`
	position: absolute;
	top: calc(50% - 8px);
	right: 12px;
	font-weight: 400;
	font-size: 12px;
	cursor: pointer;
`

const Error = ({children, setError}) => {
	return ( 
		<Text>
			{children}
			<CloseError onClick={() => setError(false)}>x</CloseError>
		</Text>
	 );
}
 
export default Error;