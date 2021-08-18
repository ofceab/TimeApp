class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }

    handleFieldValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        const { title, project } = this.props;
        <div className="ui card">
            <div className="content">
                <div className="ui form">
                    <div className="ui field">
                        <label htmlFor="title"></label>
                        <input type="text" id="title" value={this.state.title} onChange={this.handleFieldValueChange} />
                    </div>
                    <div className="ui field">
                        <label htmlFor="project"></label>
                        <input type="text" id="project" value={this.state.project} onChange={this.handleFieldValueChange} />
                    </div>
                    <div className="ui buttons">
                        <button>{submitText}</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    }
}