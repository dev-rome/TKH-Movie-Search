const FALLBACK_POSTER_URL =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Film_reel.svg/247px-Film_reel.svg.png";

export const clearMovies = () => {
	const list = document.getElementById("search-results");

	while (list.firstChild) {
		list.firstChild.remove();
	}
};

const createListItem = (title, year, poster) => {
	const catpion = `${year}, ${title}`;

	const catpionNode = document.createElement("figcaption");
	catpionNode.appendChild(document.createTextNode(catpion));
	const posterNode = document.createElement("img");
	posterNode.setAttribute("alt", catpion);
	posterNode.setAttribute("class", "search-result-poster");
	posterNode.setAttribute("src", poster);

	const figureNode = document.createElement("figure");
	figureNode.appendChild(posterNode);
	figureNode.appendChild(catpionNode);

	const listItemNode = document.createElement("li");
	listItemNode.setAttribute("class", "search-result-item");
	listItemNode.appendChild(figureNode);

	return listItemNode;
};

export const appendMovies = (movies) => {
	const list = document.getElementById("search-results");
	movies.forEach((movie) => {
		const moviePoster =
			movie.Poster && movie.Poster !== "N/A"
				? movie.Poster
				: FALLBACK_POSTER_URL;
		const listItemNode = createListItem(movie.Title, movie.Year, moviePoster);
		list.appendChild(listItemNode);
	});
};

export const setMessage = (message) => {
	document.getElementById("search-panel-message").textContent = message;
};
