import React, { Component } from "react";
import { NotFoundError } from "./errors/NotFoundError";

class NotFoundErrorBoundary extends Component {
	static getDerivedStateFromError(error) {
		return { hasError: error instanceof NotFoundError };
	}

	state = { hasError: false };

	render() {
		if (this.state.hasError) {
			return <p>Not Found</p>;
		}
		return this.props.children;
	}
}

export default NotFoundErrorBoundary;
