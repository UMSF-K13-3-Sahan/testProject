var Users= React.createClass({

    getInitialState: function() {
        return {
          users: this.props.array !==undefined? this.props.array :[],
        };
    },

    componentWillMount:function () {
        var self = this;
        $.ajax({
            url: 'getStudent',
            type:'GET',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
             self.setState({users:data});
            }
        });
    },

    add:function () {
        var self = this;
        let data = {
            student: {
                fname: $('#fname').val(),
                lname: $('#lname').val(),
                age: $('#age').val()
            }
        }
        $.ajax({
            url: 'addStudent',
            type:'GET',
            dataType : "json",
            data : data,
            success: function (data, textStatus) {
                var NewState = self.state.users;
                NewState.push(data);
                self.setState({users:NewState});
            }
        });
    },

    handlerDelete:function (data) {
        var self = this;
        $.ajax({
            url: 'delete_student',
            type:'DELETE',
            dataType : "json",                     // тип загружаемых данных
            data : data,
            success: function (data, textStatus) {
                var newState = self.state.users;
                newState = newState.filter(function (el) {
                    return el.id !== data.id;
                })
                self.setState({users:newState});
            }
        });
    },

    render: function() {
        var self = this;
        return (
            <div className="users">
                <h2 className="uk-text-primary uk-text-center">{I18n.t('title.users')}</h2>
                <ul className="contacts-list">
                    {
                        this.state.users.map(function(el) {
                            return <User
                                item = {el}
                                isInClass={false}
                                delete = {self.handlerDelete}
                                is_teacher = {true}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
});


Users.propTypes ={
    array: React.PropTypes.array
}
