import * as React from 'react';
import { createRoot } from 'react-dom/client';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: null
        }
    }
    
    componentDidMount() {
        this.getTime();
        setInterval(this.getTime, 2000);
    }

    render() {
        const {name} = this.props;
        const {time} = this.state;
        return <><h1>{name}</h1><div>{time}</div></>;
    }

    getTime = async () => {
        const response = await fetch('/api/time', { method: 'GET' });
        if (response.ok) {
            this.setState({time: await response.text()});
        }
    }

}

export function start() {
    const rootElem = document.getElementById('main');
    const root = createRoot(rootElem);
    root.render(<App name="Hello World" />);
}
