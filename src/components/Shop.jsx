import React, { useState, useEffect } from 'react';

import { API_KEY, API_URL } from '../config';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

export const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loadin, setLoading] = useState(true);

	useEffect(function getGoods() {
		fetch(API_URL, { headers: { Authorization: API_KEY } })
			.then(res => res.json())
			.then(data => {
				data.featured && setGoods(data.featured);
				setLoading(false);
			})
			.catch(console.log);
	}, []);
	return (
		<main>
			{loadin ? (
				<Preloader />
			) : (
				<div className='container goods'>
					<GoodsList goods={goods} />
				</div>
			)}
		</main>
	);
};
