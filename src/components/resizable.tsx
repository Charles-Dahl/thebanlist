import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import clamp from "../library/utility/clamp";
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
	transition: height 350ms;
	width: 100%;
`;

const Controls = styled.div`
	width: 100%;
	flex-direction: row;
`;

const MinimizeButton = styled.button`
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
	const heightRef = useRef(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const stopDragging = () => setDragging(false);
		setHeight(500);

		window.addEventListener("mouseup", stopDragging);
		return () => window.removeEventListener("mouseup", stopDragging);
	}, []);

	const startDragging = () => setDragging(true);

	const setHeight = (value: number) => {
		if (!containerRef.current) {
			return;
		}
		heightRef.current = value;
		containerRef.current.style.maxHeight = `${value}px`;
	};

	useEffect(() => {
		const handleDrag = ({ movementY }: MouseEvent) =>
			setHeight(clamp(heightRef.current - movementY, 0, 1000));

		if (dragging) {
			window.addEventListener("mousemove", handleDrag);
		}

		return () => window.removeEventListener("mousemove", handleDrag);
	}, [dragging]);

	const minimize = () => setHeight(0);
	const maximize = () => setHeight(1000);

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
					<MinimizeButton title="maximize" onClick={maximize}>
						<Icon name="check_box_outline_blank" />
					</MinimizeButton>
					<MinimizeButton title="minimize" onClick={minimize}>
						<Icon name="minimize" />
					</MinimizeButton>
				</Controls>
			)}
			{StaticComponent && StaticComponent}
			<InnerContainer ref={containerRef}>{children}</InnerContainer>
		</Container>
	);
};

export default Resizable;
