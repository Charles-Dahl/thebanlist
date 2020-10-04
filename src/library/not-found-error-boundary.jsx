import React, { Component } from "react";

class NotFoundErrorBoundary extends Component {
	static getDerivedStateFromError(error) {
		return { hasError: error.message === "Not Found" };
	}

	state = { hasError: false };

	render() {
		console.log(this.state);
		if (this.state.hasError) {
			console.log("error");
			return <p>Not Found</p>;
		}
		console.log("no error");
		return this.props.children;
	}
}

export default NotFoundErrorBoundary;
