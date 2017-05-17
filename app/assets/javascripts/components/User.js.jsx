var User = React.createClass({

    componentDidMount:function () {
        this.props.isInClass ? this.change_color() : '';
    },

    delete:function (event) {
        event.stopPropagation();

        let data ={ id : this.props.item.id }

        if(this.props.isInClass)
            this.props.deleteFromClass(data);
        else
            this.props.delete(data);
    },
    change_color:function () {
        let date = new Date(Date.now() - this.props.item.added_at * 1000);
        if(date.getMonth() >= this.props.item.month) {
            this.item.className += ' a';
        }
    },
    render: function() {
        return (
            <li className="user" onClick={this.aa} ref={(li) => { this.item = li; }}>
               {this.props.is_teacher? <div className="close" onClick = {this.delete}>&times;</div> : null}
                <div className="contact-info">
                    <div className="contact-name"> {this.props.item.fname} </div>
                    <div className="contact-name"> {this.props.item.lname} </div>
                    <div className="contact-number"> {this.props.item.age} </div>
                    {!this.props.isInClass ?
                        <div className="models-id"> {this.props.item.id} </div> :
                        <div className="models-id"> {this.props.item.month} </div>}
                </div>
            </li>
        );
    }

});

User.propTypes ={
    item: React.PropTypes.object,
    delete: React.PropTypes.func,
    deleteFromClass: React.PropTypes.func
}


