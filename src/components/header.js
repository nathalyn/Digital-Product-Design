import React from 'react'
import Link from 'gatsby-link'



class Header extends React.Component {
	constructor(props) {
		super (props)

		this.state={
			hasScrolled:false
		}
	}


	componentDidMount() {
		window.addEventListener ('scroll',
	this.handleScroll)

	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset
if (scrollTop > 50) {
	this.setState ({ hasScrolled: true})
} else {
	this.setState({hasScrolled: false})
}

	}

	render() {
		return (
			<div className={this.state.hasScrolled ?
				'Header HeaderScrolled' : 'Header'}>
					<div className="HeaderGroup">
							{/* <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link> */}
							<Link to="/">IDEA289Z</Link>
							<Link to="/courses">About</Link>
							<Link to="/downloads">Schedule</Link>
							<Link to="/workshops">Resources</Link>
							<Link to="/buy">Funsies</Link>
							{/* <Link to="/buy"><button>Funsies</button></Link> */}
					</div>
</div>
		)
	}
}

import './Header.css'
export default Header
