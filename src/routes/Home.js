import axios from 'axios';
import React, { Component } from 'react';
import Movie from '../components/Movie';
import './Home.css';

export class Home extends Component {
    state = {
        isLoading : true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: { 
                data: {movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); //구조 분해 할당
        // console.log(movies.data.data.movies); // 바로 원하는 정보를 보고싶다면 이렇게
        console.log(movies); //movies.data.data.movies
        this.setState({isLoading : false, movies}); // 키:키 값 이름이 동일하면 movies: movies 하나만 사용가능함
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({isLoading:false}); // 6초뒤에 isLoading:false 값을 불러와라
        // },6000)
        // axios.get('https://yts-proxy.now.sh/list_movies.json'); // 제대로 불러왔는지 보려면 f12 네트워크에서 확인
        this.getMovies();
    }

    render() {
    const {isLoading,movies} = this.state; //구조 분해 할당 //jsx문법으로 class가 아니라 className이라고 해줌
    return (
    <section className='container'> 
        {isLoading ? 
        (<div className='loader'>
            <span className='loader_text'>'Loading...'</span>
        </div>) : 
        (<div className='movies'>
        {movies.map( (movie,index) => (<Movie
                            key={index}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}    
                            genre={movie.genres}
                            />)
                )
        }
        </div>)
        }
    </section>
            )
    }
}

export default Home;