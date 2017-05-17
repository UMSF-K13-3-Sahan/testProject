var UsersInClass = React.createClass({
    getInitialState: function() {
        return {
            users: []
        };
    },
    componentWillMount:function () {
        var self = this;
        $.ajax({
            url: 'get_class_users',
            type:'GET',
            data:{form_id:this.props.classId},
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) {
                self.setState({users:data});
            }
        });
    },

    handlerDelete:function (data) {
        var self = this;
        data.classId = this.props.classId;
        $.ajax({
            url: 'delete_from_class',
            type:'delete',
            dataType : "json",                     // тип загружаемых данных
            data : data,
            success: function (data, textStatus) {
                var newState = self.state.users;
                newState = newState.filter(function (el) {
                    return el.id !== data;
                })
                self.setState({users:newState});
            }
        });
    },
    addUserToClass:function (event) {
        var self = this;
        let data = {
            classId : this.props.classId,
            userId: $('#userId').val(),
            month: $('#class_time').val()
        }
        $.ajax({
            url: 'add_to_class',            
            type:'GET',
            dataType : "json",
            data : data,
            success: function (data, textStatus) {
                self.setState({users:data});
            },
            error:function (data, textStatus) {
                alert("azaza");
            }
        });
        event.stopPropagation();
    },

    txtStopProp:function (event) {
        event.stopPropagation();
    },
    isTeacher: function () {
        return  this.props.is_teacher?
            <div>
                <input type="text" className="text-box" id="class_time" placeholder={I18n.t('ph.time')} onClick={this.txtStopProp}/>
                <input type="text" className="text-box" id="userId" placeholder={I18n.t('ph.id')} onClick={this.txtStopProp}/>
                <button className="button" onClick={this.addUserToClass}>{I18n.t('buttons.add')}</button>
            </div>
        :null
    },

    render: function() {
        var self = this;
        return (
            <div className="users">
                <ul className="contacts-list">
                    {
                         this.state.users.map(function(el) {
                            return <User
                                item={el}
                                isInClass={true}
                                deleteFromClass = {self.handlerDelete}
                                is_teacher = {self.props.is_teacher}
                            />;
                        })
                    }
                </ul>
                {this.isTeacher()}
            </div>
        );
    }
});
