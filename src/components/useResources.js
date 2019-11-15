import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
	const [ resources, setResources ] = useState([]);

	// run everytime component is updated
	// in the array at the end we pass the prop, function is only called if the prop sent is different!
	// if no array is supplied the function is always called.
	// if empty array is supplied, its only called once like componentDidMount
	// if object is supplied it will always be called because of the way js works with objects, always new!
	// cannot use async functions within useEffect, can use IIFE

	useEffect(
		() => {
			(async (resource) => {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
				setResources(response.data);
			})(resource);
		},
		[ resource ]
	);

	return resources;
};

export default useResources;
