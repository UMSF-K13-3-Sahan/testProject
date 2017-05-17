var Class = React.createClass({

    getInitialState: function()
    {
        return {
            show: false
        };
    },

    showUsers : function () {
        if(this.state.show == false)
            this.setState({show : true});
        else
            this.setState({show : false});
    },

    delete:function (event) {
        var data = { id: this.props.item.id};
        this.props.delete(data);
        event.stopPropagation();
    },

    render: function() {
        return (
            <li className="class" onClick={this.showUsers}>
                {this.props.is_teacher? <div className="close" onClick={this.delete}>&times;</div> : null}
                <div className="contact-info">
                    <div className="contact-name"> {this.props.item.name} </div>
                    <div className="models-id"> {this.props.item.id} </div>
                    {this.state.show? <UsersInClass classId={this.props.item.id} is_teacher={this.props.is_teacher}/> :null}
                </div>
            </li>
        );
    }
});

Class.propTypes ={
    item: React.PropTypes.object,
    delete: React.PropTypes.func
}
