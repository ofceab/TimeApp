class EditableTimerList extends React.Component {
    render() {
        const { timers } = this.props;

        const timersList = timers.map((timer) => <EditableTimer key={timer} runningSince={timer.runningSince} time={timer.time} title={timer.title} project={timer.project} />)
        return <div className="">
            {timersList}
        </div>
    }

}