
var slideIndex = 0;
var x = document.getElementsByClassName('mySlide');
showSlides();

function showSlides() {
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex].style.display = "block";
}

function plusSlide(n) {
    if (slideIndex + n >= x.length || slideIndex + n <= 0) {
        slideIndex = 0;
        showSlides();
    }
    else {
        slideIndex = slideIndex + n;
        showSlides();
    }

}


function setGenre(n) {
    var btn = document.getElementById('drop-btn');
    var y = document.getElementById(n);
    btn.innerHTML = y.innerHTML ;
    var all = document.getElementsByClassName('desc');

    if (n == "genre-action") {
        for (var i = 0; i < all.length; i++){
            all[i].style.display = "none";
        }
        
        var d = document.getElementsByClassName('action');
        for (var i = 0; i < d.length; i++){
            d[i].style.display = "block";
        }
    }

    else if (n == "genre-drama") {
        for (var i = 0; i < all.length; i++){
            all[i].style.display = "none";
        }
        
        var d = document.getElementsByClassName('drama');
        for (var i = 0; i < d.length; i++){
            d[i].style.display = "block";
        }
    }

    else if (n == "genre-sci-fi") {
        for (var i = 0; i < all.length; i++){
            all[i].style.display = "none";
        }
        
        var d = document.getElementsByClassName('sci-fi');
        for (var i = 0; i < d.length; i++){
            d[i].style.display = "block";
        }
    }

    else{
        for (var i = 0; i < all.length; i++){
            all[i].style.display = "block";
        }
    }

}


function inGenre() {
    var movie = document.getElementById('search-field');
    var btn_value = document.getElementById('drop-btn');
    var x = document.getElementsByClassName('desc');
    var all_movies = document.getElementsByClassName('movie_name');

    
    if (btn_value.innerHTML == "Action") {
        var ma = document.getElementsByClassName("movie_action");
          for (var i = 0; i < ma.length; i++){
              var z = String(ma[i].innerHTML);
              console.log(z);
            if (z.indexOf(String(movie.value)) >= 0) {
                return true;
            }
            else {
                return false;
            }
         }
    }

    else if (btn_value.innerHTML === "Drama") {
        var md = document.getElementsByClassName("movie_action");
          for (var i = 0; i < md.length; i++){
            var z = String(md[i].innerHTML);
            if (z.indexOf(String(movie.value)) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        
    }

    else if (btn_value.innerHTML === "Sci-fi") {
        var ms = document.getElementsByClassName("movie_sci_fi");
          for (var i = 0; i < ms.length; i++){
            var z = String(ms[i].innerHTML);
            if (z.indexOf(String(movie.value)) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        
    }

    else {
         for (var i = 0; i < all_movies.length; i++){
            var z = String(all_movies[i].innerHTML);
            if (z.indexOf(String(movie.value)) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        
    }

}

function searchMovies() {
    var movie = document.getElementById('search-field').value;
    var btn_value = document.getElementById('drop-btn').innerHTML;
    var all_movies = document.getElementsByClassName('movie_name');
    var x = document.getElementsByClassName('desc');
    var a = document.getElementsByClassName("movie_action");
    var ac = document.getElementsByClassName("action");
    var d = document.getElementsByClassName("movie_drama");
    var dr = document.getElementsByClassName("drama");
    var s = document.getElementsByClassName("movie_sci_fi");
    var sc = document.getElementsByClassName("sci-fi");
    

    if (btn_value == "Action") {
        if (movie.length > 0) {
            for (var i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

            for (var j = 0; j < a.length; j++){
                if (a[j].innerHTML.indexOf(movie) >= 0) {
                    ac[j].style.display = "block";
                }
            }
        }

        else {
            for (var i = 0; i < a.length; i++){
                ac[i].style.display = "block";
            }
        } 
    }

    else if (btn_value == "Drama") {
        if (movie.length > 0) {
            for (var i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

            for (var j = 0; j < d.length; j++){
                if (d[j].innerHTML.indexOf(movie) >= 0) {
                    dr[j].style.display = "block";
                }
            }
        }

        else {
            for (var i = 0; i < d.length; i++){
                dr[i].style.display = "block";
            }
        }       
    }

    else if (btn_value == "Sci-fi") {
        if (movie.length > 0) {
            for (var i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

            for (var j = 0; j < s.length; j++){
                if (s[j].innerHTML.indexOf(movie) >= 0) {
                    sc[j].style.display = "block";
                }
            }
        }

        else {
            for (var i = 0; i < s.length; i++){
                sc[i].style.display = "block";
            }
        }
        
    }

    else {
        if (movie.length > 0) {
            for (var i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

             for (var j = 0; j < x.length; j++){
                if (all_movies[j].innerHTML.indexOf(movie) >= 0) {
                    x[j].style.display = "block";
                }
            }
        }

        else {
            for (var i = 0; i < x.length; i++){
                x[i].style.display = "block";
            }
        }
        
    }
}