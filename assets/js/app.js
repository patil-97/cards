let img_base_url = "https://image.tmdb.org/t/p/w500";

let color = (num) => {
	if(num > 7.5){
		return "bg-success";
	}else if(num < 7.5 && num > 5){
		return "bg-warning";
	}else{
		return "bg-danger";
	}
}

let result = "";

for (let i = 0; i < movieArray.length; i++){
	result += `<div class="col-md-4 b-radius">
					<figure class="movieCards b-radius">
						<img src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}" alt='' title=''>
						
						<figcaption>
							<div class="movieTitle p-2">
								<div class="row">
									<div class="col-10"><h3>${movieArray[i].title}</h3></div>
									<div class="col-2"><div class="rating ${color(movieArray[i].vote_average)} p-2"><span>${movieArray[i].vote_average}</span></div></div>
								</div>
							</div>	
							<div class="movieOverview p-2">
								<h4>${movieArray[i].title}</h4>
								<p>${movieArray[i].overview}</p>
							</div>
						</figcaption>
					</figure>
				</div>`
}

document.getElementById("movie").innerHTML=result;

