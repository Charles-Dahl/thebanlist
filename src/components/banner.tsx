import styled from "styled-components";

const Banner = styled.div`
	background-image: linear-gradient(
			to top right,
			transparent 50%,
			var(--color-light-3) 50%
		),
		linear-gradient(to top left, transparent 50%, var(--color-light-3) 50%),
		linear-gradient(to right, var(--color-light-3), var(--color-light-3));
	background-repeat: no-repeat;
	background-size: 75px 100%, 75px 100%, calc(100% - 150px) 100%;
	background-position: 0 0, 100% 0, 75px 0;

    width: 100%;
}

	--color-title: var(--color-brand-3);
	--color-subtitle: var(--color-dark-3);
`;

export default Banner;
