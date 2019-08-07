import React, {Component} from 'react'; 
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';  
import './App.css'; 
import Scroll from '../components/Scroll' ; 
class App extends Component {
	constructor()
	{
		super(); 
		this.state = 
		{
			robots : [], 
	searchField: ''
		} 
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots : users})) ; 
	}

	onSearchChange =  (event) =>
	{this.setState({searchField: event.target.value})

	}
	render()
	{
		const {robots, searchField} = this.state; 

				const sRobot = robots.filter(robot =>
				{
					return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
				})
				return !robots.length ?
				<h1 className='tc'>Loading</h1> :
				 (
				<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll> 
				<CardList robots = {sRobot} />
				</Scroll>
				</div>
				);
		}
}

export default App; 