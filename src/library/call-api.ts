const callApi = (url: string, options?: any) =>
	fetch(url, options).then((response) => {
		console.log(response);
		return response.json();
	});

export default callApi;
