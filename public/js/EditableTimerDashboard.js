class EditableTimerDashboard extends React.Component {
    state = {
        timers: [{
            title: 'Practice squat',
            project: 'Gym Chores',
            id: 1,
            time: 5456099,
            runningSince: Date.now(),
        },
        {
            title: 'Learn React squat',
            project: 'Gym Chores',
            id: 2,
            time: 551284,
            runningSince: Date.now(),
        },
        {
            title: 'Angular Modern',
            project: 'Gym Chores',
            id: 3,
            time: 551284,
            runningSince: null,
        }
        ]
    }

    render() {
        return <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList timers={this.state.timers} />
                <ToggleableTimerForm />
            </div>
        </div>;
    }
}


ReactDOM.render(<EditableTimerDashboard />, document.getElementById('root'));