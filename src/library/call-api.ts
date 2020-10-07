export default (url: string, options?: any) =>
	fetch(url, options).then((response) => response.json());
