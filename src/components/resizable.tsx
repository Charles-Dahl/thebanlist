import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Icon from "./icon";

interface DragHandleProps {
	dragging: boolean;
}

const DragHandle = styled.div<DragHandleProps>`
	width: 100%;
	user-select: none;
	${({ dragging }) =>
		dragging &&
		"background: var(--color-brand-1); --color-icon: var(--color-light-1)"};

	:hover {
		backdrop-filter: brightness(80%);
	}
`;

const Container = styled.div`
	width: 100%;
`;

const InnerContainer = styled.div`
	overflow-y: auto;
	max-height: 100vh;
	transition: height 350ms;
	width: 100%;
`;

const Controls = styled.div`
	width: 100%;
	flex-direction: row;
	position: absolute;
	bottom: 100%;
`;

const MinimalButton = styled.button`
	border: none;
	background: none;

	:hover,
	:focus {
		backdrop-filter: brightness(80%);
	}
`;

interface ResizableProps {
	StaticComponent?: React.ReactElement;
	allowResize?: boolean;
}

const Resizable: React.FC<ResizableProps> = ({
	children,
	StaticComponent,
	allowResize = true,
}) => {
	const [dragging, setDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const stopDragging = () => {
			const container = containerRef.current;
			if (container) {
				container.style.transition = "height 350ms";
			}
			setDragging(false);
		};

		window.addEventListener("mouseup", stopDragging);
		return () => window.removeEventListener("mouseup", stopDragging);
	}, []);

	const startDragging = () => {
		const container = containerRef.current;
		if (container) {
			container.style.transition = "none";
		}
		setDragging(true);
	};

	useEffect(() => {
		const handleDrag = ({ movementY }: MouseEvent) => {
			const container = containerRef.current;
			if (container) {
				const height = container.getBoundingClientRect().height;

				container.style.height = `${height - movementY}px`;
			}
		};

		if (dragging) {
			window.addEventListener("mousemove", handleDrag);
		}

		return () => window.removeEventListener("mousemove", handleDrag);
	}, [dragging]);

	const minimize = () => {
		const container = containerRef.current;
		if (container) {
			container.style.height = "0";
		}
	};

	return (
		<Container>
			{allowResize && (
				<Controls>
					<DragHandle
						onMouseDown={startDragging}
						dragging={dragging}
						title="drag to resize"
					>
						<Icon name="drag_handle" />
					</DragHandle>
					<MinimalButton title="minimize" onClick={minimize}>
						<Icon name="minimize" />
					</MinimalButton>
				</Controls>
			)}
			{StaticComponent && StaticComponent}
			<InnerContainer ref={containerRef}>{children}</InnerContainer>
		</Container>
	);
};

export default Resizable;
