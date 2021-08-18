class EditableTimer extends React.Component {
    state = {
        editForm: false
    }

    render() {
        const {key,title, project, runningSince, time } = this.props;
        if (this.state.editForm) {
            return <TimerForm  title={title} project={project} />
        }
        else {
            return <Timer title={title} project={project} time={time} runningSince={runningSince} />
        }
    }
}