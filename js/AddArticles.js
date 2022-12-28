let article = document.querySelector('article')
function AddArticles(url, img, section, date, title, description) {
	const template = `
	<article>
		<a href="${url}">
			<img href="${img}" class="${section}-border">
			<p class="section">${section}</p>
			<p class="date">${date}</p>
			<h3 class="title">${title}</h3>
			<p class="description">${description}</p>
		</a>
	</article>
	`
	article.insertAdjacentHTML('beforebegin', template);
}

fetch('./js/images.json')
	.then(response => response.json())
	.then(data => {
		for (const image of data.Images) {
			window[image.Title] = image.src;
			console.log(image.Title);
			console.log(image.src);
			console.log('--------------------');

		}
	})
	.then(data =>{
		AddArticles("", `${Test4}`, "Cocina", "Hoy", "Como cocinar", "En este articulo te vamos a explicar como cocinar comida")
	});


