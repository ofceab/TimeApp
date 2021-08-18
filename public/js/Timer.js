class Timer extends React.Component {
    render() {
        const {title, project, time, runningSince } = this.props;
        return <div className="ui card">
            <div className="content">
                <div className="header">
                    <h3>{title}</h3>
                    <p>{project}</p>
                </div>
                <div className="centered">
                    <h4>{time}</h4>
                    <div className="timer-actions">
                        <button className="ui button">Del</button>
                        <button className="ui button">Update</button>
                    </div>
                </div>
                <div className="start ui button">
                    Start
                </div>
            </div>
        </div>
    }
}