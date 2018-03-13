import styled, { keyframes } from 'styled-components';

const blink = keyframes`
        0%,60% {
            opacity:1;
        }
        100% {
            opacity:0;
        }  
`;

export const StyledMessageBox = styled.div`
	display: block!important;
	position: relative;
	user-select: none;
	text-shadow: 0 0 0.1em black;
	text-align: center;
	height:1em;
	&:after {
		content: "|";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 100%;
		opacity: 0;
		animation: ${blink} 1s linear ${(props) => (props.last ? 'infinite' : props.blinkLoop)};
		animation-delay: ${(props) => props.delay}ms;
	}
`;
export default StyledMessageBox;