class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false
    };

    handleFormOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        if (this.state.isOpen) {
            return <TimerForm />
        }
        else {
            <div className="ui button">
                <button className="ui button" onClick={this.handleFormOpen}>+</button>
            </div>
        }
    }
}