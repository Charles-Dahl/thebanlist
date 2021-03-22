import React, { Component } from "react";
import { NotFoundError } from "./errors/NotFoundError";

class PageErrorBoundary extends Component {
	static getDerivedStateFromError(error: any) {
		return { hasError: error instanceof NotFoundError };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log(error, errorInfo);
	}

	state: { error: any; errorInfo: any } = { error: null, errorInfo: null };

	render() {
		const { error, errorInfo } = this.state;
		if (errorInfo) {
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: "pre-wrap" }}>
						{error && error.toString()}
						<br />
						{errorInfo.componentStack}
					</details>
				</div>
			);
		}
		return this.props.children;
	}
}

export default PageErrorBoundary;
